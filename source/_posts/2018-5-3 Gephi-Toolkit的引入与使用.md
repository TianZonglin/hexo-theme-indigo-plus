date: 2018-5-3
categories: 研究方向
tags: [GitHub,Maven,调试]
comments: true
title: Gephi-Toolkit的引入与使用

---

Gephi-Toolkit是一个工具包，可以不依赖NetBeans平台来对输入数据进行可视化，输入数据一般是gexf等格式的文件，大多已经完成了坐标计算过程，用此Toolkit的目的就是使用Gephi强大的绘图功能（还有独立的其他功能，这里暂不展开）。详细项目地址点击 [这里](https://github.com/gephi/gephi-toolkit-demos) 。

在上述Github的项目地址中，有详细的代码`demo`和使用的部分示例数据。所以具体使用直接参见GitHub即可。


### 项目建立

首先，这里使用 `IntelliJ IDEA` 来构建测试我们的项目，这里我们先新建一个 `Maven` 项目，然后在 pom.xml 中引入 Toolkit 的依赖：

```xml
<!-- https://mvnrepository.com/artifact/org.gephi/gephi-toolkit -->
<dependency>
    <groupId>org.gephi</groupId>
    <artifactId>gephi-toolkit</artifactId>
    <version>0.9.1</version>
</dependency>
```

然后，去GitHub中的项目里的 demo 中，选择自己所需要的部分，拿出来放到新建的项目里即可。
注意：
对于数据 LesMiserables.gexf 中的这句代码，如下，会显示一个 `未注册` 的错误，修改方法是找到 IDEA 的 File -> Settings -> Schemas and DTDs -> 点击设置页下方的绿色加号，将下面代码中的两个网址添加进去，然后未注册错误就没有了！

```xml
<gexf xmlns:viz="http:///www.gexf.net/1.1draft/viz" version="1.1" xmlns="http://www.gexf.net/1.1draft">
```


### HeadlessSimple.java

首先关注 HeadlessSimple 这一部分，关于什么是 `Headless` ?

> 参见Chrome的 Headless Mode 来理解：
Headless Chrome指在headless模式下运行谷歌浏览器。本质就是不用谷歌运行谷歌！它将由Chromium和Blink渲染引擎提供的所有现代网页平台的特征都转化成了命令行
它有什么用？
Headless浏览器是一种很好的工具，用于自动化测试和不需要可视化用户界面的服务器。例如，你想在一个网页上运行一些测试，从网页创建一个PDF，或者只是检查浏览器怎样递交URL。
更多关于Chrome的 headless 模式请参见 [这里](https://www.jianshu.com/p/aec4b1216011)；
 
简单来说，就是通过一系列操作，在不借助GUI的条件下，完成原来Gephi客户端能完成的功能，下面代码展示了几个使用toolkit完成的操作。

- `HeadlessSimple` 包括一个完整的从数据导入到结果输出的这样一个处理流程，具体为：
    - 创建一个 project 和 workspace，这是必须的操作
    - 使用 import container 导入polblog.gml这个图数据
    - 将此 container 追加到主体图结构中
    - 对图结构进行 Filter，这里使用 DegreeFilter
    - Run layout manually.
    - 计算图的矩阵
    - 根据节点度值分配节点颜色
    - 分配节点大小
    - 配置预览显示不同的标签和边
    - 将布局图导出为PDF
  
```java
import org.gephi.appearance.api.AppearanceController;
import org.gephi.appearance.api.AppearanceModel;
import org.gephi.appearance.api.Function;
import org.gephi.appearance.plugin.RankingElementColorTransformer;
import org.gephi.appearance.plugin.RankingNodeSizeTransformer;
import org.gephi.filters.api.FilterController;
import org.gephi.filters.api.Query;
import org.gephi.filters.api.Range;
import org.gephi.filters.plugin.graph.DegreeRangeBuilder.DegreeRangeFilter;
import org.gephi.graph.api.*;
import org.gephi.io.exporter.api.ExportController;
import org.gephi.io.importer.api.Container;
import org.gephi.io.importer.api.EdgeDirectionDefault;
import org.gephi.io.importer.api.ImportController;
import org.gephi.io.processor.plugin.DefaultProcessor;
import org.gephi.layout.plugin.force.StepDisplacement;
import org.gephi.layout.plugin.force.yifanHu.YifanHuLayout;
import org.gephi.preview.api.PreviewController;
import org.gephi.preview.api.PreviewModel;
import org.gephi.preview.api.PreviewProperty;
import org.gephi.preview.types.EdgeColor;
import org.gephi.project.api.ProjectController;
import org.gephi.project.api.Workspace;
import org.gephi.statistics.plugin.GraphDistance;
import org.openide.util.Lookup;
import java.awt.*;
import java.io.File;
import java.io.IOException;
 
public class HeadlessSimple {

    public void script() {

        //A. 此部分是初始部分，必须的，初始Project、Workspace

        //Init a project - and therefore a workspace
        ProjectController pc = Lookup.getDefault().lookup(ProjectController.class);
        pc.newProject();
        Workspace workspace = pc.getCurrentWorkspace();


        //B. GraphModel是全局都需要的

        //Get models and controllers for this new workspace - will be useful later
        GraphModel graphModel = Lookup.getDefault().lookup(GraphController.class).getGraphModel();



        //C. 数据读入部分

        ImportController importController = Lookup.getDefault().lookup(ImportController.class);
        //Import file
        Container container;
        try {
            File file = new File(getClass().getResource("/org/gephi/toolkit/demos/polblogs.gml").toURI());
            container = importController.importFile(file);
            container.getLoader().setEdgeDefault(EdgeDirectionDefault.DIRECTED);   //Force DIRECTED
        } catch (Exception ex) {
            ex.printStackTrace();
            return;
        }
        //Append imported data to GraphAPI
        importController.process(container, new DefaultProcessor(), workspace);


        //See if graph is well imported
        DirectedGraph graph = graphModel.getDirectedGraph();
        System.out.println("Nodes: " + graph.getNodeCount());
        System.out.println("Edges: " + graph.getEdgeCount());


        //D. 过滤部分

        FilterController filterController = Lookup.getDefault().lookup(FilterController.class);
        //Filter
        DegreeRangeFilter degreeFilter = new DegreeRangeFilter();
        degreeFilter.init(graph);
        degreeFilter.setRange(new Range(3, Integer.MAX_VALUE));     //Remove nodes with degree < 30
        Query query = filterController.createQuery(degreeFilter);
        GraphView view = filterController.filter(query);
        graphModel.setVisibleView(view);    //Set the filter result as the visible view

        //See visible graph stats
        UndirectedGraph graphVisible = graphModel.getUndirectedGraphVisible();
        System.out.println("Nodes: " + graphVisible.getNodeCount());
        System.out.println("Edges: " + graphVisible.getEdgeCount());

        //Run YifanHuLayout for 100 passes - The layout always takes the current visible view
        YifanHuLayout layout = new YifanHuLayout(null, new StepDisplacement(1f));
        layout.setGraphModel(graphModel);
        layout.resetPropertiesValues();
        layout.setOptimalDistance(200f);

        layout.initAlgo();
        for (int i = 0; i < 100 && layout.canAlgo(); i++) {
            layout.goAlgo();
        }
        layout.endAlgo();

        //Get Centrality
        GraphDistance distance = new GraphDistance();
        distance.setDirected(true);
        distance.execute(graphModel);


        //E. 此部分Rank对节点大小和颜色进行设置
        AppearanceController appearanceController = Lookup.getDefault().lookup(AppearanceController.class);
        AppearanceModel appearanceModel = appearanceController.getModel();

        //Rank color by Degree
        Function degreeRanking = appearanceModel.getNodeFunction(graph, AppearanceModel.GraphFunction.NODE_DEGREE, RankingElementColorTransformer.class);
        RankingElementColorTransformer degreeTransformer = (RankingElementColorTransformer) degreeRanking.getTransformer();
        degreeTransformer.setColors(new Color[]{new Color(0xFEF0D9), new Color(0xB30000)});
        degreeTransformer.setColorPositions(new float[]{0f, 1f});
        appearanceController.transform(degreeRanking);
        //Rank size by centrality
        Column centralityColumn = graphModel.getNodeTable().getColumn(GraphDistance.BETWEENNESS);
        Function centralityRanking = appearanceModel.getNodeFunction(graph, centralityColumn, RankingNodeSizeTransformer.class);
        RankingNodeSizeTransformer centralityTransformer = (RankingNodeSizeTransformer) centralityRanking.getTransformer();
        centralityTransformer.setMinSize(3);
        centralityTransformer.setMaxSize(10);
        appearanceController.transform(centralityRanking);



        //F. 最后展现时图的模式：点、边的样式

        PreviewModel model = Lookup.getDefault().lookup(PreviewController.class).getModel();
        //Preview
        model.getProperties().putValue(PreviewProperty.SHOW_NODE_LABELS, Boolean.TRUE);
        model.getProperties().putValue(PreviewProperty.EDGE_COLOR, new EdgeColor(Color.GRAY));
        model.getProperties().putValue(PreviewProperty.EDGE_THICKNESS, new Float(0.1f));
        model.getProperties().putValue(PreviewProperty.NODE_LABEL_FONT, model.getProperties().getFontValue(PreviewProperty.NODE_LABEL_FONT).deriveFont(8));

        //G. 输出部分 
        ExportController ec = Lookup.getDefault().lookup(ExportController.class);
        try {
            ec.exportFile(new File("headless_simple.pdf"));
        } catch (IOException ex) {
            ex.printStackTrace();
            return;
        }
    }

    public static void main(String[] args){
        HeadlessSimple s = new HeadlessSimple();
        s.script();
 
    }
}
```


注意上述代码中的A.B.C.D.E.F.G 部分，都是XxxxController的实例化，并且每一部分都是相对独立的。
上述代码执行完成后，可以得到如下PDF的图像（注释掉Filter阶段让其保留全部布局）：

![](http://static.zybuluo.com/EVA001/0mv1wo6zlza9d12pp3m987z3/image_1cclaihoj17q65iv1gl3104u1sut1m.png)

### PreviewJFrame.java

注意在使用PreviewJFrame时，源代码中有个细节要注意，下图结构中的 `plugin` 文件夹下有需要使用的依赖代码，必须添加到项目中，否则会出错。

![](http://static.zybuluo.com/EVA001/vfaseoccuy3n8z8jo4ydzbl4/image_1cclriks5t7ra69174c1nee1jck23.png)

>此部分的官方说明：这个文件夹包含一个基本预览插件的结构，它可以做一些简单的渲染，也可以对鼠标事件做出反应。只要有@ Service提供商注释，插件就可以在任何预览窗口中自动包含。
可以运行 PreviewJFrame.java 来尝试这个插件。

![](http://static.zybuluo.com/EVA001/jcpgajkclc35q6j2xu7rfca1/image_1cclrupm71s76144u1o4ne8o17472g.png)

PreviewJFrame 代码如下（出现PreviewSketch找不到的问题就是没引入plugins文件夹）：

```java
import org.gephi.io.importer.api.Container;
import org.gephi.io.importer.api.ImportController;
import org.gephi.io.processor.plugin.DefaultProcessor;
import org.gephi.preview.api.*;
import org.gephi.preview.types.DependantOriginalColor;
import org.gephi.project.api.ProjectController;
import org.gephi.project.api.Workspace;
import org.openide.util.Lookup;
import plugins.PreviewSketch;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ComponentAdapter;
import java.awt.event.ComponentEvent;
import java.io.File;

/**
 *
 * @author Mathieu Bastian
 */
public class PreviewJFrame {

    public void script() {
        //Init a project - and therefore a workspace
        ProjectController pc = Lookup.getDefault().lookup(ProjectController.class);
        pc.newProject();
        Workspace workspace = pc.getCurrentWorkspace();

        //Import file
        ImportController importController = Lookup.getDefault().lookup(ImportController.class);
        Container container;
        try {
            File file = new File(getClass().getResource("/Java.gexf").toURI());
            container = importController.importFile(file);
        } catch (Exception ex) {
            ex.printStackTrace();
            return;
        }

        //Append imported data to GraphAPI
        importController.process(container, new DefaultProcessor(), workspace);

        //Preview configuration
        PreviewController previewController = Lookup.getDefault().lookup(PreviewController.class);
        PreviewModel previewModel = previewController.getModel();
        previewModel.getProperties().putValue(PreviewProperty.SHOW_NODE_LABELS, Boolean.TRUE);
        previewModel.getProperties().putValue(PreviewProperty.NODE_LABEL_COLOR, new DependantOriginalColor(Color.WHITE));
        previewModel.getProperties().putValue(PreviewProperty.EDGE_CURVED, Boolean.FALSE);
        previewModel.getProperties().putValue(PreviewProperty.EDGE_OPACITY, 50);
        previewModel.getProperties().putValue(PreviewProperty.BACKGROUND_COLOR, Color.BLACK);

        //New Processing target, get the PApplet
        G2DTarget target = (G2DTarget) previewController.getRenderTarget(RenderTarget.G2D_TARGET);
        final PreviewSketch previewSketch = new PreviewSketch(target);
        previewController.refreshPreview();

        //Add the applet to a JFrame and display
        JFrame frame = new JFrame("Test Preview");
        frame.setLayout(new BorderLayout());

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(previewSketch, BorderLayout.CENTER);

        frame.setSize(1024, 768);

        //Wait for the frame to be visible before painting, or the result drawing will be strange
        frame.addComponentListener(new ComponentAdapter() {
            @Override
            public void componentShown(ComponentEvent e) {
                previewSketch.resetZoom();
            }
        });
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        PreviewJFrame previewJFrame = new PreviewJFrame();
        previewJFrame.script();
    }

}
```

此时的布局结果是窗体性质的，且内容可缩放，可平移，结果如下：

![](http://static.zybuluo.com/EVA001/mff9hkqkkr1do7gxgyaxu7ao/image_1cclsm5o51alo1pqp1r9l1aja1f9r2t.png)

### 其他，待续

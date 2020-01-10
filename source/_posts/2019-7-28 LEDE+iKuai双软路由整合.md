date: 2019-7-28
categories: 建站组网
tags: [路由,组网]
comments: true
title: LEDE+iKuai双软路由整合

---
> 注：转载请注明出处，以下内容均为个人总结，不保证百分百正确性和完整性，请酌情参考

#### 首先明确

LEDE 同 iKuai 可以说是目的相近的两种不同的路由系统，其均能够完成一些路由的基本功能，在这方面来说两者并无差别，但在扩展功能上，二者各有所长：

- LEDE 具有强大的插件扩展能力，作为 Openwrt 的发行版之一，其本身有着丰富的插件工具支持，同时也非常适合有能力的玩家自己编译自己的路由系统，好用的插件（出国留学+广告拦截）和强大易用的编译扩展能力是其特色；
- iKuai 的特色在于其出色稳定的 单线多拨 功能和 流控分流 功能，这使之更加贴近真正的路由器设备，从而被大多数玩家应用为主路由，通过单线多拨功能，可以完成 宽带叠加 的效果，对于有大带宽需求的用户来说是非常好的选择。
- 综上，这里使用 iKuai 作为主路由，使用 LEDE 作为旁路由 来搭建网络，整个路由系统以虚拟机形式安装在 ESXi 上，通过网卡直通，使虚拟机的带宽损失降到最低。


#### 承载设备

安装设备：YANLING-SKUL6, 2 × i5-7200U 2.5GHz, 16GB RAM, 500GB SSD
设备接口：6 × LAN, 4 × USB, COM, HDMI
系统版本：VMware-VMvisor-Installer-6.7.0-8169922.x86_64-DellEMC_Customized-A01
其他需求：需首先安装好 ESXi
软件镜像：

- iKuai [网址/选择ISO,64位](https://www.ikuai8.com/component/download)， [直接下载文件](https://www.ikuai8.com/download.php?n=/3.x/iso/iKuai8_x64_3.2.4_Build201907151220.iso)
- LEDE [网址/选择combined,vmdk](https://firmware.koolshare.cn/LEDE_X64_fw867/%E8%99%9A%E6%8B%9F%E6%9C%BA%E8%BD%AC%E7%9B%98%E6%88%96PE%E4%B8%8B%E5%86%99%E7%9B%98%E4%B8%93%E7%94%A8/)，  [直接下载文件](https://firmware.koolshare.cn/LEDE_X64_fw867/%E8%99%9A%E6%8B%9F%E6%9C%BA%E8%BD%AC%E7%9B%98%E6%88%96PE%E4%B8%8B%E5%86%99%E7%9B%98%E4%B8%93%E7%94%A8/openwrt-koolshare-mod-v2.31-r10822-50aa0525d1-x86-64-combined-squashfs.vmdk)
- StarWind V2V Image Converter [网址](http://www.38hack.com/1894.html)， [直接下载文件](https://www.starwindsoftware.com/tmplink/starwindconverter.exe) 

#### 网口的映射

需要明确以下几点：

- 我们将拥有两层路由，第一层是 iKuai 主路由，第二层是 LEDE 旁路由；
- 第一层路由需要具备 WAN 口，作为整个路由系统的网络来源；
- 第二层路由需要具备多个 LAN 口，作为路由系统的输出（连接设备）；
- 若拿一般路由器举例，WAN 即为头、LAN 为脚，则 主路由 iKuai 有头无脚，旁路由 LEDE 有脚无头；
- 结合：iKuai 虚拟出一只脚（LAN口），LEDE 把这只脚当做头（iKuai 的这个 LAN 口会被 LEDE 当做 WAN 口）；
- 在虚拟映射方面：
    - iKuai 只需要单单映射一个网卡直通的网口（WAN），给 LEDE 使用的 LAN 口不用做网卡直通，因为双软路由对外作为一体使用，中间的映射只用逻辑的 虚拟网卡即可；
    - LEDE 需要将 WAN 口之外剩余的网口全部做网卡直通，此处，剩余的各网口和一般路由器的 LAN 口没什么区别，直通只是减少损耗；



#### iKuai 的安装

![image_1dftnnf4uves1bps76m6191pfq9.png-146.5kB](http://static.zybuluo.com/EVA001/7r0doj4hebs35288797qy3co/image_1dftnnf4uves1bps76m6191pfq9.png)
![image_1dftnnll2oc91omg1dl2ijf1jivm.png-155.3kB](http://static.zybuluo.com/EVA001/pmznlykxt17b8lv40rkypouz/image_1dftnnll2oc91omg1dl2ijf1jivm.png)
![image_1dftnnrqd1efg1ssjl5v1pok82m13.png-199.9kB](http://static.zybuluo.com/EVA001/qjmhu14iwrl1ut1teltsl24o/image_1dftnnrqd1efg1ssjl5v1pok82m13.png)
![image_1dftno03q1rnabilq2017lc16841g.png-189.9kB](http://static.zybuluo.com/EVA001/rkb45mzo9p3cdw5i79118res/image_1dftno03q1rnabilq2017lc16841g.png)
![image_1dftno48l1ifqv361lej1d721it1t.png-196.9kB](http://static.zybuluo.com/EVA001/hbys37nse46wklb4r0m6kjnt/image_1dftno48l1ifqv361lej1d721it1t.png)
![image_1dftno89kgel12bj1mfk1158b162a.png-236.8kB](http://static.zybuluo.com/EVA001/pabtenxlszhh26e5tt91s3d1/image_1dftno89kgel12bj1mfk1158b162a.png)
![image_1dftnociti72tsasu7ij41da02n.png-197.2kB](http://static.zybuluo.com/EVA001/1hvj67bbigurossz9hnwsys3/image_1dftnociti72tsasu7ij41da02n.png)
![image_1dftnoh3frs71s441lej6q3gsu34.png-156.5kB](http://static.zybuluo.com/EVA001/sawcz1nfoiclmr8ft39qbo22/image_1dftnoh3frs71s441lej6q3gsu34.png)
![image_1dftnolh7oab1anm6n618etir3h.png-206.6kB](http://static.zybuluo.com/EVA001/zgt5qzn6641i60vqbwndnefq/image_1dftnolh7oab1anm6n618etir3h.png)
![image_1dftnoq8ae38365lt1gkdsq43u.png-224.1kB](http://static.zybuluo.com/EVA001/q0nrk090q59xakuszw7j6im7/image_1dftnoq8ae38365lt1gkdsq43u.png)
![image_1dftnottikb4vrt30qshvl354b.png-221.8kB](http://static.zybuluo.com/EVA001/pnjjkyd861fun6g35s9ogb3x/image_1dftnottikb4vrt30qshvl354b.png)
![image_1dftnp29a1t4r1u701efpgrmsuu4o.png-192.2kB](http://static.zybuluo.com/EVA001/e1geme8ipscczhim2061kdkc/image_1dftnp29a1t4r1u701efpgrmsuu4o.png)
![image_1dftnp71619e913nd1auvgcii0555.png-197kB](http://static.zybuluo.com/EVA001/z90n18l2shl3jvftpf2x1vqx/image_1dftnp71619e913nd1auvgcii0555.png)
![image_1dftnpapm141jrgh67qddjkhm5i.png-178kB](http://static.zybuluo.com/EVA001/rr4gl4ub0z8efgnruhvbjcyw/image_1dftnpapm141jrgh67qddjkhm5i.png)

#### iKuai 的初始网络设置（黑框）

![image_1dftnpf3913l0t2j1l771ha227e5v.png-226kB](http://static.zybuluo.com/EVA001/nyrs9m5qwt4c9iim6oskuilq/image_1dftnpf3913l0t2j1l771ha227e5v.png)
![image_1dftnpj3oeph1lqr1gefokv3t46c.png-242.6kB](http://static.zybuluo.com/EVA001/cu0flyk46nojv2urltlp0e0i/image_1dftnpj3oeph1lqr1gefokv3t46c.png)
![image_1dftnpmt0b8d4t4l6t1qiseae6p.png-240kB](http://static.zybuluo.com/EVA001/fwkspa40x7y9iefhl1e5m7jx/image_1dftnpmt0b8d4t4l6t1qiseae6p.png)
![image_1dftnprvi1rmq1644a6s1o3t1tb076.png-215.7kB](http://static.zybuluo.com/EVA001/3cbr99xrew17zbkkjccw6cwc/image_1dftnprvi1rmq1644a6s1o3t1tb076.png)

#### iKuai 的系统配置（Web端）

![ikuai.jpg-98kB](http://static.zybuluo.com/EVA001/py7i910g0mprotdrgkaurq4f/ikuai.jpg)
![无标题1.png-151.6kB](http://static.zybuluo.com/EVA001/1hz8tyeioiq9r16cxia3pvip/%E6%97%A0%E6%A0%87%E9%A2%981.png)
![QQ截图20190716222911.png-122.9kB](http://static.zybuluo.com/EVA001/ga5y4dd5iw2bk94l04mef0q0/QQ%E6%88%AA%E5%9B%BE20190716222911.png)
![无标题2.png-105.3kB](http://static.zybuluo.com/EVA001/1gfr85w6buwqlg1vzz09uzfk/%E6%97%A0%E6%A0%87%E9%A2%982.png)
![无标题3.png-118.5kB](http://static.zybuluo.com/EVA001/gc0z4mqg53l0558qm7j1h2su/%E6%97%A0%E6%A0%87%E9%A2%983.png)


#### LEDE 镜像的合并处理

![image_1dftnq1ol17btnv11p0117pr4k27j.png-33.2kB](http://static.zybuluo.com/EVA001/vlxe9509ewhzaaglgs9vtnk1/image_1dftnq1ol17btnv11p0117pr4k27j.png)
![image_1dftnq6sfnio1t2gem213ki11aj80.png-41kB](http://static.zybuluo.com/EVA001/j0vjxty4ljz3ti7ridd8wthv/image_1dftnq6sfnio1t2gem213ki11aj80.png)
![QQ截图20190716224636.png-36.1kB](http://static.zybuluo.com/EVA001/w41rpi43sal26cqj4q08jr9u/QQ%E6%88%AA%E5%9B%BE20190716224636.png)
![QQ截图20190716224712.png-41.6kB](http://static.zybuluo.com/EVA001/fblb1xvv4n2tpfgw2yhtslul/QQ%E6%88%AA%E5%9B%BE20190716224712.png)
![QQ截图20190716224849.png-69.3kB](http://static.zybuluo.com/EVA001/rkckbux7xswdpbdebn9vnllh/QQ%E6%88%AA%E5%9B%BE20190716224849.png)
![QQ截图20190716224930.png-40.4kB](http://static.zybuluo.com/EVA001/xu6s7vrcpjz4hech9zszdxpz/QQ%E6%88%AA%E5%9B%BE20190716224930.png)
![QQ截图20190716225017.png-41.5kB](http://static.zybuluo.com/EVA001/5v0g1p25mm3pn4kufs6f7x82/QQ%E6%88%AA%E5%9B%BE20190716225017.png)
![QQ截图20190716225037.png-48.5kB](http://static.zybuluo.com/EVA001/1mcn4dm3m8fvj9sszojtj2n1/QQ%E6%88%AA%E5%9B%BE20190716225037.png)
![QQ截图20190716225146.png-40.2kB](http://static.zybuluo.com/EVA001/0qo4cl7tuphijsf1ro16eskc/QQ%E6%88%AA%E5%9B%BE20190716225146.png)
![无标题4.png-138.3kB](http://static.zybuluo.com/EVA001/yzvged1py7h6t336ul7d72de/%E6%97%A0%E6%A0%87%E9%A2%984.png)

#### LEDE 在 ESXi 上的安装

![QQ截图20190716230109.png-171kB](http://static.zybuluo.com/EVA001/m6kghqbs3ffz1oi0tjx79oji/QQ%E6%88%AA%E5%9B%BE20190716230109.png)
![QQ截图20190716230451.png-196.5kB](http://static.zybuluo.com/EVA001/drbhx7ukv8w37vwocev0fuw6/QQ%E6%88%AA%E5%9B%BE20190716230451.png)
![无标题5.png-180.6kB](http://static.zybuluo.com/EVA001/pdll5v0opssyk1yq6jwvm7g2/%E6%97%A0%E6%A0%87%E9%A2%985.png)

![无标题6.png-174.2kB](http://static.zybuluo.com/EVA001/3su2g33a26dwv46hplhd1bp1/%E6%97%A0%E6%A0%87%E9%A2%986.png)
![QQ截图20190716231438.png-197.3kB](http://static.zybuluo.com/EVA001/sl9l34njvu27s2kfcx28mmd9/QQ%E6%88%AA%E5%9B%BE20190716231438.png)

![QQ截图20190716231613.png-168.8kB](http://static.zybuluo.com/EVA001/x4n88xohp51lwuucq2lvfyp6/QQ%E6%88%AA%E5%9B%BE20190716231613.png)

#### LEDE 的初始网络配置（黑框）

![QQ截图20190716231728.png-214.4kB](http://static.zybuluo.com/EVA001/rsvlzrxejiwx6bzfs2v6b8bk/QQ%E6%88%AA%E5%9B%BE20190716231728.png)
![QQ截图20190716231858.png-197.3kB](http://static.zybuluo.com/EVA001/x19n8dr32hyk6x96s0oocwhz/QQ%E6%88%AA%E5%9B%BE20190716231858.png)

#### LEDE 路由配置（Web端）

![QQ截图20190716232046.png-58.7kB](http://static.zybuluo.com/EVA001/7isc3yyicysurf3lx68bawmn/QQ%E6%88%AA%E5%9B%BE20190716232046.png)
![QQ截图20190716232140.png-100.4kB](http://static.zybuluo.com/EVA001/1zdc56gytu5qq5hmzonqb8a3/QQ%E6%88%AA%E5%9B%BE20190716232140.png)
![QQ截图20190716232538.png-135.9kB](http://static.zybuluo.com/EVA001/046sv6csj4tfofmzl1hz1ibi/QQ%E6%88%AA%E5%9B%BE20190716232538.png)
![QQ截图20190716232745.png-127.8kB](http://static.zybuluo.com/EVA001/mfumh1vcj7hc3elzksk3ms4e/QQ%E6%88%AA%E5%9B%BE20190716232745.png)
![QQ截图20190716233108.png-106.9kB](http://static.zybuluo.com/EVA001/pdkqur6trldq9k6jerfhu0lj/QQ%E6%88%AA%E5%9B%BE20190716233108.png)
![QQ截图20190716233415.png-129.7kB](http://static.zybuluo.com/EVA001/eg1htqmui6mkakuvux8v87qi/QQ%E6%88%AA%E5%9B%BE20190716233415.png)


#### 最后：配置LEDE的网卡直通

![QQ截图20190717102029.png-119.7kB](http://static.zybuluo.com/EVA001/b5be38c5f2z27pwk0r1bbzed/QQ%E6%88%AA%E5%9B%BE20190717102029.png)
![QQ截图20190717103018.png-112.2kB](http://static.zybuluo.com/EVA001/stwr2ok4s67la3og9b3in8vu/QQ%E6%88%AA%E5%9B%BE20190717103018.png)
![QQ截图20190717103104.png-81.3kB](http://static.zybuluo.com/EVA001/c3ysdm9ye5hdth35fbzlgk2c/QQ%E6%88%AA%E5%9B%BE20190717103104.png)
![QQ截图20190717103839.png-166.3kB](http://static.zybuluo.com/EVA001/1nofqbzkstleepdmnwz0zhmn/QQ%E6%88%AA%E5%9B%BE20190717103839.png)
![QQ截图20190717104019.png-140.9kB](http://static.zybuluo.com/EVA001/jx6nh7mo1fpekljhzs3s9pnc/QQ%E6%88%AA%E5%9B%BE20190717104019.png)
![QQ截图20190717132218.png-163.1kB](http://static.zybuluo.com/EVA001/b70klsw3fbln8q4d9iloztmn/QQ%E6%88%AA%E5%9B%BE20190717132218.png)





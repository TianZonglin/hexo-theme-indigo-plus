const { version, name } = require('../package.json')

hexo.extend.helper.register('theme_version', () => version)

const source = (path, cache, ext) => {
    if (cache) {
        const minFile = `${path}${ext === '.js' ? '.min' : ''}${ext}`
        return hexo.theme.config.cdn ? `//unpkg.com/${name}@latest${minFile}` : `${minFile}?v=${version}`
    } else {
        return path + ext
    }
}
hexo.extend.helper.register('theme_js', (path, cache) => source(path, cache, '.js'))
hexo.extend.helper.register('theme_css', (path, cache) => source(path, cache, '.css'))

function renderImage(src, alt = '', title = '') {
    return `<figure class="image-bubble">
                <div class="img-lightbox">
                    <div class="overlay"></div>
                    <img src="${src}" alt="此处为博客中出现的关于Spark、Hadoop、Java、IDEA、Js及html相关内容的图片" >
                </div>
                <div class="image-caption">${title}</div>
            </figure>`
}

///////// function renderImage(src, alt = '', title = '') {
/////////     return `<figure class="image-bubble">
/////////                 <div class="img-lightbox">
/////////                     <div class="overlay"></div>
/////////                     <img src="${src}" alt="${alt}" title="${title}">
/////////                 </div>
/////////                 <div class="image-caption">${title || alt}</div>
/////////             </figure>`
///////// }



hexo.extend.tag.register('image', ([src, alt = '', title = '']) => {
    return hexo.theme.config.lightbox ? renderImage(src, alt, title) : `<img src="${src}" alt="此处为博客中出现的关于Spark、Hadoop、Java、IDEA、Js及html相关内容的图片" >`
})


hexo.extend.tag.register('img', ([src, alt = '', title = '']) => {
    return hexo.theme.config.lightbox ? renderImage(src, alt, title) : `<img src="${src}" alt="此处为博客中出现的关于Spark、Hadoop、Java、IDEA、Js及html相关内容的图片" >`
})




//if (hexo.theme.config.lightbox) {
//    hexo.extend.tag.register('image', ([src, alt, title]) => {
//        return renderImage(src, alt, title)
//    })
//}


hexo.extend.filter.register('before_post_render', data => {
    if (hexo.theme.config.lightbox) {
        // 包含图片的代码块 <escape>[\s\S]*\!\[(.*)\]\((.+)\)[\s\S]*<\/escape>
        // 行内图片 [^`]\s*\!\[(.*)\]\((.+)\)([^`]|$)
        data.content = data.content.replace(/<escape>.*\!\[(.*)\]\((.+)\).*<\/escape>|([^`]\s*|^)\!\[(.*)\]\((.+)\)([^`]|$)/gm, match => {

            // 忽略代码块中的图片
            if (/<escape>[\s\S]*<\/escape>|.?\s{3,}/.test(match)) {
                return match
            }

            return match.replace(/\!\[(.*)\]\((.+)\)/, (img, alt, src) => {
                const attrs = src.split(' ')
                const title = (attrs[1] && attrs[1].replace(/\"|\'/g, '')) || ''
                return `{% image ${attrs[0]} '${alt}' '${title}' %}`
            })
        })
    }
    return data
})




 

hexo.extend.helper.register('getCategoryList', (archive, size) => {
	
	//console.log('archive:');
  //console.log(archive);
	//console.log('size:');
  //console.log(size);
  
  var posts = hexo.locals.get('posts');
 

 
 
  var articleArr = [];
  size = size || 10;
    for(var i = 0; i< posts.length; i++){
      if(!!archive.tags.data.length > 0) {
 
 console.log(archive.tags.data[0].name);
		  //console.log(archive.categories.data +' === '+ posts.data[i].categories.data.name+"\t"+archive._id +' != '+ posts.data[i]._id);
		//console.log(archive.name +' === '+ posts.data[i].name+"\t"+archive._id +' != '+ posts.data[i]._id);
        //if(posts.data[i].categories.data.indexOf(archive.categories.data) > -1 && archive._id != posts.data[i]._id){  
		if(archive.tags.data[0].name === posts.data[i].tags.data[0].name && archive._id != posts.data[i]._id){  //undefined===undefined导致archive.name === posts.data[i].name
			//console.log('1111111111111111111111111111');
			articleArr.push(posts.data[i]);
		}
      }else{
        if(archive._id != posts.data[i]._id) {
			console.log('2222222222222222222222222222');
			articleArr.push(posts.data[i]);
		}
      }
    }

	//console.log('posts.length:'+posts.length);
	var l = articleArr.length;
	if ( l < size)	  
		return articleArr.slice(0, l-1);
	else 
		return articleArr.slice(l-1-size, l-1);

});


/*
hexo.extend.helper.register('getCategoryList', (archive, size) => {
	
	//console.log('archive:');
  //console.log(archive);
	//console.log('size:');
  //console.log(size);
  
  var posts = hexo.locals.get('posts');
 

  var articleArr = [];
  size = size || 10;
    for(var i = 0; i< posts.length; i++){
      if(!!archive.categories.data.length > 0) {
 
 console.log(archive.tags.data);
		  //console.log(archive.categories.data +' === '+ posts.data[i].categories.data.name+"\t"+archive._id +' != '+ posts.data[i]._id);
		//console.log(archive.name +' === '+ posts.data[i].name+"\t"+archive._id +' != '+ posts.data[i]._id);
        //if(posts.data[i].categories.data.indexOf(archive.categories.data) > -1 && archive._id != posts.data[i]._id){  
		if(archive.categories.data[0].name === posts.data[i].categories.data[0].name && archive._id != posts.data[i]._id){  //undefined===undefined导致archive.name === posts.data[i].name
			//console.log('1111111111111111111111111111');
			articleArr.push(posts.data[i]);
		}
      }else{
        if(archive._id != posts.data[i]._id) {
			console.log('2222222222222222222222222222');
			articleArr.push(posts.data[i]);
		}
      }
    }

	//console.log('posts.length:'+posts.length);
  return articleArr.slice(0, size);
});

*/

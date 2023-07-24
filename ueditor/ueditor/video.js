/**
 * video插件， 为UEditor提供视频插入支持
 * @file
 * @since 1.2.6.1
 */

UE.plugins["video"] = function () {
  var me = this;

  /**
   * 创建插入视频字符窜
   * @param url 视频地址
   * @param width 视频宽度
   * @param height 视频高度
   * @param align 视频对齐
   * @param toEmbed 是否以flash代替显示
   * @param addParagraph  是否需要添加P 标签
   * 
   */
  // var mylink;
  // var host=top.location.host;
  //  if(host.indexOf(".igandan.org")>1){
  //   mylink='http://twx.igandan.org/'
  // }else{
  //   mylink='http://wx.igandan.com/'
  // }
   var URL = me.getOpt("UEDITOR_HOME_URL");
  function creatInsertStr(url, width, height, id, align, classname, type) {
    var str;
    switch (type) {
      case "image":
        str =
          "<img " +
          (id ? 'id="' + id + '"' : "") +
          ' width="' +
          width +
          '" height="' +
          height +
          '" _url="' +
          url +
          '" class="' +
          classname.replace(/\bvideo-js\b/, "") +
          '"' +
          ' src="' +
          me.options.UEDITOR_HOME_URL +
          'themes/default/images/spacer.gif" style="background:url(' +
          me.options.UEDITOR_HOME_URL +
          "themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;" +
          (align ? "float:" + align + ";" : "") +
          '" />';
        break;
      case "embed":
        str =
          '<embed type="application/x-shockwave-flash" class="' +
          classname +
          '" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
          ' src="' +
          utils.html(url) +
          '" width="' +
          width +
          '" height="' +
          height +
          '"' +
          (align ? ' style="float:' + align + '"' : "") +
          ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
        break;
      case "video":
        var ext = url.substr(url.lastIndexOf(".") + 1);
        if (ext == "ogv") ext = "ogg";
         str ="<iframe" +
          (id ? ' id="' + id + '"' : "") +
          ' class="' +
          classname +
          ' video-js" ' +
          (align ? ' style="margin:0 auto;border:none;max-width:672px;display:block;border: none;background:transparent;float:' + align + '"' :  ' style="max-width:672px;border:none;background:transparent;margin:0 auto;display:block;"') +
          ' controls preload="none" width="' +
          width +
          '" src="'+URL+'html/video.html?fileUrl='+url +'" height="' +
          height +
          '" allowfullscreen="true" fileUrl="' +
         
          url +
          '" >' +
          '</iframe>';
        // str ="<video" +
        //   (id ? ' id="' + id + '"' : "") +
        //   ' class="' +
        //   classname +
        //   ' video-js" ' +
        //   (align ? ' style="margin:0 auto;float:' + align + '"' :  ' style="margin:0 auto;"') +
        //   ' controls preload="none" width="' +
        //   width +
        //   '" height="' +
        //   height +
        //   '" src="' +
        //   url +
        //   '" data-setup="{}">' +
        //   '</video>';
        // if (ext == "mp3") {
        //   str = '<audio' + (id ? ' id="' + id + '"' : '') + ' class="' + classname + ' video-js" ' + (align ? ' style="float:' + align + '"': '') +
        //   ' controls preload="none" width="' + width + '" height="' + height + '" style="width: 100%" src="' + url + '" data-setup="{}">' +
        //   '<source src="' + url + '" type="audio/' + ext + '" /></audio>';
        // } else {
        //   str ="<video" +
        //   (id ? ' id="' + id + '"' : "") +
        //   ' class="' +
        //   classname +
        //   ' video-js" ' +
        //   (align ? ' style="float:' + align + '"' : "") +
        //   ' controls preload="none" width="' +
        //   width +
        //   '" height="' +
        //   height +
        //   '" src="' +
        //   url +
        //   '" data-setup="{}">' +
        //   '<source src="' +
        //   url +
        //   '" type="video/' +
        //   ext +
        //   '" /></video>';
        // }
      
        break;
    }
    return str;
  }

  function switchImgAndVideo(root, img2video) {
    utils.each(
      root.getNodesByTagName(img2video ? "img" : "embed video"),
      function (node) {
        var className = node.getAttr("class");
        if (className && className.indexOf("edui-faked-video") != -1) {
          var html = creatInsertStr(
            img2video ? node.getAttr("_url") : node.getAttr("src"),
            node.getAttr("width"),
            node.getAttr("height"),
            null,
            node.getStyle("float") || "",
            className,
            img2video ? "embed" : "image"
          );
          node.parentNode.replaceChild(UE.uNode.createElement(html), node);
        }
        if (className && className.indexOf("edui-upload-video") != -1) {
          var html = creatInsertStr(
            img2video ? node.getAttr("_url") : node.getAttr("src"),
            node.getAttr("width"),
            node.getAttr("height"),
            null,
            node.getStyle("float") || "",
            className,
            img2video ? "video" : "image"
          );
          node.parentNode.replaceChild(UE.uNode.createElement(html), node);
        }
      }
    );
  }

  me.addOutputRule(function (root) {
    switchImgAndVideo(root, true);
  });
  me.addInputRule(function (root) {
    switchImgAndVideo(root);
  });

  /**
   * 插入视频
   * @command insertvideo
   * @method execCommand
   * @param { String } cmd 命令字符串
   * @param { Object } videoAttr 键值对对象， 描述一个视频的所有属性
   * @example
   * ```javascript
   *
   * var videoAttr = {
   *      //视频地址
   *      url: 'http://www.youku.com/xxx',
   *      //视频宽高值， 单位px
   *      width: 200,
   *      height: 100
   * };
   *
   * //editor 是编辑器实例
   * //向编辑器插入单个视频
   * editor.execCommand( 'insertvideo', videoAttr );
   * ```
   */

  /**
   * 插入视频
   * @command insertvideo
   * @method execCommand
   * @param { String } cmd 命令字符串
   * @param { Array } videoArr 需要插入的视频的数组， 其中的每一个元素都是一个键值对对象， 描述了一个视频的所有属性
   * @example
   * ```javascript
   *
   * var videoAttr1 = {
   *      //视频地址
   *      url: 'http://www.youku.com/xxx',
   *      //视频宽高值， 单位px
   *      width: 200,
   *      height: 100
   * },
   * videoAttr2 = {
   *      //视频地址
   *      url: 'http://www.youku.com/xxx',
   *      //视频宽高值， 单位px
   *      width: 200,
   *      height: 100
   * }
   *
   * //editor 是编辑器实例
   * //该方法将会向编辑器内插入两个视频
   * editor.execCommand( 'insertvideo', [ videoAttr1, videoAttr2 ] );
   * ```
   */

  /**
   * 查询当前光标所在处是否是一个视频
   * @command insertvideo
   * @method queryCommandState
   * @param { String } cmd 需要查询的命令字符串
   * @return { int } 如果当前光标所在处的元素是一个视频对象， 则返回1，否则返回0
   * @example
   * ```javascript
   *
   * //editor 是编辑器实例
   * editor.queryCommandState( 'insertvideo' );
   * ```
   */
  me.commands["insertvideo"] = {
    execCommand: function (cmd, videoObjs, type) {
      videoObjs = utils.isArray(videoObjs) ? videoObjs : [videoObjs];

      if (me.fireEvent("beforeinsertvideo", videoObjs) === true) {
        return;
      }

      var html = [],
        id = "tmpVedio",
        cl;
      for (var i = 0, vi, len = videoObjs.length; i < len; i++) {
        vi = videoObjs[i];
        cl = type == "upload" ?
          "edui-upload-video video-js vjs-default-skin" :
          "edui-faked-video";
        html.push(
          creatInsertStr(
            vi.url,
            vi.width || '100%',
            vi.height || '377',
            id + i,
            null,
            cl,
            "video"
          )
        );
      }
      me.execCommand("inserthtml", html.join(""), true);
      var rng = this.selection.getRange();
      for (var i = 0, len = videoObjs.length; i < len; i++) {
        var img = this.document.getElementById("tmpVedio" + i);
        domUtils.removeAttributes(img, "id");
        rng.selectNode(img).select();
        me.execCommand("imagefloat", videoObjs[i].align);
      }

      me.fireEvent("afterinsertvideo", videoObjs);
    },
    queryCommandState: function () {
      var img = me.selection.getRange().getClosedNode(),
        flag =
        img &&
        (img.className == "edui-faked-video" ||
          img.className.indexOf("edui-upload-video") != -1);
      return flag ? 1 : 0;
    }
  };
};
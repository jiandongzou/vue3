/**
 * 插入附件
 */
UE.plugin.register("insertfile", function() {
  var me = this;

  function getFileIcon(url) {
    var ext = url.substr(url.lastIndexOf(".") + 1).toLowerCase(),
      maps = {
        rar: "icon_rar.gif",
        zip: "icon_rar.gif",
        tar: "icon_rar.gif",
        gz: "icon_rar.gif",
        bz2: "icon_rar.gif",
        doc: "icon_doc.gif",
        docx: "icon_doc.gif",
        pdf: "icon_pdf.gif",
        mp3: "icon_mp3.gif",
        xls: "icon_xls.gif",
        chm: "icon_chm.gif",
        ppt: "icon_ppt.gif",
        pptx: "icon_ppt.gif",
        avi: "icon_mv.gif",
        rmvb: "icon_mv.gif",
        wmv: "icon_mv.gif",
        flv: "icon_mv.gif",
        swf: "icon_mv.gif",
        rm: "icon_mv.gif",
        exe: "icon_exe.gif",
        psd: "icon_psd.gif",
        txt: "icon_txt.gif",
        jpg: "icon_jpg.gif",
        png: "icon_jpg.gif",
        jpeg: "icon_jpg.gif",
        gif: "icon_jpg.gif",
        ico: "icon_jpg.gif",
        bmp: "icon_jpg.gif"
      };
    return maps[ext] ? maps[ext] : maps["txt"];
  }

  return {
    commands: {
      insertfile: {
        execCommand: function(command, filelist) {
          filelist = utils.isArray(filelist) ? filelist : [filelist];

          if (me.fireEvent("beforeinsertfile", filelist) === true) {
            return;
          }

          var i,
            item,
            icon,
            title,
            html = "",
            URL = me.getOpt("UEDITOR_HOME_URL"),
            iconDir =
              URL +
              (URL.substr(URL.length - 1) == "/" ? "" : "/") +
              "dialogs/attachment/fileTypeImages/";
          for (i = 0; i < filelist.length; i++) {
            item = filelist[i];
            console.log(item);
            icon = iconDir + getFileIcon(item.url);
            title = item.title || item.url.substr(item.url.lastIndexOf("/") + 1);
            size=item.size;
            //source_url=item.source_url;
            html +='<iframe style="background-color:transparent;width:92%;height:92px;border:none;max-width:670px;margin:0 auto;display:block;" src="'+ URL+'html/file.html?fileName='+encodeURI(title)+'&fileUrl='+item.url+'&fileSize='+item.size+'&sourceUrl='+item.source_url+'"  fileName="' + title +  '"  fileUrl="'+item.url+'" fileSize="'+item.size+'" sourceUrl="'+item.source_url+'"></iframe>';
          //   html +=
          //     '<p style="line-height: 16px;">' +
          //     '<img style="vertical-align: middle; margin-right: 2px;" src="' +
          //     icon +
          //     '" _src="' +
          //     icon +
          //     '" />' +
          //     '<a style="font-size:12px; color:#0066cc;" href="' +
          //     item.url +
          //     '" title="' +
          //     title +
          //     '">' +
          //     title +
          //     "</a>" +
          //     "</p>";
           }
          me.execCommand("insertHtml", html);

          me.fireEvent("afterinsertfile", filelist);
        }
      }
    }
  };
});

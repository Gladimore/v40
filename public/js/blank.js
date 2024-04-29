const path = "/main.html"

export function blank(url, sentWindow = window) {
  ensure()
  
  if (!inFrame()){
    var w = window.open("about:blank", "_blank")
  w.document.write('<script>document.title = "about:blank";</script>' +
    '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="' + url + '"></iframe>');
  try{
    sentWindow.close()
  } catch(e){
    sentWindow.locaion.href = "//drive.google.com/drive"
  }
  }
}

function inFrame() {
  return window.self !== window.parent
}

function ensure() {
  if (inFrame() && location.pathname !== path) {
    location.href = path
  }
}

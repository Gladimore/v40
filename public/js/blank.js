const path = "/main.html"

function blank() {
  var w = window.open("about:blank", "_blank")
  w.document.write(
    '<script>document.title = "about:blank";</script>' +
      '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%; referrerpolicy="no-referrer";" src="' +
      path +
      '"></iframe>',
  )
}

const name = "aboutCloak"
const value = "false"

const get = localStorage.getItem(name)
const bool = get == "true" ? true : false

if (bool || get == null) {
  if (window.self === window.parent) {
    blank()
    location.href = "//google.com"
  } else {
    if (location.pathname !== path) {
      location.href = path
    }
  }
} else {
  location.href = path
}

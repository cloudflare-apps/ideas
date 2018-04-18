window.INSTALL = window.INSTALL || {}
window.INSTALL_OPTIONS = {
      // TODO: edit the default testing options to include every option
      // install.json
        "location": {
            "selector": "body",
            "method": "before"
          },
        "message":
           "<p>Welcome to Cloudflare Apps! This is our example app.</p><p>Download this app every time you want to make a new project.</p>"
      }
// Below is declaring the INSTALL.createElement function which is part of the
// App creator API
INSTALL.createElement = function(location, element){
  element = element || document.createElement('div')
  if (!location){
    //default to append to the document body if location not given
    elementMethodSwitch(element, document.body, 'append')
    return element
  }
  var locations = document.querySelectorAll(location.selector)
  locations.forEach((el) => {
      el.appendChild(element)
      el = elementMethodSwitch(element, el, location.method)
  })
  return element
}
function elementMethodSwitch(el, parent, method){
  //implements the specified method by adding el to the parent
  var grandpa = parent.parentElement
  switch (method){
    case 'append':
          return parent.appendChild(el)
    case 'prepend':
          return parent.prepend(el)
    case 'before':
          return grandpa.insertBefore(el, parent)
    case 'after':
          return grandpa.insertBefore(el, parent.nextSibling)
    case 'replace':
          return grandpa.replaceChild(el, parent)
  }
}

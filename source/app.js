(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS
  var element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.!!! i think we should remove this assumption FEEDBACK
  function updateElement () {
    element = INSTALL.createElement(options.location, element)

    element.setAttribute('app-id', 'example')
    element.innerHTML = options
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions (nextOptions) {
      options = nextOptions
      console.log("logg" )
      console.log(options)
      updateElement()
    }
  }
}())

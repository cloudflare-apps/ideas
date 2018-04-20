var INSTALL_JSON =  require('./install.json');
window.CloudflareApps = {}

// Scripts to enable local testing with CloudflareApps' methods 
// For more details see https://www.cloudflare.com/apps/developer/docs/create-an-app/environment 
require("./node_modules/@cloudflare-apps/environment/lib/create.js")
require("./node_modules/@cloudflare-apps/environment/lib/body.js")
require("./node_modules/@cloudflare-apps/environment/lib/notifier.js")
require("./node_modules/@cloudflare-apps/environment/lib/restrict.js")
require("./node_modules/@cloudflare-apps/environment/lib/selector.js")

// Assign INSTALL_OPTIONS to the default options in install.json
window.INSTALL = window.CloudflareApps
window.INSTALL_PROPERTIES = INSTALL_JSON.options.properties
var installDefaultArr = Object.keys(INSTALL_PROPERTIES).map((property) => { 
    let obj = {}; obj[property] = INSTALL_PROPERTIES[property].default; return obj; 
})
window.INSTALL_OPTIONS = installDefaultArr.reduce((el, acum) => Object.assign(acum, el))

var INSTALL_DEFAULT =  require('./install.json');
require("./node_modules/@cloudflare-apps/environment/lib/create.js")
require("./node_modules/@cloudflare-apps/environment/lib/body.js")
require("./node_modules/@cloudflare-apps/environment/lib/notifier.js")
require("./node_modules/@cloudflare-apps/environment/lib/restrict.js")
require("./node_modules/@cloudflare-apps/environment/lib/selector.js")
console.log(INSTALL_DEFAULT)
console.log('webpack works!')
window.INSTALL = CloudflareApps
window.INSTALL_OPTIONS = INSTALL_DEFAULT.options.properties
var installDefaultArr = Object.keys(INSTALL_OPTIONS).map((el) => { let obj = {}; obj[el] = INSTALL_OPTIONS[el].default; return obj })
window.INSTALL_OPTIONS = installDefaultArr.reduce((el, acum) => Object.assign(acum, el))
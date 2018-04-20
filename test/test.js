var assert = require('assert');
var CF = require('node_modules/@cloudflare-apps/environment')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
describe('CloudflareApps methonds', () => {
  describe('INSTALL', () =>{
    console.log(INSTALL)
    it('assert INSTALL exists', assert(window.INSTALL))
  })
})
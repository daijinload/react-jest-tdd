require('babel-register')();

var JSDOM = require('jsdom').JSDOM;
var dom = new JSDOM(`...`);
global.window =  dom.window;
global.document = dom.window.document;

var exposedProperties = ['window', 'navigator', 'document'];
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
 
global.navigator = {
  userAgent: 'node.js'
};

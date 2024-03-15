const metrics = require('./metrics'); // Note the relative path './metrics'

var x = 5;

console.log("kilometerstometers = ", metrics.kilometerstometers(x));
console.log("Meterstocentimeters = ", metrics.meterstocentimers(x));
console.log("centimeterstomillimeters = ", metrics.centimeterstomillimeters(x));
console.log("meterstodecimeters = ", metrics.meterstodecimeters(x));

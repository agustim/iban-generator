var ibanGenerator = require('./src/iban_generator');

var ig = new ibanGenerator();

var max_iban = 0;
var min_iban = 99;

for(i=1000; i<1100; i++){
  var iban = ig.doIban(ig.fixCCC("1000000000000000"+i));
  var code = parseInt(iban.substring(2,4));
  min_iban = (min_iban > code) ? code : min_iban;
  max_iban = (max_iban < code) ? code : max_iban;
}
console.log("min = " + min_iban);
console.log("max = " + max_iban);

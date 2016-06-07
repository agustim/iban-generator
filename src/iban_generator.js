'use strict'

var iban = require('iban');

function ibanGenerator() {

}

ibanGenerator.prototype.randomNumber = function(){
  var entitat = this._randomNumber(4);
  var oficina = this._randomNumber(4);
  var compte = this._randomNumber(10);
  return entitat+oficina+compte;
}
ibanGenerator.prototype._randomNumber = function(n){
  var num = "";
  for(let index=0; index < n; index++ ){
    num += Math.floor((Math.random() * 10) + 1);
  }
  return num;
}


module.exports = ibanGenerator;

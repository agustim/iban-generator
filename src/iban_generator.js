'use strict'

var IBAN = require('iban');

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
ibanGenerator.prototype.controlDigit = function(n){
  var ncc = n.replace(/ /g,'');
  var entitat_oficina = ncc.substring(0,8);
  var cc = ncc.substring(ncc.length-10,ncc.length);

  var dc1 = this._calculaDCParcial(entitat_oficina);
  var dc2 = this._calculaDCParcial(cc);
  return (dc1+dc2);
}
ibanGenerator.prototype._calculaDCParcial = function(cadena){
	var dcParcial = 0;
	var tablaPesos = [6,3,7,9,10,5,8,4,2,1];
	var suma = 0;
	var i;
	for(i=0;i<cadena.length;i++){
		suma = suma + cadena.charAt(cadena.length-1-i)*tablaPesos[i];
	}
	dcParcial = (11-(suma % 11));
	if(dcParcial==11)
		dcParcial=0;
	else if(dcParcial==10)
		dcParcial=1;
	return dcParcial.toString();
}
ibanGenerator.prototype.fixCCC = function(n){
  var ncc = n.replace(/ /g,'');
  var dc = this.controlDigit(n);
  return (ncc.substring(0,8)+dc+ncc.substring(ncc.length-10,ncc.length));
}
ibanGenerator.prototype.doIban = function(ccc) {
  return(IBAN.fromBBAN("ES",ccc));
}
ibanGenerator.prototype.checkIban = function(iban) {
  return(IBAN.isValid(iban));
}
module.exports = ibanGenerator;

var expect = require('expect');
var ibanGenerator = require('../src/iban_generator.js');


describe('Testing de ibanGenerator:', function(){
  before(function(){
    ig = new ibanGenerator();
  })
  it('Generar numeros aleatoris compte', function(){
    expect(ig.randomNumber()).toMatch(/\d{1,}/);
  })
  it('Digit control CCC', function(){
    var ccc = ""
    var dc = ""
    expect(ig.controlDigit(ccc)).toBe(dc);
  })
  it('Calcular IBAN', function(){
    var ccc = "";
    var iban = "";
    expect(ig.doIban(ccc)).toBe(iban);
  })
  it('Validar IBAN correcte', function(){
    var iban = '';
    expect(ig.checkIban(iban)).toBe(true);
  })
  it('Validar IBAN incorrecte', function(){
    var iban = '';
    expect(ig.checkIban(iban)).toBe(true);
  })


})

var expect = require('expect');
var ibanGenerator = require('../src/iban_generator.js');


describe('Testing de ibanGenerator:', function(){
  it('Generar numeros aleatoris compte', function(){
    expect(ibanGenerator.randomNumber()).toMatch(/\d{1,}/);
  })
  it('Digit control CCC', function(){
    var ccc = ""
    var dc = ""
    expect(ibanGenerator.controlDigit(ccc)).toBe(dc);
  })
  it('Calcular IBAN', function(){
    var ccc = "";
    var iban = "";
    expect(ibanGenerator.doIban(ccc)).toBe(iban);
  })
  it('Validar IBAN correcte', function(){
    var iban = '';
    expect(ibanGenerator.checkIban(iban)).toBe(true);
  })
  it('Validar IBAN incorrecte', function(){
    var iban = '';
    expect(ibanGenerator.checkIban(iban)).toBe(true);
  })


})

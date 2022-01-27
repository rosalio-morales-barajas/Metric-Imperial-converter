const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
    test('#readWholeNum', () => {
        assert.isNotNaN(convertHandler.getNum('5kg'))
    })
    test('#readDecimal', () => {
        assert.isNotNaN(convertHandler.getNum('1.54kg'))
    })
    test('#readFraction', () => {
        assert.isNotNaN(convertHandler.getNum('1/2kg'))
    })
    test('#readFractionWithDecimal', () => {
        assert.isNotNaN(convertHandler.getNum('1/2.5kg'))
    })
    // Error here?
    
    test('#readUnit', () => {
        assert.strictEqual(convertHandler.getUnit('1km'), 'km')
        assert.strictEqual(convertHandler.getUnit('0.5mi'), 'mi')
        assert.strictEqual(convertHandler.getUnit('1/0.5l'), 'l')
        assert.strictEqual(convertHandler.getUnit('1/2gal'), 'gal')
        assert.strictEqual(convertHandler.getUnit('1kg'), 'kg')
        assert.strictEqual(convertHandler.getUnit('1lbs'), 'lbs')
    })
    // Error here?
    test('#getReturnUnit', () => {
        assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi')
        assert.strictEqual(convertHandler.getReturnUnit('mi'), 'km')
        assert.strictEqual(convertHandler.getReturnUnit('l'), 'gal')
        assert.strictEqual(convertHandler.getReturnUnit('gal'), 'l')
        assert.strictEqual(convertHandler.getReturnUnit('kg'), 'lbs')
        assert.strictEqual(convertHandler.getReturnUnit('lbs'), 'kg')
    })
    // Error here?
    test('#spelledOut', () => {
        assert.strictEqual(convertHandler.spellOutUnit('km'), 'kilometers')
        assert.strictEqual(convertHandler.spellOutUnit('mi'), 'miles')
        assert.strictEqual(convertHandler.spellOutUnit('l'), 'liters')
        assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons')
        assert.strictEqual(convertHandler.spellOutUnit('kg'), 'kilograms')
        assert.strictEqual(convertHandler.spellOutUnit('lbs'), 'pounds')
    })
    
    test('#galToLiter', () => {
        assert.strictEqual(convertHandler.convert(3, 'gal'), 11.35623)
    })  
    
    test('#literToGal', () => {
        assert.strictEqual(convertHandler.convert(3, 'l'), 0.79252)
    })  
    
    test('#miToKm', () => {
        assert.strictEqual(convertHandler.convert(3, 'mi'), 4.82802)
    })  
    
    test('#kmToMi', () => {
        assert.strictEqual(convertHandler.convert(3, 'km'), 1.86412)
    })  
    
    test('#lbsToKg', () => {
        assert.strictEqual(convertHandler.convert(3, 'lbs'), 1.36078)
    })  
    
    test('#kgToLbs', () => {
        assert.strictEqual(convertHandler.convert(3, 'kg'), 6.61387)
    })  
});
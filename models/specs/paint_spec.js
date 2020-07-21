const assert = require('assert')
const Paint = require('../paint')

describe('Paint', function() {

    let paint;

    beforeEach(function() {
        paint = new Paint(10);
    });

    it('should have a specific amount of paint', function() {
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    });

    it('should check if there is paint left', function() {
        const actual = Boolean(paint.litres);
        assert.equal(actual, true)
    });

    it('should be able to empty paint', function() {
        paint.removeAllPaint();
        const actual = Boolean(paint.litres);
        assert.equal(actual, false)
    });

    
});
const assert = require('assert')
const Decorator = require('../decorator')
const Room = require('../room')
const Paint = require('../paint')

describe('Decorator', function() {

    let decorator;
    let paint;
    let paint2;
    let room;

    beforeEach(function() {
        decorator = new Decorator();
        paint = new Paint(10);
        paint2 = new Paint(15);
        room = new Room(10);
    });

    it('should return empty stock', function() {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can of paint to paint stock', function() {
        decorator.addPaint(paint);
        const actual = decorator.stock.length;
        assert.deepStrictEqual(actual, 1)
    });

    it('should be able to calculate total litres paint in stock', function() {
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        const actual = decorator.totalLitres()
        assert.equal(actual, 25)
    });

});
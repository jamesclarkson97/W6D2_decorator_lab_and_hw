const Decorator = function() {
    this.stock = [];
};

Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint);
};

Decorator.prototype.totalLitres = function() {
    let total = 0
    for (var paint of this.stock) {
        total += paint.litres;
    };
    return total; 
};

Decorator.prototype.checkRoom = function(room) {
    if (room.area <= this.totalLitres()) {
        return true;
    } else {
        return false;
    };
};

Decorator.prototype.paintRoom = function(room) {
    if (this.checkRoom(room) === true) {
        room.painted = true;
        this.reduceLitres(room)
        return room.painted;
    };
};

Decorator.prototype.reduceLitres = function(room) {    
    for (var paint of this.stock) {
        if (paint.litres >= room.area) {
            paint.litres -= room.area;
            if (paint.litres = 0) {
                paint.removeStock(paint);
            };
            return this.totalLitres()
        };
    };
};

Decorator.prototype.removeStock = function(paint) {
    this.stock.splice(paint, 1);
};

module.exports = Decorator;
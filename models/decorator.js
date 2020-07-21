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
        this.removeStock(room)
        return room.painted;
    };
};

Decorator.prototype.removeStock = function(room) {
    // this.stock.litres.sort((a, b) => a - b)
    for (var paint of this.stock) {
        if (paint.litres >= room.area) {
            this.stock.pop(paint);
        };
    };
};

module.exports = Decorator;
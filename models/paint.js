const Paint = function(litres) {
    this.litres = litres;
};

Paint.prototype.removeAllPaint = function() {
    this.litres = 0;
};

module.exports = Paint;
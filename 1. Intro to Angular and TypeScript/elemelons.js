var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weigth, melonSort) {
        this.weigth = weigth;
        this.melonSort = melonSort;
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weigth * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weigth, melonSort) {
        var _this = this;
        _this = _super.call(this, weigth, melonSort) || this,
            _this.element = 'Water';
        return _this;
    }
    Watermelon.prototype.toString = function () {
        return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weigth, melonSort) {
        var _this = this;
        _this = _super.call(this, weigth, melonSort) || this,
            _this.element = 'Fire';
        return _this;
    }
    Firemelon.prototype.toString = function () {
        return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weigth, melonSort) {
        var _this = this;
        _this = _super.call(this, weigth, melonSort) || this,
            _this.element = 'Earth';
        return _this;
    }
    Earthmelon.prototype.toString = function () {
        return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weigth, melonSort) {
        var _this = this;
        _this = _super.call(this, weigth, melonSort) || this,
            _this.element = 'Air';
        return _this;
    }
    Airmelon.prototype.toString = function () {
        return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weigth, melonSort) {
        var _this = _super.call(this, weigth, melonSort) || this;
        _this.elementArr = ['Water', 'Fire', 'Earth', 'Air'];
        _this.morph();
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var el = this.elementArr.shift();
        this.elementArr.push(el);
        this.element = el;
    };
    return Melolemonmelon;
}(Watermelon));
var test = new Melon(100, "Test");
//Throws error
var watermelon = new Melolemonmelon(12.5, "Kingsize");
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());

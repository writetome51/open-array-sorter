"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var public_array_container_1 = require("@writetome51/public-array-container");
var array_get_shuffled_1 = require("@writetome51/array-get-shuffled");
var get_in_numeric_order_1 = require("@writetome51/get-in-numeric-order");
var alphabetize_1 = require("@writetome51/alphabetize");
var set_array_1 = require("@writetome51/set-array");
var PublicArraySorter = /** @class */ (function (_super) {
    __extends(PublicArraySorter, _super);
    function PublicArraySorter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // All these functions change the order of the array items and return the class instance.
    PublicArraySorter.prototype.alphabetize = function () {
        return this._returnThis_after(alphabetize_1.alphabetize(this.data));
    };
    PublicArraySorter.prototype.numbersAscending = function () {
        var orderedNumbers = get_in_numeric_order_1.getInNumericOrder(this.data);
        return this._returnThis_after(set_array_1.setArray(this.data, orderedNumbers));
    };
    PublicArraySorter.prototype.numbersDescending = function () {
        return this.numbersAscending().reverse();
    };
    PublicArraySorter.prototype.reverse = function () {
        return this._returnThis_after(this.data.reverse());
    };
    PublicArraySorter.prototype.shuffle = function () {
        var shuffledData = array_get_shuffled_1.getShuffled(this.data);
        return this._returnThis_after(set_array_1.setArray(this.data, shuffledData));
    };
    return PublicArraySorter;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArraySorter = PublicArraySorter;

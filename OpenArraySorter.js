"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OpenArrayContainer_1 = require("@writetome51/open-array-container/OpenArrayContainer");
var getShuffled_1 = require("@writetome51/array-get-shuffled/getShuffled");
var getInAscendingOrder_1 = require("@writetome51/get-in-ascending-order/getInAscendingOrder");
var alphabetize_1 = require("@writetome51/alphabetize/alphabetize");
var append_prepend_1 = require("@writetome51/array-append-prepend/append-prepend");
// All the methods in this class modify the array without breaking its reference,
// so it remains in-sync with other references to the same array.
var OpenArraySorter = /** @class */ (function (_super) {
    __extends(OpenArraySorter, _super);
    function OpenArraySorter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // All these functions return the class instance.
    OpenArraySorter.prototype.numbersAscending = function () {
        var orderedNumbers = getInAscendingOrder_1.getInAscendingOrder(this.data);
        this.data.length = 0;
        return this.returnThis_after(append_prepend_1.append(orderedNumbers, this.data));
    };
    OpenArraySorter.prototype.numbersDescending = function () {
        return this.returnThis_after(this.numbersAscending().reverse());
    };
    OpenArraySorter.prototype.alphabetize = function () {
        return this.returnThis_after(alphabetize_1.alphabetize(this.data));
    };
    OpenArraySorter.prototype.reverse = function () {
        return this.returnThis_after(this.data.reverse());
    };
    OpenArraySorter.prototype.shuffle = function () {
        var shuffledData = getShuffled_1.getShuffled(this.data);
        this.data.length = 0;
        return this.returnThis_after(append_prepend_1.append(shuffledData, this.data));
    };
    return OpenArraySorter;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArraySorter = OpenArraySorter;

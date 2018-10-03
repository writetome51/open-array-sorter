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
var alphabetizeAscending_alphabetizeDescending_1 = require("intuitive-string-handlers/alphabetizeAscending_alphabetizeDescending");
var getCopy_1 = require("@writetome51/array-non-modifying-getters-basic/getCopy");
var OpenArraySorter = /** @class */ (function (_super) {
    __extends(OpenArraySorter, _super);
    function OpenArraySorter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions modify the array and return the class instance.
    OpenArraySorter.prototype.numbersAscending = function () {
        return this.returnThis_after(this.data = getInAscendingOrder_1.getInAscendingOrder(this.data));
    };
    OpenArraySorter.prototype.numbersDescending = function () {
        return this.returnThis_after(this.numbersAscending().reverse());
    };
    OpenArraySorter.prototype.alphabetizeAscending = function () {
        return this.returnThis_after(alphabetizeAscending_alphabetizeDescending_1.alphabetizeAscending(this.data));
    };
    OpenArraySorter.prototype.alphabetizeDescending = function () {
        return this.returnThis_after(alphabetizeAscending_alphabetizeDescending_1.alphabetizeDescending(this.data));
    };
    OpenArraySorter.prototype.reverse = function () {
        return this.returnThis_after(this.data.reverse());
    };
    OpenArraySorter.prototype.shuffle = function () {
        var copy = getCopy_1.getCopy(this.data);
        return this.returnThis_after(this.data = getShuffled_1.getShuffled(copy));
    };
    return OpenArraySorter;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArraySorter = OpenArraySorter;

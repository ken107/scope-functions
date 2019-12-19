"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = true;
Object.prototype.let = function (func) {
    return func(this);
};
Object.prototype.also = function (func) {
    func(this);
    return this;
};

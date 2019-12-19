"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index");
test("main", () => {
    expect({ a: 1 }.also(x => x.a++)).toEqual({ a: 2 });
    expect({ a: 1 }.let(x => x.a)).toBe(1);
});

const test = require("node:test");
const assert = require("node:assert");

test("lodash chunks arrays", () => {
    assert.deepStrictEqual(require("lodash").chunk([1, 2, 3], 2), [[1, 2], [3]]);
});

test("uuid v4 deep import produces a uuid", () => {
    const v4 = require("uuid/v4");
    assert.match(v4(), /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
});

test("core-js library build provides Array.includes", () => {
    assert.strictEqual(require("core-js/library/fn/array/includes")([1, 2], 2), true);
});

test("rimraf exports a function", () => {
    assert.strictEqual(typeof require("rimraf"), "function");
});

const test = require("node:test");
const assert = require("node:assert");

test("baseline is already broken", () => {
    assert.strictEqual(require("lodash").add(1, 1), 3);
});

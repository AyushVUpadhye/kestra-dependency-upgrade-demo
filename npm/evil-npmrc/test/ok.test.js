const test = require("node:test");
const assert = require("node:assert");

test("lodash adds", () => {
    assert.strictEqual(require("lodash").add(1, 1), 2);
});

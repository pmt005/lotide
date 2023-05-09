const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]).join(''), '23');
  });

  it("returns [] for empty array", () => {
    assert.strictEqual(tail([]).length, 0);
  });

  it("returns [] for array with 1 element", () => {
    assert.strictEqual(tail([1]).length, 0);
  });
});
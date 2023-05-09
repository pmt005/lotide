const assert = require('chai').assert;
const head = require('../head');


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'Hello' for ['Hello','Lighthouse', 'Labs'] tests not equal against Goobye", () => {
    assert.notEqual(head(['Hello', "Lighthouse", "Labs"]), 'Goodbye');
  });
  it("returns 'Hello' for ['Hello','Lighthouse', 'Labs'] tests equal against Hello", () => {
    assert.strictEqual(head(['Hello', "Lighthouse", "Labs"]), 'Hello');
  });
  it("returns  for undefined for []]", () => {
    assert.strictEqual(head([]), undefined);
  });
  
});
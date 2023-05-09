const assert = require('chai').assert;
const middle = require('../middle');

let test1 = [0];
let test2 = [0,1];
let test3 = [0,1,2];
let test4 = [0,1,2,3];
let test5 = ["one","two","three","four","five"];
let test6 = "stuff";

let expect1 = [];
let expect3 = [1];
let expect4 = [1,2];
let expect5 = ["three"];
let expect6 = undefined;

/*
console.log("EXPECTING 6 PASSES");
assertArraysEqual(middle(test1),expect1);
assertArraysEqual(middle(test2),expect2);
assertArraysEqual(middle(test3),expect3);
assertArraysEqual(middle(test4),expect4);
assertArraysEqual(middle(test5),expect5);
assertEqual(middle(test6),expect6);
*/

describe("#middle", () => {
  it("0 element array returns []", () => {
    assert.deepEqual(middle([]), expect1);
  });
  it("1 element array returns []", () => {
    assert.deepEqual(middle(test1), expect1);
  });
  it("2 element array returns []", () => {
    assert.deepEqual(middle(test2), expect1);
  });
  it("3 element array[0,1,2] returns [1]", () => {
    assert.deepEqual(middle(test3), expect3);
  });
  it("4 element array[0,1,2,3] returns [1,2]", () => {
    assert.deepEqual(middle(test4), expect4);
  });
  it("5 element array['one','two','three','four','five'] returns ['three']", () => {
    assert.deepEqual(middle(test5), expect5);
  });
  it("Non array input returns undefined", () => {
    assert.deepEqual(middle(test6), expect6);
  });
});
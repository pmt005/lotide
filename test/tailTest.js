const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// Test Case 2: empty array
const result1 = tail([1]);
assertEqual(result1[0], undefined); // ensure we get back undefined
const result2 = tail([]);
assertEqual(result2[0], undefined); // ensure we get back undefined
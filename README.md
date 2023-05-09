# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @patrick-tumu/lotide`

**Require it:**

`const _ = require('@patrick-tumu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: return the first element of a non empty array if input array is empty return undefined
* `tail(array)`: return the elements of an array - the first element of an array with length greater than 1 otherwise return empty array
* `middle(array)`: if an array is odd return the middle value, if an array if even in length return the average of the middle two values, if the array has a length <= 2 return an empty array
* `countLetters(string)`: takes in a string and returns an object where the letters of the input string become keys and the values are the number of times they occur in the string
* `countOnly(array)`: takes in an array and a value. Returns an object where the value is a key and the paired value of that key is the number of times the input value occurs in the input array
* `eqArrays(array1, array2)`: takes in two arrays returns true if equal and false otherwise
* `eqObjects(obj1, obj2)`: takes in two objects returns true if equal and false otherwise
* `findKey(obj1, callback)`: takes in an object and iterates through the object passing each value into the callback function. Can be used to find key depending on the callback used
* `findKeyByValue(obj1, value)`:takes in an object and a value returns the key of the object associated with input value or undefined
* `map(array, callback)`:takes in an array and a callback function. iterates through the array and returns a new array where every value of input array has been passed into the callback function and pushed in to the result array
* `letterPostions(string)`:takes in a string and returns an object where the letters of the string are the keys and the posistions in which they appear in the original string are the values associated (array).
* `takeUntil(array, callback)`: takes in an array and a callback function returns an array of the original values until one of the original values when passed to the callback returns false
* `min(array)`:takes in an array of numbers and returns a number representing the index where the smallest number is
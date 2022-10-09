/*
Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true
*/

/* Steps and Plan: 
    1. accept a string 
    2. loop through each character in the string 
          using a for loop 
          if indexOf each character matches the index, then all are unique
          if indexOf ANY character does not match the index, then not unique
          return boolean
*/

function uniqueString(string) {
  for(let i = 0; i<string.length; i++) {
    if (string.indexOf(string[i]) !== i) {
      return false;
    } 
  }
  return true;
};
/*
Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"
*/

/* Plan and steps:
      1. Create an empty array to store and tally characters
      2. Loop through the string's characters
            if character doesn't yet exist in empty array, push it into the array but also push a 1 as a counter (two dimensional array?)
            if character DOES exist, increment the counter.
      3. Should end up with array holding the count and character [[3][a], [1][b]].
      4. make array a string again by looping through 2-dim array and using if/else statements to only return element[0] if it is greater than 1. 
            if element[0]>1, 'return' this plus element[1]
            maybe concat these to an empty string made at the beginning of this loop, then return said string at end.
*/

function stringCompression(string) {
  let twoDimensionalArray = [];
  for(let i=0; i<string.length, i++) {
    if (twoDimensionalArray.includes(string[i])) {
      console.log("already here");
    }
  }
};


function stringCompression(string) { //"hii"
  let twoDimensionalArray = [];
  for (let i=0; i<string.length; i++) { //first is "h" (i=0)
    
    twoDimensionalArray.forEach(function(element) {
      if (element[1].includes(string[i])) {
        console.log("already in the array");
      } else {
        twoDimensionalArray.push([1,string[i]]);
      }
    })
    return twoDimensionalArray;
  }
};

      

      
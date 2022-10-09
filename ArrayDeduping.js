/*
Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi", 7, 53]

Output: [7, 9, "hi", 12, 53]
*/

// Plan and Steps:
// 1. Before looping; declare an empty array with let. Call it editedArray.
// 2. Loop through each element in the given array.
//      check if element exists in the new editedArray using array.includes(): 
//      if element already exists in the editedArray, don't push it into the array
//      if element doesn't exist in editedArray, push it into it
// 3. Return the editedArray
    
function unduplicating(array) {
  let editedArray = [];
  array.forEach(function(element) {
    if (!editedArray.includes(element)) {
      editedArray.push(element);
    }
  })
  return editedArray;
};

//non-recursive using filter():
function unduplicatingWithFilter(array) {
  let filtered = array.filter((element, index)=> {
    if (array.indexOf(element) === index) {
      return element;
    }
  })
  return filtered;
};



// recursive solution: not sure how to do this without a global variable!
let editedArray = [];
function unduplicatingRecursive(array) {
  
  if((!Array.isArray(array)) || (array.length === 0)) {
    return "Please enter a valid array.";
  }
  if (array.length === 1) {
    if(editedArray.includes(array[0])) {
      return editedArray;
    } else {
      editedArray.push(array[0]);
      return editedArray;
    }
  } else {
  //recursion below:
    if (!editedArray.includes(array[0])) {
      editedArray.push(array[0]);
      return unduplicatingRecursive(array.slice(1));
    } else {
      return unduplicatingRecursive(array.slice(1));
    }
  }
};



  


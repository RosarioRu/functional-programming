/*
Question #5: Array Sorting
Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

Quick sort
Merge sort
Heap sort
Insertion sort
Bubble sort
Selection sort
You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

Example
Input: [9, 2, 7, 12]

Output: [2, 7, 9, 12]
*/
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {

    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }     
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

/* Steps and Plan:
      [4,2,3,1] The idea is to loop through the array and find the smallest #, then to replace the first element with that smallest #. Then we loop through the array again (but we ignore first element) and again, find the smalles#. We swap it with the second element in array so that now the 1st two elements are the smallest. 
      1. loop through the entire array and identify the smallest number by comparing one of the elements to all the others (will need two loops).
      2. first loop will be a for loop that itirates through all elements of array (i) 
      3. second (nested) loop will iterate through the array starting with the element to the right of i --
          this loop will compare (i) to (i+1), then (i) to (i+2), then (i) to (i+3)... and find smallest #. 
*/

function selectSort(array) {     //[2,1,3,5,4]
  for (let i =0; i<array.length-1; i++) { //first itiration: i = 2
    let smallestNumberIndex = i; //we will assume that element at i is smallest until proven otherwise
    for (let afterI = i+1; afterI<array.length; afterI++) { 
      //first itiration: afterI =1;
      if (array[i] > array[afterI]) { //first(2>1), sec(2>3), th(2>5), f(2>4)
        smallestNumberIndex = afterI; //reassign index of smallest number 
      }   //once this loop is done, we can set assume the element at index smallesNumberIndex is the smallest number and then swap them:
    }
    const holdValueOfI = array[i];
    array[i] = array[smallestNumberIndex];
    array[smallestNumberIndex] = holdValueOfI;
  }
  return array;
}
    

    //now we need to swap the element at i for smallesNumber, and swap smallestNumber's index for element at i... so will need index after all
    

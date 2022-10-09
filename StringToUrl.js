/*Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"
*/

//non-recursive solution:

function stringToUrl(string) {
  if ((typeof string) !== "string") {
    return "Please enter a valid URL";
  } else {
    let urlString = "";
    for(i = 0; i<string.length; i++) {
      if (string[i] === " ") {
        urlString += "%20";
      } else {
        urlString += string[i];
      }
    }
    return urlString;
  }
};

//recursive solution:

function stringToUrlRecursive(string) {
  if (string === "") {
    return;
  }
  if ((typeof string) !== "string") {
    return "Please enter a valid URL";
  } else {
    if(string.substring(0,1) === " " ) {
      return "%20" + stringToUrlRecursive(string.substring(1));
    } else {
      return string.substring(0,1) + stringToUrlRecursive(string.substring(1));
    }
  }
};


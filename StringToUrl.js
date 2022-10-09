/*Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"
*/

function stringToUrl(string) {

  let urlString = "";

  for(i = 0; i<string.length; i++) {
    if (string[i] === " ") {
      urlString"%20");
    } else {
      urlString.concat(string[i]);
    }
  }

  return urlString;

};


function stringToUrl(string) {

  let urlString = "";

  for(i = 0; i<string.length; i++) {
    if (string[i] === " ") {
      console.log(urlString);
      console.log(urlString + "%20");
      console.log(urlString);
    } else {
      console.log(urlString);
      console.log(urlString + (string[i]));
      console.log(urlString);
    }
  }

  return urlString;

};

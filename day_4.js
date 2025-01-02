// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.



// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"



function spinWords(str){
    // return str.split(' ').map((n,index) => n.split('').reverse().join('')).join(' ')
     return str.split(' ').map((n,index) => {
        return  n.length > 5 ? n.split('').reverse().join('') : n 
     }).join(' ')
 }
 
 
 
 console.log(spinWords('Hey fellow warriors'));



 // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!


function squareDigits(num){

    return Number(`${num}`.split('').reduce((acc,n, i) => {
        return acc + (Number(n)) *(Number(n))
    },''));
  }

  console.log(squareDigits(9119));


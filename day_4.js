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



  // You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// Note: For 4 or more names, the number in "and 2 others" simply increases.



// function likes(names) {
//     const getPrefix = (plural) =>  `like${plural ?'s':''} this`;
//     if(names.length < 2 )  return names[0] ? `${names[0]} ${getPrefix(true)}`:`no one ${getPrefix(true)}`
    

//     if(names.length === 2 ){ 
//         names.splice(1,0,'and'); 
//         return `${names.join(' ')} ${getPrefix()}`  
//     }

//      let prefix =  names.slice(0,2).join(', ');
//      let middleText =  names.slice(2).length === 1  ? names.slice(2)[0] : `${names.slice(2).length} others`;
//      return`${prefix} and ${middleText} ${getPrefix()}`

//   }


// Solution 2 

function likes(names) {
    names.length === 0 && (names = ['no one']);
    let [a,b,c, ...others] =  names; 
    switch(names.length){  
        case 1: return `${a} likes this`;
    case 2: return `${a} and ${b} like this`;
    case 3: return `${a}, ${b} and ${c} like this`;
    default: return `${a}, ${b} and ${others.length + 1} others like this`;
    }
  }




// console.log(likes([]))
// console.log(likes(['Peter']))
// console.log(likes(["Max", "John"]))

// console.log(likes(["Max", "John", "Mark"]))
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))


/*
Q). 1. Program to find longest word in a given sentence ?
*/

function findLongestWord(str) {
    let longestWord = 0;
    str.split(' ').forEach(element => {
        if(element.split('').length > longestWord) { 
            longestWord = element.split('').length
        }
    });
    return longestWord
}




/*
How to check whether a string is palindrome or not ?
*/



function isPalindrome2(params) {
    const actualStr = params.split(''); 
    const reverseStr =   params.split('').reverse(); 
        for(let i=0; i < reverseStr.length ;  i ++) { 
            if(reverseStr[i] !==  actualStr[i]) {
                return false
            }
        }
    return true; 
    }
    
    
    function isPalindrome(params) {
     const palanDromeString = params.split('').reverse(); 
        return [...params].every((item, index) => {
            return item  === palanDromeString[index]
        })
        
    }
    
    
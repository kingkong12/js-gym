

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
/*
Q) To remove duplicate values.

*/

function removeDuplicates(params) {
    return Array.from(new Set(params)); 
    
}


/*
Q) Program to find Reverse of a string without using built-in method ?

*/

function reverseOfString(str) {
    let result = []
    for(let i = str.length-1;  i>= 0;  i--) { 
        result.push(str[i]);
    }
    
    return result.join('')
    
    }
    
    console.log('reverseOfString', reverseOfString('qwerty'))

    
    
    /*
Q) Find the max count of consecutive 1’s in an array ?

*/

function maxCountArrayList(ary) { 

    let root_counter = []; 
    let counter = 0; 
    ary.forEach((item, index) =>  {

    if(item  === 1) {
        counter = counter + 1; 
        if(index ===ary.length - 1 ){ 
            root_counter.push(counter)
        }
    } else{ 
        if(counter > 0) root_counter.push(counter);
        counter = 0; 
    }
    });  

    console.log(root_counter)
    return root_counter.sort((a,b) =>  b-a)[0]
}


console.log('==> ', maxCountArrayList([1,1,1,1,0,0,0,1,1,1,1,1,1]))
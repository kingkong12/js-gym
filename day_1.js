

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



/*
Q) Find the factorial of given number ?


we wil use recurssion 
*/

function findFactorial(no) {
    if(no === 1 ){ 
    return no
    }
    return no  * findFactorial(no-1)
}


console.log('==> ',findFactorial(5))


/*
Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]
1. using  build in methods.  
2. without built in methods. 
*/

function mergeSortedArrays(ary1, ary2) {
    return [...ary1, ...ary2].sort((a,b) => a-b)
}


console.log('==> ',mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));


/*
Create a function which will accepts two arrays arr1 and arr2.
 The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

*/

function squareValueOFarray(ary1, ary2) {
    return ary1.every((item,index) => { 
        return ary2[index] === item *item
    })
}


console.log('==> ',squareValueOFarray([2, 3, 3], [4, 9, 9]));


/*
Q) Given two strings. Find if one string can be formed by rearranging the letters of other string.
*/

function squareValueOFarray(str1, shuffledstr) {
    let str2 = Array.from(shuffledstr);
    return Array.from(str1).every((char, index) =>  {
    if(str2.includes(char)) { 
        const findIndex = str2.indexOf(char); 
        str2 = [...str2.slice(0,findIndex), ...str2.slice(findIndex+1)]; 
        return true
    }
    return false
    })
}


console.log('==> ',squareValueOFarray('listen','silent'));




/*
10. Write logic to get unique objects from below array ?
 I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
 O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

*/

function uniqueObject(obj) {

    // solution -1  
    return Array.from(new Set(obj.map(item =>  item.name))).map(item => {
        return {name:item}
    })

    
}


console.log('==> ',uniqueObject([{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}]))


/*
- Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
*/

function oddNo(ary) {

    return ary.filter(item =>  item % 2 != 1); 
  
}


console.log('==> ',oddNo( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))




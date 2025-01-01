// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)


// Solution : 1 . 
// function solution(number){
//     const result = new Set(); 
//     const getMultiple = ( multiple = 3) => {
//     for(let i =0;  i< number ; i++){ 
//     let multipliedValueOf3 = (multiple*(i+1)); 
//         if(multipliedValueOf3 < number){ 
//             result.add(multipliedValueOf3); 
//         }
//     }
//     }
//     getMultiple(3);  // loop 1  
//     getMultiple(5);  //loop 1
//     return Array.from(result).reduce((acc,item,index) => {
//         return acc+item
//     }, 0)
//   }
// Solution 1 complexity is n^2   

// Solution 2   
// function solution(number){
//     const result = new Set();  
//     const getCompared = (multiple, i) => ((multiple*(i+1)) < number ) ? (multiple*(i+1)) :  undefined;

//     for(let i =0;  i< number ; i++){ 
//     let computedResultOf3 = getCompared(3, i);
//     let computedResultOf5 = getCompared(5, i);
//     computedResultOf3 && result.add(computedResultOf3); 
//     computedResultOf5 && result.add(computedResultOf5); 
//     if(!computedResultOf3  && !computedResultOf5 ) { 
//         console.log('sd');
//         break;
//     }
//     }

//     return Array.from(result).reduce((acc,item) => {
//         return acc+item
//     }, 0)
//   }



// Solution 2  has complexity of n^2; 

function solution(number){
    const result =  new Set(); 
    for( let i = 0 ;  i < number;  i++) { 
        if(i % 3 === 0  ||  i % 5 === 0 ){ 
            result.add(i)
        }
    
        // 3*4 = 12   && 5*4 = 20 
    }
    return Array.from(result).reduce((acc,item,index) =>  {
        return acc + item
    },0)
    }
    
    
    console.log(solution(10))
    
    
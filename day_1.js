

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

function evenOrOdd(number) {
    return number%2 === 0 ?'Odd':'Even'
    }
    
    console.log(evenOrOdd(2))

    

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = ['a','e','i','o','u']; 
    return str.split('').reduce((acc, n) => {
        return vowels.includes(n) ? acc+1 : acc; 
    } , 0);
  }


  //console.log(getCount('abracadabra'));
  console.log(getCount('vhuy'));
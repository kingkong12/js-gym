
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



  // Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.



function disemvowel(str) {
    const vowel = ['a','e','i','o','u','A','E','I','O','U']; 
    return str.split('').reduce((acc,str) => {
        return vowel.includes(str) ? acc : acc+str
    },'');
  }


  console.log(disemvowel('This website is for losers LOL!'));
  
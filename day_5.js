// “Develop a JavaScript-based chainable calculator that supports sequential operations and maintains state across chained method calls, allowing for intuitive and flexible mathematical computations.

// function chainCalculator() {
//     let n = 0;
//     return { 
//     add : function (no){ 
//     n = n+ no; 
//     return this   
//     },
//     sub : function (no){ 
//         n = n - no; 
//         return this   
//     }, 
//     mul : function (no){ 
//         n = n *  no; 
//         return this   
//     },
//     div : function (no){ 
//         n = n / no; 
//         return this   
//     },
//     getResult: function (){
//     return  n
//     }
// } 
// }


// class chainCalculator {
//     constructor(initialValue){ 
//     this.no = initialValue || 0; 
//     }

//     add(n) {
//     this.no = this.no + n;
//     return this
//     }

//     subtract(n){ 
//         this.no = this.no - n;
//         return this
//     }
    
//     getResult(){ 
//         return this.no
//     }

// }


const calculator = new chainCalculator();
console.log(calculator.add(10).subtract(5).add(10).getResult())
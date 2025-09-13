// How To Analyze Data Structures and Algorithms Problems

// 1 Time Complexity
// 2 Space Complexity
// 3 Auxiliary Space Complexity
// N/W
//CPU 


// Frequency Counter Method


//Agorithem to sum(A, B)


const sumAge = (a, n) => {                       //space
    let s = 0;                // 1                    a - 1
    for(let i = 0; i < n; i++){  // n + 1             n - 1
     s =   s + a[i]          // n                      i  -1
    }                                                  
    return s               // 1
} 

//Time  f(n) = 2n + 3 => O(n)   
//Space  S(n) = 3 => O(1)

const MyAge = [3, 10, 18, 20, 25, 30, 35, 40, 45, 50];
console.log(sumAge(MyAge, MyAge.length));  // 276


let a = 0; // 1
 while(a <= 10){  // n + 1               space
    console.log(a); // n                  a - 1
    a++ // n                              n - 1
 }

 // Time  f(n) = 3n + 2 => O(n)
 // Space  S(n) = 1 => O(1)


//Types of time functions
//1 Constant Time O(1)
//2 Logarithmic Time O(log n)
//3 Linear Time O(n)
//4 Linearithmic Time O(n log n)
//5 Quadratic Time O(n^2)
//6 Exponential Time O(2^n)
//7 Factorial Time O(n!)



// big ooh notation
// Big Ooh Notation is used to describe the performance or complexity of an algorithm.







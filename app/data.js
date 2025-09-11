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







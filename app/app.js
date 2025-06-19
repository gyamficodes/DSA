// //Data Structure
// const StudentDatabase = ['Yaw', 'Kwame', 'Ama', 'John', 'Kofi']

// //Agorithem for finding a specific user.
// const foundStuden = (allStudent, studentName) => {
//        for(let i = 0; i < allStudent.length; i++){
//         if(allStudent[i] === studentName){
//         console.log('found', `${studentName}`)
//         }
//        }
// }
// foundStuden(StudentDatabase, 'Kwame')

// //Data Structure
// const StudentAgesDatabase = [20, 50, 60 , 70];

// //Agorithem for finding a specific age.
// const handdleStudentAge = (allAges, singleAge) => {
//     for(let i = 0; i < allAges.length; i++){
//         if(allAges[i] === singleAge){
//             console.log('found', `${singleAge}`)
//         }
//     }
// }

// handdleStudentAge(StudentAgesDatabase, 60);

// //Big O
// //Big O notation helps to understand how long  your agorithmn will take to run or how much memory it will needs to handels it grow

// const groceries = ['milk', 'bread', 'egg', 'flour', 'choose', 'sugar'];

// const searchForItem = (item) => {
//     for(let i = 0 ; i < groceries.length; i++){
//         if(groceries[i] === item){
//             console.log('found', `${item}`)
//         }
//     }
// }

// searchForItem('flour')

// const username = ['Adwoa', 'Afia', 'Mensah']

// const findUserName = (allName, User) => {
//     for(u = 0; allName.length; u++){
//         if(allName[u] === User){
//             console.log(`Person is ${User}`)
//         }
//     }
// }

// findUserName(username, 'Afia');

// //o(1)
// // aka constant time , signifies that  the execution time of algorithnm remains constant regardless of the input size.
// const  numbers =  [1,2,3,4,5,6,7,8,9]

// const findNumner = (arr, index) => arr[index]
//  console.log( findNumner(numbers, 2))

//  const Items = ['Cassava', 'laptop', 'Phone', 'Chair']
//  const  Finditems = (arr, ele) => arr[ele]
// console.log(Finditems(Items, 0))

// //o(n⋀2)
// //indicates that the algorithnm  execution increase quadratically with the size of the input data  (represent by n) ;
// const List = [1,2,3,4,]
// function  findPairs(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0 ; j < arr.length; j++){
//             console.log(`${arr[i]} ${arr[j]}`)
//         }
//     }

//     //o(n)
//     for(let q = 0 ; q < arr.length; q++){
//         console.log(`----- ${q}`)
//     }
// }

// findPairs(numbers);

// if we combine all the  "o"  perations  it becomes o(n⋀2 + n)

// O(log)
// In simpler for when the agorithem input data increase , the time it takes to run too increase slowly
// 0(log2 8) = ?
// 2*2*2 = 8;
// therefore 0(log2 8) = 3

//Arrays  DS
//Data structure of an array is an orderd collection of elements that can be access using the index

const numbering = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayB = [true, false];
let arrayC = ["Adwoa", "Afia", "Mensah"];

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  getPerson(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const item = this.data[0];
    for (let i = 0; i < this.data.lenght; i++) {
      this.data[i] = this.data[i + i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  delete(index) {
    this.data[this.length] = index;
    this.length--;
    return this.length;
  }
}

const myNewArray = new myArray();
myNewArray.push("Adwoa");
myNewArray.push("Afia");
myNewArray.push("Mensah");
myNewArray.pop();
console.log("delete", myNewArray.delete(0));
console.log(myNewArray.getPerson(0));
console.log(myNewArray.shift());
console.log(myNewArray);

///revers string
const content = "Hello World";

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString(content));

//Pallindrones means if the the reverse string is equal to the original one then that
// word is pallindrones
const setPallindronesString = "cddc";
console.log(reverseString(setPallindronesString));

//int reversal
const itemNumber = 221;
const convertNumberToString = (num) => {
  const reverse = num.toString().split("").reverse().join("");
  return parseInt(reverse) * Math.sign(num);
};
console.log(convertNumberToString(itemNumber));

//sentence capitalize
const sentence = "Hello World";
sentence.toLocaleUpperCase;
const sentenceCaps = (snt) => {
  return snt
    .toLowerCase()
    .split(" ")
    .map((words) => words[0].toUpperCase() + words.slice(1))
    .join(" ");
};
console.log("sentence capitalize ", sentenceCaps(sentence));

//linear search
const MyAge = [10, 20, 30, 40, 50];
const searcIndex = MyAge.indexOf(30);
console.log(searcIndex);

const searchMyAge = (arr, age) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === age) {
      console.log("Age", `${age}`);
    }
  }
  return -1;
};

searchMyAge(MyAge, 10);

//FizzBuzz
const handdleFizzBuzz = (n) => {
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

handdleFizzBuzz(15);

// chunck array

const chunkArray = (arr, size) => {
  const chunck = [];
  let index = 0;

  while (index < arr.length) {
    const chunckData = arr.slice(index, index + size);
    console.log(chunckData);
    chunck.push(chunckData);
    index += size;
  }
  return chunck;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

//Two sum

const twoSum = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

const results = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
console.log(results);






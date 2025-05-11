
//Data Structure
const StudentDatabase = ['Yaw', 'Kwame', 'Ama', 'John', 'Kofi']


//Agorithem for finding a specific user.
const foundStuden = (allStudent, studentName) => {
       for(let i = 0; i < allStudent.length; i++){
        if(allStudent[i] === studentName){
        console.log('found', `${studentName}`)
        }
       }
}
foundStuden(StudentDatabase, 'Kwame')

//Data Structure
const StudentAgesDatabase = [20, 50, 60 , 70];

//Agorithem for finding a specific age.
const handdleStudentAge = (allAges, singleAge) => {
    for(let i = 0; i < allAges.length; i++){
        if(allAges[i] === singleAge){
            console.log('found', `${singleAge}`)
        }
    }
}

handdleStudentAge(StudentAgesDatabase, 60);

//Big O
//Big O notation helps to understand how long  your agorithmn will take to run or how much memory it will needs to handels it grow

const groceries = ['milk', 'bread', 'egg', 'flour', 'choose', 'sugar'];

const searchForItem = (item) => {
    for(let i = 0 ; i < groceries.length; i++){
        if(groceries[i] === item){
            console.log('found', `${item}`)
        }
    }
}

searchForItem('flour')


const username = ['Adwoa', 'Afia', 'Mensah']

const findUserName = (allName, User) => {
    for(u = 0; allName.length; u++){
        if(allName[u] === User){
            console.log(`Person is ${User}`)
        }
    }
}

findUserName(username, 'Afia');


//o(1)
// aka constant time , signifies that  the execution time of algorithnm remains constant regardless of the input size.
const  numbers =  [1,2,3,4,5,6,7,8,9]

const findNumner = (arr, index) => arr[index]
 console.log( findNumner(numbers, 2)) 

 const Items = ['Cassava', 'laptop', 'Phone', 'Chair']
 const  Finditems = (arr, ele) => arr[ele]
console.log(Finditems(Items, 0))


//o(n⋀2)
//indicates that the algorithnm  execution increase quadratically with the size of the input data  (represent by n) ;
const List = [1,2,3,4,]
function  findPairs(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0 ; j < arr.length; j++){
            console.log(`${arr[i]} ${arr[j]}`)
        }
    }

    //o(n)
    for(let q = 0 ; q < arr.length; q++){
        console.log(`----- ${q}`)
    }
}

findPairs(numbers);

// if we combine all the  "o"  perations  it becomes o(n⋀2 + n)



//O(log)
//In simpler for when the agorithem input data increase , the time it takes to run too increase slowly
// 0(log2 8) = ?
// 2*2*2 = 8;
// therefore 0(log2 8) = 3



//Arrays  DS
//Data structure of an array is an orderd collection of elements that can be access using the index

class MyBox {
    constructor(){
        this.length = 0
    this.items = {}
    }
}


const ListBox = new MyBox();

console.log('My new data',ListBox)

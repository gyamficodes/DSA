
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

//o(1)
// aka constant time , signifies that  the execution time of algorithnm remains constant regardless of the input size.
const  numbers =  [1,2,3,4,5,6,7,8,9]

const findNumner = (arr, index) => arr[index]
 console.log( findNumner(numbers, 2))
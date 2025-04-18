
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






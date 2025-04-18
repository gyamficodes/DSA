

const StudentDatabase = ['Yaw', 'Kwame', 'Ama', 'John', 'Kofi']

const foundStuden = (allStudent, studentName) => {
       for(let i = 0; i < allStudent.length; i++){
        if(allStudent[i] === studentName){
        console.log('found', `${studentName}`)
        }
       }
}

foundStuden(StudentDatabase, 'Kwame')

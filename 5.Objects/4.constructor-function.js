function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName =lastName;
}

var student = new Student('Srujana', 'Duvvuri')
student.age = 30
student.city = 'Hyderabad'
console.log(student)
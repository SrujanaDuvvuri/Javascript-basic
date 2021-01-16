// var person1 = {} // Object literal syntax
// // var person2 = new Object()

// person1.name = 'srujana'
// person1.age = 30
// person1.city = 'hyderabad'
// person1.children = {}
// person1.children.name='Adrija'
// person1.children.age = 6
// person1.skills = ['java', 'html', 'css']
// person1.getFullName = function(){
//     return person1.name;
// }
// console.log(person1)
// console.log(person1.getFullName())
// console.log(person1['city'])
// console.log(person1.children)
// // console.log(person2)


var person = {
name : 'srujana',
age : 30,
city : 'hyderabad',
 children : {
    name:'Adrija',
    age : 6,
},
skills : ['java', 'html', 'css'],
getFullName : function(){
    return this.name;
}
// console.log(person2)
}

console.log(person)
console.log(person.getFullName())
console.log(person['city'])
console.log(person.children)
var person = new Object();
// person = 'suji'
person['firstName'] = "suji"
person['lastName'] = 'addu'
person['age'] = 1
person['isAdmin'] = true
person['address'] = 'A401, Hyderabad'
person['state'] = null
person.city='hyd'
person['getName'] = function(){
    return firstName + ' ' + lastName;
}
person['childern']= new Object()
// var child = {a: 10, b:20}
// person['childern']= Object.assign(child)
person['childern']['section'] = 'B'
person.childern.name = 'Srujana'
person.childern.age = 30

person['skillSet'] = ['C#', 'JavaScript', 'HTML']
console.log(person)
console.log(person['childern'])

var child = "childern"

console.log(person[child])
console.log(person.childern)
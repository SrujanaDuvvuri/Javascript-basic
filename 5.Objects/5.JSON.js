var data = {
    person1 : {firstname:'Srujana', lastname:'Duvvuri'},
    person2 : {firstname:'Adrija', lastname:'Nittala'},
    person3 : {firstname:'Satya', lastname:'Nittala'}
}

var person = {
    "firstName" : "Srujana",
    "lastName" : "Duvvuri",
    "age" : 30
}
console.log(person)
console.log(typeof person)

// console.log(JSON.stringify(person))
// console.log(typeof JSON.stringify(person))

var jsonStringified = JSON.stringify(person)
console.log(jsonStringified)
console.log(typeof jsonStringified)

var jsonParsed = JSON.parse(jsonStringified)
console.log(jsonParsed)
console.log(typeof jsonParsed)
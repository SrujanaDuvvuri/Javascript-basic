var people = new Array(3)
var people1 = [];
var people2=[{}];
var person = {};
console.log(typeof people)
console.log(people)
people[1]="Srujana"
people[0]="Satya"
people[2] = "Addu"
people[3] = "Dobu"
console.log(people)
people1[0]="Addu"
console.log(people1)
console.log(Array.isArray(people))
console.log(Array.isArray(person))
console.log(Array.isArray(people1))
console.log(Array.isArray(people2))
console.log(typeof people1)
console.log(typeof people2)

var names = new Array("test1", "test2")
console.log(names)

var fruits = new Array("Apple", "Orange", "banana", "kiwi")
var vegetables =  new Array("Potato", "tomato", "eggplant")

console.log(fruits)
console.log(vegetables)
var items = vegetables.concat(fruits) // concat two arrays3
console.log(items)

var movies = new Array("Avatar", "hunter", "Godzilla")
var movieString = movies.join(",") //convert array to string
console.log(typeof movieString)
console.log(movieString)



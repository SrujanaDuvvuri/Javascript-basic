//object.create

var person1 = new Object()
var person2 = {}
var person3 = Object.create(null);
var person = Object.create({});

console.log(person1)
console.log(person2)
console.log(person3)
console.log(person)


person = {
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
    }

    console.log(person)


    var person4 = Object.create(person)
    console.log(person4)

    




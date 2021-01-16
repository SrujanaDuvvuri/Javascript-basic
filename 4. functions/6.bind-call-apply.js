var person1 = {firstName: 'Suji', lastName: 'Duvvuri'}
var person2 = {firstName: 'Addu', lastName: 'pandu'}

function getMessage(message, city){
    return message  + ' to '+ city + ' ' +this.firstName + ' ' + this.lastName;
}

function getFullName(){
    return this.firstName + ' ' + this.lastName;
}
var bindMethod1 = getMessage.bind(person1)
console.log(bindMethod1("Welcome", "Hyderabad"))

var bindMethod2 = getMessage.bind(person2, "Welcome", "London")
console.log(bindMethod2)
console.log(bindMethod2())


var callMethod1 = getMessage.call(person1, "Welcome", "Sydney")
console.log(callMethod1)    


var callMethod1 = getMessage.apply(person2, ["Welcome", "Australia"])
console.log(callMethod1)    

var getBindFullName = getFullName.bind(person1)
    console.log(getBindFullName());

    var getCallFullName = getFullName.call(person1)
    console.log(getCallFullName);

    var getApplyFullName = getFullName.apply(person1)
    console.log(getApplyFullName);
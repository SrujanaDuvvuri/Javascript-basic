
// var items1 = ["chair", "table", "ipad", "laptop"]
// console.log(items1)

function getValue(value){

    return value;
}
var input = "Srujana"
var input2 = function(){
    // console.log("I'm a call back fun")
    return "callback fun"
}
// console.log(getValue(input2))
console.log(getValue(function(){
return "callbacks"
}))

// items1.forEach(function(value){
//     console.log(value)
// })

// var JSONObject = {
//     "firstName" : "Srujana",
//     "lastName" : "Duvvuri"
// }
// JSONObject.forEach(function(val){
//     console.log(val)
// })
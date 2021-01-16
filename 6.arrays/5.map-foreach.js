var items1 = ["chair", "table", "ipad", "laptop"]
console.log(items1)

// //using for loop
// console.log("using for loop")
// for(var i=0; i<items1.length; i++){
//     console.log(items1[i])
// }

// using foreach loop
console.log("using foreach loop")
items1.forEach(function(item){
    console.log(item)
})

items1.splice

//using map
console.log("using map loop")
items1.map(function(item){
    console.log(item)
})



// difference between foreach and map
console.log("using foreach loop")
var foreachItems = items1.forEach(function(item){
return item;
})
console.log(foreachItems)

//using map
console.log("using map loop")
var mapItems = items1.map(function(item){
 return item
})
console.log(mapItems)


// mosifying data using map
console.log("using foreach loop")
var foreachItems = items1.forEach(function(item){
return item + 1;
})
console.log(foreachItems)

//using map
console.log("using map loop")
var mapItems = items1.map(function(item){
 return item + " " + 1 
})
console.log(mapItems)
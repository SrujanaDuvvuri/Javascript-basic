function b(){
    var x;
    console.log('inside b');
    console.log(x)
}

function a(){
    var x = 2; // local varaible with var key word
    
    console.log('inside a');
    console.log(x)
    b();
    
    console.log('inside a1');
    console.log(x)
}
var x = 1;
a();

console.log(x);


var xxx = 10;

function hello(){
     xxx=20; //global vaiarble (without var keyword)
}
hello()
console.log(xxx)
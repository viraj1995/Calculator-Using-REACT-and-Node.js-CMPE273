var counter = function(arr){
    console.log('This array has ' + arr.length + ' elements.');
}

var adder = function(a,b){
    return `The addition of a and b is ${a+b}`;
}

var pi = 3.142;


module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

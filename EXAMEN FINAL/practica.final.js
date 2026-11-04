
const a = true;
if(!a) {
    console.log("Green");
} else {
    console.log("Blue");
}



var message = "Hello";
message += " World!";
message = "Goodbye!";
console.log(message);



var x = 10;

if(x > 10) {
    console.log("Apple");
} else if(x > 5) {
    console.log("Pear");
} else {
    console.log("Orange");
}

var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);


try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}


function addTwo(a,b) {
    return a + b
}
addTwo(5,"10")

var cat = {}
cat["sound"] = "meow"
var catSound = "purr"
console.log(cat.sound)


var veggies = []
veggies.push('parsley')
veggies.push('carrot')
console.log(veggies[2])

function addFive(val) {
  return val + 5;
};
module.exports = addFive;

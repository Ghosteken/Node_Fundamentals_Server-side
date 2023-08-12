const sum = (num1,num2) => num1 + num2;
const PI =3.142

class Bag {
    constructor(){
        console.log("construct")
    }
}

module.exports.sum =sum;
module.exports.Bag = Bag;
module.exports.PI = PI;


function div(x,y) {
    x/y 
    return div;
}

module.exports.div = div;
or

module.exports = {sum:sum, PI:PI, div:div , Bag: Bag};
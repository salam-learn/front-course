function sum(x,y){
    return x+y;
}
const multi = function(x,y){
    return x*y;
}
const f1 = function(){
    console.log('I am outer function')
    return function(){
        console.log('I am inner function')
    }
}

const f2 = function(val1,val2,fn){
    return fn(val1,val2);
}
document.get
//console.log(f2(3,7,multi));


// const af1 = (m,d) => {
//     m*=3;
//     return m*d;
// }

console.log(af(5,4));

const af = m => m*3;

//console.log(af1(5,4));
console.log(af(5));
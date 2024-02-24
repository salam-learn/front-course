const list = document.getElementsByTagName('li');
//console.log(list);
for(let i=0;i<list.length;i++){
    //console.log(list[i]);
    console.log(list[i].innerHTML);
    if(list[i].innerHTML %2 ==0 ){
        list[i].style.color='red';
    }else{
        list[i].style.color='blue';

    }

}
















// let a=2;
// let b=4;
// let c=-1;

// let delta = b*b-4*a*c;
// console.log(delta);
// if(delta>=0){
//     let sq_delta = Math.sqrt(delta);
//     console.log(sq_delta);
//     let [x1,x2] = [(-1*b+sq_delta)/2*a, (-1*b-sq_delta)/2*a];
//     console.log(`x1 is ${x1} and x2 is ${x2}`);
// }else{
//     console.log('delta < zero');
// }

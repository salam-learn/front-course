const btn = document.querySelector('#btn');

// btn.addEventListener('click',()=>{
//     const msg = confirm("Are you sure?");
//     console.log(msg);
// });
btn.addEventListener('click',()=>{
    const msg = prompt("Enter your age");
    console.log(msg);
});
let d = new Date();
console.log(d.getFullYear(),d.getMonth());

class Image{
    constructor(t,l){
        this.title=t;
        this.link=l;
    }
    view(){
        return `<h1>${this.link}</h1>`;
    }
}
const img1 = new Image('My pic',"http://abcdef.ghi/klm.png");

console.log(img1);
document.getElementById('image').innerHTML=img1.view();

class PersonalImage extends Image{
    constructor(title,link,personId){
        super(title,link);
        this.userId=personId;
    }
    display(){
       return `${this.view()} - #id: ${this.userId}`;
    }
}
const img2 = new PersonalImage('My picture ',"http://abcdef.ghi/klm.png",4);

console.log(img2);
document.getElementById('image').innerHTML=img2.display();

const p = {
    a: 4,
    b:6,
    f:9
}
for(const item in p){
    console.log(item);
    console.log(p[item]);
}
const str = 'abhgfkbdksas';
for(const l of str){
   //console.log(l);
}
[3,5,31,56,4].forEach(item=>{
   // console.log(item*2)
});
document.getElementById('openpage').addEventListener('click',()=>{
    const openPage = window.open('./page.html');
    //console.log(openPage);
    
});
console.log('Height: '+window.innerHeight);
console.log('Width: '+window.innerWidth);
console.log('Screen Width: '+window.screen.width);
console.log('Screen Height: '+window.screen.height);
console.log('Screen Height: '+window.screen.colorDepth);

//window.history.go(-1); // back
//window.localStorage.setItem('myname',"Salam");
console.log(localStorage.getItem("myname"));//
//localStorage.clear();
sessionStorage.setItem('number1',1);
console.log(sessionStorage.getItem("number1"));


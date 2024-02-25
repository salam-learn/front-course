const a = [2,4,6,5];
console.log(a.map(item=>item+3));// Add 3 for each element in a

a.push(12);
const p = a.filter(item=>item>=5);// p->[ 6,5,12 ]
console.log(p);// will log [6,5,12]
p.unshift(3);// a -> [3,6,5,12]
console.log(p);
console.log(a); // [2,4,6,5,12]
console.log(a.find(item=>item%2==0));
console.log(a.findLastIndex(item=>item%2==0));
//----------------------//
const image = {
    title: 'Computer Image',
    link: './images/computer.png',
    display:function(){
        return `<img src="${this.link}" title="${this.title}">`;
    }
};

document.getElementById('image').innerHTML= image.display();

const img = document.getElementsByTagName('img')[0];
const blackLayer = document.getElementById('black-layer');

img.addEventListener('click',function(){
    blackLayer.style.visibility='visible';
    console.log(this.title);
});

blackLayer.addEventListener('click',function(){
    this.style.visibility='hidden';
})
setTimeout(()=>console.log('Only One'),2000);
setInterval(()=>console.log(1),1000);
//console.log(img.title);

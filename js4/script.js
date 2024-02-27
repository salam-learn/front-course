const ul = document.querySelector('#menu ul');
console.log(ul)
console.log(ul.parentNode);
const lis = ul.children;

console.log(ul.children);
console.log(lis[1]);

console.log(lis[0].nextSibling);
console.log(lis[0].nextSibling.nodeType);
console.log(lis[2].previousSibling);

console.log(lis[0].classList)
lis[0].classList.remove('bo');
lis[0].classList.add('fffff');
lis[0].addEventListener('click',function(){
    this.classList.toggle('bo');
});

const h1 = document.querySelector('h1');
console.log(h1.childNodes);
let txt = [];
for(let ch of h1.childNodes){
    //console.log(ch);
    txt+= ch.innerHTML || ch.nodeValue;
    
    
    // if(ch.nodeType == 1){
    //     ch.classList.add('m');
    // }else{
    //      txt.push([...ch.nodeValue].map(item =>{
    //         `<span class="m">${item}</span>`;
    //     }));
    // }

}
console.log(txt);
console.log([...txt]);
const newItems = [...txt].map(item=>
    `<span class="m">${item}</span>`
);
console.log(newItems)
h1.innerHTML = newItems.join('');
[...document.querySelectorAll('h1 span')].map(item => item.addEventListener('mouseover',function(){
    this.classList.toggle('m');
}));

let user_name= document.querySelector('input[name=user_name]');
let user_pass= document.querySelector('input[name=user_password]');
let submit= document.querySelector('input[name=submit]');
submit.addEventListener('click',function(e){
    e.preventDefault();
    if(user_name.value.length<5 || user_pass.value.length<8){
        document.querySelector('.error').innerHTML='Invalid values';
    }else{
        document.querySelector('.error').innerHTML = '';
    }
    console.log(user_name,user_pass,e)
});

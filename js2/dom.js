// const table = document.getElementById('students');
// console.log(table);
// const tds = table.getElementsByTagName('td');
// console.log(tds);
// for(let i=0;i<tds.length;i++){
//     console.log(tds[i]);
//     if(tds[i].className != 'header'){
//         tds[i].style.backgroundColor = '#e90873'
//     }
// }
// let input = document.createElement('input');
// input.type = 'text';
// tds[8].appendChild(input);

//--------------------

let e1 = document.createElement('a');
e1.href='https://google.com';
e1.innerHTML='Click Me';
const h1 = document.getElementsByTagName('h1');
h1[0].appendChild(e1);



// DIGITAL CLOCK START

let hour2 = document.querySelector('#hour2');
let min2 = document.querySelector('#min2');
let sec2 = document.querySelector('#sec2');
let am = document.querySelector('#am');

setInterval(function(){

let date = new Date();

let hh = date.getHours();
let mn = date.getMinutes();
let sc = date.getSeconds();

hour2.innerText = hh > 12 ? hh- 12 : hh;
// hour2.innerText = hh < 10 ? '0'+ hh : hh;
min2.innerText = mn < 10 ? '0' + mn  : mn;
sec2.innerText = sc < 10 ? '0' + sc : sc;
am.innerText = hh > 12 ? 'PM' : "AM";
},1000)




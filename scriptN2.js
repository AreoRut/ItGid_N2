let a = 6;
let b = 78;
let zin = a + b;

//alert(zin);
console.log(a);
//let zan = document.querySelector('#oz');
//zan.innerHTML += a / b;

/*let s = 6;
let d = 3;
let zum = document.querySelector('#zum');
zum.innerHTML += s / d;

let dz = document.querySelector('.dz');
dz.innerHTML += 'Заголовок';
let dd = document.querySelector('#dd');
dd.innerHTML += 'Вычисление суммы';
let f = 18;
let g = 3;
let zun = document.querySelector('#zun');
zum.innerHTML += f / g;*/

/*let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function () {
    //console.log('Press Now');
    //let inputIn = document.querySelector('input-in');
    //console.log(inputIn.value);
    let h = +inputIn.value;//+ для приведения\ типа строка к цифре
    console.log(h + 5);
    div.innerHTML = h;
    inputIn.value = '';
}*/
///////////////////////////////////////////////////////////
let button1 = document.querySelector('.field1');
let inEvent1 = document.querySelector('.in-event1');
let disPlay1 = document.querySelector('.dis1');
button1.onclick = function () {
    let n = inEvent1.value;
    disPlay1.innerHTML = " HELLO, " + n;
    //disPlay.innerHTML = n * 10;
    inEvent1.style.border = '2px solid red';
    console.log(n);
}
//////////////////////////////////////////////////////////////
let button2 = document.querySelector('.field2');
let inEvent2 = document.querySelector('.in-event2');
let disPlay2 = document.querySelector('.dis2');
button2.onclick = function () {
    let m = inEvent2.value;
    disPlay2.innerHTML = "HELLO, " + m;
    inEvent2.style.border = '2px solid green';
    console.log(m);
}

let button3 = document.querySelector('.field3');
let inEvent3 = document.querySelector('.in-event3');
let disPlay3 = document.querySelector('.dis3');
button3.onclick = function () {
    let t = inEvent3.value;
    //t = parseInt(t)
    disPlay3.innerHTML += t;
    console.log(t);
}

let button5 = document.querySelector('.field5');
let inEvent4 = document.querySelector('.in-event4');
let inEvent5 = document.querySelector('.in-event5');
let display4 = document.querySelector('.dis4');
button5.onclick = function () {
    let ie4 = inEvent4.value;
    let ie5 = inEvent5.value;
    e4 = parseInt(ie4);
    e5 = parseInt(ie5);
    display4.innerHTML = e4 + e5;
    let eisumm = display4.innerHTML;
    console.log(eisumm);
}


/*let q = 9;
let w = 8;
console.log(q * w);

let e = 4;
let r = 9;
let t = e * r;
console.log(t);

let y;
let u;
function summe(a, b) {
    return a * b;
}
console.log(summe(2, 8));

let i = 7;
let o = 3;
let zupp = document.querySelector("#opas");
zupp.innerHTML += i / o;

let j = 7;
let k = 'Hello';
let jkl = document.querySelector(".jkl");
jkl.innerHTML += i + k;*/



//console.log(inputIn.value);
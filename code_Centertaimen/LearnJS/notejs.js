function showAlert() {
    let name = " cong";

    alert('Hi' + name)
}

showAlert()

function otherfunction() {
    alert("hello" + name)
}
otherfunction();
//
function findx() {
    var x = 1; {
        var x = 2;
        alert(x)
    }
}
findx()
    //
let a = 5;
let b = 6;
if (a + b < 11) {
    console.log("nho hon 11");

} else if (a + b > 11) {
    console.log("lon hon 11");
} else console.log("equal");

//
let age = prompt("nhap tuoi", "");
age >= 18 || alert("Ban chua du tuoi");
//
let use = prompt("nhap use");
let pass = prompt("nhap mat khau");
if (use == "abc" && pass == "asdi") {
    alert("wellcome to HN ");
} else {
    alert("sai pass or use");
}
//
let age = prompt("nhap tuoi");
(age < 10) ? alert("child"): (age < 18) ? alert("teen") :
    (age < 35) ? alert("Youth") :
    alert("adult");
//
let use = prompt("nhap use");
let pass = prompt("nhap mat khau");
use == "af" && pass == "ass" ? alert("wellcom to HN ") :
    alert("use or pass invaid")
    //
let a = prompt("nhap so a");
let b = prompt("nhap so b");
(a > b) ? console.log(a): (a < b) ? console.log(b) :
    alert("bang nhau");
//
let thang = prompt("Nhap thang trong nam ");
switch (thang) {
    case "thang1":
        alert("mua xuan");
    case "thang2":
        alert("mua xuan");
    case "thang3":
        alert("mua xuan");
    case "thang4":
        alert("mua xuan");

        break;
    case "thang8":
    case "thang5":
    case "thang6":
    case "thang7":
        alert("mua ha");
        break;
    case "thang9":
    case "thang10":
    case "thang11":
    case "thang12":
        alert("mua thu");

        break;


    default:
        alert("Mua dong");
        break;
}
//
let age = 0;
while (age <= 16) {
    age = +prompt("Nhap tuoi", "");
    if (age < 16) {
        alert("Goi phu huynh");
    }
}
//

while (use !== "as" && pass !== "ad") {
    let use = prompt("nhap use ");
    let pass = prompt("nhap pass");
    if (use !== "as" && pass !== "ad") {
        alert("Sai use or pass");
    }
}
//
let sum = 0;
for (i = 1; i < 101; i++) {
    sum += i;
    console.log(sum);

}
//
for (i = 0; i < 101; i++) {
    s = i % 2;
    if (s == 1) {
        console.log(i);
    }

}
//
for (i = 0; i < 101; i++) {
    s = i % 3;
    v = i % 5;
    if (s == 0 || v == 0) {
        console.log(i);
    }
}

//
function saya() {
    alert("hello Function");
}

//
function check(i) {
    i = +prompt("Nhap so i ");
    j = i % 2;
    if (j == 1) {
        console.log(i);
        alert("${i} la So le")
    } else
        alert("${i} la so chan ")
}

//
function gethello() {
    name = prompt("nhap ten cua ban");
    alert(`xin chao ${name}`)
}
//
function isOdd(n) {
    if (n % 2 == 0) {
        alert(`${n} la so chan`);
    } else {
        alert(`${n} la so le`);
    }
}


//
let hi = (name, age) => alert(`Hello, I am ${name},and I ${age} Years Old`);
//
let sum = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

//
let ba = {
    name: "cong",
    age: 30,
    chil: 3
};

//
const square = (x) => {
    return x * x;
}
const sum = (x, y) => {
        return x + y;
    }
    // viet ham va display alll info trong ham 

let cong = {
    name = "cong",
    age: 245,
    child: "da tung",
    job: "dev"
}

//function 
function obj() {
    let cong = {
        name = "cong",
        age: 245,
        child: "da tung",
        job: "dev"
    }
    console.log(cong.name);
    console.log(cong.age);
    console.log(cong.child);
    console.log(cong.job);
}

// Lap qua all thuoc tinh object 
let use = {
    name: "ba",
    age: 28,
    job: "dev"
}
for (let key in use) {
    console.log(key + ":" + use[key]);
}
//arrow function 
const square = x => (x * x);
const divide = (x, y) => x / y;
// code theo youtube : hanxeng ve arrow Function 

function changeName(obj) {
    obj.name = `coder`;
}
const ellie = { name: `ellie` };
changeName(ellie);

// defau parameters ES6.
function Showme(me, from) {
    if (from === undefined) {
        from = `Unknown`;
    }
    console.log(`${me} by ${from}`);
}
Showme(`hi!`);

//function print all 
function printall(...ads) {
    for (let i = 0; i < ads.length; i++) {
        console.log(ads[i]);
    }
}
printall("dsads", "dsadsad", "dgjklgf");
// local global .
let global = `global`;

function printm() {
    let mes = "hello";
    console.log(mes);
    console.log(global);

    function printother() {
        console.log(mes);
        let chilmes = "ahele";
    }
    console.log(chilmes);
}
printm();

// return Function . 
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum:${sum(1, 2)}`);
//
function randomq(answer, printyes, printno) {
    if (answer == `love y`) {
        printyes();
    } else {
        printno();
    }
}

const printyes = function() {
    console.log("yes!");
}
const printno = function() {
    console.log("no");
}
randomq("adsds", printyes, printno);
// arrow Function 
function findMinMax(arr) {
    let min = arr[0].y,
        max = arr[0].y;

    for (let i = 1, len = arr.length; i < len; i++) {
        let v = arr[i].y;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    }

    return [min, max];
    console.log(`So lon so be la ${min} so be ${max}`)
}
// Tim max string 
function longstring(strar) {
    var max = strar[0].length;
    str_ara.map(function(v) {
        return max = Math.max(max, v.length);
    });
    result = strar.filter(function(v) {
        return v.length == max;
    });
    return result;
}

//
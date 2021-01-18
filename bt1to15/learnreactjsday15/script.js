function double(obj) {
    for (var in (obj)) {
        if (typeof obj[key] == "number")
            obj[key] = obj[key] * obj[key]
    }
}

console.log

//object copyg

let obj = { name: "ba", age: 28 }
for (let key in obj) {
    copy[key] = obj[key];
}
copy.name = "changed"

// Ham copy 
let copy = {};
Object.assign(copy, obj);
obj.name; // Ba 
//Vi du .
let obj = { name: "cong", age: 33, nghenghiep: bm }
for (let key in obj) {
    copy[key]
}
//
function copy(target, source) {
    for (var key in source) {

        target[key] = source[key];
    }
}
var obj = {
    name = "ba",
    age: 28
};

var cp = {};
copy(cp, obj);
obj.name = "bon";
cp.age = 50;
console.log(obj);
console.log(cp);
//
let user = {
    name: "ba",
    hi() { console.log(this.name); }
}
user.hi();

var copy = user;
//BT exercise
let cong = {
    name: "cong",
    age: 22,

    hi() { console.log(this.name) }
}
console.log("hello my name is " +
    cong.hi());

//

let ba = { name: "cong", age: 24 };
let bon = { name: "bon", age: 4 };
let hi = function() {
    console.log(this.name);
};
// THis

function Person(name, age) {
    this = {}
    this.name = name;
    this.hi = function() { console.log(this.name); }
}
let ba = new Person("ba");
let bon = new Person("bon");
let thu = new Person("Thu");
ba.hi();
bon.hi();
thu.hi();
//BT exercise.// Object Ket thuc.
var str = "abcd";
var res = str.slice(0, 2);
// BT2
var str = "HELLO WORLD";
var res = str.charAt(0);
//
function abbr(str) {
    var i = str.lastndexof(" ");
    return str.slice(0, i + 2) + "."
}
//
function abbr(email) {
    var i = email.lastIndexOf("@");
    return email.slice(0, 2) + "..." +
        email.slice(i);
}
console.log(abbr("cong@lagifi.com"));
// Cac nhung thang thu vien lam viec .

//Arras la mot mang sap xep cac phan tu co thu tu.
let arr = [];
let arr = new Array();
let studients = ["ba", "bon", "thu"];
studients[0]; //ba

let Array = [2, f, 6, d];
a[2];

let arr = [1, 2, 3, 4];

//
var a = [1, 2, 4, 5, 6];

function sum(a) {
    var result = 0;
    for (i = 0; i < a.length; i++) {
        result += a[i];
    }
    return result / a.length;
}
console.log(result);

//
a = [12, 3, 4, 5];
a.splice(2: 3);
//
function comp(a, b) {
    return a > b ? 1 : -1;
}
//
[1, 2, 3].forEach((i) => conso.log(i * i)); // ap dung foi voi phan tu chay het .

// Filter .
let arr[{ name: "cong", Age: 8 }];
[1, 2, 3, 4, 5, 6, 7, 8, 9].filter(i % 2);
// Map
[1, 2, 3].map((value) => value * value);
["ba nguyen", "Tuan vu"].map((i) => i.length);
//Reduce Tinh Toan .
let a = ["A nguyen", 1, 5, 7, "nj"];
a.sort();
//
let a = ["Nff", 2, 7, 0, "dgf", "fdsf"];
for ()
//

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(i); // callback(arr[i]); Note Why so that.
    }

}
forEach(a, (i) => console.log(i * i)); //

//
let obj = [{ name: "cong", age: 50 }, { name = "long", age: 20 }]
    // Ham Filler.
function filter(arr, condition) { //Goi ham Filler
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) { // Condition la ham call back.
            temp[temp.length] = arr[i];
        }
    }
    return temp;
}

filter(obj, i => i.age < 20); // Thuc hien ham chay .
//Ham map 
function map(arr, callback) {
    let temp=[];
    for (let i = 0; i < arr.length; i++) {
        temp[temp.length] = callback(arr[i]);
    }
    return temp;
}

function abc(value) {
    return value / 123;
}
// Ham reduce.
function reduce(array, callback, invivalue) {
    let sum = invivalue || array[0]; // Let sum = invivalue ===underfined ? array[0]:invivalue;
    for (let i = !invivalue ? 0 : 1; i < array.length; i++) { // for (let i = invivalue === underfined ? 1 : 0;i < array.length;i++)
        sum = callback(sum.array[i], i, array);
    }
    return sum;
}

a = [1, 3, 6, 7];
reduce(a, (sum, value) => sum += value, 0);
//
let use = { name: "cong", age: 8 };
Object.keys(use);
Object.defineProperties(use);
Object.fromEntries(use);
// Date Time.
new Date();
new Date(millisecnd);
new Date(String);
new Date(year, month, date, hours, minutes, seconds, ms); //bat buoc phai co year and month.
Getfullyear();
getMonth();
getTime();
getTimezoneoffset();
setFullYear();
//
let arr = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
arr[date.geDay()];
//
function is(params) {

}
//
if (condition) {

} else {

}

if (condition) {


}

do {

} while (condition);

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];

    }
};
//Viết hàm tính căn bậc 2 của 1 số.
function sqrt(n){
    let result=Math.sqrt(n);
    return result
}
//Viết hàm tìm ra số nhỏ nhất trong mảng các số.
function minumber(array){
    let a=array.sort(function(a,b){return a-b});
    return a[0]
}
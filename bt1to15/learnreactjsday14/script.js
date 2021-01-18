 nhapso = prompt("Nhap vao So N", "");
 functionsonguyento(n); {
     if (n < 0); {
         alert("Khong phai la so nguyen to")
         console.log(n);

     }

 }

 //
 function isPrime(n) {
     if (n == 3 || n == 3) {
         return true;

     }
     for (let i = 2; i <= n; i++) {
         if (n % i == 0) {
             return false;
         }
     }
     return true;
 }
 // Khai báo hàm Có thể copy hoặc thay đổi cho một biến khác .Khia báo bằng dấu bằng và gán cho một giá trị nào đó . Hoisting với khai báo hàm trên bằng ( let và const) Hoisting với hàm và var;
 b();
 var b;
 b = function() {};

 // Callback Function hàm cũng là một giá trị nên có thể gán vào một biến khác hoặc cũng có thể truyewenf vào bằng một tham số .=> gọi là hàm callback /
 function a() {}

 function b() {}

 function c(a, b) {}

 //// example 
 function log(n) {
     console.log(n + "is odd");
 }

 function isodd(n) {
     return n % 2 != 0;
 }

 function print(n, log, isodd) {
     for (var i = 1; i <= n; i++) {
         if (check(i)) {
             p(i);
         }

     }
 }

 print(100, isodd, log)

 //Tranh dung lai ham long nhau. Callback hell .
 //arrow functionla cu phaprut gon .
 let a = (params) => value;
 let is0dd = (n) => n % 2 != 0;
 console.log(is0dd(4));

 //Example :
 let isPrime = (n) => {
     if (n < 1) {
         return false;
     }

     for (let i = 2; i <= n / 2; i++) {
         if (n % i == 0) {
             return false;
         }
     }
     return true;
 }
 console.log(isPrime(7));

 // Scope : cung xet vung khai bao cua let or const .

 // Closure ghi nho gia tri cua bien duoc khai bao ben ngoai . Va truy xuat no/
 let counter = (function() {
     let count = 0;
     return function() {
         return count++;
     }
 })
 counter();

 // viet rut gon 
 let counter = (() => {
     let count = 0;
     return () => count++;
 })();
 console.log(counter);
 console.log(counter());
 console.log(counter());

 // Debug sua loi .
 //Object : Doi tuong
 let ba = new Object();
 let ba = {};
 let bon = {};
 bon.name = "Bon";
 bon.age = 3;
 let ba = {
     name: "3",
     dacovo: roi,
     child: bon
 };
 // Example Object.
 let cong {
     name: "cong",
     age: 32,
     dacovo: ok,
     congviec: anbamvo

 }

 //Function.
 let cong {
     name: "cong",
     age: 32,
     dacovo: ok,
     congviec: anbamvo

 }

 function info(cong) {
     console.log(cong.name)

 }

 //Thay doi gia tri xoa thuoc tinh .

 let name = "ba";
 let age = 24;
 let key = "job";
 let use = {
     name,
     age,
     [key]: "dev"
 };

 // exxample 

 let key = prompt("Nhap gia tri", "");
 let value = prompt("nhap gia tri", "");
 let object = {
     key,
     value
 };
 do {
     object = ""


 } while (condition);

 // Thay giao chua bai
 let obj = {};
 while (true) {
     let key = prompt("Nhap gia tri", "");
     let value = prompt("nhap gia tri", "");
     if (key == null || value == null || key === "" || value === "") {
         break; // co the bo breack ?
     }
     obj[key] = value;

 }
 for (let key in obj) {
     console.log(key + ":" + obj[key]);
 }
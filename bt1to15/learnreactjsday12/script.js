let usename = prompt("Nhap Ten Cua ban vao day ");
let password = prompt("Nhap Mat khau cua ban ");

if (usename == cong) {
    alert("nhap tiep mat khau ");
} else if (Pass == khongcogi) {
    alert("Chao Mung");
} else {
    alert("Nhap lai mat khau");
}


let number1 = prompt("Nhap number 1");
let number2 = prompt("Nhap Number 2");
if (number1 > number2) {
    alert("So lon nhat,number1");
} else {
    alert("So lon nhat,number2")
}

// Thay giao lam bai 
let usename = "banx";
let password = "123";
let u = prompt("usename", "");
let p = prompt("password", "");
if (u == usename && p == password) {
    alert("wellcome" + u);
} else {
    alert("useer name or password invalid!");
}

// Kiem tra so lon nhat 
let a = +prompt("Nhap a:", "");
let b = +prompt("nhap b:", "")
if (a >= b) {
    alert('${a} la so lon nhat');


} else {
    alert('${b} la so lon nhat');
}

// Kiem tra so chan le 

let a = +prompt("nhap a:", "");
if (a % 2 == 0) {
    alert('${a} la so chan')
} else {
    alert('${a} la so le');
}
// Viet theo cau truc rut gon 
alert(a % 2 == 0 ? '${a} la so chan ')
    //Re nhanhIf- els

age < 18 ? alert("Ban chua du tuoi") : alert("chuan bi khan giay");

let guess = age < 18 ? "children" : "adult"; //Guess=?

//Liet ke Gan gia tri 
(age < 10) ? alert("children"): (age < 18)

//Switch case

switch (dk1) {
    case (Dk):
        //dieu kien dung chay code
        break;
        //many case
    default:
        //chay code
}
//Cay voi nhieu case
let role = "admin";
switch (role) {
    case "guess":
        alert("ban phai dang ky");
        break;
    case "use":
        alert("chuan bi khan ");
        break;
    case "boss":
        alert("chao boss");
        break;
    default:
        alert("who are you?");

}

//Bai tap 

let thangx = prompt("thang trong nam", "");

switch (thangx) {
    case "thang1":
    case "thang2":
    case "thang3":
    case "thang4":
        alert("mua thu hoa no");
        break;
    default:
        alert(`thang $ { thangx }
            la thang an choi `)
}
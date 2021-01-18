//  Viết chương trình cho phép nhập 2 số, tính tổng 2 số đó.

a = prompt("Nhap so a");
b = prompt("nhap so b");
c = a + b;
alert("TOng hai so da nhap ${c}");

//Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22. 
function ctof(n) {
    let dof = 0;

    dof = (n * 1.8) + 32;
    alert(`Do F la ${dof}`);

}
//Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
function finnumber() {
    let arrnumber = [1, 2, 3, 7, 5, 9898, 44, 66, 455];
    var maxnumber = Math.max(...arrnumber); //9898
    for (let i = 0; i <= arrnumber.length; i++) {
        if (arrnumber[i] < maxnumber) {
            let max = Math.max(...arrnumber[i]); // chon so lon nhat trong day con lai
            console.log(max);
        }
    }
}

//Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.
function findarrmax() {
    let strarr = ["dsadsadsa", "dsadsatttr", "dsfdsfdfg", "fsfsgfhdg"];
}
//Khai bao Object moi
let animal = new Object();
animal.name = "cat";
animal["color"] = "black";
animal.eat = function() {
    console.log(`${this.name} is eating`);
};
animal.eat();
//Arrray
let ar = [23, "cat", {}];
ar.push(34); //ar=[23,"cat",{},34];
ar.splice(1, 2, "hello"); //ar=[23,"hello",34];
let brr = [1, 32, 5, 6, 7, 5];
let arb = brr.slice(0, 4); //[1, 32, 5, 6]

//call and apply and bind 
let animal = {
    name: "cat",
    eat(a, b) {
        console.log("I" + this.name + "eating" + b + "" + a)
    }
};
let human = { name: `human` };
animal.eat(`apple`, 5) //i animal eating 5 apple.
animal.eat.call(human, `orange`, 2); //i human eating 2 orange.
let animal = {
    name: `dog`,
    eat(a, b) { console.log(this.name + "is eating") + "" + a + "" + b }
};
let human = {
    name: `ravi`
};
animal.eat(5, `bonu`);
animal.eat.call(human, 10, `chips`); //
animal.eat.apply(human, [10, `chips`]);
let human_eat = animal.eat.bind(human);
human_eat(4, `apples`)
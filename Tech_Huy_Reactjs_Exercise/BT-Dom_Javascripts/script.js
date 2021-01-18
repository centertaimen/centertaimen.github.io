//function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor() {
    document.getElementsByClassName("c")[0].style.color = "blue";
    document.getElementsByClassName("c")[1].style.color = "yellow";
    document.getElementsByClassName("c")[2].style.color = "red";
}

//function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgColor(color) {
    document.body.style.backgroundColor = "color"
}
//function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).
//Dao content trong bien 
function reverseContent(p1, p2) {
    let para1 = document.getElementById(p1);
    let para2 = document.getElementById(p2);

    let temp = para1.innerHTML;
    para1.innerHTML = para2.innerHTML;
    para2.innerHTML = temp;

}
//function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels(x là một số nguyên).
function changeFontSize(x) {
    document.body.style.fontSize = x + "px";
}

//Change on body
function changeFontSize(x) {
    let ar = document.getElementsByTagName("p");
    for (let i = 0; i < ar.length; i++) { //i<=ar.length-1;
        ar[i].style.fontSize = x + "px";
    }
}

//function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn(tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels(Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle). => Co nhieu cach
split();
parseFloat();
replace();
splice();
substr();
substring();
//and vong lap . 

function increaseFontSize(para1) {
    let font = document.getElementById(para1)
    if (parseFloat(font.style.fontSize) >= 30) {} else { font.style.fontSize = parseFloat(font.style.fontSize) + 1 + "px" }

}
increaseFontSize('p1');

//function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn(tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.

//
Dotiencong * Tvn03047 * Knt12224
//Viết hàm cho phép đổi đơn vị tiền tệ từ USD sang VND, biết 1 USD = 23000 VND. Tham số truyền vào là 1 số nguyên dương.

function usstovnd(us) {
    let vnd = us * 23000;
    return vnd
}

//Viết hàm tính thể tích hình cầu, với tham số truyền vào là 1 số nguyên dương thể hiện bán kính của hình cầu, (số PI sử dụng Math.PI).
function volum(r) {
    let v = (4 / 3) * Math.PI * (r * r * r);
    return v
}

//Bài 3: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function sumall(a, b) {
    let sum = 0;
    for (let i = a + 1; i < b; i++) {

        sum += i;
    }

    return sum;
}
//Bai 4 Bài 4: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function sumnumber(a) {
    let sum = 0;
    for (let i = 1; i < a; i++) {
        number = a % i;
        if (Number.isInteger(number)) {
            sum += i;
        }
    }
    return sum+a

}
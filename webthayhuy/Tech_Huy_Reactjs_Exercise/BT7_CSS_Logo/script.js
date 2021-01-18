//Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
function fistUpcase(str) { //str="Anh Coong dep trai Khai To"
    let splitStr = str.toLowerCase().split(' '); // Change Str To Arr ["anh", "coong", "dep", "trai", "khai", "to"]
    for (let i = 0; i < splitStr.length; i++) {
        // Kiem tra ky tu trong array
        // splitStr[1]) : coong
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // splitStr[1].charAt(0).toUpperCase() :C  
    //splitStr[1].substring(1) : oong
    return splitStr.join(' '); //Coong
}

// Bai Tap tren lop . 
function bai1(str) {
    let arr = str.split(""); // Truyen vao mot chuoi rong 
    arr[0] = arr[0].toUpperCase(); //Viet hoa phan tu dau tien trong mang 
    for (let i = 0; i < arr.length; i++) { // KT phan tu trong chuoi .
        if (arr[i - 1] === ' ') { //KT phan tu dau cach neu la dau cach 
            arr[i] = arr[i].toUpperCase(); //Thi viet thuong . 
        } else { arr[i] = arr[i].toLowerCase(); }
    }
    return arr.join('');
}

//Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function changeSpinal(str) {
    return str.toLowerCase().replaceAll(" ", "-")
}

//str.toLowcase().split(' ').join('-') // Phep tinh nay giup giam so khoang trang giua cac ky tu . 
//str.toLowcase().
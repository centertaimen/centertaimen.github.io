    // while if
    let age = 0;

    while (age <= 16) {
        age = +prompt("nhap tuoi:", "");
        if (age < 16) {
            alert("Goi phu huynh ");
        }
    }

    // Do white
    let age;
    do {
        age = +prompt("nhap tuoi", "");
        if (age <= 16) {
            alert("bat phim coi ");
        }
    } while (age <= 16);


    //For loops
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // Doan code 2 for loops
    for (let i = 0, j = 0; i < 10 && j < 10; i++, j++) {
        console.log(i + " " + j);

    }

    //BT1
    // 1
    let i = 1;
    while (i++, i <= 100) {
        Tong = 0 + i;
        if (i > 100) {
            alert("Thoat Chuong Trinh")
        }
    }

    // Thay giao 
    let sum = 0;
    for (let i = 1; i < 101; i++) {
        sum += i;
    }
    console.log(sum);

    // option2
    let sum = 0;
    for (let i = 1; j = 51; i < 51, i++, j++) {
        sum = i + j;
    }
    console.log(sum);
    // 2 co the thay the i++ thanh i+=2 
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 1)
            console.log(i);
    }
    //3 
    let sum = 0; //bien tong cac so le 
    let count = 0; //bien dem 
    for (let i = 1; i < 101; i++) { //lap tu 1 den 100 
        //kien tra neu i chia het cho 2
        if (i % 2 != 0) {
            sum += i; // cong gia tri vao sum
            count++; //dong thoi tang bien dem len 1 
        }
    }
    console.log(sum);
    //4
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
        }
    }
    //5
    let sum = 0;
    let count = 0;
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i * i;
            count++;
        }
    }

    // while break....
    while (true) {
        //code 
        if (condition) {
            //if true
            break; // ngat 

        }
        // code is bo qua khi code tren dung 
    }

    //exemple

    let i = 0;
    while (true)

    //Breack continue 
        for (let index = 0; index < array.length; index++) {
        if (condition) {

        }
        const element = array[index];

    }

    // Inner Loops
    for (let index = 0; index < array.length; index++)
        for (let index = 0; index < array.length; index++) {
            const element = array[index];

        } {
            const element = array[index];

        }

    //Chuong trinh bang cuu chuong 
    for (let i = 1; i <= 10; i++) {
        let s = "";
        for (let j = 1; j <= 10; j++) {
            s += String(i * j)

        }
        console.log(s);
    }

    // loops labell

    labelname: for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }

    //
    out: for (let i = 1; i <= 10; i++) {
        let s = "";
        for (let j = 1; j <= 10; j++)
            console.log(j);
        if (j == 3) {
            break out;

        }
        console.log("I am out");
    }

    //FuntionsG : dung tai su dung code .
    function name(params) {

    }
    //example 
    function sayhi() {
        alert("xin chao ");
        alert("say he;llo")
    }

    sayhi();
    sayhi();
    sayhi();
    // Bt 
    //1
    function checkchanle() {
        let a;
        a = +prompt("nhap so", "");
        if (a % 2 == 1)
            alert("${a} la so le ")
        else {
            alert("${a} la so chan")
        }
    }
    checkchanle()
    checkchanle()
        //2 bien local( local variable


    let name = "ba";

    function sayha() {
        alert("my name is ${name}!", "");
        name = "Bon "
    }
    sayha();

    ///

    let name = "Ba";

    function sayba(name) {
        name = "bon"
        alert('Hell ${name}');
    }
    sayba(name);
    alert(name);

    ///
    firstname = "ba";
    lastname = "nguyen";

    function fullname(a, b) {
        console.log(a + " " + b)
    }
    //Bt

    //1.Viet hmacho phep nhan
    // let n;
    function sum(n) {
        for (let i = 0; i <= n; i++) {
            total += i;
        }
        console.log(total);
    }

    //
    function print(n) {
        for (let i = 1; i < n; i += 2) {
            console.log

        }
    }

    //
    function isoddnumber(n) {
        if (n % 2 == 0) {

        }

    }
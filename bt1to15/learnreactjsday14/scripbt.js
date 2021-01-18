debugger;
for (let i = 0; i < 5; i++) {
    console.log(i);
    debugger;
    for (let j = 0; j < 5; j++) {
        console.log(i * j);
    }
}
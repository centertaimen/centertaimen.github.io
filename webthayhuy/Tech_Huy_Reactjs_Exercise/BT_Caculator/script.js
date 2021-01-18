
function equal(){
    
   document.calc.txt.value=eval(document.calc.txt.value)
}
function percent(){
    
   document.calc.txt.value =(document.calc.txt.value)/100
}

//
newStr='';
for (let i=0;i<str.length;i++){
    if(str[i]=='×'){
        newStr +='*';
    } else if (str[i]=='÷'){
        newStr += '/'
    }
    else {
        newStr +=str[i];
    }
}  

//Replace 
str.replaceAll('×','*').replaceAll('÷','/')  // Thay the ky tu . 
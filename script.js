let textDisp = document.getElementById("display");
let show = document.getElementById("output");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let equalto = document.getElementById("equalto");

let expression="";
let result;
let p =0;
let n =0;
let m = 0;
let d = 0;


zero.addEventListener("click",function (){
    textDisp.value += "0";
    expression+=0;
    p=0;
    m=0;
    n=0;
    d=0;
});
one.addEventListener("click",function (){
    textDisp.value += "1" ;
    expression+=1;
    p=0;
    m=0;
    n=0;
    d=0;
});
two.addEventListener("click",
function (){
    textDisp.value += "2";
    expression+=2;
    p=0;
    m=0;
    n=0;
    d=0;
}
);
three.addEventListener("click",function (){
    textDisp.value += "3";
    expression+=3;
    p=0;
    m=0;
    n=0;
    d=0;
});
four.addEventListener("click",function (){
    textDisp.value += "4";
    expression+=4;
    p=0;
    m=0;
    n=0;
    d=0;
});
five.addEventListener("click",function (){
    textDisp.value += "5";
    expression+=5;
    p=0;
    m=0;
    n=0;
    d=0;
});
six.addEventListener("click",function (){
    textDisp.value += "6";
    expression+=6;
    p=0;
    m=0;
    n=0;
    d=0;
});
seven.addEventListener("click",function (){
    textDisp.value += "7";
    expression+=7;
});
eight.addEventListener("click",function (){
    textDisp.value += "8";
    expression+=8;
    p=0;
    m=0;
    n=0;
    d=0;
});
nine.addEventListener("click",function (){
    textDisp.value += "9";
    expression+=9;
    p=0;
    m=0;
    n=0;
    d=0;
});

    //calculation
document.getElementById("plus").addEventListener("click",function (){
    if(p==0){
    textDisp.value += "+";
    expression=expression+"+";
    } p = 1;
    
});
document.getElementById("minus").addEventListener("click",function (){
    if(n==0){textDisp.value += "-";
    expression=expression+"-";} n=1;
    
});
document.getElementById("multi").addEventListener("click",function (){
    if(m==0){textDisp.value += "X";
    expression=expression+"*";} m=1;
    
});
document.getElementById("divide").addEventListener("click",function (){
    if(d==0){textDisp.value += "/";
    expression=expression+"/";} d=1;

});

//delete and all clear

document.getElementById("allclear").addEventListener("click",function(){
    textDisp.value = "";
    show.value = "";
    expression = "";
});

//result calculation
equalto.addEventListener("click",function(){
    console.log("expression " + typeof(expression) + " value = "+expression);

    result= eval(expression);
    //show.value = result + " type 0f : "+typeof(result);
    textDisp.value = result;
    show.value = expression;
});

//change background color
const color1 = 'rgba(150, 255, 180, 0.311)';
const color2 = '#001C30';

// Get references to the button and h1 elements
const toggleButton = document.getElementById("floatingButton");
const bodyColor = document.getElementById('bodyColor');

let currentColor = color1;
function changeColor(){
    if(currentColor===color1){
       bodyColor.style.backgroundColor = color2;
        currentColor = color2;
    }
    else{
        bodyColor.style.backgroundColor = color1;
        currentColor = color1;
    }
}
toggleButton.addEventListener('click',changeColor);
//js
//text change
function textChange(){
    document.getElementById('t_c').innerHTML="hello";
}
//show date
function showDate(){
    document.getElementById('s_d').innerHTML=Date();
}
//bulb on/off
function bulbOn(){
    document.getElementById('bulb').src ='images/bulb_on.gif';

}
function bulbOff(){
    document. getElementById('bulb').src ='images/bulb_off.gif';
}
//color change
function colorChange() {
    document.getElementById('c_c').style.color='red';
}
// show/hide
function textShow(){
    document.getElementById('text').style.display='block';
}
function textHide(){
    document.getElementById('text').style.display='none';
}
// variable
var number1=5;
var number2=2;
var number3=number1-number2;
function calculation(){
    document.getElementById('value').innerHTML= number3;
}
 
// let
let x, y;
x=5;
y=2;
// number3=number1-number2;
x -= y;

function data(){
     document.getElementById('l_v').innerHTML= x;
}

// text change by class
function textChange(){
    document.getElementsByClassName('t_cc')[1].innerHTML="helllo";
}
// tag name
function textChange(){
    var info=document.getElementsByTagName('h4');
    alert(info.length);
}
// oninput
function inputText(){
    let text=document.getElementById('myInput').value;
    document.getElementById('o_i').innerHTML="You wrote "+text;

}
// onchange
function selectOption(){
    document.getElementById('o_c').innerHTML='option';
}
// round number
let a=2.5
let b=2.49

function mathRound(){
    document.getElementById('r_n').innerHTML=a;
}
// oncopy
function copyText(){
    document.getElementById('o_c').innerHTML="hello world";
}
// mousedown
function mouseDown(){
    document.getElementById('m_d').style.color='green';
}
// onresize
let w= window.outerWidth;
let h= window.outerHeight;
let txt= "width="+ w +  "height=" + h;
function reSize(){
    document.getElementById('o_r').innerHTML= txt;
}

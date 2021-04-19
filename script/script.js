
// let nums_id = ['num0','num1','num2','num3','num4','num5','num6','num7','num8','num9'];
// let n=document.getElementById(nums_id[0]);
let arr_id=[]
for(let i=0;i<10;i++){
    arr_id[i]=document.getElementById('num'+i);
}
let clear=document.getElementById('clear');
let del=document.getElementById('del');
let muliply=document.getElementById('mult');
let divide=document.getElementById('divi');
let add=document.getElementById('add');
let subtract=document.getElementById('subt');
let equal=document.getElementById('equal');
let res=document.getElementById('result');
let point=document.getElementById('point');
let result = ''
var res_len = result.length;
del.onclick = () => {
    result+="";
    if(result==''||result.length==1) {
        result='';
        res.innerText='0';
    } else {
        result = result.slice(0,-1);
        res.innerText=result;
    }
}
equal.onclick = () => {
    result = eval(result);
    res.innerText=result;
}
point.onclick = function() {
    res.innerText=result+='.';
}
divide.onclick = function() {
    res.innerText=result+='/';
}
muliply.onclick = function() {
    res.innerText=result+='*';
}
add.onclick = function() {
    res.innerText=result+='+';
}
subtract.onclick = function() {
    res.innerText=result+='-';
}

clear.onclick = () => {
    result='';
    res.innerText='0'
}
arr_id[0].onclick = function() {
    res.innerText=result+='0';
}

arr_id[1].onclick = function() {
    res.innerText=result+='1';
}

arr_id[2].onclick = function() {
    res.innerText=result+='2';
}

arr_id[3].onclick = function() {
    res.innerText=result+='3';
}

arr_id[4].onclick = function() {
    res.innerText=result+='4';
}

arr_id[5].onclick = function() {
    res.innerText=result+='5';
}

arr_id[6].onclick = function() {
    res.innerText=result+='6';
}

arr_id[7].onclick = function() {
    res.innerText=result+='7';
}

arr_id[8].onclick = function() {
    res.innerText=result+='8';
}

arr_id[9].onclick = function() {
    res.innerText=result+='9';
}
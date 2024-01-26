// ==UserScript==
// @name         北科學業成績查詢專區 CSS
// @namespace    http://codeberg.org/proton-penguin/NTUT-web-css
// @version      1.01.26
// @match        https://aps-stu.ntut.edu.tw/StuQuery/*
// @match        https://aps-course.ntut.edu.tw/StuQuery/*
// @license      GPL 3.0
// ==/UserScript==
let background = "" //don't touch this line






// 這裡開始是給你們自訂
let url = "https://github.com/vinceliuice/WhiteSur-wallpapers/blob/main/4k/Ventura-dark.jpg?raw=true" //貼上背景圖片連結
// https://github.com/vinceliuice/WhiteSur-wallpapers/blob/main/4k/Ventura-dark.jpg?raw=true
let tablecolor = "#071b34" //輸入表格背景顏色
// #071b34 //16 進制色碼
// linear-gradient(55deg,red,blue) //漸層，角度(非必要),顏色1,顏色2
// rgb(123,123,123) //顏色(紅,綠,黃)，值介在 0~255 之間
// hsl()
// hwb()
// black //named color，限用深色，詳見 https://developer.mozilla.org/en-US/docs/Web/CSS/named-colo 

// 以下二選一
// background = "linear-gradient(red,blue)" //取消註解來使用漸層
background = "url("+url+");" //

// 自訂區域結束
// ==========
// 下面的程式碼很亂
// 有一些程式碼完全沒用
// 但反正現在能 work
// 除非你知道你在幹麻不然不要改
// ==========

function rmImg(){
    const object = document.getElementsByTagName("img");
    for(var i = 0; i < object.length; i++){
        console.log(object[i]);
        object[i].src = "";
    }
}

function removeBackground(){
    let body = document.querySelector('body');
    let theme = "";
    theme += "background-size: auto;";
    theme += "background-color: #000000;";
    theme += "color: #ffffff;";
    theme += "margin: 25px;";
    theme += "background:"+background+";";
    body.style = theme;
    
}

function textStyle(elem){
    const object = document.querySelectorAll(elem);
    let theme = "color: #ffffff;";
    theme+="font-family: Arial, Helvetica, sans-serif;";
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}
function buttonStyle(){
    const object = document.getElementsByTagName("input");
    let theme = ""
    theme += "cursor:pointer;";
    theme += "background-color: #ffffff;";
    theme += "border: 0;";
    theme += "border-radius: 10px;";
    theme += "color: #000000;";
    theme += "font-size: 15px;";
    theme += "padding: 10px 15px;";
    theme += "margin: 5px;";
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        console.log(object[i]);
        object[i].style = theme;
    }
}

function a(){
    const object = document.querySelectorAll('a');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function b(){
    const object = document.querySelectorAll('b');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function p(){
    const object = document.querySelectorAll('p');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function h1(){
    const object = document.querySelectorAll('h1');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function h2(){
    const object = document.querySelectorAll('h2');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function h3(){
    const object = document.querySelectorAll('h3');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function h4(){
    const object = document.querySelectorAll('h4');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function h5(){
    const object = document.querySelectorAll('h5');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function h6(){
    const object = document.querySelectorAll('h6');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function font(){
    const object = document.querySelectorAll('font');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function li(){
    const object = document.querySelectorAll('li');
    let theme = "color: #ffffff;"
    theme += "font-family: Arial, Helvetica, sans-serif;"
    theme += "list-style: square;"
    for(var i=0;i < object.length; i++){
        object[i].style = theme;
    }
}

function td(){
    const object = document.querySelectorAll('td');
    for(var i=0;i < object.length; i++){
        let theme = '';
        theme += 'border-color: #ffffff;';
        theme += 'background:'+tablecolor+';';
        theme += 'border-width: 1px;';
        theme += 'border: none;';
        theme += "color: #ffffff;";
        theme += "padding: 10px;";
        theme += "text-align: center;";
        theme += "font-family: Arial, Helvetica, sans-serif;";
        theme += "text-align: start;"
        object[i].style = theme;

    }
}

function th(){
    const object = document.querySelectorAll('th');
    for(var i=0;i < object.length; i++){
        let theme = '';
        theme += 'border-color: #ffffff;';
        theme += 'background:'+tablecolor+';';
        theme += 'border: none;';
        theme += 'border-width: 1px;';
        theme += "color: #ffffff;";
        theme += "padding: 10px;";
        theme += "text-align: center;";
        theme += "font-family: Arial, Helvetica, sans-serif;"
        object[i].style = theme;
    }
}

function tbody(){
    const object = document.querySelectorAll('tbody');
    for(var i=0;i < object.length; i++){
        let theme = '';
        theme += 'border-color: #ffffff;';
        theme += 'background-color:#000000;';
        theme += 'border: none;';
        theme += 'border-radius: 2px;';
        theme += 'border-width: 1px;';
        theme += "color: #000000;";
        theme += "font-family: Arial, Helvetica, sans-serif;"
        object[i].style = theme;
    }
}

function table(){
    const object = document.querySelectorAll('table');
    for(var i=0;i < object.length; i++){
        let theme = '';
        theme += 'background-color: #ffffff;';
        theme += 'border: none;';
        theme += "color: #000000;";
        theme += "font-family: Arial, Helvetica, sans-serif;"
        object[i].style = theme;
    }
}

//下面這段用來隱藏 Chromium 瀏覽器的 scrollbar
var _tag = "head|body|html".split("|");
for (var i = 0; i < _tag.length; i++) {
    var _head = document.getElementsByTagName(_tag[i])[0];
    if (!_head) continue;
    var _style = document.createElement('style');
    _style.setAttribute("type", "text/css");
    _style.innerHTML = "::-webkit-scrollbar{width:0;height:8px;}";
    _head.appendChild(_style);
    break;
}//以上取自 https://github.com/ue1/userscripts


(function() {
    'use strict';
    rmImg();
    removeBackground();
    td();
    th();
    textStyle('b');
    textStyle('p');
    textStyle('a');
    tbody();
    table();
    h1();
    h2();
    h3();
    h4();
    h5();
    h6();
    font();
    li();
    buttonStyle();
})();

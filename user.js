// ==UserScript==
// @name         北科學業成績查詢專區 CSS
// @namespace    http://codeberg.org/proton-penguin/NTUT-web-css
// @version      2023-12-26
// @description  北科選課系統的 Graphite 主題
// @author       proton-penguin
// @match        https://aps-stu.ntut.edu.tw/StuQuery/*
// @match        https://aps-course.ntut.edu.tw/StuQuery/*
// @license      GPL 3.0
// ==/UserScript==

const h1 = document.querySelectorAll('h1')
const h2 = document.querySelectorAll('h2')
const h3 = document.querySelectorAll('h3')
const h4 = document.querySelectorAll('h4')
const h5 = document.querySelectorAll('h5')
const h6 = document.querySelectorAll('h6')
const a = document.querySelectorAll('a')
const b = document.querySelectorAll('b')
const p = document.querySelectorAll('p')
const font = document.querySelectorAll('font')
const li = document.querySelectorAll('li')
const th = document.querySelectorAll('th')
const td = document.querySelectorAll('td')
const tr = document.querySelectorAll('tr')
const table = document.querySelectorAll('table')
const tbody = document.querySelectorAll('tbody')
const body = document.querySelectorAll('body')
const input = document.querySelectorAll('input')

const inputStyle=()=>{
    let theme=''
    theme+='cursor:pointer;'
    theme+='background-color: white;'
    theme+='border: 0;'
    theme+='border-radius: 10px;'
    theme+='color: black;'
    theme+='font-size: 15px;'
    theme+='padding: 10px 15px;'
    theme+='margin: 5px;'
    for(let i=0; i<=input.length; i++){
        input[i].style = theme
    }
}

const textStyle=()=>{
    let theme=''
    theme+='color: white;'
    theme+='font-family: Arial, Helvetica, sans-serif;'
    for(let i=1; i<h1.length; i++){
        h1[i].style = theme
    }
    for(let i=1; i<h2.length; i++){
        h2[i].style = theme
    }
    for(let i=1; i<h3.length; i++){
        h3[i].style = theme
    }
    for(let i=1; i<h4.length; i++){
        h4[i].style = theme
    }
    for(let i=1; i<h5.length; i++){
        h5[i].style = theme
    }

    for(let i=1; i<h6.length; i++){
        h6[i].style = theme
    }
    for(let i=1; i<a.length; i++){
        a[i].style = theme
    }
    for(let i=1; i<p.length; i++){
        p[i].style = theme
    }
    for(let i=1; i<b.length; i++){
        b[i].style = theme
    }
    for(let i=1; i<li.length; i++){
        li[i].style = theme
    }
    for(let i=1; i<font.length; i++){
        font[i].style = theme
    }
}


//下方套用所有 CSS 變更
//使用註解來關閉該功能
inputStyle() //按鈕與輸入格
textStyle()
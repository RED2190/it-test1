var slide1 = document.getElementsByClassName("sl");

var all_btn = document.getElementById("all_btn");
var webapp_btn = document.getElementById("web_btn");
var dot_btn = document.getElementById("dot_btn");
var js_btn = document.getElementById("js_btn");
var ang_btn = document.getElementById("ang_btn");
var bl_btn = document.getElementById("bl_btn");



slide1[0].style.position = "relative";
slide1[0].style.left = "0%";


webapp_btn.onclick = function(){  
    slide1[0].style.position = "relative";
    slide1[0].style.left = "-112%";
}
all_btn.onclick = function(){  
    slide1[0].style.position = "relative";
    slide1[0].style.left = "0%";
}
dot_btn.onclick = function(){  
    slide1[0].style.position = "relative";
    slide1[0].style.left = "-224%";
}
js_btn.onclick = function(){  
    slide1[0].style.position = "relative";
    slide1[0].style.left = "-336%";
}
ang_btn.onclick = function(){  
    slide1[0].style.position = "relative";
    slide1[0].style.left = "-448%";
}
bl_btn.onclick = function(){  
    slide1[0].style.position = "relative";
    slide1[0].style.left = "-560%";
}

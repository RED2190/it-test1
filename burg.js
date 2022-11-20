var btn = document.getElementById("burger-btn");
var burger = document.getElementsByClassName("burger");
var l1 = document.getElementsByClassName("line1");
var l2 = document.getElementsByClassName("line2");
var l3 = document.getElementsByClassName("line3");

var menu = document.getElementsByClassName("mob-nav");
l2[0].style.visibility = "visible";
var count = 0;

btn.onclick = function(){
    if(count == 0)
    {
        l2[0].style.opacity = "0";
        l2[0].style.transition = "ease .6s";
    
        l1[0].style.transform = "rotate(45deg) translate(4px, 5px)";
        l1[0].style.transition = "ease .5s";
        l3[0].style.transform = "rotate(-45deg) translate(2px, -4px)";
        l3[0].style.transition = "ease .5s";

        menu[0].style.right = "0";
        menu[0].style.transition = "ease .7s";
        count++;
    }
    else
    {
        l2[0].style.opacity = "1";
        l2[0].style.transition = "ease .6s";
    
        l1[0].style.transform = "rotate(0deg) translate(0px, 0px)";
        l1[0].style.transition = "ease .5s";
        l3[0].style.transform = "rotate(0deg) translate(0px, 0px)";
        l3[0].style.transition = "ease .5s";

        menu[0].style.right = "-100%";
        menu[0].style.transition = "ease .7s";
        count--;
    }

    
}
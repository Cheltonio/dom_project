// Add your code to this file

document.querySelector("body").style["background"] = "#00008b";
document.querySelector("h1").style["textDecoration"] = "underline";

let h2 = document.querySelector("h2");
h2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
h2.style["text-align"] = "center";

document.getElementById("bulbasaur_container").style["background"] = "#388E8E";

let imgs = document.getElementsByTagName("img");
for(let i=0; i<imgs.length;i++) {
    imgs[i].style["border"] = "dotted yellow";
}

let h3 = document.getElementsByTagName("h3");
for(let i=0; i<h3.length;i++) {
    h3[i].innerHTML += "!";
    h3[i].style["color"] = "#FDEFA6";
}

let footer = document.querySelector("footer");
footer.innerHTML = "All Star Code - DOM Project";
footer.style["fontStyle"] = "italic";
footer.style["textDecoration"] = "underline overline";
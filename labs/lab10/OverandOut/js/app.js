var color = [, "#3C9EE7", "#000000"];

document.querySelector("div").addEventListener(
    "mouseover", function () {

        document.querySelector("div").style.background
            = color[Math.floor(Math.random() * color.length)];
    })
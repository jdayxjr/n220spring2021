let element1 = document.getElementById("box1");
let element2 = document.getElementById("box2");
let element3 = document.getElementById("box3");
element1.addEventListener("click", Clicked);
element2.addEventListener("click", Clicked);
element3.addEventListener("click", Clicked);



function Clicked(event) {


    console.log(event.target);
    event.target.innerHTML = "clicked";
    element1.style.backgroundColor = "blue";
    element2.style.backgroundColor = "green";
    element3.style.backgroundColor = "red";

}

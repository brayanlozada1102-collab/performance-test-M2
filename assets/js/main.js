const date = new Date()
document.getElementById("year").innerText = date.getFullYear()
function showmenu() {
    var btn = document.getElementById("menu-toggle");
    var menu = document.getElementsByClassName("nav");
    if (menu[0].classList.contains("active")) {
        btn.innerText = "≡"
    } else {
        btn.innerText = "≡"
    }
    menu[0].classList.toggle("active")
}

// Write your Js code here 
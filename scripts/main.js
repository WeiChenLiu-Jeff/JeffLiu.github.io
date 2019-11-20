function expendMenu(e) {
    // toggle menu open/close
    document.getElementById("nav").classList.toggle("active");
}

function changeTopic(option) {
    // close menu
    document.getElementById("nav").classList.toggle("active");

    var topic = document.getElementById("topic");

    topic.style.opacity = 0;
    setTimeout(function () {
        topic.innerHTML = menu[option].title;
        topic.style.opacity = 1;
    }, 500)
    switchPanel(option);
}

function switchPanel(option) {
    
}
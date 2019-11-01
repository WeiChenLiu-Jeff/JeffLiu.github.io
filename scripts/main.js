function expendMenu(e) {
    // toggle menu open/close
    document.getElementById("nav").classList.toggle("active");
}

function changeTopic(topic) {
    // TODO: input option value and change main content.
    console.log('Option Clicked：' + topic);
    // close menu
    document.getElementById("nav").classList.toggle("active");
}
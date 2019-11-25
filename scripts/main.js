var currentPanel;

function expendMenu(e) {
    // toggle menu open/close
    document.getElementById('nav').classList.toggle('active');
}

function changeTopic(option) {

    // close menu
    document.getElementById('nav').classList.toggle('active');

    if (option != currentPanel) {
        var topic = document.getElementById('topic');

        topic.style.opacity = 0;

        setTimeout(function () {
            topic.innerHTML = menu[option].title;
            topic.style.opacity = 1;
        }, 500)
        switchPanel(option);
    }

}

function switchPanel(option) {

    var panels = document.getElementById('panels');
    var allPanel = document.getElementsByClassName('panel');

    panels.style.opacity = 0;

    setTimeout(function () {
        // remove 'active' class from all panel.
        for (i = 0; i < allPanel.length; i++) {
            allPanel[i].classList.remove('active');
        }
        // add 'active' class to select panel
        document.getElementById(menu[option].panel).classList.add('active');
        panels.style.opacity = 1;
    }, 500)

    currentPanel = option;

}
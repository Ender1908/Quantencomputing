var item = document.getElementById("mainBody");

// Create an array of modal elements
var modals = [
    document.getElementById('summary'),
    document.getElementById('sources'),
    document.getElementById('whatToDoAgainst'),
    document.getElementById('quantencomputerChanges'),
    document.getElementById('quantencomputer'),
    document.getElementById('example'),
    document.getElementById('shorAlogrithmus'),
    document.getElementById('euklAlgorithmus'),
    document.getElementById('rsa'),
    document.getElementById('why'),
    document.getElementById('einführung')
];

window.addEventListener("wheel", function (e) {
    // Check if any modal is open
    var isModalOpen = modals.some(modal => modal.classList.contains('show'));

    // If any modal is open, prevent scrolling
    if (isModalOpen) return;

    // Otherwise, apply scrolling behavior
    if (e.deltaY > 0) {
        item.scrollLeft += 100;
    } else {
        item.scrollLeft -= 100;
    }
});

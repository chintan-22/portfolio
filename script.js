var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablinks.classlist.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontents.classlist.remove("active-tab");
    }
    Event.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyE6XsOZ0BzSICpINuzAmh0sh7I5gR4xn5pBdGwwmrAUm2wVG4kWZl7u6TjDGit2yeo/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.outerHTML = "Message sent successfully"
            setTimeout(function() {
                msg.outerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
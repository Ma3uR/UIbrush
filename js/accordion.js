'use strict'

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = 0 + 'rem';
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.padding = 1 + 'rem';
        }
    });
}
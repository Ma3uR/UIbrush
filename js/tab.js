'use strict'

function openCity(evt, blockName) {
    // variables
    var i,
        tabcontent,
        tablinks;


    if (window.matchMedia('(min-width: 768px)').matches) {
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(blockName).style.display = "block";
        evt.currentTarget.className += " active";
    }
}
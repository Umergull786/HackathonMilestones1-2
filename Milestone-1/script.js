var button_toggle = document.getElementById("toggle-button");
var skiils = document.getElementById("skills");
button_toggle.addEventListener("click", function () {
    if (skiils.style.display === "none") {
        skiils.style.display = "block";
    }
    else {
        skiils.style.display = "none";
    }
});

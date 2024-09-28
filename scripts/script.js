feather.replace();

var modal = document.getElementById("modal");

var certificates = document.querySelectorAll(".certificate img");
var modalBody = document.getElementById("modal-body");
var overlay = document.getElementById("overlay");

certificates.forEach((certificate) => {
    certificate.addEventListener("click", function() {
        modal.style.display = "block";
        modalBody.src = this.src;
        overlay.style.display = "block";
        document.body.classList.add("not-scrollable");
    });
});

var closeButton = document.getElementsByClassName("close-button")[0];

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("not-scrollable");
})
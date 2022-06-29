const acc = document.getElementsByClassName("open");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let title = this.previousElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      title.style.color = "#000";
    } else {
      panel.style.display = "block";
      title.style.color = "#02818A";
    }
  });
}
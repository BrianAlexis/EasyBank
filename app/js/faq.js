const accordionButton = document.querySelector(".acordion__question");

// Para hacer que todos los que tengan la clase .acordion__question respondan al open
document.querySelectorAll(".acordion__question").forEach((item) => {

    item.addEventListener("click", (event) => {
    let accCollapse = item.nextElementSibling;

    if (!item.classList.contains("open")) {
    accCollapse.style.display = "block";
    let accHeight = accCollapse.clientHeight;

    setTimeout(() => {
        accCollapse.style.height = accHeight + "px";
    }, 1);

    accCollapse.classList = "acordion__colapse colapsing";

    setTimeout(() => {
        accCollapse.classList = "acordion__colapse colapse open";
    }, 500);
    } else {
    accCollapse.classList = "acordion__colapse colapsing";

    setTimeout(() => {
        accCollapse.style.height = "0px";
    }, 1);

    setTimeout(() => {
        accCollapse.classList = "acordion__colapse colapse";
        accCollapse.style.height = "";
        accCollapse.style.display = "";
    }, 500);
    }
    // SVG FLECHA
    item.classList.toggle("open");

    // // Contenido del collapse (.acordion__contet)
    // accCollapse.classList.toggle("open");
    });
});

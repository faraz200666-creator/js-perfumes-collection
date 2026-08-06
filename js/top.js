const topBtn = document.getElementById("topBtn");
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.classList.remove("hidden");
    } else {
        topBtn.classList.add("hidden");
    }

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = percent + "%";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
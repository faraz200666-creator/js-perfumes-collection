const modal = document.getElementById("productModal");

const testerPerfumes = [
    "Dreamy Romance",
    "Empire",
    "Midnight Silver",
    "Fawakeh",
    "Aura",
    "Rawaj Gold",
    "Victor",
    "Velvet",
    "Pearl Oud",
    "Sultan",
    "Royal Oud"
];

function openModal(product){

document.getElementById("modalImage").src = product.image;

document.getElementById("modalName").textContent = product.name;

document.getElementById("modalInspired").textContent =
"Inspired by " + product.inspired;

document.getElementById("modalPrice").textContent =
"Rs. " + product.price.toLocaleString();

document.getElementById("modalTop").textContent =
product.top.join(", ");

document.getElementById("modalMiddle").textContent =
product.middle.join(", ");

document.getElementById("modalBase").textContent =
product.base.join(", ");

document.getElementById("modalVibe").textContent =
product.vibe;

const testerBox = document.getElementById("testerOptions");
const testerList = document.getElementById("testerList");

testerList.innerHTML = "";

if (product.name === "5 Tester Pack") {

    testerBox.classList.remove("hidden");

    testerPerfumes.forEach(name => {

        testerList.innerHTML += `
        <label class="flex items-center gap-2 bg-black p-2 rounded-lg cursor-pointer">
            <input type="checkbox" value="${name}" class="testerCheck">
            <span>${name}</span>
        </label>
        `;

    });

} else {

    testerBox.classList.add("hidden");

}

const whatsappBtn = document.getElementById("modalWhatsapp");

if (product.name === "5 Tester Pack") {

    whatsappBtn.href = "#";

    whatsappBtn.onclick = function (e) {

        e.preventDefault();

        const selected = [...document.querySelectorAll(".testerCheck:checked")];

        if (selected.length !== 5) {
            alert("Please select exactly 5 fragrances.");
            return;
        }

        const perfumes = selected.map(x => "• " + x.value).join("%0A");

        window.open(
            `https://wa.me/923112211540?text=Hi, I want to order the 5 Tester Pack (Rs.1300).%0A%0AMy selected fragrances:%0A${perfumes}`,
            "_blank"
        );

    };

} else {

    whatsappBtn.onclick = null;

    whatsappBtn.href =
        `https://wa.me/923112211540?text=Hi, I want to order ${encodeURIComponent(product.name)}`;

}

document.querySelectorAll(".testerCheck").forEach(box => {

    box.addEventListener("change", () => {

        const checked = document.querySelectorAll(".testerCheck:checked");

        if (checked.length > 5) {

            box.checked = false;

            alert("You can select only 5 fragrances.");

        }

    });

});

modal.classList.remove("hidden");
modal.classList.add("flex");

}

document.getElementById("closeModal").onclick = () => {

modal.classList.add("hidden");

modal.classList.remove("flex");

};

window.onclick = function(e){

if(e.target===modal){

modal.classList.add("hidden");

modal.classList.remove("flex");

}

}
const modal = document.getElementById("productModal");

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

document.getElementById("modalWhatsapp").href =
`https://wa.me/923112211540?text=Hi, I want to order ${encodeURIComponent(product.name)}`;



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
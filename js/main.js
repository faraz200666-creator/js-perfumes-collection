const grid = document.getElementById("productsGrid");

function renderProducts(products) {

    grid.innerHTML = "";

    products.forEach(product => {

        grid.innerHTML += `

<div class="product-card bg-[#111] rounded-3xl overflow-hidden border border-yellow-700 hover:border-yellow-400 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]">

            <img src="${product.image}" class="w-full h-72 object-cover">

            <div class="p-6">

                <span class="text-xs bg-yellow-500 text-black px-3 py-1 rounded-full">
                    ${product.category}
                </span>

                <h3 class="text-2xl font-bold text-yellow-400 mt-4">
                    ${product.name}
                </h3>

                <p class="text-gray-400 mt-2">
                    Inspired by ${product.inspired}
                </p>

                <div class="flex items-center mt-4 text-yellow-400">
                    ★★★★★
                </div>

                <p class="text-3xl font-bold mt-5">
                    Rs. ${product.price.toLocaleString()}
                </p>

                <div class="flex gap-3 mt-6">

                  <button
onclick="openModal(perfumes.find(x => x.id === ${product.id}))"
class="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-full font-semibold">

View Details

</button>

                    <a
                        href="https://wa.me/923112211540?text=Hi, I want to order ${encodeURIComponent(product.name)}"
                        target="_blank"
                        class="flex-1 text-center border border-yellow-500 hover:bg-yellow-500 hover:text-black py-3 rounded-full transition">
                        WhatsApp
                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

renderProducts(perfumes);

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").remove();

        }, 500);

    }, 1800);

});

function animateCounter(id, end, suffix = "") {

    let current = 0;
    const element = document.getElementById(id);

    const timer = setInterval(() => {

        current++;

        element.textContent = current + suffix;

        if (current >= end) clearInterval(timer);

    }, 50);

}

window.addEventListener("load", () => {

    animateCounter("countPerfumes", 11, "+");
    animateCounter("countBottle", 50, "ml");
    animateCounter("countQuality", 100, "%");

});
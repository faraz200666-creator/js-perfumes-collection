
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

function openModal(product) {

    // ================= IMAGE CAROUSEL =================

    const modalImage = document.getElementById("modalImage");
    const modalThumbnails = document.getElementById("modalThumbnails");

    const productGallery =
        product.gallery && product.gallery.length > 0
            ? product.gallery
            : [product.image];

    modalImage.src = productGallery[0];
    modalThumbnails.innerHTML = "";

    productGallery.forEach((image, index) => {

        const thumbnail = document.createElement("img");

        thumbnail.src = image;
        thumbnail.alt = product.name;

        thumbnail.className =
            "modal-thumbnail" + (index === 0 ? " active" : "");

        thumbnail.addEventListener("click", () => {

            modalImage.src = image;

            modalThumbnails
                .querySelectorAll(".modal-thumbnail")
                .forEach(item => item.classList.remove("active"));

            thumbnail.classList.add("active");

        });

        modalThumbnails.appendChild(thumbnail);
    });


    // ================= PRODUCT DETAILS =================

    document.getElementById("modalName").textContent =
        product.name;

    document.getElementById("modalInspired").textContent =
        "Inspired by " + product.inspired;

    document.getElementById("modalPrice").textContent =
        "Rs. " + product.price.toLocaleString();

    document.getElementById("modalSize").textContent =
        product.size;

    document.getElementById("modalDelivery").textContent =
        product.name === "5 Tester Pack"
            ? "Delivery Charges Apply"
            : "Free in Karachi";

    document.getElementById("modalLasting").textContent =
        product.lasting;

    document.getElementById("modalTop").textContent =
        product.top.join(", ");

    document.getElementById("modalMiddle").textContent =
        product.middle.join(", ");

    document.getElementById("modalBase").textContent =
        product.base.join(", ");

    document.getElementById("modalVibe").textContent =
        product.vibe;


    // ================= TESTER PACK =================

    const testerBox = document.getElementById("testerOptions");
    const testerList = document.getElementById("testerList");
    const testerQuantity = document.getElementById("testerQuantity");
    const testerDelivery = document.getElementById("testerDelivery");
    const whatsappBtn = document.getElementById("modalWhatsapp");

    if (product.name === "5 Tester Pack") {

        testerBox.classList.remove("hidden");

        // Generate separate fragrance selection for each box
        function renderTesterBoxes() {

            const quantity = Number(testerQuantity.value);

            testerList.innerHTML = "";

            for (let boxNumber = 1; boxNumber <= quantity; boxNumber++) {

                const boxContainer = document.createElement("div");

                boxContainer.className =
                    "bg-[#111] border border-yellow-700 rounded-xl p-4 mb-5";

                boxContainer.innerHTML = `
                    <h4 class="text-yellow-400 font-bold mb-3">
                        Box ${boxNumber} — Choose 5 Fragrances
                    </h4>

                    <p class="text-sm text-gray-400 mb-3"
                       id="boxCount${boxNumber}">
                        Selected: 0 / 5
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        ${testerPerfumes.map(name => `
                            <label class="flex items-center gap-2 bg-black p-2 rounded-lg cursor-pointer">
                                <input
                                    type="checkbox"
                                    value="${name}"
                                    class="testerCheck"
                                    data-box="${boxNumber}"
                                >
                                <span>${name}</span>
                            </label>
                        `).join("")}
                    </div>
                `;

                testerList.appendChild(boxContainer);
            }

            // Maximum 5 fragrances per box
            testerList.querySelectorAll(".testerCheck").forEach(box => {

                box.addEventListener("change", () => {

                    const boxNumber = box.dataset.box;

                    const checked = testerList.querySelectorAll(
                        `.testerCheck[data-box="${boxNumber}"]:checked`
                    );

                    if (checked.length > 5) {

                        box.checked = false;

                        alert(
                            `You can select only 5 fragrances for Box ${boxNumber}.`
                        );

                    }

                    const currentCount = testerList.querySelectorAll(
                        `.testerCheck[data-box="${boxNumber}"]:checked`
                    ).length;

                    document.getElementById(
                        `boxCount${boxNumber}`
                    ).textContent = `Selected: ${currentCount} / 5`;

                });
            });

            // Update price and delivery
            const total = product.price * quantity;

            document.getElementById("modalPrice").textContent =
                "Rs. " + total.toLocaleString();

            testerDelivery.textContent =
                quantity === 2
                    ? "FREE Delivery"
                    : "Delivery Charges Apply";

            // Update main delivery information
            document.getElementById("modalDelivery").textContent =
                quantity === 2
                    ? "FREE Delivery"
                    : "Delivery Charges Apply";

            testerDelivery.className =
                quantity === 2
                    ? "text-sm text-green-400 font-bold mt-3"
                    : "text-sm text-gray-400 mt-3";

        }

        // Initial display: 1 box
        testerQuantity.value = "1";
        renderTesterBoxes();

        // Change quantity
        testerQuantity.onchange = renderTesterBoxes;


        // ================= TESTER WHATSAPP ORDER =================

        whatsappBtn.href = "#";

        whatsappBtn.onclick = function (e) {

            e.preventDefault();

            const quantity = Number(testerQuantity.value);

            let message =
                `Hi, I want to order ${quantity} Tester Box${quantity > 1 ? "es" : ""}.\n\n`;

            for (let boxNumber = 1; boxNumber <= quantity; boxNumber++) {

                const selected = [
                    ...testerList.querySelectorAll(
                        `.testerCheck[data-box="${boxNumber}"]:checked`
                    )
                ];

                if (selected.length !== 5) {

                    alert(
                        `Please select exactly 5 fragrances for Box ${boxNumber}.`
                    );

                    return;
                }

                message += `Box ${boxNumber}:\n`;

                selected.forEach(item => {
                    message += `• ${item.value}\n`;
                });

                message += "\n";
            }

            const total = product.price * quantity;

            message += `Total: Rs. ${total.toLocaleString()}\n`;

            message += quantity === 2
                ? "Delivery: FREE"
                : "Delivery: Delivery Charges Apply";

            const whatsappURL =
                "https://wa.me/923112211540?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");
        };

    } else {

        // Other perfumes remain unchanged
        testerBox.classList.add("hidden");

        whatsappBtn.onclick = null;

        whatsappBtn.href =
            "https://wa.me/923112211540?text=" +
            encodeURIComponent(
                "Hi, I want to order " + product.name
            );

    }


    // ================= OPEN MODAL =================

    modal.classList.remove("hidden");
    modal.classList.add("flex");

}


// ================= CLOSE MODAL =================

document.getElementById("closeModal").onclick = () => {

    modal.classList.add("hidden");
    modal.classList.remove("flex");

};

window.onclick = function (e) {

    if (e.target === modal) {

        modal.classList.add("hidden");
        modal.classList.remove("flex");

    }

};

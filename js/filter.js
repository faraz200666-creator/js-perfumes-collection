const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Add active class
        button.classList.add("active");

        const category = button.textContent.trim().toLowerCase();

        if (category === "all") {
            renderProducts(perfumes);
            return;
        }

        const filtered = perfumes.filter(product =>
            product.category.toLowerCase() === category
        );

        renderProducts(filtered);

    });

});
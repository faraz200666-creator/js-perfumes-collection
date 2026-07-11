const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase();

        const filtered = perfumes.filter(product => {

            return (
                product.name.toLowerCase().includes(value) ||
                product.inspired.toLowerCase().includes(value) ||
                product.category.toLowerCase().includes(value)
            );

        });

        renderProducts(filtered);

    });
}
document.addEventListener("DOMContentLoaded", function() {
    // Função para filtrar os produtos
    function filterProducts(category) {
        const allProducts = document.querySelectorAll(".produtos");

        allProducts.forEach(productSection => {
            if (category === "all" || productSection.dataset.category === category) {
                productSection.style.display = "block";
            } else {
                productSection.style.display = "none";
            }
        });
    }

    // Adiciona evento de clique nos links do menu de categorias
    const categoryLinks = document.querySelectorAll(".category-link");

    categoryLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const category = event.target.dataset.category;
            filterProducts(category);
        });
    });

    // Filtra os produtos para mostrar todos inicialmente
    filterProducts("all");
});

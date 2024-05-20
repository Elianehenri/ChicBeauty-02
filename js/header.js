
/*document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar o conteúdo do header.html e inseri-lo no elemento #header-container
    function loadHeader() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("header-container").innerHTML = this.responseText;
                setupHeaderEvents(); // Configura os eventos após carregar o cabeçalho
            }
        };
        xhttp.open("GET", "../pages/header.html", true);
        xhttp.send();
    }

    // Função para carregar o conteúdo do carousel.html e inseri-lo no elemento #carousel-container
    function loadCarousel() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("carousel-container").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "../pages/carousel.html", true);
        xhttp.send();
    }

    // Função para carregar o conteúdo do produtos.html e inseri-lo no elemento #produtos-container
    function loadProdutos() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("produtos-container").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "../pages/produtos.html", true);
        xhttp.send();
    }

    // Função para carregar o conteúdo do footer.html e inseri-lo no elemento #footer-container
    function loadFooter() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("footer-container").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "../pages/footer.html", true);
        xhttp.send();
    }

    // Chamar as funções para carregar o header, o carousel, os produtos e o footer assim que o documento estiver pronto
    loadHeader();
    loadCarousel();
    loadProdutos();
    loadFooter();

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

    // Configura eventos do cabeçalho após carregar o conteúdo
    function setupHeaderEvents() {
        // Adiciona evento de clique nos links do menu de categorias
        const categoryLinks = document.querySelectorAll(".category-link");

        categoryLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const category = event.target.dataset.category;
                filterProducts(category);

                // Fecha o menu após selecionar a categoria no mobile
                let menu = document.querySelector(".menu");
                menu.classList.remove("menu-selected");
            });
        });

        // Filtra os produtos para mostrar todos inicialmente
        filterProducts("all");

        // Configura eventos para o menu móvel
        let iconMobile = document.querySelector(".icon-mobile span");
        let buttonClose = document.querySelector(".menu span.close");

        if (iconMobile) {
            iconMobile.addEventListener("click", () => {
                document.querySelector(".menu").classList.add("menu-selected");
                buttonClose.style.display = "flex";
            });
        }

        if (buttonClose) {
            buttonClose.addEventListener("click", (event) => {
                let menu = document.querySelector(".menu");

                // Adiciona a animação de saída
                menu.style.animation = "slideOut 0.2s forwards";

                // Aguarda o término da animação e remove a classe após isso
                setTimeout(() => {
                    menu.style.animation = ""; // Limpa a animação
                    menu.classList.remove("menu-selected");
                }, 200); // Tempo da animação (0.2s) em milissegundos

                // Impede a propagação do evento para evitar comportamento inesperado
                event.stopPropagation();
            });
        }
    }
});

//count
function updateCartCounter(count) {
    const cartCounter = document.getElementById("cart-counter");
    cartCounter.textContent = count;
} */

document.addEventListener("DOMContentLoaded", function() {
    // Funções para carregar conteúdo
    function loadHeader() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("header-container").innerHTML = this.responseText;
                setupHeaderEvents();
            }
        };
        xhttp.open("GET", "../pages/header.html", true);
        xhttp.send();
    }

    function loadCarousel() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("carousel-container").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "../pages/carousel.html", true);
        xhttp.send();
    }

    function loadProdutos() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("produtos-container").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "../pages/produtos.html", true);
        xhttp.send();
    }

    function loadFooter() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("footer-container").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "../pages/footer.html", true);
        xhttp.send();
    }

    loadHeader();
    loadCarousel();
    loadProdutos();
    loadFooter();

    // Função para filtrar produtos
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

    // Configura eventos do cabeçalho após carregar conteúdo
    function setupHeaderEvents() {
        const categoryLinks = document.querySelectorAll(".category-link");

        categoryLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const category = event.target.dataset.category;
                filterProducts(category);

                let menu = document.querySelector(".menu");
                menu.classList.remove("menu-selected");
            });
        });

        filterProducts("all");

        let iconMobile = document.querySelector(".icon-mobile span");
        let buttonClose = document.querySelector(".menu span.close");

        if (iconMobile) {
            iconMobile.addEventListener("click", () => {
                document.querySelector(".menu").classList.add("menu-selected");
                buttonClose.style.display = "flex";
            });
        }

        if (buttonClose) {
            buttonClose.addEventListener("click", (event) => {
                let menu = document.querySelector(".menu");
                menu.style.animation = "slideOut 0.2s forwards";
                setTimeout(() => {
                    menu.style.animation = "";
                    menu.classList.remove("menu-selected");
                }, 200);
                event.stopPropagation();
            });
        }
    }
});

// Função para atualizar o contador de itens do carrinho
function updateCartCounter(count) {
    const cartCounter = document.getElementById("cart-counter");
    const mobileCartCounter = document.getElementById("mobile-cart-counter");
    cartCounter.textContent = count;
    mobileCartCounter.textContent = count;
}
 


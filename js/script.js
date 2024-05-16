document.addEventListener("DOMContentLoaded", function() {
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

    // Configura os eventos do cabeçalho após carregar o conteúdo

    function setupHeaderEvents() {
        let iconMobile = document.querySelector(".icon-mobile span");
        let buttonClose = document.querySelector(".menu span.close");

        if (iconMobile) {
            iconMobile.addEventListener("click", () => {
                document.querySelector(".menu").classList.add("menu-selected");
                document.querySelector(".cad-log").style.display = "flex";
                buttonClose.style.display = "flex";
            });
        }

        if (buttonClose) {
            buttonClose.addEventListener("click", () => {
                let menu = document.querySelector(".menu");

                // Adiciona a animação de saída
                menu.style.animation = "slideOut 0.2s forwards";

                // Aguarda o término da animação e remove a classe após isso
                setTimeout(() => {
                    menu.style.animation = ""; // Limpa a animação
                    menu.classList.remove("menu-selected");
                }, 200); // Tempo da animação (0.5s) em milissegundos

                // Impede a propagação do evento para evitar comportamento inesperado
                event.stopPropagation();
            });
        }
    }

    // Chamar as funções para carregar o header, o carousel, os produtos e o footer assim que o documento estiver pronto
    loadHeader();
    loadCarousel();
    loadProdutos();
    loadFooter();
   
});

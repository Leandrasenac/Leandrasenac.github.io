document.addEventListener("DOMContentLoaded", function () {
    // Função para animar a foto de perfil ao carregar a página
    const fotoPerfil = document.querySelector("#foto");
    
    // Atraso para aplicar o efeito de fade-in na imagem
    setTimeout(function () {
        fotoPerfil.classList.add("fade-in");
    }, 500);

    // Função para alternar a visibilidade de informações adicionais sobre você
    const btnMostrarMais = document.createElement("button");
    btnMostrarMais.textContent = "Mostrar Mais";
    btnMostrarMais.classList.add("btn", "btn-primary");
    
    // Adicionar o botão após a descrição de "Sobre Mim"
    const descricaoSobreMim = document.querySelector("#sobre-mim .container");
    descricaoSobreMim.appendChild(btnMostrarMais);

    // Criando a seção de informações adicionais que será exibida ao clicar no botão
    const informacoesAdicionais = document.createElement("div");
    informacoesAdicionais.innerHTML = `
        <h4>Sobre minha trajetória</h4>
        <p>
            Ao longo dos últimos anos, venho me dedicando a aprender novas tecnologias e a me desenvolver como pessoa.
            Acredito que a união entre aprendizado contínuo e a experiência prática será a chave para alcançar meus objetivos.
        </p>
    `;
    informacoesAdicionais.classList.add("hidden");

    descricaoSobreMim.appendChild(informacoesAdicionais);

    // Funcionalidade para mostrar ou esconder as informações adicionais
    btnMostrarMais.addEventListener("click", function () {
        informacoesAdicionais.classList.toggle("hidden");

        // Alterar o texto do botão
        if (informacoesAdicionais.classList.contains("hidden")) {
            btnMostrarMais.textContent = "Mostrar Mais";
        } else {
            btnMostrarMais.textContent = "Mostrar Menos";
        }
    });

    // Funcionalidade para rolagem suave nos links de navegação
    const linksNavegacao = document.querySelectorAll("a[href^='#']");

    linksNavegacao.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const destino = document.querySelector(this.getAttribute("href"));

            // Rolagem suave até a seção
            destino.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Função para carregar as experiências do arquivo JSON
document.addEventListener("DOMContentLoaded", function() {
    // Carregar o arquivo JSON contendo as experiências
    fetch('experiencias.json')
        .then(response => response.json())
        .then(data => {
            // Seleciona o elemento onde as experiências serão inseridas
            const experienciaContainer = document.querySelector('#experiencia .container');

            // Iterar sobre cada experiência do JSON e adicionar ao HTML
            data.experiencias.forEach(experiencia => {
                // Criar um novo item de experiência
                const experienciaItem = document.createElement('div');
                experienciaItem.classList.add('experiencia-item');

                // Adicionar o título da experiência
                const titulo = document.createElement('h4');
                titulo.textContent = experiencia.titulo;
                experienciaItem.appendChild(titulo);

                // Adicionar o período da experiência
                const periodo = document.createElement('p');
                periodo.innerHTML = `<strong>Período:</strong> ${experiencia.periodo}`;
                experienciaItem.appendChild(periodo);

                // Adicionar a descrição da experiência
                const descricao = document.createElement('p');
                descricao.textContent = experiencia.descricao;
                experienciaItem.appendChild(descricao);

                // Adicionar o item de experiência ao container
                experienciaContainer.appendChild(experienciaItem);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo JSON:", error);
        });
});

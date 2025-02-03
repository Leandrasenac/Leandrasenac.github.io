fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Preencher nome e slogan
    document.getElementById('nome').textContent = data.nome;
    document.getElementById('slogan').textContent = data.slogan;

    // Habilidades
    const habilidadesLista = document.getElementById('habilidades-lista');
    data.habilidades.forEach(habilidade => {
      const div = document.createElement('div');
      div.classList.add('habilidade-item');
      div.innerHTML = `
        <img src="${habilidade.icon}" alt="${habilidade.nome}">
        <h3>${habilidade.nome}</h3>
        <p>Nível: ${habilidade.nivel}%</p>
      `;
      habilidadesLista.appendChild(div);
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

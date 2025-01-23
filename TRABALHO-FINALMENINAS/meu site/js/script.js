// Carregar o arquivo JSON com as informações
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Preenche o nome e slogan
        document.getElementById('name').textContent = data.name;
        document.getElementById('slogan').textContent = data.slogan;

        // Preenche a foto de perfil e descrição
        document.getElementById('foto').src = data.profileImage;
        document.getElementById('descricao').textContent = data.description;

        // Preenche os links sociais
        const socialLinks = document.getElementById('social-links');
        if (data.socialLinks.instagram) {
            socialLinks.innerHTML += `<a href="${data.socialLinks.instagram}" target="_blank">Instagram</a>`;
        }

        // Preenche as habilidades
        const skills = document.getElementById('skills');
        skills.innerHTML = data.skills.map(skill => `<p>${skill}</p>`).join('');

        // Preenche a formação acadêmica
        const educationList = document.getElementById('educacao');
        educationList.innerHTML = data.education.map(edu => `<li>${edu}</li>`).join('');

        // Preenche a experiência
        const experienceList = document.getElementById('experiencias');
        experienceList.innerHTML = data.experience.map(exp => `<li>${exp}</li>`).join('');

        // Preenche instruções de contato
        document.getElementById('instrucoes-contato').textContent = data.contactInstructions;

        // Preenche créditos do rodapé
        document.getElementById('credits').textContent = data.credits;
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Dados dos artistas
    const artistas = {
        'jorge-ben-jor': {
            nome: 'Jorge Ben Jor',
            imagem: 'https://placehold.co/400x300/006400/FFFFFF?text=Jorge+Ben+Jor',
            descricao: 'Jorge Duílio Lima, mais conhecido como Jorge Ben Jor, é um cantor, violonista e compositor brasileiro. Nascido no Rio de Janeiro em 1942, é conhecido por seus ritmos animados e letras criativas que misturam samba, rock, funk e ritmos africanos.',
            musicas: ['Mas Que Nada', 'País Tropical', 'Chove Chuva', 'Taj Mahal', 'Balança Pema']
        },
        'cazuza': {
            nome: 'Cazuza',
            imagem: 'https://placehold.co/400x300/000080/FFFFFF?text=Cazuza',
            descricao: 'Agenor de Miranda Araújo Neto, conhecido como Cazuza, foi um poeta, compositor e cantor brasileiro. Nascido no Rio de Janeiro em 1958, ficou famoso como vocalista da banda Barão Vermelho e posteriormente em carreira solo. Suas letras profundas e emocionais marcaram a música brasileira.',
            musicas: ['Exagerado', 'Brasil', 'Codinome Beija-Flor', 'O Tempo Não Para', 'Ideologia']
        },
        'ney-matogrosso': {
            nome: 'Ney Matogrosso',
            imagem: 'https://placehold.co/400x300/8B0000/FFFFFF?text=Ney+Matogrosso',
            descricao: 'Ney de Souza Pereira, conhecido como Ney Matogrosso, é um cantor e performer brasileiro. Nascido em Mato Grosso em 1941, é conhecido por sua voz aguda e performances teatrais marcantes. Iniciou sua carreira no grupo Secos & Molhados.',
            musicas: ['Homem com H', 'Rosa de Hiroshima', 'Sangue Latino', 'Tô', 'Gata em Teto de Zincado']
        },
        'cassia-eller': {
            nome: 'Cássia Eller',
            imagem: 'https://placehold.co/400x300/4B0082/FFFFFF?text=Cassia+Eller',
            descricao: 'Cássia Rejane Eller foi uma cantora, violonista e compositora brasileira. Nascida no Rio de Janeiro em 1962, ficou conhecida por sua voz grave e interpretações intensas. Sua carreira foi marcada por versões de rock nacional e internacional e composições autorais.',
            musicas: ['Malandragem', 'Por Enquanto', 'O Segundo Sol', 'Relampiano', 'Palavras ao Vento']
        },
        'gilberto-gil': {
            nome: 'Gilberto Gil',
            imagem: 'https://placehold.co/400x300/FF8C00/FFFFFF?text=Gilberto+Gil',
            descricao: 'Gilberto Passos Gil Moreira, conhecido como Gilberto Gil, é um cantor, compositor, multi-instrumentista e político brasileiro. Nascido na Bahia em 1942, foi um dos líderes do movimento tropicalista nos anos 60. Sua música incorpora elementos de samba, reggae, forró e ritmos africanos.',
            musicas: ['Toda Menina Baiana', 'Andar com Fé', 'Expresso 2222', 'Refazenda', 'Realce']
        },
        'djavan': {
            nome: 'Djavan',
            imagem: 'https://placehold.co/400x300/9932CC/FFFFFF?text=Djavan',
            descricao: 'Djavan Caetano Viana é um cantor, compositor e violonista brasileiro. Nascido em Alagoas in 1949, é conhecido por sua música que mistura samba, jazz, pop e ritmos latinos. Suas composições sofisticadas e sua voz suave o tornaram um dos artistas mais respeitados da MPB.',
            musicas: ['Flor de Lis', 'Se...', 'Oceano', 'Açaí', 'Lilás']
        },
        'adoniran-barbosa': {
            nome: 'Adoniran Barbosa',
            imagem: 'https://placehold.co/400x300/2F4F4F/FFFFFF?text=Adoniran+Barbosa',
            descricao: 'João Rubinato, conhecido como Adoniran Barbosa, foi um compositor, cantor, humorista e ator brasileiro. Nascido em São Paulo em 1910, é um dos maiores representantes do samba paulistano. Suas composições retratam o cotidiano dos moradores da cidade de São Paulo.',
            musicas: ['Trem das Onze', 'Saudosa Maloca', 'Tiro ao Álvaro', 'Joga a Chave', 'Iracema']
        },
        'bezerra-da-silva': {
            nome: 'Bezerra da Silva',
            imagem: 'https://placehold.co/400x300/8B4513/FFFFFF?text=Bezerra+da+Silva',
            descricao: 'Bezerra da Silva foi um cantor e compositor brasileiro. Nascido em Pernambuco em 1927, ficou conhecido como o "representante do povo" por suas músicas que retratavam a vida nas favelas cariocas. Seu estilo mistura samba, coco e partido-alto.',
            musicas: ['Malandragem Dá um Tempo', 'Defunto Caguete', 'Meu Pirão Primeiro', 'Bicho Feroz', 'Sequestraram Minha Sogra']
        }
    };

    // Elementos do DOM
    const modal = document.getElementById('modal-artista');
    const infoArtista = document.getElementById('info-artista');
    const fecharModal = document.querySelector('.fechar-modal');
    const btnSaibaMais = document.querySelector('.btn-saiba-mais');
    const buscaArtista = document.getElementById('busca-artista');
    const artistasCards = document.querySelectorAll('.artista-card');

    // Abrir modal com informações do artista
    function abrirModal(artistaId) {
        const artista = artistas[artistaId];
        if (artista) {
            infoArtista.innerHTML = `
                <div class="artista-info">
                    <img src="${artista.imagem}" alt="${artista.nome}">
                    <div class="artista-detalhes">
                        <h2>${artista.nome}</h2>
                        <p>${artista.descricao}</p>
                        <h3>Principais Músicas:</h3>
                        <ul>
                            ${artista.musicas.map(musica => `<li>${musica}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            modal.style.display = 'block';
        }
    }

    // Fechar modal
    fecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fechar modal clicando fora dele
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Adicionar evento de clique aos cards dos artistas
    artistasCards.forEach(card => {
        card.addEventListener('click', function() {
            const artistaId = this.getAttribute('data-artista');
            abrirModal(artistaId);
        });
    });

    // Evento para o botão "Saiba mais" do destaque
    btnSaibaMais.addEventListener('click', function() {
        const artistaId = this.getAttribute('data-artista');
        abrirModal(artistaId);
    });

    // Filtro de busca de artistas
    buscaArtista.addEventListener('input', function() {
        const termo = this.value.toLowerCase();
        
        artistasCards.forEach(card => {
            const nomeArtista = card.querySelector('h3').textContent.toLowerCase();
            if (nomeArtista.includes(termo)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Simular carregamento de áudio (apenas para demonstração)
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.addEventListener('play', function() {
            console.log('Tocando: ' + this.previousElementSibling.textContent);
        });
    });
});

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem: new URL("imagens/templo-aba.jpg", document.baseURI).href
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem: new URL("imagens/templo-manti.jpg", document.baseURI).href
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem: new URL("imagens/templo-payson.jpg", document.baseURI).href
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem: new URL("imagens/templo-yigo.jpg", document.baseURI).href
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem: new URL("imagens/templo-washington.jpeg", document.baseURI).href
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem: new URL("imagens/templo-lima.jpg", document.baseURI).href
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem: new URL("imagens/templo-mexico.jpg", document.baseURI).href
    },
    {
        nomeDoTemplo: "Campinas Brasil",
        localizacao: "Campinas, São Paulo, Brasil",
        consagracao: "2002, 17 de maio",
        area: 48100,
        urlDaImagem: new URL("imagens/templo-campinas.jpg", document.baseURI).href
    },
    {
        nomeDoTemplo: "São Paulo Brasil",
        localizacao: "São Paulo, Brasil",
        consagracao: "1978, 30 de outubro",
        area: 59246,
        urlDaImagem: new URL("imagens/templo-sao-paulo.jpg", document.baseURI).href
    },
    {
        nomeDoTemplo: "Salt Lake City",
        localizacao: "Salt Lake City, Utah, Estados Unidos",
        consagracao: "1893, 6 de abril",
        area: 253015,
        urlDaImagem: new URL("imagens/templo-salt-lake.jpg", document.baseURI).href
    }
];

// Menu responsivo
const menuButton = document.querySelector('#menu-button');
const menuPrincipal = document.querySelector('#menu-principal');

menuButton.addEventListener('click', () => {
    const menuAberto = menuPrincipal.classList.toggle('aberto');

    menuButton.textContent = menuAberto ? '✕' : '☰';

    menuButton.setAttribute('aria-expanded', menuAberto);

    menuButton.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
});

// Elementos da página
const galeria = document.querySelector('#galeria');
const titulo = document.querySelector('main h1');

// Criação dinâmica dos cartões
function criarCartoes(listaTemplos) {
    galeria.innerHTML = '';

    listaTemplos.forEach(templo => {
        const cartao = document.createElement('section');
        cartao.classList.add('cartao-templo');

        const nome = document.createElement('h2');
        nome.textContent = templo.nomeDoTemplo;

        const informacoes = document.createElement('div');
        informacoes.classList.add('informacoes-templo');

        informacoes.innerHTML = `
            <p><strong>Localização:</strong> ${templo.localizacao}</p>
            <p><strong>Consagração:</strong> ${templo.consagracao}</p>
            <p><strong>Área:</strong> ${templo.area.toLocaleString('pt-BR')} pés²</p>
        `;

        const imagem = document.createElement('img');
        imagem.alt = `Templo de ${templo.nomeDoTemplo}`;
        imagem.loading = 'lazy';
        imagem.width = 400;
        imagem.height = 250;
        imagem.src = templo.urlDaImagem;

        cartao.appendChild(nome);
        cartao.appendChild(informacoes);
        cartao.appendChild(imagem);

        galeria.appendChild(cartao);
    });
}

// Filtros dos templos
const filtros = {
    inicio: () => true,
    antigos: templo => parseInt(templo.consagracao) < 1900,
    novos: templo => parseInt(templo.consagracao) > 2000,
    grandes: templo => templo.area > 90000,
    pequenos: templo => templo.area < 10000
};

const links = document.querySelectorAll('.menu-principal a');

links.forEach(link => {
    link.addEventListener('click', evento => {
        evento.preventDefault();

        const filtro = link.id;

        titulo.textContent = link.textContent;

        criarCartoes(templos.filter(filtros[filtro]));

        links.forEach(item => item.classList.remove('ativo'));

        link.classList.add('ativo');

        menuPrincipal.classList.remove('aberto');
        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu de navegação');
    });
});

// Exibe todos os templos ao abrir a página
criarCartoes(templos);
document.querySelector('#inicio').classList.add('ativo');

// Informações do rodapé
document.querySelector('#anoatual').textContent =
    new Date().getFullYear();

document.querySelector('#ultimaModificacao').textContent =
    `Última modificação: ${document.lastModified}`;

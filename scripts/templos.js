
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

document.querySelector('#anoatual').textContent = new Date().getFullYear();

document.querySelector('#ultimaModificacao').textContent =
    `Última modificação: ${document.lastModified}`;

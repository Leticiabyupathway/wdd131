
const anoAtual = new Date().getFullYear();

const elementoAno = document.querySelector("#anoatual, #currentyear");

const elementoModificacao = document.querySelector("#ultimaModificacao, #lastModified");

if (elementoAno) {
    elementoAno.textContent = anoAtual;
}

if (elementoModificacao) {
    elementoModificacao.textContent =
        `Última modificação: ${document.lastModified}`;
}

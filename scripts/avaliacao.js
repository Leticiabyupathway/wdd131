
let contador = Number(localStorage.getItem("totalAvaliacoes")) || 0;

const parametros = new URLSearchParams(window.location.search);

if (parametros.has("produto") &&
    parametros.has("classificacao") &&
    parametros.has("data")) {

    contador++;

    localStorage.setItem("totalAvaliacoes", contador);
}

document.querySelector("#contador").textContent = contador;

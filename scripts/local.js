
// Dados do clima
const temperatura = 28;
const velocidadeVento = 12;

// Função para calcular a sensação térmica
function calcularSensacaoTermica(temp, vento) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(vento, 0.16)) + (0.3965 * temp * Math.pow(vento, 0.16));
}

// Verificar se as condições permitem o cálculo
const sensacao = document.querySelector("#sensacao");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacao.textContent = calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1) + " °C";
} else {
    sensacao.textContent = "N/A";
}

// Ano atual
document.querySelector("#ano").textContent = new Date().getFullYear();

// Data da última modificação
const dataModificacao = new Date(document.lastModified);

document.querySelector("#modificado").textContent = dataModificacao.toLocaleDateString("pt-BR");

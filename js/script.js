const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calculando o faturamento total
const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

// Função para calcular o percentual
function calcularPercentual(faturamento, total) {
    return ((faturamento / total) * 100).toFixed(2);
}

// Preenchendo a tabela com os resultados
const resultadoElement = document.getElementById('resultado');
Object.keys(faturamentoEstados).forEach(estado => {
    const faturamento = faturamentoEstados[estado];
    const percentual = calcularPercentual(faturamento, totalFaturamento);
    
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${estado}</td>
        <td>R$ ${faturamento.toFixed(2)}</td>
        <td>${percentual} %</td>
    `;
    resultadoElement.appendChild(row);
});

// Exibindo o total e a soma do percentual
const resultadoGlobal = document.getElementById('resultadoGlobal');
resultadoGlobal.innerHTML = `
    <strong>Faturamento Total: R$ ${totalFaturamento.toFixed(2)}</strong><br>
    <strong>Total de Percentuais: 100%</strong>
`;
// 1. Dados Iniciais
let nome = prompt("Qual o seu nome?");

let renda = Number(prompt("Qual sua renda mensal?"));
while (isNaN(renda) || renda <= 0) {
    renda = Number(prompt("Por favor, digite um número válido para a renda:"));
}

let qtdDespesas = Number(prompt("Quantas despesas (1 a 5)?"));
// Regra de limite
if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;

let totalDespesas = 0;

// 2 e 3. Lançamento com Validação e For
for (let i = 1; i <= qtdDespesas; i++) {
    let valor = Number(prompt(`Digite o valor da despesa ${i}:`));
    
    while (isNaN(valor) || valor < 0) {
        valor = Number(prompt(`Valor inválido. Digite novamente a despesa ${i}:`));
    }
    totalDespesas += valor;
}

// 4. Análise com If/Else
let sobra = renda - totalDespesas;
let mensagem = "";

if (totalDespesas > renda) {
    mensagem = "Atenção: você gastou mais do que ganhou.";
} else {
    let margem30 = renda * 0.30;
    if (sobra >= margem30) {
        mensagem = "Ótimo: boa margem de sobra.";
    } else {
        mensagem = "Ok: dá para melhorar a sobra.";
    }
}

// 5. Saída Final
let resultadoFinal = `
--- RESUMO DO ORÇAMENTO ---
Usuário: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Classificação: ${mensagem}
`;

alert(resultadoFinal);
console.log(resultadoFinal);
let nome = prompt("Qual o seu nome?");
let renda = Number(prompt("Sua renda mensal:"));
while (isNaN(renda)) { renda = Number(prompt("Digite um número válido:")); }

let qtd = Number(prompt("Quantas despesas (1-5)?"));
if (qtd < 1) qtd = 1; if (qtd > 5) qtd = 5;

let total = 0;
for (let i = 1; i <= qtd; i++) {
    let v = Number(prompt(`Valor da despesa ${i}:`));
    while (isNaN(v)) { v = Number(prompt("Número inválido:")); }
    total += v;
}

let sobra = renda - total;
let msg = total > renda ? "⚠️ Atenção!" : (sobra >= renda*0.3 ? "✅ Ótimo" : "🙂 Ok");

let res = `Nome: ${nome}\nRenda: ${renda.toFixed(2)}\nTotal: ${total.toFixed(2)}\nSobra: ${sobra.toFixed(2)}\n${msg}`;
alert(res);
console.log(res);
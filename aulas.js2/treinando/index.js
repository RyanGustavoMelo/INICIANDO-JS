// alert("Bem vindos ao jogo do numero secreto");
// let numeroSecreto = 29;
// let chute = prompt("Tente acertar o numero misterioso de 1 a 30");

// if (chute == numeroSecreto) {
//   console.log("Isso ai voce acertou");
// }

// OUTRO CODIGO

// alert("Bem vindo ao banco");

// let saldoDisponivel = "100";
// // let valorConta = "199";
// let saldoApagar = prompt("Sua conta é R$100,00!!");

// if (saldoDisponivel == saldoApagar) {
//   console.log("Isso ai, sua conta foi paga");
// } else if (saldoDisponivel < saldoApagar) {
//   console.log("Ops, Erro!");
// }

// OUTRO CODIGO

// let saldoDisponivel = 100;
// let saldoPagar = prompt("Sua conta é de 100,00 Reais");

// if (saldoDisponivel == saldoPagar) {
//   console.log("Sua conta foi paga");
// } else if (saldoDisponivel > saldoPagar) {
//   console.loge("Ops erro");
// }

// OUTRO CODIGO

alert("Boas vindas ao meu jogo de chutes ao numero");
let chute;
let tentativas = 1;
let numeroMaximo = 5000;
let numeroCerto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroCerto);

// while significa enquanto o chute n for igual ao numero secreto
while (chute != numeroCerto) {
  chute = prompt(`Tente acertar o numero certo de 1 a ${numeroMaximo} `);
  //   alert;
  if (numeroCerto == chute) {
    break;
  } else {
    if (chute > numeroCerto) {
      alert(`Ops você errou, uma dica = o numero secreto é menor que ${chute}`);
    } else {
      alert(`Ops você errou o numero secreto é MAIOR que ${chute}`);
    }
    // tentativas = tentativas + 1;

    tentativas++;
  }
}

let = palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Meus parabens voce acertou o numero ${numeroCerto} com ${tentativas} ${palavraTentativa}`
);

// if (tentativas > 1) {
//   alert(
//     `Meus parabens voce acertou o numero ${numeroCerto} com ${tentativas} tentativa`
//   );
// } else {
//   alert(
//     `Meus parabens voce acertou o numero ${numeroCerto} com ${tentativas} tentativas`
//   );

// OUTRO CODIGO

// alert("boas vindas ao meu jogo de decorações de numeros");
// let numeroCertissimo = 10;
// let chance = prompt("tente acertar o numero de 1 a 10");
// console.log(numeroCertissimo);

// if (numeroCertissimo == chance) {
//   alert(`Meus parabens voce acertou ${numeroCertissimo}`);
// } else if (numeroCertissimo > chance) {
// }

// var diaSemana = prompt("qual é o dia da semana ?");
// if (diaSemana === "sabado" || diaSemana === "domingo") {
//   alert("Bom fim de semana!");
// } else {
//   alert("Boa semana!");
// }

// var dataMes = prompt("Qual mes é esse ?");
// if (dataMes === "dezembro" || dataMes === "julho") {
//   alert("Bom ano");
// } else {
//   alert("mes ae");
// }

// let seuNome = prompt("Insira seu nome por gentileza");
// alert(`Boas vindas ${seuNome}`);

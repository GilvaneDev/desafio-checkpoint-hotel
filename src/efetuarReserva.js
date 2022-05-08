import { hoteis } from "./hoteis.js";

export const efetuarReserva = (dados) => {
  const tipoCliente = dados.split(":", 1)[0];
  let datas = dados.substring(8);
  datas = datas.split(",");

  let valores = [0, 0, 0];

  datas.forEach((data) => {
    let dia = data.substring(11, 14);
    if (tipoCliente === "Regular") {
      if (dia === "sat" || dia === "sun") {
        valores[0] += hoteis[0].taxaFinalSemanaRegular;
        valores[1] += hoteis[1].taxaFinalSemanaRegular;
        valores[2] += hoteis[2].taxaFinalSemanaRegular;
      } else {
        valores[0] += hoteis[0].taxaSemanaRegular;
        valores[1] += hoteis[1].taxaSemanaRegular;
        valores[2] += hoteis[2].taxaSemanaRegular;
      }
    } else {
      if (dia === "sat" || dia === "sun") {
        valores[0] += hoteis[0].taxaFinalSemanaReward;
        valores[1] += hoteis[1].taxaFinalSemanaReward;
        valores[2] += hoteis[2].taxaFinalSemanaReward;
      } else {
        valores[0] += hoteis[0].taxaSemanaReward;
        valores[1] += hoteis[1].taxaSemanaReward;
        valores[2] += hoteis[2].taxaSemanaReward;
      }
    }
  });
  return valores;
};



import { hoteis } from "./hoteis.js";

export const exibeMelhorHotel = (valores) => {
    const min = Math.min(...valores);
    if (valores.indexOf(min) != valores.lastIndexOf(min)) {
      if (
        hoteis[valores.indexOf(min)].classificacao >
        hoteis[valores.lastIndexOf(min)].classificacao
      ) {
        return hoteis[valores.indexOf(min)].nome;
      } else {
        return hoteis[valores.lastIndexOf(min)].nome;
      }
    } else {
      return hoteis[valores.indexOf(min)].nome;
    }
};

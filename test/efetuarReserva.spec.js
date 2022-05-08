import chai from "chai";
import { efetuarReserva } from "../js/src/efetuarReserva.js";

describe("teste das funcoes", () => {
  it("efetuar reserva", () => {
    const reserva = efetuarReserva(
      "Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)"
    );

    chai.expect(reserva[0]).to.be.equals(240);
    chai.expect(reserva[1]).to.be.equals(270);
    chai.expect(reserva[2]).to.be.equals(240);
  });
});

import chai from "chai";
import { efetuarReserva } from "../src/efetuarReserva.js";
import { exibeMelhorHotel } from "../js/src/exibeMelhorHotel.js";

describe("teste melhor hotel", () => {
  it("melhor hotel 1", () => {
    const melhorHotel = exibeMelhorHotel(
      efetuarReserva("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")
    );
    chai.expect(melhorHotel).equal("Lakewood");
  });

  it("melhor hotel 2", () => {
    const melhorHotel = exibeMelhorHotel(
      efetuarReserva("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")
    );
    chai.expect(melhorHotel).equal("Bridgewood");
  });

  it("melhor hotel 3", () => {
    const melhorHotel = exibeMelhorHotel(
      efetuarReserva("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")
    );
    chai.expect(melhorHotel).equal("Ridgewood");
  });
});
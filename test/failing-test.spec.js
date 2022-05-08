'use strict'
import { hoteis } from "./hoteis.js";
import { efetuarReserva } from "./efetuarReserva.js";
import { exibeMelhorHotel } from "./exibeMelhorHotel.js";

import chai from "chai";
const expect = chai.expect
import { getCheapestHotel } from "../src/main";


describe('test', function () {
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).to.equal("Lakewood");
  });
  it('should return Bridgewood', function () {
    expect(getCheapestHotel("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Bridgewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")).to.equal("Ridgewood");
  });
})
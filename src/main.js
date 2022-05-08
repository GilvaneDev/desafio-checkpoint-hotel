
import { efetuarReserva } from "./efetuarReserva.js";
import { exibeMelhorHotel } from "./exibeMelhorHotel.js";

export const getCheapestHotel =  (input) => { 

    return exibeMelhorHotel(efetuarReserva(input))
}
console.log(getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)"));
console.log(getCheapestHotel("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)"));
console.log(getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)"));



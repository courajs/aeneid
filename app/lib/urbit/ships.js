import {patp2hex, hex2patp} from 'urbit-ob';
import graph from 'aeneid/lib/urbit/sigil/lib/sylgraph';

window.p2h = patp2hex;
window.h2p = hex2patp;

window.sylgraph = graph;

let digits = '0123456789abcdef'.split('');

export function *planetsForStar(star) {
  let base = patp2hex(star);
  for (let a=0; a<digits.length;a++) {
    for (let b=0; b<digits.length;b++) {
      for (let c=0; c<digits.length;c++) {
        for (let d=0; d<digits.length;d++) {
          let high = [a,b,c,d].map(i=>digits[i]).join('');
          if (high === '0000') { continue; }
          yield hex2patp(high + base);
        }
      }
    }
  }
}

const getSyls = /~(.{3})(.{3})-(.{3})(.{3})/;
export function hasBaseShape(baseRefs) {

  return function(planet) {
    let [,a,b,c,d] = planet.match(getSyls);
    let bases = [a,b,c,d].map(s=>graph.mapping[s].split(':')[0]);
    for(let i=0;i<4;i++) {
      if (bases[i] !== baseRefs[i]) { return false; }
    }
    // debugger;
    return true;
  }
}

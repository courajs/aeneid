import {clan, patp, patp2dec} from 'urbit-ob';
import symbols from 'aeneid/lib/urbit/symbols';


export function *planetsForPrefix(parent) {
  if (parent <= 0xff) {          // galaxy
    for (let star=1; star <= 0xff; star++) {
      for (let plan=1; plan <= 0xffff; plan++) {
        yield plan * (1<<16) + (star<<8) + parent;
      }
    }
  } else if (parent <= 0xffff) {  // star
    // 65k planets per star, skip the star itself
    for(let plan = 1; plan <= 0xffff; plan++) {
      yield plan* (1<<16)+parent;
    }
  } else {
    throw new Error();
  }
}

export function *allPlanets() {
  for (let gax=0; gax <= 0xff; gax++) {
    for (let star=1; star <= 0xff; star++) {
      for (let plan=1; plan <= 0xffff; plan++) {
        yield plan*(1<<16) + (star<<8) + gax;
      }
    }
  }
}

const getSyls = /~(.{3})(.{3})-(.{3})(.{3})/;
export function hasBaseShape(baseRefs) {
  let syllables = baseRefs.map((ref, i) => {
    if (i % 2) {
      return symbols.suffixes.filter(f => f.base === ref).map(f=>f.syl);
    } else {
      return symbols.prefixes.filter(f => f.base === ref).map(f=>f.syl);
    }
  });
  window.syllables = syllables;

  return function(point) {
    let p = patp(point);
    // debugger;
    return p.match(getSyls).slice(1).every((syl, i) => syllables[i].includes(syl));
  }
}

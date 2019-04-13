import Controller from '@ember/controller';
import symbols from 'aeneid/lib/urbit/symbols';

function byRef(ref) {
  return symbols.shapes.find(s => s.ref === ref);
}

const order = [
  // circle, square,  top pill, /,  br circ, bl circ
  // left p, right p, bottom p, \,  tr circ, tl circ
  "7a365cc2", "fbf3a00b", "28b33136", "362aae07", "6cb74008", "e3621cc2",
  "b0ac0b82", "19634ad2", "d93ccb2",  "de3bc3d1", "a5c31631", "82ff5e94",
];

let shapes = order.map(byRef);

export default class extends Controller {
  shapes = shapes;
}

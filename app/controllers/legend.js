import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import symbols from 'aeneid/lib/urbit/symbols';
import wu from 'wu';
import {patp, isValidPatp} from 'urbit-ob';

function byRef(ref) {
  return symbols.shapes.find(s => s.ref === ref);
}

const order = [
  // circle, square,  top pill, /,  br circ, bl circ, hey
  // left p, right p, bottom p, \,  tr circ, tl circ
  "7a365cc2", "fbf3a00b", "28b33136", "362aae07", "6cb74008", "e3621cc2",
  "b0ac0b82", "19634ad2", "d93ccb2",  "de3bc3d1", "a5c31631", "82ff5e94",
];

let shapes = order.map(byRef);

let num =window.num = /^((0x[0-9a-fA-F]+)|\d+)$/;
export default class extends Controller {
  shapes = shapes;

  @tracked baseRef;
  @tracked manualRender;

  get renderP() {
    if (typeof this.manualRender === 'string' && this.manualRender.length > 1 && isValidPatp(this.manualRender)) {
      return this.manualRender;
    } else if (num.test(this.manualRender)) {
      return patp(parseInt(this.manualRender));
    }
  }

  get pairs() {
    let result = wu(symbols.forms).chunk(2);
    if (this.baseRef) {
      result = result
        .map(([pre, suf]) => {
          return [
            pre.base === this.baseRef ? pre : null,
            suf.base === this.baseRef ? suf : null,
          ];
        })
        .filter(([a,b]) => a || b);
    }
    return result.toArray();
  }

  @action
  toggleShapeFilter(newBase) {
    if (this.baseRef === newBase) {
      this.baseRef = null;
    } else {
      this.baseRef = newBase;
    }
  }
}

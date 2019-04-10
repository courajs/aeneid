import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {pour, SVGComponents} from 'aeneid/lib/urbit/index';

const shapes = ["d93ccb2", "28b33136", "362aae07", "de3bc3d1", "6cb74008", "19634ad2", "82ff5e94", "b0ac0b82", "a5c31631", "fbf3a00b", "e3621cc2", "7a365cc2"];

export default class extends Component {
  @tracked symbs = [0,1,2,3];

  get refs() {
    return this.symbs.map(i=>shapes[i%shapes.length]);
  }

  get svg() {
    return pour({
      symrefs: this.refs,
      renderer: SVGComponents,
      size: 256,
    });
  }

  thing(el) {
    el.querySelectorAll('svg > g').forEach((g, i) => {
      g.addEventListener('click', (e) => {
        e.preventDefault();
        this.symbs[i]++;
        this.symbs = this.symbs;
      });
    });
  }
}

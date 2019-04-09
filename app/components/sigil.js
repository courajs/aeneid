import Component from '@glimmer/component';

import {pour, SVGComponents} from 'aeneid/lib/urbit/index';

export default class Sigil extends Component {
  get p() {
    if (this.args.p) {
      return this.args.p;
    }
  }

  get svg() {
    return pour({
      patp: this.p,
      renderer: SVGComponents,
      size: 256,
    });
  }
}

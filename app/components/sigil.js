import Component from '@glimmer/component';

import {pour, SVGComponents} from 'aeneid/lib/urbit/index';

export default class Sigil extends Component {
  get p() {
    if (this.args.p) {
      return this.args.p;
    }
  }

  get svg() {
    let content;
    if (this.args.p) {
      content = {patp: this.args.p};
    } else if (this.args.ref) {
      content = {symref: this.args.ref};
    }
    return pour({
      ...content,
      renderer: SVGComponents,
      size: 256,
    });
  }
}

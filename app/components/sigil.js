import Component from '@glimmer/component';

import {pour, SVGComponents} from 'aeneid/lib/urbit/index';

export default class Sigil extends Component {
  get svg() {
    let svg = pour({
      patp: this.args.p,
      renderer: SVGComponents,
      size: 256,
    });
    debugger;
    return svg;
  }
}

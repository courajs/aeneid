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
    } else if (this.args.refs) {
      content = {symrefs: this.args.refs};
    } else if (this.args.ref) {
      content = {symrefs: [this.args.ref]};
    } else if (this.args.val && this.args.val[0] === '~') {
      content = {patp: this.args.val};
    } else if (this.args.val) {
      content = {symrefs: this.args.val.split(',')};
    } else {
      content = {patp: "~jkl"};
    }
    try {
      return pour({
        ...content,
        renderer: SVGComponents,
        size: 256,
      });
    } catch {
    }
  }
}

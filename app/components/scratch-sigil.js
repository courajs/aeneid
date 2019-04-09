import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class extends Component {
  @tracked kind;
  @tracked value;

  @action
  input(e) {

    e.preventDefault();
    this.kind = e.target.elements.namedItem('kind').value;
    let val = e.target.elements.namedItem('value').value;
    if (this.kind === 'refs') {
      this.value = val.split(',');
    } else {
      this.value = val;
    }
  }
}

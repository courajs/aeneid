import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import wu from 'wu';
window.wu = wu;

import * as ob from 'urbit-ob';
import {isValidPatp, patp, patp2dec} from 'urbit-ob';
import {allPlanets, planetsForPrefix, hasBaseShape} from 'aeneid/lib/urbit/ships';
window.ob = ob;

export default class extends Controller {
  // pres = pre.match(/.{3}/g);
  // sufs = suf.match(/.{3}/g);

  constructor() {
    super(...arguments);
  }

  @tracked prefix = '~fiprun';
  @tracked baseRefs = ['','','',''];
  @tracked results;

  @action
  search(refs) {
    this.baseRefs = refs;
    let planets;
    if (isValidPatp(this.prefix)) {
      planets = wu(planetsForPrefix(parseInt(patp2dec(this.prefix))));
    } else {
      planets = wu(allPlanets());
    }
    let pred = hasBaseShape(this.baseRefs);
      window.pred = pred;
    planets = planets.filter(pred);

    let results = [];
    this.results = results;

    planets.asyncEach((p) => {
      if (this.results === results) {
        results.push(patp(p));
        this.results = this.results;
      }
    }, 15, 0);
  }
}

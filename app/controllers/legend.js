import Controller from '@ember/controller';
import graph from 'aeneid/lib/urbit/lib/sylgraph';

let groups = {};
for (let [syl,ref] of Object.entries(graph.mapping)) {
  let base = ref.split(':')[0];
  if (!(base in groups)) { groups[base] = []; }
  groups[base].push({syl, ref});
}

let groups2 = [];
for (let [base, forms] of Object.entries(groups)) {
  forms.sort((a,b) => a.ref.length - b.ref.length);
  groups2.push({base, forms});
}

groups2.sort((a,b) => a.forms.length - b.forms.length);

export default class extends Controller {
  groups = groups2;
}

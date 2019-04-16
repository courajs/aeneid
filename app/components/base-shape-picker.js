import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import {pour, SVGComponents} from 'aeneid/lib/urbit/sigil/index';

const shapes = ["d93ccb2", "28b33136", "362aae07", "de3bc3d1", "6cb74008", "19634ad2", "82ff5e94", "b0ac0b82", "a5c31631", "fbf3a00b", "e3621cc2", "7a365cc2"];

export default class extends Component {
  @tracked symbs = [0,0,0,0];

  get refs() {
    let refs = [
      prefixBases[this.symbs[0]%prefixBases.length],
      suffixBases[this.symbs[1]%suffixBases.length],
      prefixBases[this.symbs[2]%prefixBases.length],
      suffixBases[this.symbs[3]%suffixBases.length],
    ];
    return refs;
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

const prefixBases = [
  "28b33136",
  "362aae07",
  "6cb74008",
  "7a365cc2",
  "82ff5e94",
  "a5c31631",
  "b0ac0b82",
  "de3bc3d1",
  "e3621cc2",
  "fbf3a00b",
];

const suffixBases = [
  "19634ad2",
  "28b33136",
  "362aae07",
  "6cb74008",
  "7a365cc2",
  "82ff5e94",
  "a5c31631",
  "d93ccb2",
  "de3bc3d1",
  "e3621cc2",
  "fbf3a00b",
];


/*
const pre = window.prefixes = `
dozmarbinwansamlitsighidfidlissogdirwacsabwissib\
rigsoldopmodfoglidhopdardorlorhodfolrintogsilmir\
holpaslacrovlivdalsatlibtabhanticpidtorbolfosdot\
losdilforpilramtirwintadbicdifrocwidbisdasmidlop\
rilnardapmolsanlocnovsitnidtipsicropwitnatpanmin\
ritpodmottamtolsavposnapnopsomfinfonbanmorworsip\
ronnorbotwicsocwatdolmagpicdavbidbaltimtasmallig\
sivtagpadsaldivdactansidfabtarmonranniswolmispal\
lasdismaprabtobrollatlonnodnavfignomnibpagsopral\
bilhaddocridmocpacravripfaltodtiltinhapmicfanpat\
taclabmogsimsonpinlomrictapfirhasbosbatpochactid\
havsaplindibhosdabbitbarracparloddosbortochilmac\
tomdigfilfasmithobharmighinradmashalraglagfadtop\
mophabnilnosmilfopfamdatnoldinhatnacrisfotribhoc\
nimlarfitwalrapsarnalmoslandondanladdovrivbacpol\
laptalpitnambonrostonfodponsovnocsorlavmatmipfip\
`

const suf = window.suffixes = `
zodnecbudwessevpersutletfulpensytdurwepserwylsun\
rypsyxdyrnuphebpeglupdepdysputlughecryttyvsydnex\
lunmeplutseppesdelsulpedtemledtulmetwenbynhexfeb\
pyldulhetmevruttylwydtepbesdexsefwycburderneppur\
rysrebdennutsubpetrulsynregtydsupsemwynrecmegnet\
secmulnymtevwebsummutnyxrextebfushepbenmuswyxsym\
selrucdecwexsyrwetdylmynmesdetbetbeltuxtugmyrpel\
syptermebsetdutdegtexsurfeltudnuxruxrenwytnubmed\
lytdusnebrumtynseglyxpunresredfunrevrefmectedrus\
bexlebduxrynnumpyxrygryxfeptyrtustyclegnemfermer\
tenlusnussyltecmexpubrymtucfyllepdebbermughuttun\
bylsudpemdevlurdefbusbeprunmelpexdytbyttyplevmyl\
wedducfurfexnulluclennerlexrupnedlecrydlydfenwel\
nydhusrelrudneshesfetdesretdunlernyrsebhulryllud\
remlysfynwerrycsugnysnyllyndyndemluxfedsedbecmun\
lyrtesmudnytbyrsenwegfyrmurtelreptegpecnelnevfes\
`
*/

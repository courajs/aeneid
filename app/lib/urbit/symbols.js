import sylgraph from './sigil/lib/sylgraph';

const pre = `
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

const suf = `
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

export const prefixes = pre.match(/.{3}/g);
export const suffixes = suf.match(/.{3}/g);

let symbols = [];
let bases = {};
for (let i = 0; i <= 0xff; i++) {
  let syl = prefixes[i];
  let ref = sylgraph.mapping[syl];
  let base = ref.split(':')[0];
  let s = {
    value: i,
    hex: '0x'+i.toString(16),
    prefix: true,
    syl, ref, base,
  };
  symbols.push(s);
  bases[base] = bases[base] || {ref: base, forms: []};
  bases[base].forms.push(s);


  syl = suffixes[i];
  ref = sylgraph.mapping[syl];
  base = ref.split(':')[0];
  s = {
    value: i,
    hex: '0x'+i.toString(16),
    suffix: true,
    syl, ref, base,
  };
  symbols.push(s);
  bases[base] = bases[base] || {ref: base, forms: []};
  bases[base].forms.push(s);
}

let obj = {
  forms: symbols,
  prefixes: symbols.filter(s=>s.prefix),
  suffixes: symbols.filter(s=>s.suffix),
  shapes: Object.values(bases),
  byBase: bases,
};

window.symbols = obj;
export default obj

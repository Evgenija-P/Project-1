let x = 10;
// let y = 1234n;
let z = NaN;
let str = 'Hello world';
let symb = Symbol('ku');
let h = undefined;
let g: null = null;

//literal
const xx = 120;
const str2 = 'hello';

//universal
let yy: any = 5;
yy = 'he';
yy = [];

let zz: unknown = 2;
if (typeof zz === 'string') zz.toLocaleUpperCase();

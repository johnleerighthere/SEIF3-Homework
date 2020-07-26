//Section 1
//Const, let and var are used to declare variables in different situations
//const and let can be used in block scope, that is they can't be used outside the block { } if not declared outside the block
//Var declared outside any function have Global Scope.
//const cannot be redeclared, let and var can be redeclared. However the properties within const can be changed.


//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
let g = b+c;

console.log(a < (b || f) === !f && d < c)

//a<c
//c<=d
//'Name'=='Name'
//a<b<c
//a<=a<d why can't a==a<d be true
//e!='Kevin'
//48==48
//f!=e
//4!=(53||false)_!false&&16<57
//(a < (b || f) === !f && d < c)
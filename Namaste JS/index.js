//hoisting

// getName();
// console.log(getName)
// var x = 7;

// var getName = () => {
//     console.log('namaste JS')

// function getName(){
//     console.log('Namaste JavaScript');
// }

// getName();
// console.log(x);
// console.log(getName)

// var x=7;
// function getName() {

// }

// funtion andscope of variable
// var x = 1;

// console.log(x);
// a();

// console.log(x);
// b();

// function a() {
//     var x= 10;
//     console.log(x);
// }

// function b(){
//     var x= 100;
//     console.log(x);
// }

// console.log(x);

// shortestJS file

// var a = 10;
// function b() {
//     var x =100;
// }

// console.log(window.a);
// console.log(a);
// console.log(b.x);

// console.log(b);
// function a() {
//   let b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();
// console.log(b);

// let a = 10;

// console.log(a);
// var a = 100;

// let a = 10;

// const b = 1000;
let b = 100;

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(b);

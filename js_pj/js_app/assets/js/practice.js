// var, let, const
// let 後から上不書き可能
// const 後から上不書き不可能
// varは基本使わない

// typeof 型を判定
let variable = 'str';
console.log(typeof variable);

variable = 12;
console.log(typeof variable);

// 関数
function hello(name, age) {
  // let name = 'Code Mafia';
  console.log('hello ' + name + age);
  return name + age; // 戻り値
}

hello('TOM', 20);
const retrunVal = hello('BOB', 25);
console.log('戻り値'+retrunVal);

// メソッドとプロパティ
let hw = 'Hello World';
console.log(hw.length); // .(ドット)で取得できるものがプロパティ(length)
console.log(hw.toUpperCase()); // .(ドット)で始まり()で終わるのががメソッド
console.log(hw.toLowerCase()); // toLowerCaseがメソッド

// 配列の定義
const arry = [1,2,3,4,5,6,7,'moji',false];
console.log(arry);
console.log(arry[2]); //　取得したい添え字の番号
arry[2] = 8; // 3番目の数字を8にする
console.log(arry);
console.log(arry.length); // 配列内の要素数

arry.push('new item'); // 末尾に新しい要素を追加
console.log(arry);

arry.unshift('first item'); // 先頭に新しい要素を追加
console.log(arry);

arry.pop(); // 最後の値を削除
console.log(arry);

arry.shift(); // 先頭の値を削除
console.log(arry);

// オブジェクトの使い方
const person = {
  name: ['Code', 'Mafia'],
  age: 30,
  gender: 'male',
  interests: {
    sports: 'soccor',
    music: 'guiter'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};
console.log(person.name[1]);
console.log(person.interests.music);

person.age = 40;
console.log(person);

const ageKey = 'age';
person[ageKey] = 20;
console.log(person.age);

person.getFullName();

// ループ
const arry2 = [1,2,3,4,5];
for (let i = 0; i < arry2.length; i++) {
  console.log('arry2-' + arry2[i]);
}

// in iは添え字が取得する
const arry3 = [1,2,3,4,5];
for (let i in arry3) {
  console.log('arry3-' + arry3[i], i);
}

// of vは値が取得する
const arry4 = [6,7,8,9,10];
for (let v of arry4) {
  console.log(v);
}

// 複雑なループ
const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to musiam',
    completed: true
  },
  {
    id: 3,
    title: 'Go to shopping',
    completed: false
  }
]
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].id, todos[i].title, todos[i].completed);
  let todo = todos[i];
  console.log(todo.title);
  if (todo.completed === true) {
    console.log('completed' + todo.title);
  }
}

for (let todo of todos) {
  if (todo.completed === true) {
    console.log('completed' + todo.title);
  }
}

// 比較演算子
//  == 文字列の型は比較しない
//  === 文字列の型も比較する

// アロー関数
function hello(name = 'Tom') {
  console.log('hello ' + name + '!');
}
hello('Code Mafia');
hello();

const hello2 = function(name = 'Tom') {
  console.log('hello ' + name + '!');
}
hello2('Jammy');

// 簡略文
const hello3 = (name, age) => console.log(name + age)
const array = [1,2,3,4,5,6];
array.forEach(value => console.log(value));

// コールバック関数
function callback(callback, lastName) {
  console.log(callback);
  console.log('hello' + callback(lastName));
}
function getName() {
  return 'Code Mafia'
}
function getFirstName() {
  return 'Code';
}

callback(function(name) {
  return 'Code' + name;
}, 'Mafia');

function doSomething(a, b, callback){
  const result = callback(a, b);
  console.log(result);
}
function multiply (a, b) {
  return a * b;
}
function plus (a, b) {
  return a + b;
}
doSomething(2, 2, multiply);
doSomething(3, 3, plus);

// コールバックとループ処理
function forEach(ary, callback) {
  for (let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
}
function log(val) {
  console.log(val);
}
function double(val) {
  val = val * 2;
  log(val);
}
forEach(array, log)
forEach(array, double)

// 配列とfor eachメソッド
array.forEach(function(v, i, ary){
  console.log(v, i, ary);
});
array.forEach(v => console.log(v));

array.reduce(function(accu, curr){
  console.log(accu, curr);
  return accu + curr;
});

array.reduce(function(accu, curr){
  console.log(accu, curr);
}, 10);

const str = "animation";
const strArry = str.split('');
console.log(strArry);

// 文字列を操作する
const result = strArry.reduce((accu, curr) => {
  console.log(accu);
  // return accu + '<' + curr + '>';
  return `${accu}<${curr}>`;
}, "");
console.log(result);

function tag(accu, curr) {
  console.log(accu, curr);
  return `${accu}<${curr}>`;
}
// const result2 = strArry.reduce(tag, "");
function reduce(arry, callback, defaultValue) {
  let accu = defaultValue;
  for (let i = 0; i < arry.length; i++) {
    let curr = arry[i];
    accu = callback(accu, curr)
  }
  return accu;
}
const result2 = reduce(strArry, tag, "");
console.log(result2);





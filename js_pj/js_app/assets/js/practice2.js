// DOM(Document Object Model)
// DOM APIを通じてHTMLの情報を取得・変更する

// 一致する一番最初の要素を取得
// document.querySelector('#main-title'); //IDを取得
// document.querySelector('.sub-title'); //クラスを取得
// document.querySelector('h1'); //タグを取得

// 一致する全ての要素を取得
// document.querySelectorAll('.item'); //クラスを取得
// document.querySelectorAll('ul > li'); //タグを取得

// const h1 = document.querySelector('h1');
// h1.style.color = 'red';
// h1.classList.add('underline');

// const li = document.querySelectorAll('li');
// li[0].style.color = 'purple';
// li.forEach(node => node.style.color = 'purple');

const btn = document.querySelector('#btn');
function changeColor() {
  this.style.color = 'pink';
};
function changeBgColor() {
  this.style.backgroundColor = 'green';
};
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);

// DOMが読まれたらイベント発火
document.addEventListener("DOMContentLoaded", function(){
  console.log("完了1");
});
// 全てが読まれたらイベント発火
window.addEventListener("load", function(){
  console.log("完了2");
});

// ANIMATION
document.addEventListener("DOMContentLoaded", function(){
  const el = document.querySelector('.animate-title');
  // console.log(el.innerHTML.trim());
  const str = el.innerHTML.trim().split("");

  // let concatStr = "";

  // for(let c of str) {
  //   console.log(`<span class="char">${c}</span>`);
  //   console.log('<span class="char">'+c+'</span>');
  //   // concatStr = concatStr + `<span class="char">${c}</span>`;
  //   // c = c.replace(' ', '&nbsp;');
  //   c = c.replace(/\s+/, '&nbsp;');
  //   concatStr += `<span class="char">${c}</span>`;
  // }

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});

// クラスを使い、再利用性を高める
document.addEventListener("DOMContentLoaded", function(){
  const ta2 = new TextAnimation('.animate-title-2');
  const ta3 = new TextAnimation('.animate-title-3');
  setTimeout(() => {
    ta3.animate();
  }, 3000);
});

class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() { // _(アンダースコア)のついているものはプライベートメソッドなので、クラスの外では使わないようにする
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() { // パブリックメソッド
    this.el.classList.toggle('inview');

    // thisは呼ばれたタイミングで挙動が変わる
    // console.log(this);
    // window.setTimeout(function(){
    //   console.log(this); // bindしないとthisでwindowが読まれる
    //   this.el.classList.toggle('inview');
    // }.bind(this));

    // bindを使用しない方法
    // const _that = this;
    // window.setTimeout(function(){
    //   console.log(_that); // bindしないとthisでwindowが読まれる
    //   this.el.classList.toggle('inview');
    // });
  }
}

const obj = {
  first_name: 'Mafia',
  last_name: 'Code',
  printFullName: function(){
    console.log('Hello');
  }
}
obj.printFullName()

class MyObj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }
  printFullName(){
    console.log('Hello');
  }
}
const obj2 = new MyObj();
obj2.printFullName();




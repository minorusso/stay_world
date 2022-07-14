  // クラスに移動
  // const el = document.querySelector('.animate-title');
  // const str = el.innerHTML.trim().split("");
  // ↑ここまででstrは一文字づつ区切られた配列
  // let concatStr = '';
  
  // reduceで書換済み
  // for (let c of str) {
  //   c = c.replace(/\s+/, '&nbsp;');
  //   concatStr += `<span class="char">${c}</span>`;
  // }

  // ただのHTML上の文字「ANIMATION」が一文字づつspanクラスがついたものに置き換わる
  // el.innerHTML = str.reduce((acc, curr) => {
  //   // 半角スペースがあった時、特殊文字に置き換え
  //   curr = curr.replace(/\s+/, '&nbsp;');
  //   return `${acc}<span class="char">${curr}</span>`;
  // }, "");

class TextAnimation {
  // クラスを初期化
  constructor(el) {
    this.DOM = {};
    // 三項演算子で書換
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    // if (el instanceof HTMLElement) {
    //   this.DOM.el = el;
    // } else {
    //   this.DOM.el = document.querySelector(el);
    // }
    this.chars = this.DOM.el.innerHTML.trim().split(""); 
    // メソッドを内部から参照する方法
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      // 半角スペースがあった時、特殊文字に置き換え
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle('inview');
  }
}

class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
  }
  
  animate() {
    this.DOM.el.classList.add('inview')
    this.DOM.chars.forEach((c, i) => {
      TweenMax.to(c, .6, {
        ease: Back.easeOut,
        delay: i * .05,
        startAt: { y: '-50%', opacity: 0 },
        y: '0%',
        opacity: 1
      });
    });

  }
}
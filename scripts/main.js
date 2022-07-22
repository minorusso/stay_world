// addEventListener:ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定
// DOMContentLoaded:最初の HTML 文書の読み込みと解析が完了したとき、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発生
document.addEventListener('DOMContentLoaded', function () {
  // インスタンスかする際に引数をわたす
  // const hero = new HeroSlider('.swiper');
  // hero.start();
  // setTimeout(() => {
  //   hero.stop();
  // }, 5000);

  // const cb = function (el, isIntersecting) {
  //   if (isIntersecting) {
  //     const ta = new TweenTextAnimation(el);
  //     ta.animate();
  //   }
  // }

  // const so = new ScrollObserver('.tween-animate-title', cb);

  // const _inviewAnimation = function (el, inview) {
  //   if (inview) {
  //     el.classList.add('inview');
  //   } else {
  //     el.classList.remove('inview');
  //   }
  // }

  // const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);


  // const header = document.querySelector('.header');
  // const _navAnimation = function (el, inview) {
  //   if (inview) {
  //     header.classList.remove('triggered');
  //   } else {
  //     header.classList.add('triggered');
  //   }
  // }

  // const so3 = new ScrollObserver('.nav-trigger', _navAnimation, { once: false });
  

  // new MobileMenu();

  const main = new Main();
});


class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this._observers = [];
    this._init();
  }

  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  
  _init() {
    new MobileMenu();
    this.hero = new HeroSlider('.swiper');
    Pace.on('done', this._paceDone.bind(this))
  }
  
  _paceDone() {
    this._scrollInit();
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }
  
  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  _textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }

  _scrollInit() {
    this._observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
    this._observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
    this._observers = new ScrollObserver('.appear', this._inviewAnimation);
    this._observers = new ScrollObserver('.tween-animate-title', this._textAnimation);
    this._observers = new ScrollObserver('.swiper', this._toggleSlideAnimation.bind(this), { once: false });
  }
}


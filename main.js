// addEventListener:ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定
// DOMContentLoaded:最初の HTML 文書の読み込みと解析が完了したとき、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発生
// document.addEventListener('DOMContentLoaded', function () {
//   // インスタンスかする際に引数をわたす
//   const hero = new HeroSlider('.swiper');
//   hero.start();
//   setTimeout(() => {
//     hero.stop();
//   }, 5000);
// });


document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start();
});
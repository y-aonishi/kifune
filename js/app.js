$(function(){
  $('.slideshow').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
});

$(function(){
  $('.slideshow_r').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
});


$(function(){
  $('.slideshow_s').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
});

$(function(){
  $('.slideshow_rs').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
});



// アルバムデータの作成
let album = [
  { src: 'img/pw01.jpg', msg: '１位　木の根道'},
  { src: 'img/pw02.jpg', msg: '２位　鞍馬寺　本殿'},
  { src: 'img/pw03.jpg', msg: '３位　鞍馬寺　仁王門'},
  { src: 'img/pw04.jpg', msg: '４位　僧正ガ谷不動堂'},
{ src: 'img/pw05.jpg', msg: '５位　貴船神社　奥宮境内'}
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});

// TEMPLETE INCLUDE
function header() { // 共通ヘッダインクルード
  $.ajax({
    url: './assets/inc/header.html',
    cache: false,
    async: false,
    dataType: 'html'
  }).done(function(header) {
    document.write(header);
  });
}
function footer() { // 共通フッタインクルード
  $.ajax({
    url: './assets/inc/footer.html',
    cache: false,
    async: false,
    dataType: 'html'
  }).done(function(footer) {
    document.write(footer);
  });
}
function symbol() { // 共通アイコン(SVG)インクルード
  $.ajax({
    url: './assets/inc/symbol.html',
    cache: false,
    async: false,
    dataType: 'html'
  }).done(function(symbol) {
    document.write(symbol);
  });
}

// アコーディオン
$(function() {
  $(".p-accordion .p-accordion-header").on("click", function(){
    $(this).parents('.p-accordion').find('.p-accordion-body').toggleClass('p-accordion-body-show').slideToggle();
  });
});

// ヘッダ 設定ボタン
jQuery(function($){
  $('.gnav_btn').on('click', function(){
    $('.l-header').toggleClass('opened');
    $(this).toggleClass('gnav_btn__open').next('.gnav_menu').slideToggle();
  });
});

// フッタ ページトップへスクロール
$(function(){
  var pagetop = $('.scroll_top');
  $(window).on('load scroll', function(){
    if($(this).scrollTop() < 100 ) {
      pagetop.fadeOut();
    } else {
      pagetop.fadeIn();
    }
  });
  pagetop.on('click', function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// パスワードの表示・非表示切り替え
$(function(){
  $(".input-password__toggle").on('click', function () {
    $(this).toggleClass("input-password__display");
    var input = $(this).prev(".input-field");
    if (input.attr("type") == "password") {
      input.attr("type", "email");
    } else {
      input.attr("type", "password");
    }
  });
});

// 特定の項目が入力された居たらボタンをアクティブに
$(function() {
  // 入力欄の操作時
  $('.input-required').on("keyup change load", function () {
    // 必須項目が空かどうかフラグ
    let flag = true;
    // 必須項目をひとつずつチェック
    $('.input-required').each(function(e) {
      // もし必須項目が空なら
      if ($('.input-required').eq(e).val() === "" || $('.input-required[type=checkbox]').prop("checked") == false) {
        flag = false;
      }
    });
    // 全て埋まっていたら
    if (flag) {
      $('.input-submit').removeClass('c-btn-disable');
    } else {
      $('.input-submit').addClass('c-btn-disable');
    }
  });
});

$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});



// 今回の「マウスクリック」イベントの設定を見ていくことにしましょう。

// $('.menu-trigger').on('click', function(event) {
//   // .menu-triggerクリック時に行われる処理
// });
// .on('click', function()は、9章にも出てきましたね。
// ここでは、.menu-triggerがクリックされたときに、処理が行われるように設定しています。

// .menu-triggerはどこに設定されているかというと、ハンバーガーアイコン<a class="menu-trigger" href="#">に設定されています。



// $('#sp-menu').fadeToggle();
// .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッドです。
// このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定します。

// ここでは、#sp-menuが開いたときに、.fadeToggle()が処理されるように設定しています。
// #sp-menuはどこに設定されているかというと、ハンバーガーメニュー<div id="sp-menu">に設定されています。

// このように設定することで、ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行されるようになります。

// ファイルを保存し、index.htmlファイルをリロードしてハンバーガーメニューを試してみましょう。
// ハンバーガーアイコンをクリックすると、ハンバーガーメニューが表示されることを確認できます。


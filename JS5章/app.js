// // // // // 5章【jQueryでHTMLのCSS要素を操作しよう】





// // // // // box1クラスのCSSを、jQueryを用いて変更します。ここでは、背景色を青色、高さを100pxに変更してみます。

// // // // $(function(){
// // // //   $('.box1').css({
// // // //     'background-color': '#0000FF',
// // // //     'height': '100px'
// // // //   });
// // // // });

// // // // // 赤色の正方形が、青色の長方形に変更されたことと思います。


// // // // // 【CSSメソッドの書き方】
// // // // // $('セレクタ').css({
// // // // //   'プロパティ1': '値1',
// // // // //   'プロパティ2': '値2',

// // // // //   :
// // // // //   :

// // // // //   'プロパティn': '値n'
// // // // // });



// // // // [アニメーションを追加する]

// // // // 上から下へスライドさせる

// // // // jQueryは、HTMLがすべて読み込まれてから動作するように設定しなければなりません。
// // // // このため、box1が最初は非表示になるように、app.cssファイルにdisplay: none;を追加します。

// // // // 設定できたら、今度はapp.jsファイルに以下のように記述して上書きしてください。


// // // $(function(){
// // //   $('.box1').slideDown();
// // // });




// // // // 下から上へスライドさせる

// // // // この場合、表示されている要素を隠すアニメーションになるので、app.cssファイル内のdisplay: none;の記述は不要です。削除してください。

// // // $(function(){
// // //   $('.box1').slideUp();
// // // });





// // // [要素を表示・非表示する]

// // // 非表示の要素をjQueryで表示させる

// // // box1が最初は非表示になるように、app.cssファイルにdisplay: none;を追加します。

// // // $(function(){
// // //   $('.box1').show();
// // //   $('.box1').css({'background-color': '#0000FF'});
// // // });

// // // 変化をわかりやすくするために、box1の背景色を青色に設定しています。




// // // 表示されている要素をjQueryで非表示にする

// // // display: none; を削除

// // $(function(){
// //   $('.box1').hide();
// // });


// // .slideDown();、.slideUp();、.show();、.hide();の4つを使えるようになると、さまざまなスタイルに応用できます。




// 確認問題

// 1.要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更してください。
// 2. 1.の後、下から上へスライドされるようにしてください。

$ (function(){
  $ ('.box1').slideDown(function(){
  $ ('.box1').css({
    'background-color': '#0000FF',
    'height': '100px',
    'width': '200px'
  }).slideUp();
 });
});

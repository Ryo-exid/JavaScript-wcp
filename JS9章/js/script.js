// オプションを指定してSkipprの実行
$(".theTarget").skippr({
  // スライドショーの変化（"fade" or "slide"）
  transition : 'fade',
  // 変化にかかる時間（ミリ秒）
  speed : 1000,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形（"block" or "bubble"）
  navType : 'block',
  // 子要素の種類（"div" or "img"）
  childrenElementType : 'div',
  // ナビゲーション矢印の表示（trueで表示）
  arrows : true,
  // スライドショーの自動再生（falseで自動再生なし）
  autoPlay : false,
  // 自動再生時のスライド切替間隔（ミリ秒）
  autoPlayDuration : 5000,
  // キーボードの矢印キーによるスライド送りの設定（trueで有効）
  keyboardOnAlways : true,
  // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false
});




// 今回は、script.jsファイルの記述でautoPlay:falseを設定しているので、スライドショーは自動では切り替わりません。
// 左右の矢印をクリックして、画像が切り替わるかどうかを確認しましょう。

// また、script.jsファイルの記述をautoPlay:trueに変更して、スライドショーが自動的に切り替わるかどうかも試してみるとよいでしょう。
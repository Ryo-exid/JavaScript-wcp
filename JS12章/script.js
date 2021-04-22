// $(function(){
//   $('#btn').on('click', function() {

//   });
// });


// 「検索」ボタンは、index.htmlファイルで<button id="btn">で設定しているので、script.jsファイルでは$('#btn')で取得します。
// .on('click', function()の記述は、すでにおなじみですね。「検索」ボタンがクリックされたときの処理を、それ以後の行に記述します。





// 次に、天気予報の情報をWeb APIにリクエストする処理を追記します。
// なお、コード内の「API_KEY」の部分には、取得したAPIキーを" "で囲って記述してください。


// // （API_KEY には、"取得したAPIキー" を記述）
// API_KEY = "af0ecf3f95303e8951c8f6de85c9ee9d";
// $(function(){
//   $('#btn').on('click', function() {
//     // 入力された都市名でWebAPIに天気情報をリクエスト
//     $.ajax({
//       url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
//       dataType : 'jsonp',
//     })  });
// });



// $.ajax()は、Ajaxを実装するメソッドです。
// オプション（パラメータ）も設定できます。今回は、urlとdataTypeの2つを設定しています。

// url
// dataType
// url:では、APIにリクエストするURLを指定します。
// 今回のURLは、http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid="取得したAPI" です。
// $('#cityname').val()で#citynameの値を受け取り、URLを結合させています。（val()は、HTMLのvalue属性を取得するメソッド）

// dataTypeでは、レスポンスとして取得したいデータの型を指定します。今回はJSONで受け取りたいので、 dataType : 'jsonp',と記述します。





// 成功時と失敗時の処理を追記する
// さらに、通信に成功した場合と失敗した場合の処理を追記します。


// （API_KEY には、"取得したAPIキー" を記述）
// API_KEY = "取得したAPIキー";

// $(function(){
//   $('#btn').on('click', function() {
//     // 入力された都市名でWebAPIに天気情報をリクエスト
//     $.ajax({
//       url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
//       dataType : 'jsonp',
//     }).done(function (data){
//       //通信成功
//     }).fail(function (data) {
//       //通信失敗
//     });  });
// });


// .done()は通信に成功した場合、.fail()は失敗した場合に記述するメソッドです。
// 「通信に成功する」とは、今回はWeb APIが正常に呼び出せたことを意味しています。
// どちらのメソッドでも(data)を指定していますが、その引数内に取得した結果が入ります。（dataは任意の変数名）



// 通信に成功した場合の処理を追記する
// 通信に成功した場合の処理を追記します。



// （API_KEY には、"取得したAPIキー" を記述）
API_KEY = "af0ecf3f95303e8951c8f6de85c9ee9d";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});



// $('#place').text(data.name);以下、同じフォーマットが続いていますね。
// $('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換されます。

// たとえば、最高気温（temp_max）を取得したい場合は、"data.JSONのオブジェクト名.プロパティ名"で取得しています。



// さらに、$(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加されます。
// これにより、天気のアイコンを表示することができます。
// なお、アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".pngです。
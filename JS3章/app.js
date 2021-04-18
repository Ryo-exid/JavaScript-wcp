// // // 3章 【関数】


// // // function 関数名(引数){
// // //   処理
// // //   return 戻り値;
// // // }



// // // // メイン部分
// // // var alertString;
// // // alertString = addString("WebCamp");

// // // // 作成した関数を呼び出す
// // // alert(alertString);

// // // // 作成した関数
// // // function addString(strA){
// // //   var addStr = "Hello " + strA;
// // //   return addStr;
// // // }



// // // 入力ダイアログで値を入力する

// // // var promptStr = prompt('何か好きな文字を入力してください。');

// // // alert(promptStr);



// // // var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// // // alert('あなたの選んだ手は' + user_hand + 'です。');



// // // この処理に、相手のじゃんけんの手をランダムに選択する関数を追加していきます。

// // function getJShand(){
// //   var js_hand_num = Math.floor( Math.random() * 3 );

// //   if(js_hand_num == 0){
// //     js_hand = "グー";
// //   } else if(js_hand_num == 1){
// //     js_hand = "チョキ";
// //   } else if(js_hand_num == 2){
// //     js_hand = "パー";
// //   }

// //   return js_hand;
// // }

// // // Math.floor( Math.random() * 3 )は、0～2までのランダムな整数値を生成します。
// // // 関数内の「3」は、ランダム生成したい整数値の+1を指定しています。






// // じゃんけんの手を入力してもらうプロンプト欄を生成
// var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// // じゃんけんの手をランダムに作成する関数を呼び出す
// var js_hand = getJShand();

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// var judge = winLose(user_hand, js_hand);

// // 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// // ランダムでじゃんけんの手を作成する関数
// function getJShand(){
//   var js_hand_num = Math.floor( Math.random() * 3 );
//   var hand_name;

//   if(js_hand_num == 0){
//     hand_name = "グー";
//   } else if(js_hand_num == 1){
//     hand_name = "チョキ";
//   } else if(js_hand_num == 2){
//     hand_name = "パー";
//   }

//   return hand_name;
// }

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
// function winLose(user, js){
//   var winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }




// 確認問題

// 「じゃんけんプログラム」に、次の機能を付け足してください。

// 1.グー・チョキ・パー以外の文字列が入力されたときに、「グー・チョキ・パーのいずれかを入力してください」
// とアラートウィンドウにエラーが表示されるように設定してください。

// 2.アラートウィンドウでエラーが表示された後、もう一度、プロンプト入力欄が表示されて入力できるように設定してください。

// 3.キャンセルボタンが押されたときは、「またチャレンジしてね」というアラートメッセージが出力されるように設定してください。

// ヒント
// キャンセルボタンの判定には、nullを用います。


var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand;
  if (js_hand_num == 0){
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

function winLose(user, js){
  var winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}
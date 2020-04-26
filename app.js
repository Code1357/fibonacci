/*
'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2); // 再帰：自分の関数を自分で呼び出している
}

// 40回ループ
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
// $ node app.js
*/

/**
 * 実は、上記は処理に時間がかかっている
 * アルゴリズムの改良
 * 連想配列を使う
 * 連想配列：数字だけでなく、文字列も添字にして使える
 * 連想配列の添字を(key)という
 * ES6で利用できるMapを使ってみる
 */

 /*
 'use strict';
 // 連想配列,memo
 const memo = new Map();
 memo.set(0, 0);
 memo.set(1, 1);
 // 
 function fib(s) {
   if (memo.has(s)) { // has 特定のkeyに対する要素がMapオブジェクトに存在していたらtrueを返す
     return memo.get(s);
   }
   const value = fib(s - 1) + fib(s -2);
   memo.set(s, value);
   return value;
 }
 const length2 = 40;
for (let g = 0; g <= length2; g++) {
  console.log(fib(g));
}
// $ node app.js 
// $ 結果,爆速
*/


 // トリナフィボナッチ数列を作る
 'use strict';
 const memo3 = new Map();
 memo3.set(0, 0);
 memo3.set(1, 0);
 memo3.set(2, 1);
 function trib(n) {
   if (memo3.has(n)) {
     return memo3.get(n);
   }
   const value = trib(n - 1) + trib(n - 2) + trib(n - 3); 
   memo3.set(n, value);
   return value;
 }
 const length3 = 40;
 for (let d = 0; d <= length3; d++) {
   console.log(trib(d));
 }


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
// node app.js 実行
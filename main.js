/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const confirmTitle = document.getElementById('title');
console.log(confirmTitle);

/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const confirmCss = document.querySelector('#item-container');
console.log(confirmCss);

/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */
const confirmList = document.getElementsByTagName('li');
console.log(confirmList);

/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const confirmItem = document.getElementsByClassName('item');
console.log(confirmItem);

/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */

 const confirmItem2 = document.querySelectorAll('.item');
 console.log(confirmItem2);

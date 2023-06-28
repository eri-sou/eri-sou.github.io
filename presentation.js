'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ここにコードを書く
const gatharingListItem = document.querySelectorAll("li");
console.log(gatharingListItem);

function listId(array) {
    for(const idName of array) {
        idName.id = "gatharing-list" ;
        idName.style.fontSize = "20px"
        console.log(idName);
    }
}
listId(gatharingListItem);

// クリックして発生するイベント
function clickEvnt() {
  // クリックした要素のテキストを取得する
  let searchKeyword = this.textContent;

  // 決まったURLとクリックしたテキストのリンクを合わせて検索用のURLを作る
  function createLink(keyword) {
    let searchDefURL = "https://www.bing.com/images/search";
    let encodedKeyword = encodeURIComponent(keyword);
    return searchDefURL + "?q=" + encodedKeyword;
  }

  // 新しいタブで検索結果を表示する
  let searchURL = createLink(searchKeyword);
  window.open(searchURL, "_blank");
}

// 全ての検索ボタンの要素を取得してクリックイベントを追加する
let searchLinks = document.querySelectorAll(".searchLink");
// searchLinks.forEach(function(link) {
//   link.addEventListener("click", clickEvnt);
// });
for (const link of searchLinks) {
  link.addEventListener("click", clickEvnt);
};

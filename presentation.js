'use strict'
// 1行目に記載している 'use strict' は削除しないでください
document.addEventListener('DOMContentLoaded', function() {
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

    // 検索ボタンのクリックイベントを処理する関数
    function showSearchResults(event) {
        event.preventDefault(); // デフォルトのリンク動作を無効化
  
        // クリックした要素のテキストを取得する
        let searchKeyword = this.textContent;
  
        // リンク先のURLを動的に生成する関数
        function generateSearchLink(keyword) {
          let searchEngineURL = "https://www.bing.com/images/search";
          let encodedKeyword = encodeURIComponent(keyword);
          return searchEngineURL + "?q=" + encodedKeyword;
        }
  
        // 新しいウィンドウまたはタブで検索結果を表示する
        let searchURL = generateSearchLink(searchKeyword);
        window.open(searchURL, "_blank");
      }
  
      // 全ての検索ボタンの要素を取得してクリックイベントを追加する
      let searchLinks = document.querySelectorAll(".searchLink");
      searchLinks.forEach(function(link) {
        link.addEventListener("click", showSearchResults);
      });

});

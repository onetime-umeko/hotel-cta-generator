function generateHTML() {
  const hotelName = document.getElementById('hotelName').value.trim();
  const imageURL = document.getElementById('imageURL').value.trim();
  const rakutenURL = document.getElementById('rakutenURL').value.trim();
  const jalanURL = document.getElementById('jalanURL').value.trim();
  const agodaURL = document.getElementById('agodaURL').value.trim();
  const expediaURL = document.getElementById('expediaURL').value.trim();
  const ikkyuURL = document.getElementById('ikkyuURL').value.trim();

  const html = `
<div class="cstmreba"><div class="tomarebalink-box"><div class="tomarebalink-image"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3499895&amp;pid=887321921" height="1" width="0" border="0" /><img src="${imageURL}"  alt="${hotelName}" width="300" style="border: none;" /></div><div class="tomarebalink-info"><div class="tomarebalink-name"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3499895&amp;pid=887321921" height="1" width="0" border="0" />${hotelName}</div><div class="tomarebalink-link1">
${rakutenURL ? `<div class="shoplinkrakuten"><a href="${rakutenURL}" target="_blank" rel="nofollow noopener" title="楽天トラベル" class="attaterrace-rakuten-btn">楽天トラベルで見る<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3499895&amp;pid=887321921" height="1" width="0" border="0" /></a></div>` : ''}
${jalanURL ? `<div class="shoplinkjalan"><a href="${jalanURL}" target="_blank" rel="nofollow noopener" title="じゃらん" class="attaterrace-jaran-btn">じゃらんで見る<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3499895&amp;pid=887321935" height="1" width="1" border="0" /></a></div>` : ''}
${ikkyuURL ? `<div class="shoplinkikyu"><a href="${ikkyuURL}" target="_blank" rel="nofollow noopener" title="一休" class="attaterrace-ikkyu-btn">一休で見る<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3499895&amp;pid=886802104" height="1" width="1" border="0" /></a></div>` : ''}
${agodaURL ? `<div class="shoplinkagoda"><a href="${agodaURL}" target="_blank" rel="nofollow noopener" title="agoda" class="attaterrace-agoda-btn">agodaで見る<img src="https://www16.a8.net/0.gif?a8mat=3T6MQF+490F8Y+4X1W+60OXE" height="1" width="1" border="0" /></a></div>` : ''}
${expediaURL ? `<div class="shoplinkexpedia"><a href="${expediaURL}" target="_blank" rel="nofollow noopener" title="Expedia" class="attaterrace-expedia-btn">Expediaで見る<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3499895&amp;pid=886332502" height="1" width="1" border="0" /></a></div>` : ''}
</div></div><div class="booklink-footer"></div></div></div>
`;

  document.getElementById('output').value = html;
}

function copyHTML() {
  const textarea = document.getElementById('output');
  textarea.select();
  document.execCommand('copy');
  alert('HTMLをコピーしました！');
}

function clearForm() {
  // 入力フィールドをすべて空にする
  document.getElementById("hotelName").value = "";
  document.getElementById("imageURL").value = "";
  document.getElementById("rakutenURL").value = "";
  document.getElementById("jalanURL").value = "";
  document.getElementById("agodaURL").value = "";
  document.getElementById("expediaURL").value = "";

  // 出力HTMLも空にする
  document.getElementById("output").value = "";
}

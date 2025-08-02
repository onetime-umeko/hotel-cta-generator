function generateHTML() {
  const hotelName = document.getElementById('hotelName').value.trim();
  const imageURL = document.getElementById('imageURL').value.trim();
  const rakutenURL = document.getElementById('rakutenURL').value.trim();
  const jalanURL = document.getElementById('jalanURL').value.trim();
  const agodaURL = document.getElementById('agodaURL').value.trim();
  const expediaURL = document.getElementById('expediaURL').value.trim();
  const ikkyuURL = document.getElementById('ikkyuURL').value.trim();
  const recommendComment = document.getElementById('recommendComment').value.trim();

  const html = `
<div class="hotel-cta-block">
  <div class="hotel-cta-image">
    <img src="${imageURL}" alt="${hotelName}">
  </div>

  <p class="cta-label">＼ ここから予約できます ／</p>

  <div class="hotel-name">${hotelName}</div>
  ${recommendComment ? `<p class="hotel-cta-text">${recommendComment}</p>` : ''}

  <div class="hotel-cta-buttons">
    ${rakutenURL ? `<a class="cta-btn rakuten" href="${rakutenURL}">楽天トラベルで料金を見る</a>` : ''}
    ${jalanURL ? `<a class="cta-btn jalan" href="${jalanURL}">じゃらんで空き状況を確認</a>` : ''}
    ${agodaURL ? `<a class="cta-btn agoda" href="${agodaURL}">Agodaでプランを見る</a>` : ''}
    ${expediaURL ? `<a class="cta-btn expedia" href="${expediaURL}">Expediaで予約する</a>` : ''}
    ${ikkyuURL ? `<a class="cta-btn ikkyu" href="${ikkyuURL}">一休で見る</a>` : ''}
  </div>

  <p class="coupon-guide-link">
    ▶ 最新クーポン情報は
    <a href="/category/deals/" target="_blank">こちらのお得情報ページ</a>にまとめています。
  </p>
</div>
`;

  document.getElementById('output').value = html;
}

function copyHTML() {
  const textarea = document.getElementById('output');
  textarea.select();
  document.execCommand('copy');
  alert('HTMLをコピーしました！');
}

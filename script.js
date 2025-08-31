function generateHTML() {
  const hotelName = document.getElementById('hotelName').value.trim();
  const imageURL = document.getElementById('imageURL').value.trim();
  const rakutenURL = document.getElementById('rakutenURL').value.trim();
  const jalanURL = document.getElementById('jalanURL').value.trim();
  const agodaURL = document.getElementById('agodaURL').value.trim();
  const expediaURL = document.getElementById('expediaURL').value.trim();
  const ikkyuURL = document.getElementById('ikkyuURL').value.trim();

  const html = `
<div class="hotel-cta-block">
  <div class="hotel-cta-image">
    <img src="${imageURL}" alt="${hotelName}">
  </div>
  <div class="hotel-name">${hotelName}</div>

  <div class="hotel-cta-buttons">
    ${rakutenURL ? `<a class="cta-btn rakuten" href="${rakutenURL}" target="_blank">楽天トラベルで料金を見る</a>` : ''}
    ${jalanURL ? `<a class="cta-btn jalan" href="${jalanURL}" target="_blank">じゃらんで空き状況を確認</a>` : ''}
    ${agodaURL ? `<a class="cta-btn agoda" href="${agodaURL}" target="_blank">Agodaでプランを見る</a>` : ''}
    ${expediaURL ? `<a class="cta-btn expedia" href="${expediaURL}" target="_blank">Expediaで予約する</a>` : ''}
    ${ikkyuURL ? `<a class="cta-btn ikkyu" href="${ikkyuURL}" target="_blank">一休で見る</a>` : ''}
  </div>

  <p class="coupon-guide-link">
    ▶ 最新クーポン情報は
    <a href="https://fufunotabi.com/otokumatome">こちらのお得情報ページ</a>にまとめています。
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

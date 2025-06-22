function generateHTML() {
  const hotelName = document.getElementById("hotelName").value;
  const imageURL = document.getElementById("imageURL").value;
  const rakutenURL = document.getElementById("rakutenURL").value;
  const jalanURL = document.getElementById("jalanURL").value;
  const agodaURL = document.getElementById("agodaURL").value;
  const expediaURL = document.getElementById("expediaURL").value;

  let html = `<div class="cstmreba">
  <div class="tomarebalink-box">
    <div class="tomarebalink-image">
      <a href="${rakutenURL}" target="_blank">
        <img src="${imageURL}" width="300" style="border: none;" />
      </a>
    </div>
    <div class="tomarebalink-info">
      <div class="tomarebalink-name">
        <a href="${rakutenURL}" target="_blank">${hotelName}</a>
      </div>
      <div class="tomarebalink-link1">`;

  if (rakutenURL) {
    html += `
        <div class="shoplinkrakuten">
          <a href="${rakutenURL}" target="_blank">楽天トラベル</a>
        </div>`;
  }

  if (jalanURL) {
    html += `
        <div class="shoplinkjalan">
          <a href="${jalanURL}" target="_blank">じゃらん</a>
        </div>`;
  }

  if (agodaURL) {
    html += `
        <div class="shoplinkagoda">
          <a href="${agodaURL}" target="_blank" rel="nofollow noopener">agodaで見る</a>
        </div>`;
  }

  if (expediaURL) {
    html += `
        <div class="shoplinkexpedia">
          <a href="${expediaURL}" target="_blank" rel="nofollow noopener">Expediaで見る</a>
        </div>`;
  }

  html += `
      </div>
    </div>
    <div class="booklink-footer"></div>
  </div>
</div>`;

  document.getElementById("output").value = html;
}

/**
 * IMPORTANT:
 * To show the LAST 3 posts without an API,
 * you must paste the 3 post/reel URLs here.
 *
 * Example:
 * https://www.instagram.com/p/XXXXXXXXXXX/
 * https://www.instagram.com/reel/YYYYYYYYYYY/
 */
const LAST_3_POST_URLS = [
    // Replace these with the 3 most recent post URLs from @belle.ame.cbba
    "https://www.instagram.com/p/DSPqO_oES8K/",
    "https://www.instagram.com/p/DJZ9adrSX3c/",
    "https://www.instagram.com/p/DAjTCogy6MI/"
];

function renderIG3() {
    const grid = document.getElementById("ig3Grid");
    if (!grid) return;

    const urls = (LAST_3_POST_URLS || []).filter(Boolean).slice(0, 3);

    if (urls.length < 3) {
        grid.innerHTML = `
      <div class="ig3__card" style="display:grid;place-items:center;padding:16px;color:rgba(27,30,28,.7);text-align:center;">
        Pegá 3 URLs de posts en <strong>LAST_3_POST_URLS</strong>.
      </div>
      <div class="ig3__card" style="opacity:.7"></div>
      <div class="ig3__card" style="opacity:.7"></div>
    `;
        return;
    }

    grid.innerHTML = urls.map(url => `
    <div class="ig3__card">
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="${url}"
        data-instgrm-version="14"
        style="background:#FFF; border:0; width:100%;"
      ></blockquote>
    </div>
  `).join("");

    // process embeds
    if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
    else setTimeout(() => window.instgrm?.Embeds?.process?.(), 700);
}

renderIG3();

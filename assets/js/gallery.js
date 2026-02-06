/**
 * Paste your latest Instagram post URLs here (up to ~8 is usually nice).
 * Example:
 * "https://www.instagram.com/p/CxXXXXXX/"
 * "https://www.instagram.com/reel/CyYYYYYY/"
 */
const IG_POST_URLS = [
    "https://www.instagram.com/p/DUPSOC3kQ39/",
    "https://www.instagram.com/reel/DJuH8DYR4bN/",
];

const MAX_POSTS = 4;

function renderSkeletons(grid, count = 6) {
    grid.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const d = document.createElement("div");
        d.className = "igSkeleton";
        grid.appendChild(d);
    }
}

function renderEmbeds(grid, urls) {
    grid.innerHTML = "";

    urls.slice(0, MAX_POSTS).forEach((url) => {
        const wrap = document.createElement("div");
        wrap.className = "igCard";

        // Instagram Embed markup
        wrap.innerHTML = `
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="${url}"
        data-instgrm-version="14"
        style="background:#FFF; border:0; width:100%;"
      ></blockquote>
    `;

        grid.appendChild(wrap);
    });

    // Ask Instagram to process embeds
    // (script is loaded in HTML)
    if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === "function") {
        window.instgrm.Embeds.process();
    } else {
        // If script hasn't loaded yet, try again shortly
        setTimeout(() => {
            if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
        }, 600);
    }
}

(function initIGGallery() {
    const grid = document.getElementById("igGrid");
    const hint = document.getElementById("igHint");
    if (!grid) return;

    const urls = (IG_POST_URLS || []).filter(Boolean);

    if (!urls.length) {
        renderSkeletons(grid, 6);
        if (hint) hint.style.display = "block";
        return;
    }

    if (hint) hint.style.display = "none";
    renderEmbeds(grid, urls);
})();

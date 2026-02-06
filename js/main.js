// Replace these with your real URLs / numbers:
const LINKS = {
    whatsapp: "https://wa.me/59176447284?text=Hola%20Belle%20%C3%82me%2C%20quiero%20el%20cat%C3%A1logo%20por%20favor.",
    instagram: "https://www.instagram.com/belle.ame.cbba/",
    tiktok: "https://www.tiktok.com/@belle.ame.cbba",
    facebook: "https://www.facebook.com/AleeAmphetamiineee"
};

function bindSocialLinks() {
    document.querySelectorAll("[data-social]").forEach(el => {
        const key = el.getAttribute("data-social");
        if (LINKS[key]) el.setAttribute("href", LINKS[key]);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
    });
}

function mobileMenu() {
    const toggle = document.querySelector(".nav__toggle");
    const list = document.querySelector(".nav__list");
    if (!toggle || !list) return;

    toggle.addEventListener("click", () => {
        const isOpen = list.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close on link click
    list.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            list.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function collectionsFilter() {
    const chips = document.querySelectorAll(".chip");
    const cards = document.querySelectorAll(".collectionCard");
    if (!chips.length || !cards.length) return;

    chips.forEach(btn => {
        btn.addEventListener("click", () => {
            chips.forEach(b => b.classList.remove("is-active"));
            btn.classList.add("is-active");

            const filter = btn.dataset.filter;
            cards.forEach(card => {
                const cat = card.dataset.category;
                const show = filter === "all" || cat === filter;
                card.style.display = show ? "" : "none";
            });
        });
    });
}

function newsletter() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.email.value.trim();
        if (!email) return;

        // Demo behavior (no backend)
        alert("¡Gracias! Te avisaremos con novedades: " + email);
        form.reset();
    });
}

function year() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
}

bindSocialLinks();
mobileMenu();
collectionsFilter();
newsletter();
year();

// Basic starter script
(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const btn = document.getElementById("helloButton");
    const out = document.getElementById("helloOutput");

    if (btn && out) {
        btn.addEventListener("click", () => {
            out.textContent = "Hello from JavaScript.";
        });
    }
})();


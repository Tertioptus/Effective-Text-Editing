document.querySelectorAll("code").forEach(code => {
    code.addEventListener("click", async () => {
        await navigator.clipboard.writeText(code.textContent);
    });

    code.style.cursor = "pointer";

    code.addEventListener("mouseenter", () => {
        code.style.backgroundColor = "#eee";
    });

    code.addEventListener("mouseleave", () => {
        code.style.backgroundColor = "";
    });       
});

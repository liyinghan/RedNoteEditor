document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const highlight = document.getElementById("highlight");
    const charCount = document.getElementById("charCount");
    const maxChars = 1500;

    inputText.addEventListener("input", function () {
        let textValue = inputText.value;

        // Enforce 1500-character limit
        if (textValue.length > maxChars) {
            textValue = textValue.substring(0, maxChars);
            inputText.value = textValue; // Trim text if over limit
        }

        const textLength = textValue.length;

        // Highlight extra text (if over 1000 characters)
        const withinLimit = textValue.substring(0, 1000);
        const overLimit = textValue.substring(1000);
        highlight.innerHTML = withinLimit + `<span style="color: red;">${overLimit}</span>`;

        // Sync scrolling between highlight and input
        highlight.scrollTop = inputText.scrollTop;

        // Update character count
        charCount.textContent = `${textLength}/${maxChars} 字`;
        if (textLength > 1000) {
            charCount.classList.add("over-limit");
        } else {
            charCount.classList.remove("over-limit");
        }
    });

    inputText.addEventListener("scroll", function () {
        highlight.scrollTop = inputText.scrollTop;
    });
});

function generateFormattedText() {
    const inputText = document.getElementById("inputText").value;
    const mockAppContent = document.getElementById("mockAppContent");

    // Generate formatted text with basic paragraph wrapping
    mockAppContent.innerHTML = inputText
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("");
}

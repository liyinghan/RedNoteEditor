document.addEventListener("DOMContentLoaded", function () {
    initEmojiToolbar();

    const inputText = document.getElementById("inputText");
    const charCount = document.getElementById("charCount");
    const maxChars = 1500;

    inputText.addEventListener("input", function () {
        const textLength = inputText.value.length;
        if (textLength > maxChars) {
            inputText.value = inputText.value.substring(0, maxChars);
        }
        charCount.textContent = `${inputText.value.length}/${maxChars}`;
    });
});

function addEmoji(emoji) {
    const inputText = document.getElementById("inputText");
    const cursorPosition = inputText.selectionStart;
    const textBefore = inputText.value.substring(0, cursorPosition);
    const textAfter = inputText.value.substring(cursorPosition);
    inputText.value = textBefore + emoji + textAfter;
    inputText.focus();
    inputText.selectionEnd = cursorPosition + emoji.length;

    const charCount = document.getElementById("charCount");
    charCount.textContent = `${inputText.value.length}/1500`;
}

function generateFormattedText() {
    const inputText = document.getElementById("inputText").value;
    const mockAppContent = document.getElementById("mockAppContent");
    mockAppContent.innerHTML = inputText
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("");
}

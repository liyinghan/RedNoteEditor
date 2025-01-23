document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const charCount = document.getElementById("charCount");
    const maxChars = 1500;

    // 更新字符计数
    inputText.addEventListener("input", function () {
        const textLength = inputText.value.length;
        if (textLength > maxChars) {
            inputText.value = inputText.value.substring(0, maxChars);
        }
        charCount.textContent = `${inputText.value.length}/${maxChars}`;
    });
});

function generateFormattedText() {
    const inputText = document.getElementById("inputText").value;
    const mockAppContent = document.getElementById("mockAppContent");

    // 简单的段落排版
    mockAppContent.innerHTML = inputText
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("");
}

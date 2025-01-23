const emojiData = [
    "😀", "😂", "😍", "🥳", "😎", "😭", "🎉", "✈️", "🍎", "🍔",
    "❤️", "🔥", "⭐", "⚡", "📚", "🛍️", "🏃‍♂️", "🎂", "🍰", "🏠",
    "🏫", "📱", "🎵", "🎶", "🔔", "👍", "👎", "👏", "🙏", "😅"
];

// 动态生成 Emoji 按钮
function initEmojiToolbar() {
    const toolbar = document.getElementById("emojiToolbar");
    toolbar.innerHTML = ""; // 清空现有内容
    emojiData.forEach((emoji) => {
        const button = document.createElement("button");
        button.textContent = emoji;
        button.onclick = () => addEmoji(emoji);
        toolbar.appendChild(button);
    });
}

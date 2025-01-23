const const emojiData = [
    "😀", "😂", "😍", "🥳", "😎", "😭", "🎉", "✈️", "🍴", "🏃‍♂️",
    "🌟", "⚡️", "🎁", "📖", "❤️", "🔥", "🍎", "🍊", "🍓", "🍇"
];

function initEmojiToolbar() {
    const toolbar = document.getElementById("emojiToolbar");
    emojiData.forEach((emoji) => {
        const button = document.createElement("button");
        button.classList.add("emoji-button");
        button.textContent = emoji;
        button.onclick = () => addEmoji(emoji);
        toolbar.appendChild(button);
    });
}

function addSemanticEmojis(text) {
const keywordEmojiMap = {
    开心: "😀",
    快乐: "😊",
    难过: "😢",
    兴奋: "🥳",
    旅行: "✈️",
    购物: "🛍️",
    学习: "📚",
    工作: "💻",
    聚会: "🎉",
    健身: "💪",
    美食: "🍔"
};


    return text
        .split("\n")
        .map((line) => {
            let enhancedLine = line;
            Object.keys(keywordEmojiMap).forEach((keyword) => {
                const emoji = keywordEmojiMap[keyword];
                const regex = new RegExp(`(${keyword})`, "g");
                enhancedLine = enhancedLine.replace(regex, `$1 ${emoji}`);
            });
            return enhancedLine;
        })
        .join("\n");
}

function addSemanticEmojis(text) {
    const keywordEmojiMap = {
        开心: "😀",
        旅行: "✈️",
        学习: "📚",
        工作: "💻",
        购物: "🛍️",
        聚会: "🎉"
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

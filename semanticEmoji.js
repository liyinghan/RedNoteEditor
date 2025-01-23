function addSemanticEmojis(text) {
    const keywordEmojiMap = {
        开心: "😀",
        旅行: "✈️",
        跑步: "🏃‍♂️",
        聚会: "🎉",
        学习: "📚",
        购物: "🛍️",
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

const emojis = [
    "🐒","🐔","🐻‍❄️","🐰","🐹","🦊","🐭","🐱","🕊️","🐧","🐥","🐌","🦋","🕷️","🐞"
  ];
  
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6",
    "#1ABC9C", "#E74C3C", "#3498DB", "#E67E22", "#2ECC71",
    "#34495E", "#F39C12", "#7D3C98", "#A6ACAF", "#DFFF00",
    "#FF00FF", "#40E0D0", "#C70039", "#581845", "#FF5733",
    "#DAF7A6", "#FFC300", "#900C3F", "#B2BABB", "#E59866"
  ];
  
  /**
   * Generates a unique emoji avatar and background color based on a wallet address.
   * @param {string} address - Wallet address to generate the avatar for.
   * @returns {Object} Avatar object containing emoji and background color.
   */
  export function emojiAvatarForAddress(address: string) {
    if (!address) {
      return {
        emoji: "❓",
        color: "#BDC3C7" // Neutral gray color for unknown addresses
      };
    }
  
    // Convert the address into a number hash.
    const hash = address
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
    // Map the hash to an emoji and color index.
    const emojiIndex = hash % emojis.length;
    const colorIndex = hash % colors.length;
  
    return {
      emoji: emojis[emojiIndex],
      color: colors[colorIndex]
    };
  }
  
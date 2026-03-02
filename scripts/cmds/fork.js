module.exports = {
  config: {
    name: "fork",
    aliases: ["repo", "link"],
    version: "1.0",
    author: "Aphelion",
    countDown: 3,
    role: 0,
    longDescription: "Returns the link to the official, updated fork of the bot's repository.",
    category: "system",
    guide: { en: "{pn}" }
  },

  onStart: async function({ message }) {
    const text = "𝐅𝐔𝐂𝐊 𝐘𝐎𝐔𝐑 𝐌𝐎𝐌 𝐎𝐊𝐘 𝐈𝐌 𝐓𝐎𝐍𝐌𝐎𝐘";
    
    message.reply(text);
  }
};

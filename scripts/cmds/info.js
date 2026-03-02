const axios = require("axios");

module.exports = {
  config: {
    name: "info",
    author: "Tokodori",
    role: 0,
    shortDescription: "Displays admin info",
    longDescription: "Shows info about the bot owner/admin",
    category: "admin",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    try {
      const message = `
╭─━━━❖🫧❖━━━─╮
👾 𝗩͟𝗜͟͠𝗥𝗨𝗦  𝗔͟𝗟͟͠𝗘𝗥𝗧
╰─━━━❖🫧❖━━━─╯

- 𝗡𝗔͜͡𝗠𝗘       :    - 𝗔𝗖𝗦 𝗧𝗢𝗡𝗠𝗢𝗬  🎭
- 𝗚𝗘͜͡𝗡𝗗𝗘𝗥        : -𝗠𝗔͜͡𝗟𝗘  ⚡       
- 𝗥𝗘͜͡𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 :  - 𝗦𝗜͜͡𝗡𝗚𝗟𝗘  🪄  
🍷 𝗔͜͡𝗚𝗘            : 20  🥂  
💝 𝗥𝗘͜͡𝗟𝗜𝗚𝗜𝗢𝗡 : 𝗜𝗦͜͡𝗟𝗔𝗠  
   𝗔͜͡𝗗𝗗𝗥𝗘𝗦𝗦       : RANGPUR  🍷☠️  
 - 𝗙𝗔͜͡𝗖𝗘𝗕𝗢𝗢𝗞  : 🪄https://www.facebook.com/Acs.Hacker.WHO.IM.YOU.HAVE.NO.IDEA

🎯🪄⚡

👾 𝗧𝗜͜͡𝗧𝗟𝗘 : 𝗕𝗜𝗥𝗧𝗛 𝗙𝗔͜͡𝗧𝗛𝗘𝗥 𝗢𝗙 𝗡𝗢𝗕𝗜𝗡🍷
📩 𝗙𝗔͜͡𝗩𝗢𝗥𝗜𝗧𝗘 𝗪𝗢𝗥𝗗 : 𝗘𝗥𝗢͜͡𝗢𝗥   📨🥂
🎭 𝗠𝗢͜͡𝗗𝗘  : 𝗗𝗔𝗥𝗞 | 𝗛𝗜͜͡𝗗𝗗𝗘𝗡 | 𝗙𝗢𝗖𝗨𝗦𝗘𝗗  ☠️  
🧠 𝗖𝗢͜͡𝗠𝗠𝗔𝗡𝗗𝗦 :  𝟰𝟰𝟰☠️
👑 𝗦𝗢͜͡𝗠𝗘𝗧𝗛𝗜𝗡𝗚 𝗘𝗟𝗦𝗘   : 🍷👑


───────────────────────────`;

      // ভিডিও ডাউনলোড করে স্ট্রিম তৈরি করা
      const videoUrl = "https://files.catbox.moe/se8gb1.mp4";
      const stream = (await axios.get(videoUrl, { responseType: "stream" })).data;

      await api.sendMessage({
        body: message,
        attachment: stream
      }, event.threadID, event.messageID);

      // রিঅ্যাকশন চেক (যদি মেসেজ বডিতে ownerinfo থাকে)
      if (event.body && event.body.toLowerCase().includes('ownerinfo')) {
        api.setMessageReaction('🖤', event.messageID, (err) => {}, true);
      }

    } catch (error) {
      console.error('Error in ownerinfo command:', error);
      return api.sendMessage('Something went wrong while processing the command.', event.threadID);
    }
  },
};

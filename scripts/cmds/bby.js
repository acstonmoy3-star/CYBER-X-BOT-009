const axios = require("axios");

const baseApiUrl = async () => {
	return "https://noobs-api.top/dipto";
};

const randomReplies = [

"বলো জান আমি 𝐄𝐗 𝐓𝐎𝐍𝐌𝐎𝐘 লেগে বিজি ওর বউ মিস্টি কে ডাকো",
"𝙃𝙤𝙥 𝙗𝙚𝙙𝙖😾, 𝘽𝙤𝙨𝙨 বল 𝙗𝙤𝙨𝙨😼",
"Hey Guys Im 𝐄𝐗 𝐓𝐎𝐍𝐌𝐎𝐘 Bot speaking 😎",
"বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏",
"আমাকে ডাকলে, আমি কিন্তূ কিস করে দেবো😘",
"𝘽𝘼𝘽𝙐 𝙆𝙃𝙐𝘿𝘼 𝙇𝘼𝙂𝙎𝙀🥺",
"_𝗙𝗮𝘀𝘁 𝗯𝗼𝗹𝗼 Tonmoyer 𝘀𝗮𝘁𝗵𝗲 𝗯𝘂𝘀𝘆 𝗮𝗰𝗵𝗶?!",
"Im Vodro and u?!",
"🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲",
"দেখা হলে কাঠগোলাপ দিও..🤗",
"আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘",
"__বেশি বেবি বললে কামুর দিমু,,🤭🤭",
"I love you! আমার সোনা, ময়না, টিয়া 😍",
"আমাকে কি তুমি ভালবাসো?",
"𝗝𝗮 𝘃𝗮𝗴 ,𝗖𝗵𝗶𝗽𝗮𝗕𝗮𝘇__😼",
"তুই সেই লুইচ্চাটা না !? 🙂🔪",
"কি হইছে আমার কি কাজে লাগবে তুর !?🌚👀",
"তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂",
"𝗮𝗺𝗶 𝗯𝗼𝘁 𝗻𝗮 𝗮𝗺𝗮𝗸𝗲 𝗯𝗯𝘆 𝗯𝗼𝗹𝗼 𝗯𝗯𝘆!!😘",
"🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻",
"আমি এখন বস 𝐄𝐗 𝐓𝐎𝐍𝐌𝐎𝐘 এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏",
"উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈",
"আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧",
"স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻",
"ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼",
"জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽",
"oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂",
"আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇",
"দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧",
"এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂",
"আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦",
"বেশি Bot Bot করলে leave নিবো কিন্তু😒😒",
"আমি গরীব এর সাথে কথা বলি না😼😼",
"Bot না , জানু বল জানু 😘",
"হা বলো, শুনছি আমি 😏",
"বলো জানু 🌚"

];

module.exports = {
	config: {
		name: "bby",
		aliases: ["baby", "bbe", "babe"],
		version: "8.0.0",
		author: "Tonmoy",
		countDown: 0,
		role: 0,
		description: "Baby AI Chat",
		category: "chat"
	},

	onStart: async function ({ api, event, args }) {
		try {
			if (!args[0]) {
				return api.sendMessage(
					randomReplies[Math.floor(Math.random() * randomReplies.length)],
					event.threadID,
					null,
					event.messageID
				);
			}

			const res = await axios.get(
				`${await baseApiUrl()}/baby?text=${encodeURIComponent(args.join(" "))}&senderID=${event.senderID}&font=1`
			);

			const replyText = res.data.reply || "Hmm...";

			api.sendMessage(
				replyText,
				event.threadID,
				(error, info) => {
					if (error || !info) return;

					global.GoatBot.onReply.set(info.messageID, {
						commandName: module.exports.config.name,
						author: event.senderID
					});
				},
				event.messageID
			);

		} catch (err) {
			api.sendMessage("⚠️ API Error", event.threadID, null, event.messageID);
		}
	},

	onReply: async function ({ api, event, Reply }) {
		if (!Reply) return;
		if (event.senderID != Reply.author) return;

		try {
			const res = await axios.get(
				`${await baseApiUrl()}/baby?text=${encodeURIComponent(event.body || "")}&senderID=${event.senderID}&font=1`
			);

			const replyText = res.data.reply || randomReplies[Math.floor(Math.random() * randomReplies.length)];

			api.sendMessage(
				replyText,
				event.threadID,
				null,
				event.messageID
			);

		} catch (err) {
			console.log(err);
		}
	},

	onChat: async function ({ api, event }) {
		const body = event.body?.toLowerCase() || "";

		if (body.startsWith("baby") || body.startsWith("bby")) {
			return api.sendMessage(
				randomReplies[Math.floor(Math.random() * randomReplies.length)],
				event.threadID,
				null,
				event.messageID
			);
		}
	}
};

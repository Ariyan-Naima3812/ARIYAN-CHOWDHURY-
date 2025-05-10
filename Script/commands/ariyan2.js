const fs = require("fs");
module.exports.config = {
	name: "king",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Irfan")==0 || event.body.indexOf("ariyan")==0 || event.body.indexOf("ARIYAN")==0 || event.body.indexOf("Ariyan")==0) {
		var msg = {
				body: "𝐌𝐲 𝐁𝐨𝐬𝐬 𝐀𝐑𝐈𝐘𝐀𝐍 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 \n\n\n👉𝐂𝐨𝐧𝐭𝐚𝐜𝐭🌺 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 : https://www.facebook.com/profile.php?id=100000227139245\n\n🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 2 : https://www.facebook.com/profile.php?id=100000227139245\n\n🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 3 : NOT ALLOED \n\n 🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 4 : https://www.facebook.com/profile.php?id=100000596169797\n\n 🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 5 : https://www.facebook.com/4R1YN.N41M4\n\n 🌺𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 6 : https://www.facebook.com/profile.php?id=100080151202732",
				attachment: fs.createReadStream(__dirname + `/noprefix/bossariyan.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "See the prefix of BOT",
  commandCategory: "For Admins",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "\x4d\x72\x54\x6f\x6d\x58\x78\x58") { return api.sendMessage(`Sai credits!`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot" ,"how use bot", "where are the bots","bot not working","bot is offline","where prefix","prefx","prfix","prifx","perfix","bot not talking","where is bot"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`𝐓𝐇𝐈𝐒 𝐈𝐒 𝐌𝐘 𝐏𝐑𝐄𝐅𝐈𝐗 ⇉ [ ${prefix} ]\n                   ♻️𝐎𝐖𝐍𝐄𝐑♻️:- 👑 𝐀𝐑𝐈𝐘𝐀𝐍 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 👑 \n\n
🖤𝐘𝐎𝐔 𝐂𝐀𝐍 𝐂𝐀𝐋𝐋 𝐇𝐈𝐌 🌺 𝐀𝐑𝐈𝐘𝐀𝐍 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 🖤\n\n

🌺𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🌺:-  𝐀𝐑𝐈𝐘𝐀𝐍 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 https://www.facebook.com/Abal.Tor.Abbu.Irfan.Ariyan \n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 2 : 𝐀𝐑𝐈𝐘𝐀𝐍 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘  https://www.facebook.com/Ariyan.Chowdhury.official.3812 \n

\n𝐖𝐡𝐚𝐭'𝐬 𝐀𝐩𝐩 : 01758011315`)
      }
      else return out('️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️███████ ]▄▄▄▄▄▄▄▄\n▂▄▅█████████▅▄▃▂\nI███████████████████]\n◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤\n➢' + data.PREFIX)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("error", event.threadID)
  }

module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/1tJHSkn2/1740504548780.jpg", 
            
            "https://i.postimg.cc/prSJhKBB/1740146513802.jpg", 
            
            "https://i.postimg.cc/7Z0nhGJg/1728637121854.jpg",

            "https://i.postimg.cc/02JpXMfL/IMG-20240704-225140.jpg"];
  
var callback = () => api.sendMessage({body:`𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂  𝗔𝗹𝗮𝗶𝗸𝘂𝗺🌺💚𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 
________________________________________

❇️𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : ${global.config.BOTNAME}

❇️𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 :  𝗔𝗥𝗜𝗬𝗔𝗡 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 

❇️𝐀𝐃𝐃𝐑𝐄𝐒 : 🄿🅄🅃🄷🄸🅈🄰•🅁🄰🄹🅂🄷🄰🄷🄸

_____________𝐂𝐎𝐍𝐓𝐀𝐂𝐓_____________

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 : https://www.facebook.com/Abal.Tor.Abbu.Irfan.Ariyan

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 2 :
https://www.facebook.com/Ariyan.Chowdhury.official.3812

❇️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 : 𝗔𝗥𝗜𝗬𝗔𝗡 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 

𝐎𝐓𝐇𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍____________________

𝐓𝐘𝐏𝐄 /𝐀𝐃𝐌𝐈𝐍 

➟ 𝐔𝐏𝐓𝐈𝐌𝐄

𝐓𝐎𝐃𝐀𝐘 𝐈𝐒 𝐓𝐈𝐌𝐄 : ${juswa} 

𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 ${hours}:${minutes}:${seconds}.

𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆  ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };

/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "single",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ariyan",
  description: "HOT VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝐂𝐫𝐞𝐝𝐢𝐭 : 𝗔𝗥𝗜𝗬𝗔𝗡 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "https://drive.google.com/file/d/1j5__adNsO6c-u-e2znSMpM_rrCIIYJSe/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j3mkNWV61wksetGzukJaNzxFPDpZaGif/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j1RS316XRWuWPHjA5HZHbF1g_nqFk36L/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j-lQUx_o7PiMHAACpWGFRq_uJTl2LqRK/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j-LD_mGSNL9U34Srw59dOLHQ91EZ_ZQv/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j-D08UTETWaO2LYStD7LGHjjtboywgn0/view?usp=drivesdk",
    "https://drive.google.com/file/d/1izTFNyp0OqpsJoMOLnLy9YkUc34gleq-/view?usp=drivesdk",
    "https://drive.google.com/file/d/1ipwnEpjNzKxb5la3H_NeNmkHOn1UPkE9/view?usp=drivesdk",
    "https://drive.google.com/file/d/1hkIUi-NzNkjSNkG7zUS4FgLoO7pYOC1J/view?usp=drivesdk",
    "https://drive.google.com/file/d/1hnHD2fvEy8nWWvcfOK_1qz0ZETugi1aJ/view?usp=drivesdk",
    "https://drive.google.com/file/d/1hwreSL-EpRqcy4Ts2KLLZPcpck9_QQtv/view?usp=drivesdk",
    "https://drive.google.com/file/d/1hz_FV9wROsIiVh170C6OeOMoxfmsX2w4/view?usp=drivesdk",
    "https://drive.google.com/file/d/1i-iJhurSzUv1LBsKAopCFDLTftMU0TIO/view?usp=drivesdk",
    "https://drive.google.com/file/d/1i61wgQpWtqIsc3BB-qUkrrDdBjQQU8X4/view?usp=drivesdk",
    "https://drive.google.com/file/d/1i6hLiZf5jzGp8xurAgiaec8QhcQILnkP/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iGasMxDVfi-S796OdKvf4ekJlWmO1dJQ/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iLjSDTaCvQQr0d84LXEy0lzmujfX9g_d/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iOB2ebyL3yyvwHVz2ZTAUxda8tN3kPjl/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iSGcc_zNHsz4NwrHdkjTUujAjcXRG1ac/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iZhE65iXCVGYUHKOrgqopJLwWsjfViR_/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iaBEt50uvT4h5jNaaO5Meg_RZI8Zf1ZT/view?usp=drivesdk",
    "https://drive.google.com/file/d/1igQqHecObuKqI-gJNQ3iSF6EeZlJvoIs/view?usp=drivesdk",
    "https://drive.google.com/file/d/1ii5ar_MvnVe0UZsvtiR-0k_sqstACIIv/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iiavmsy-zKNeOXDNJ51_kADSNoZK-zts/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iou8mJClmvwBewNDaobIEM7Ysv94JPB0/view?usp=drivesdk",
    
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };

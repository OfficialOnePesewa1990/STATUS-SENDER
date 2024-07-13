//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "233544482494";
global.owner = process.env.OWNER_NUMBER || "23354482494";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNGdkxIRFB4ZmFLZThhNEkzTi84aEhEMm42MUMvYzZqWE1iUjg3TnZrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWFjb0tRQjNRQVhUM2F5TDZWKzZvL3NNL1hsbmJvYWM1MUJNUnJ1TnVEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRGs4Vjd2UmUzU1dJSGhPTnhiVDY4ayswNjVRRUFxSDRvUGR5L2R4d1gwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDY3MzanFybkFTYnlFQStidXFFc2pnbWNZV2M4cnE4VzNzN0syZWVoM3hVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPOWgrZktIVzVrRWc4VVU0MVJmU2V2Z3VMbzJ6WFc4R3VJRjBPYTFGbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU2TEtNWklpWWsydE5ZaE1jUGRwM3lWeTdLOXY0RmVpU2JEQ1VIS0dlV0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5vSG9yTkRwdVZ6cTZ5M21uOTUrMlZ0c053ZmxKdU5EVTRGd2pYQnlVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlpGeDI3MEFDcStuR055bEY2ZUVwTGpJNllMd3dJVjkrU3hNclYrR1BnRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNRVMwL1NIWWY1NXAxRGNXOUdkaHphM1kvR3dEcDNtd1dVdXZ1anFkU3R6M29reCttUlVQQXNtSURiemFjVG9kM1YwdHlHMEpnUDNNK0llOWV5V2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IlBBSExlSWRWeDlLVzhIbk5Ub1gvSjU5R0U3S2psMGo3em0zYWNKSzA5UnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFKSksxQU5TUXdxdVMzRjlTemZ0dGciLCJwaG9uZUlkIjoiMDMxMmQxOTMtN2RkNS00MjllLWFjOWYtNzc4OTQyODQzNjc3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ4QS9jbVJ6L2w1QlNnSjRhelJtTHNpTEw5Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UmcrZGdpNHp2VWF3Ykg3cW1lVEF3RHZzcVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUE5MVFBZTFgiLCJtZSI6eyJpZCI6IjIzMzU0NDQ4MjQ5NDo4NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFA5NFpJSEVOdVd4N1FHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXZhUVBTcVRaaW94MnlnbTVMUUJhdjlxZDR3enh5V2JOaC9KOXhuU3lTcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN1VpZXRZNGh2bTVoUXZnVmRJREhDZFY4dk9UaHFkL0cyN3VKMUY5OEZpZXlTbkt5SFBCWXNYVkkyelYxK1lqSjBLQ2ZhMy9udEVxQmsrOHFSNlgwQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjhiUy9sY01XRTEwN1BHeHF6YldCWUtiZVQxZVM4bWNmVUhaTWR3elIvaGhyLzZRMkxwbEYrZDR3aWRxc2R5c3d1L2FML2F2c2wyZ3YxSDI0SERGZGdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTQ0NDgyNDk0Ojg1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFMMmtEMHFrMllxTWRzb0p1UzBBV3IvYW5lTU04Y2xtellmeWZjWjBza3IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4MzA4MjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUg1In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Official OnePesewa 🏛️",
  author: process.env.PACK_AUTHER || "Official OnePesewa",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "OP BOT",
  ownername: process.env.OWNER_NAME || "OFFICIAL ONEPESEWA",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

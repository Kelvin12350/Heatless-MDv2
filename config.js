const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Heatless-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU85SE5SZG5FenhNbHNidm5LN1JCaFVPWE1yaDdsQTZiYzRWK2VvVUZIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUG1ZaHJpNzF6cEo0OTRPOFJ4a1VBVGRvZ0lqSzY5ZURxUnJ3MXJGelN3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSjNoL0g5bUwwTGUzQkw2UXR1dTRSOXFmUjRUY09VbCtvbGQ4VlFnTDFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1aEdGeEY3bE43L1V6ajh5Qk5SK3VTSDB3Nnk0MjA0VFNRMy9GYklXYUhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKT1NxVStxK3BNSFh4VlRHOXVSOUNMaEovWmtMWDJneTNjeU1WSUovWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJqYzFtUldRd04ydk9GT0hhM0MvZytpckwrS2ptUFBKaVFGWCtFQWwvaHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5RMGJFVWlwbzZpMTBwSDNWTTRFNERKT05sNmVWRUp2MmRJLzhVelRYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEl5UWd2MWdJRS83Wlg3amdSMkYxSTExaER2STN0Uk5oYStIWTNSb3JTWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ1V0lGTTRUc1d3a3hCY015b3Z1U2MzWHBuQVJrRjkrcHY3U2NxdlI2enVOL3MyRitVUWZoMW5OUE1zSk9qNEJMdTlDNEJDTFpuNS9LOGgwTXNyYWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IkhIbDFEWUNWN1BlSEFkWFl5bjhxeVVEZlNJY1FJUW0zVC9BdnkyY3l5Rmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA2MzU2NzYxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRjEyRUQ4MzQ5QjM2MTcwM0U1REVGRUY3RkM4RUUyOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDMzOTE0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDYzNTY3NjExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYxN0I4QTY2OUVBNTdEOTVDRThDNUNBRTVEMkZFMEQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwMzM5MTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjJaQkFTMzVIIiwibWUiOnsiaWQiOiIyMzQ3MDYzNTY3NjExOjQ3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjI2NzY2Mzg3OTk4OTYzOjQ3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDdYa2JvR0VQTG1xOFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZXRmZTZTbzZoL3QrRUhYR3o2R3BPL0NnckVic0hKa2tOYW9MVm1yU3drcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieWtsUkVWbTRBb1k5N2N2Ullhekh0WDllYXF0cEMvSm9UT092Zi83WCtSeGtoN0VZMU5NenliMStNVWdUd0RYYTRyQXg4RWcxcEQ0b2hiVjNNcE1WQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJPZzlWaDg5a1hzWUZLWmRCVnN3QUUxM2RXTXc4eUs2cTA2YnJGVGVreUdUNThiTTBFSEw2T0x3QVZxOE4zOFl2UWNXR0ErTnhSOG5waWxDWnFoRGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA2MzU2NzYxMTo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYclgzdWtxT29mN2ZoQjF4cytocVR2d29LeEc3QnlaSkRXcUMxWnEwc0pMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwMzM5MTAsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Heatless-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Heatless-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Heatless-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Heatless-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Heatless-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

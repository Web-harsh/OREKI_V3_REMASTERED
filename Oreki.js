// 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚃𝙷𝚄𝙶 𝚃𝙴𝙲𝙷𝙸𝙴𝚂 🐣🐎🌼
global.lastStickerBuffer = global.lastStickerBuffer || {};
const groupStickerCache = {};
const fs = require("fs")
const config = require('./config');
const ffmpeg = require('fluent-ffmpeg'); 
const PDFDocument = require('pdfkit');
const { writeFileSync, unlinkSync } = require('fs');
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    webpToVideo,
    addExifAvatar
} = require('./lib/converter')
const acrcloud = require("acrcloud");
const crypto = require('crypto');
const googleTTS = require('google-tts-api');
const { chatGpt, tiktokDl, ytMp4, ytMp3 } = require('./lib/screaper');
const makeid = crypto.randomBytes(3).toString('hex');
require('./config')
const jsobfus = require('javascript-obfuscator');
const yts = require('yt-search')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
const { color } = require('./lib/color')
const path = require('path');
const {translate} = require('@vitalets/google-translate-api')
const eco = require('discord-mongoose-economy');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, SecondNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const emojiRegex = require('emoji-regex');
const { v4: uuidv4 } = require('uuid')
const { GIFBufferToVideoBuffer} = require('./lib/myfunc')
const { uploadMedia, handleMediaUpload } = require('./lib/catbox'); 
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const util = require('util')
const FormData = require('form-data')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const ytdl = require('@distube/ytdl-core');
const checkDiskSpace = require('check-disk-space')
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4800)
const { addExif } = require('./lib/exif')
const {
  generateWAMessage,
  useMultiFileAuthState,
  areJidsSameUser,
  downloadContentFromMessage,
  prepareWAMessageMedia,
  proto,
  generateWAMessageFromContent,
  makeWASocket,
  generateWAMessageContent
} = require("baileys-mod");
const xeonverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = Array.isArray(global.ownernumber) ? global.ownernumber : [global.ownernumber];
const WA_DEFAULT_EPHEMERAL = 60 * 60 * 24 * 7; // Default ephemeral message duration (7 days)

const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, runtime, shorturl, formatp, getGroupAdmins } = require("./lib/myfunc");
const {
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc3')


const xtime = moment.tz('Africa/Lagos').format('HH:mm:ss')
const xdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY')
module.exports = ThugBotInc = async (ThugBotInc, m, chatUpdate, msg, store) => {
    try {  
        // Extract message type and content
        const messageType = m.mtype; // Detect message type
        const participant = m.sender; // Sender of the message
        // Fix for `m.isGroup` assignment
        if (!('isGroup' in m)) {
            m.isGroup = m.key.remoteJid.endsWith('@g.us');
        }
     const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
        // Extracting message properties
// Determine the body of the message based on its type
var body =
    (m.mtype === 'conversation') ? m.message.conversation :
    (m.mtype === 'imageMessage') ? m.message.imageMessage.caption :
    (m.mtype === 'videoMessage') ? m.message.videoMessage.caption :
    (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text :
    (m.mtype === 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
    (m.mtype === 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    (m.mtype === 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
    (m.mtype === 'viewOnceMessage' || m.mtype === 'viewOnceMessageV2') ?
        (m.message?.[m.mtype]?.message?.imageMessage?.caption ||
         m.message?.[m.mtype]?.message?.videoMessage?.caption || '') :
    (m.mtype === 'messageContextInfo') ?
        (m.message.buttonsResponseMessage?.selectedButtonId ||
         m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) :
    '';

var budy = (typeof m.text === 'string' ? m.text : '');

// Get the remote JID (sender's chat ID)
const frommeky = m.key.remoteJid;
const from = frommeky; // Assign the value of 'frommeky' to 'from'
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
async function getBotNumber(ThugBotInc) {
    try {
        return ThugBotInc.user?.id ? ThugBotInc.user.id.split(":")[0] : null;
    } catch (error) {
        console.error("Error retrieving bot number:", error);
        return null;
    }
}
const fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}
// Word Chain Game (WCG) for WhatsApp Bot by ThugBotInc
// Ensure database directory exists
const dbDir = path.join(__dirname, 'database');
const wcgPath = path.join(dbDir, 'wcgRooms.json');
const roundPath = path.join(dbDir, 'activeRounds.json');

if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

if (!fs.existsSync(wcgPath)) {
    fs.writeFileSync(wcgPath, '{}');
}
if (!fs.existsSync(roundPath)) {
    fs.writeFileSync(roundPath, '{}');
}

// Load JSON from file
function loadJSON(file) {
    try {
        const data = fs.readFileSync(file);
        return JSON.parse(data);
    } catch (err) {
        console.error('Failed to load JSON from', file, err);
        return {};
    }
}

// Save JSON to file
function saveJSON(file, data) {
    try {
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Failed to save JSON to', file, err);
    }
}

// Load your data into memory
let wcgRooms = loadJSON(wcgPath);
let activeRounds = loadJSON(roundPath);

// Helper to generate a random letter
function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
}

// Helper to generate a random word length (4 to 8)
function getRandomLength() {
    return Math.floor(Math.random() * 5) + 4;
}

// Utility to get user name
function getName(id) {
    return ThugBotInc.getName ? ThugBotInc.getName(id) : id.split('@')[0];
}
//prefix 1
         var prefix = prefix ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : `${prefix}`: prefix ?? global.prefix
         const pric = /^.¦|\\^/.test(body) ? body.match(/^.¦|\\^/gi) : prefix
        const isCommand = body.startsWith(pric)
  ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase()
  : "";
        const isCmd = body.startsWith(prefix, '')
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';    
        const isCmd2 = body.startsWith(prefix)
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await ThugBotInc.decodeJid(ThugBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
       
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isment = (type == 'documentMessage')
        const isLocation = type === 'locationMessage' || type === 'liveLocationMessage';
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isParamsJson = (type == 'paramsJsonMessage');
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))        
        
        const sticker = []
       //group
const isGroup = m.key.remoteJid.endsWith('@g.us');
const groupMetadata = m?.isGroup ? await ThugBotInc.groupMetadata(m.chat).catch(e => ({})) : {};
const groupName = groupMetadata?.subject || '';
const participants = groupMetadata?.participants || [];
const groupAdmins = await getGroupAdmins(participants) || [];

const isBotAdmins = groupAdmins.includes(botNumber);
const isAdmins = groupAdmins.includes(m?.sender);
const groupOwner = groupMetadata?.owner || '';
const isGroupOwner = (groupOwner ? groupOwner : groupAdmins).includes(m?.sender);
        //anti media
        const isXeonMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const ThugTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= ThugTheCreator || checkPremiumUser(m.sender, checkPremiumUser)
        expiredPremiumCheck(ThugBotInc, m,     expiredPremiumCheck)

   //premium
        async function replyprem(teks) {
    reply(`*⚠️Premium Feature Access Required*\n*This feature is reserved for premium users.*\n*To upgrade and unlock all advanced features, kindly contact the developer on telegram:*\nhttps://t.me/ASK_OF_HIM`)
}

async function reply(teks) {
    try {
        if (!ThugBotInc || !ThugBotInc.sendMessage) {
            throw new Error("ThugBotInc is not initialized.");
        }
        if (!m || !m.chat) {
            throw new Error("Message object (m) is undefined.");
        }

        // Load the thumbnail (Replace 'thumbnail.jpg' with your image file)
        const thumbnail = fs.readFileSync("./T-Media/Oreki.jpg");

        const message = {
            text: teks,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363312761563081@newsletter",
                    newsletterName: "ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘",
                    serverMessageId: 143
                },
                externalAdReply: {
                    title: '༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡',
                    body: `${global.ownername}`,
                    thumbnail: thumb, // Image buffer
                    mediaType: 1, // Image type
                    renderLargerThumbnail: true // Set to false for a smaller render
                }
            }
        };

        // Send message with thumbnail
        await ThugBotInc.sendMessage(m.chat, message, { quoted: m });

        console.log("Message sent successfully with newsletter and small thumbnail!");
    } catch (error) {
        console.error("Error sending message:", error.message);
    }
}
// This function will update the participants' roles based on the action ('promote' or 'demote')
async function updateParticipants(action, participants, chatId) {
    try {
        // Perform the action: promote or demote
        if (action === "promote") {
            // Promote each participant
            await ThugBotInc.groupParticipantsUpdate(chatId, participants, 'promote');
        } else if (action === "demote") {
            // Demote each participant
            await ThugBotInc.groupParticipantsUpdate(chatId, participants, 'demote');
        } else {
            console.error(`Unknown action: ${action}`);
            throw new Error(`Unknown action: ${action}`);
        }
    } catch (error) {
        console.error(`Error in updateParticipants for action '${action}':`, error);
        throw error; // Re-throw the error to be handled by the calling function
    }
}
// Event listener for group participant updates (e.g., welcome or farewell)
ThugBotInc.ev.on('group-participants.update', async (anu) => {
    if (global.welcome) {
        console.log(anu); // Logs the participant update event for debugging

        try {
            // Fetch group metadata
            let metadata = await ThugBotInc.groupMetadata(anu.id);
            let participants = anu.participants; // Array of participants involved in the update

            // Loop through all participants in the update
            for (let num of participants) {
                let ppuser, ppgroup;

                try {
                    // Fetch participant's profile picture
                    ppuser = await ThugBotInc.profilePictureUrl(num, 'image');
                } catch (err) {
                    // Default profile picture if fetching fails
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
                }

                try {
                    // Fetch group profile picture
                    ppgroup = await ThugBotInc.profilePictureUrl(anu.id, 'image');
                } catch (err) {
                    // Default group profile picture if fetching fails
                    ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';
                }

                // Number of members in the group
                let memb = metadata.participants.length;

                // Welcome message
                if (anu.action === 'add') {
                    const ThugWlcm = await getBuffer(ppuser);
                    let ThugName = num;
                    const xtime = moment.tz('Africa/Lagos').format('HH:mm:ss');
                    const xdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY');
                    const Thugmembers = memb;

                    let Thugbody = `╔═══════ ༻❁༺ ═══════╗  
                𝐖𝐄𝐋𝐂𝐎𝐌𝐄 😊  
╚═══════ ༻❁༺ ═══════╝  

╭── ❀ *Details* ❀ ──╮  
│ ✧ *Username*:  
│   @${ThugName.split("@")[0]}  
│  
│ ✧ *Group*:  
│   *${metadata.subject}*  
│  
│ ✧ *Member*:  
│   ${Thugmembers}th  
│  
│ ✧ *Time*:  
│   *${xtime} | ${xdate}*  
╰── ❀ *Status: User joined the group* ❀ ──╯  
︎`;

                    await ThugBotInc.sendMessage(anu.id, {
                        text: Thugbody,
                        contextInfo: {
                            mentionedJid: [num],
                            externalAdReply: {
                                showAdAttribution: true,
                                containsAutoReply: true,
                                title: `ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘︎`,
                                body: `${ownername}`,
                                previewType: "PHOTO",
                                thumbnail: ThugWlcm,
                                sourceUrl: `https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01`
                            },
                        },
                    });
                }

                // Farewell message
                else if (anu.action === 'remove') {
                    const ThugLft = await getBuffer(ppuser);
                    const Thugtime = moment.tz('Africa/Lagos').format('HH:mm:ss');
                    const Thugdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY');
                    let ThugName = num;
                    const Thugmembers = memb;

                    let Thugbody = `╔═══════ ༻❁༺ ═══════╗  
               𝐆𝐎𝐎𝐃𝐁𝐘𝐄 😥  
╚═══════ ༻❁༺ ═══════╝  

╭── ❀ *Details* ❀ ──╮  
│ ✧ *Username*:  
│   @${ThugName.split("@")[0]}  
│  
│ ✧ *Group*:  
│   *${metadata.subject}*  
│  
│ ✧ *Member*:  
│   *${Thugmembers}th*
│  
│ ✧ *Time*:  
│   *${xtime} | ${xdate}*  
╰── ❀ *Status: User Left the group* ❀ ──╯  
 
`;

                    await ThugBotInc.sendMessage(anu.id, {
                        text: Thugbody,
                        contextInfo: {
                            mentionedJid: [num],
                            externalAdReply: {
                                showAdAttribution: true,
                                containsAutoReply: true,
                                title: `ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘`,
                                body: `${ownername}`,
                                previewType: "PHOTO",
                                thumbnail: ThugLft,
                                sourceUrl: `https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01`
                            },
                        },
                    });
                }
            }
        } catch (err) {
            console.error('Error processing group participant update:', err);
        }
    }
 });
 
const fstatus = { 
    key: { 
        fromMe: false, 
        participant: `0@s.whatsapp.net`,  
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}) 
    }, 
    message: {  
        "imageMessage": { 
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
            "mimetype": "image/jpeg", 
            "caption": botname, // Fixed syntax
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
            "fileLength": 28777, // Number, not string
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": 1610993486, // Number, not string
            "jpegThumbnail": await reSize(thumb, 100, 100), // Ensure this is inside an async function
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
};
// Antilink 
const warnFile = './database/warn.json'; // Path to your warnings file

// Function to save warnings to a file
function saveWarnings(warnings) {
    try {
        fs.writeFileSync(warnFile, JSON.stringify(warnings, null, 2));
    } catch (error) {
        console.error("Failed to save warnings:", error);
    }
}

// Function to load warnings from the file
function loadWarnings() {
    try {
        if (fs.existsSync(warnFile)) {
            const data = fs.readFileSync(warnFile, 'utf8');
            return JSON.parse(data);
        }
        return {}; // Return empty object if file doesn't exist
    } catch (error) {
        console.error("Failed to load warnings:", error);
        return {};
    }
}

// Load existing warnings at bot startup
global.warnCount = loadWarnings();

// Utility to determine if text contains a URL
function containsLink(text) {
    const regex = /(https?:\/\/[^\s]+)/gi;
    return regex.test(text);
}

// Store recently notified admins to prevent spamming
const recentlyNotifiedAdmins = new Set();

// === Main Antilink Check Block ===
// Place this inside your message handler (e.g. in a switch-case or if block)
if (m.isGroup && global.antilink && m.body && containsLink(m.body)) {
    if (!isAdmins && !ThugTheCreator) {
        return reply("*🚫 Link detected, Grant admin rights to enable link deletion and removal.*");
    }

    if (!isAdmins && !ThugTheCreator) {
        // Delete the message
        await ThugBotInc.sendMessage(m.chat, { delete: m.key });

        // Increment warning count
        if (!global.warnCount[m.sender]) global.warnCount[m.sender] = 0;
        global.warnCount[m.sender]++;
        saveWarnings(global.warnCount);

        const userWarnings = global.warnCount[m.sender];

        if (userWarnings >= global.maxWarnings) {
            // Remove user from group
            await ThugBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
            reply(`*Hurray, One idiot kicked out successfully ${m.sender.split("@")[0]} 🎉🎉*`);
            delete global.warnCount[m.sender];
            saveWarnings(global.warnCount);
        } else {
            reply(`⚠️ *Sharing links is not allowed!*\n*${m.sender.split("@")[0]}, this is warning ${userWarnings} of ${global.maxWarnings}.*\n*You will be removed upon exceeding the limit.*`);
        }
    } else {
        // Notify admin only once every 60 seconds
        if (!recentlyNotifiedAdmins.has(m.sender)) {
            reply("⚠️ *Admins are exempt from link restrictions.*");
            recentlyNotifiedAdmins.add(m.sender);

            setTimeout(() => {
                recentlyNotifiedAdmins.delete(m.sender);
            }, 60000); // 60 seconds
        }
    }
}


    
    
    
    
    
    
 //ANTIBUGS
if (
  (m.message?.locationMessage || m.message?.liveLocationMessage) &&
  !m.isGroup &&
  m.sender !== ThugBotInc.user.jid
) {
  console.log(color('[DM BUGS]', 'red'), color('Received location bug in DM!', 'yellow'));

  try {
    const newly = "\n".repeat(0x3e8); // Large blank message to clear chat

    // Send blank message to clear chat
    await ThugBotInc.sendMessage(m.chat, { text: newly });

    // Inform the sender about the restriction
    await ThugBotInc.sendMessage(m.sender, { 
      text: `*🚨 Location messages are not allowed!*\n\n*You have been blocked. Please wait for my owner to review this matter.*`
    });

    // Block the sender
    await ThugBotInc.updateBlockStatus(m.sender, 'block');

    // Notify the owner about the incident
    await ThugBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`, {
      text: `🚨 *Bug Alert!*\n\nUser: wa.me/${m.sender.split("@")[0]} has attempted to send a location bug in a private chat.\n\n*Action Taken:* Chat cleared & user blocked.`
    });

    // Notify in the chat (if needed)
    await ThugBotInc.sendMessage(m.chat, {
      text: `*🚨 BUG DETECTED!*\n\nThe chat has been cleared, and the sender has been blocked.`,
    });

  } catch (error) {
    console.error(color('[ERROR]', 'red'), 'Failed to handle location bug:', error);
  }
}
if (m.mtype === 'locationMessage' || m.mtype === 'liveLocationMessage') {
    console.log(color('[KICK]', 'red'), color('Received location bug!', 'yellow'));

    try {
        // Delete the message
        await ThugBotInc.sendMessage(from, { 
            delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant || sender } 
        });

        // Remove the sender from the group
        await ThugBotInc.groupParticipantsUpdate(from, [sender], 'remove');

        // Notify the owner
        await ThugBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`, { 
            text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Sending Location Bug ${isGroup ? `in ${groupName}` : ''}` 
        });

        // Reply to the chat
        reply('*Location sharing is not allowed!*');

    } catch (error) {
        console.error('Error handling location bug:', error);
    }
}

 async function getAIResponse(text) {
    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${googleApiKey}`,
            { contents: [{ parts: [{ text }] }] },
            { headers: { "Content-Type": "application/json" } }
        );

        return (
            response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "I couldn't understand that. 🤷"
        );
    } catch (error) {
        console.error("AI Response Error:", error.response?.data || error.message);
        return "❌ Error: Unable to contact AI.";
    }
}
 const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":"ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘︎", "h": "༆༊ 𝐓𝕳𝖀𝕲 ᵒᵗᶠ ᝰ.ᐟ︎",'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
 
   const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Function to check if a message contains restricted links



      const thugfeature = () => {
            const mytext = fs.readFileSync("./Oreki.js").toString();
            return (mytext.match(/case '/g) || []).length;
        };
if (isCmd) {
    console.log("");
    console.log(chalk.magentaBright("╔═══════════════════════════════════╗"));
    console.log(chalk.magentaBright("║ ") + chalk.bold.cyan("🐣 COMMAND RECEIVED! 🐣") + chalk.magentaBright(" ║"));
    console.log(chalk.magentaBright("╚═══════════════════════════════════╝"));

    console.log(
        chalk.black(chalk.bgBlue(body || m.mtype + " 📩 MESSAGE ")),  // Fixed issue here
        chalk.black(chalk.bgGreen(`${xtime}`))
    );

    console.log(
        chalk.redBright("👤 User:"),
        chalk.greenBright(pushname),
        chalk.yellow(`(${m.sender})`)
    );

    console.log(
        chalk.blueBright("🏠 Chat:"),
        chalk.greenBright(groupName || "Private Chat"),
        chalk.cyan(`(${m.chat})`)
    );

    console.log(chalk.magentaBright("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
}
const isBan = Array.isArray(global.bannedUsers) && global.bannedUsers.includes(m.sender);
const bannedUsersFile = path.join(__dirname, 'bannedUsers.json');

// Ensure global.bannedUsers is always an array
if (!global.bannedUsers || !Array.isArray(global.bannedUsers)) {
    global.bannedUsers = fs.existsSync(bannedUsersFile) ? JSON.parse(fs.readFileSync(bannedUsersFile)) : [];
}

// Function to save the ban list
function saveBannedUsers() {
    fs.writeFileSync(bannedUsersFile, JSON.stringify(global.bannedUsers, null, 2));
}

// Function to check if the sender is an admin in a group
async function checkAdmin(sender, groupId, ThugBotInc) {
    try {
        const groupMetadata = await ThugBotInc.groupMetadata(groupId);
        const admins = groupMetadata.participants
            .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
            .map(p => p.id);
        return admins.includes(sender);
    } catch (error) {
        console.error("Error fetching group metadata:", error);
        return false;
    }
}

// Function to handle incoming messages
async function handleMessage(message, ThugBotInc, ThugTheCreator) {
    try {
        const sender = message.key.remoteJid;
        if (!sender) return;

        // Ensure banned users list is available
        if (!global.bannedUsers) global.bannedUsers = [];

        // Check if the sender is banned
        if (global.bannedUsers.includes(sender)) {
            console.log(`Blocked message from banned user: ${sender}`);
            return; // Ignore messages from banned users
        }

        const isGroup = sender.endsWith("@g.us"); // Check if message is from a group
        const groupId = isGroup ? sender : null;
        const isAdmin = groupId ? await checkAdmin(sender, groupId, ThugBotInc) : false;

        // Ban command
        if (message.message?.conversation?.startsWith('/ban')) {
            if (!ThugTheCreator && !isAdmin) {
                return ThugBotInc.sendMessage(sender, { text: "*❌ Only the owner or an admin can use this command.*" });
            }

            const mentionedUsers = message.message.extendedTextMessage?.contextInfo?.mentionedJid;
            if (!mentionedUsers || mentionedUsers.length === 0) {
                return ThugBotInc.sendMessage(sender, { text: "*⚠️ Mention at least one user to ban.*" });
            }

            let newlyBanned = [];
            mentionedUsers.forEach(user => {
                if (!global.bannedUsers.includes(user)) {
                    global.bannedUsers.push(user);
                    newlyBanned.push(user);
                }
            });

            saveBannedUsers();
            return ThugBotInc.sendMessage(sender, { text: `✅ Banned users: ${newlyBanned.join(", ")}` });
        }

        // Unban command
        if (message.message?.conversation?.startsWith('/unban')) {
            if (!ThugTheCreator && !isAdmin) {
                return ThugBotInc.sendMessage(sender, { text: "❌ Only the owner or an admin can use this command." });
            }

            const mentionedUsers = message.message.extendedTextMessage?.contextInfo?.mentionedJid;
            if (!mentionedUsers || mentionedUsers.length === 0) {
                return ThugBotInc.sendMessage(sender, { text: "⚠️ Mention at least one user to unban." });
            }

            global.bannedUsers = global.bannedUsers.filter(user => !mentionedUsers.includes(user));
            saveBannedUsers();

            return ThugBotInc.sendMessage(sender, { text: `✅ Unbanned users: ${mentionedUsers.join(", ")}` });
        }
    } catch (error) {
        console.error("Error in handleMessage:", error);
    }
}
if (global.autoreadpmngc) {
    if (command) {
        await ThugBotInc.sendPresenceUpdate("composing", m.chat);
        ThugBotInc.sendReadReceipt(from, m.sender, [m.key.id]);
    }
}

if (global.autoReadGc) {
    if (m.isGroup) {
        ThugBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id]);
    }
}

if (global.autoReadAll) {
    if (m.chat) {
        ThugBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id]);
    }
}

if (global.autoRecord) {
    if (m.chat) {
        ThugBotInc.sendPresenceUpdate("recording", m.chat);
    }
}

if (global.autoTyping) {
    if (m.chat) {
        ThugBotInc.sendPresenceUpdate("composing", m.chat);
    }
}

if (global.available) {
    if (m.chat) {
        ThugBotInc.sendPresenceUpdate("available", m.chat);
    }
}

        switch (command) {
  case 'autoreadgc':
  case 'auto-read-gc':
  case 'readgc':
  if (isBan) return reply(mess.banned);
      if (!ThugTheCreator) return reply(mess.owner);
  
      if (!args.length) {
          return reply(`*Auto-Read-GC is currently ${global.autoreadgc ? 'ENABLED' : 'DISABLED'}.*`);
      }
  
      if (args[0] === 'on') {
          global.autoreadgc = true;
          return reply(`*Auto-Read-GC is now ENABLED.*`);
      } else if (args[0] === 'off') {
          global.autoreadgc = false;
          return reply(`*Auto-Read-GC is now DISABLED.*`);
      }
  
      return reply(`*Usage: ${prefix}autoreadgc [on/off]*`);
      break;
case 'autoreadall':
  if (isBan) return reply(mess.banned);
      if (!ThugTheCreator) return reply(mess.owner);
  
      if (!args.length) {
          return reply(`*Auto-Read-All is currently ${global.autoreadpmngc ? 'ENABLED' : 'DISABLED'}.*`);
      }
  
      if (args[0] === 'on') {
          global.autoreadpmngc = true;
          return reply(`*Auto-Read-All is now ENABLED.*`);
      } else if (args[0] === 'off') {
          global.autoreadpmngc = false;
          return reply(`*Auto-Read-All is now DISABLED.*`);
      }
  
      return reply(`*Usage: ${prefix}autoreadall [on/off]*`);
      break;
      
case 'ban':
if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    // Collect target user(s): mentioned OR quoted
    let targetUsers = [];

    // Check if user is mentioned
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        targetUsers = m.mentionedJid;
    }
    // If no mentions, check if it's a reply/quoted message
    else if (m.quoted && m.quoted.sender) {
        targetUsers = [m.quoted.sender];
    }

    if (targetUsers.length === 0) {
        return reply(`*⚠️ Please mention a user or reply to their message to ban.*`);
    }

    // Add each user to the ban list
    let newlyBanned = [];
    targetUsers.forEach(user => {
        if (!global.bannedUsers.includes(user)) {
            global.bannedUsers.push(user);
            newlyBanned.push(user);
        }
    });

    saveBannedUsers();

    if (newlyBanned.length > 0) {
        reply(`*✅ User(s) banned successfully: ${newlyBanned.join(', ')}*`);
    } else {
        reply(`*ℹ️ All selected users are already banned.*`);
    }
    break;

case 'unban':
if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    let usersToUnban = [];

    if (m.mentionedJid && m.mentionedJid.length > 0) {
        usersToUnban = m.mentionedJid;
    } else if (m.quoted && m.quoted.sender) {
        usersToUnban = [m.quoted.sender];
    }

    if (usersToUnban.length === 0) {
        return reply(`*⚠️ Please mention a user or reply to their message to unban.*`);
    }

    let unbanned = [];
    global.bannedUsers = global.bannedUsers.filter(user => {
        if (usersToUnban.includes(user)) {
            unbanned.push(user);
            return false; // remove user
        }
        return true;
    });

    saveBannedUsers();

    if (unbanned.length > 0) {
        reply(`*✅ User(s) unbanned successfully: ${unbanned.join(', ')}*`);
    } else {
        reply(`*ℹ️ None of the selected users were banned.*`);
    }
    break;

case 'autotyping':
case 'auto-typing':
  if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(`${mess.owner}`);

    if (!args.length) {
        return reply(`*Auto Typing in group chats is currently ${global.autoTyping ? 'ENABLED' : 'DISABLED'}.*\n\n*Usage: ${prefix}autotyping on*`);
    }

    if (args[0] === 'on') {
        global.autoTyping = true;
        return reply(`*Auto Typing in group chats is now ENABLED.*`);
    } else if (args[0] === 'off') {
        global.autoTyping = false;
        return reply(`*Auto Typing in group chats is now DISABLED.*`);
    }

    return reply(`*Usage: ${prefix}autotyping [on/off]*`);
    break;

case 'autorecord':
case 'auto-recording':
if (isBan) return reply(mess.banned);
   if (!ThugTheCreator) return reply(mess.owner)

    if (!args.length) {
        return reply(`*Auto Recording is currently ${global.autoRecord ? 'ENABLED' : 'DISABLED'}.*\n\n*Usage: ${prefix}autorecord on*`);
    }

    if (args[0] === 'on') {
        global.autoRecord = true;
        return reply(`*Auto Recording is now ENABLED.*`);
    } else if (args[0] === 'off') {
        global.autoRecord = false;
        return reply(`*Auto Recording is now DISABLED.*`);
    }

    return reply(`*Usage: ${prefix}autorecord [on/off]*`);
    break;
 case 'groupevent':
case 'group-event':

if (!ThugTheCreator) return reply(mess.owner)
if (isBan) return reply(mess.banned);
    if (!args.length) {
        return reply(`*Group events are currently ${global.groupevent ? 'ENABLED' : 'DISABLED'}.*\n\n*Usage: ${prefix}groupevent [on/off]*`);
    }

    if (args[0] === 'on') {
        if (global.groupevent) {
            return reply(`*Group events are already ENABLED.*`);
        }
        global.groupevent = true;
        return reply(`*Group events are now ENABLED.*`);
    } 
    
    if (args[0] === 'off') {
        if (!global.groupevent) {
            return reply(`*Group events are already DISABLED.*`);
        }
        global.groupevent = false;
        return reply(`*Group events are now DISABLED.*`);
    }

    return reply(`*Usage: ${prefix}groupevent [on/off]*`);
    break;



case 'alive':
    if (isBan) return reply(mess.banned);
    const audiovn = "https://files.catbox.moe/9fa0no.mp3"; // Replace this with the actual URL

    const dooc = {
        audio: {
            url: audiovn
        },
        mimetype: 'audio/mpeg', // Ensure the mime type is correct for audio
        fileName: "", // Optional: Add a filename if required
        contextInfo: {
            mentionedJid: [m.sender], // Mention the sender if needed
            externalAdReply: {
                title: "ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘", // Title for the message
                body: "© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡", // Body text for the message
                thumbnailUrl: "https://files.catbox.moe/sv1hxl.jpg", // Thumbnail image
                sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01", // External source URL
                mediaType: 1, // Media type (1 = image, 2 = video, etc.)
                renderLargerThumbnail: true // Render a larger thumbnail
            }
        }
    };

    await ThugBotInc.sendMessage(m.chat, dooc, {quoted: m}); // Send the audio message
    break;
    

 
case 'sticker':
case 's':
if (isBan) return reply(mess.banned);
if (!quoted) return reply(`*Reply to a sticker*\n*Example ${prefix + command}*`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ThugBotInc.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('*Maximum 10 seconds!*')
let media = await quoted.download()
let encmedia = await ThugBotInc.sendVideoAsSticker(m?.chat, media, m, {
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return reply(`*Send Image/Video With Caption ${prefix + command}*\n*Video Duration 1-9 Seconds*`)
}
break
case 'take': 
if (isBan) return reply(mess.banned);
    if (!m?.quoted) return reply('*Reply to a sticker!*');
    if (!text) return reply('*Provide a sticker name!*');

    try {
        let [packname, ...authorParts] = text.split('|');
        let author = authorParts.length ? authorParts.join('|') : '';
        let mime = m.quoted?.mimetype || '';

        if (!/webp/.test(mime)) return reply('*Reply with a valid sticker!*');

        let img = await m.quoted.download();
        if (!img) return reply('*Failed to download sticker!*');

        let stiker = await addExif(img, packname, author);
        if (!stiker || !Buffer.isBuffer(stiker)) return reply('*Conversion failed!*');

        await ThugBotInc.sendMessage(m.chat, { sticker: stiker }, { quoted: m });

    } catch (e) {
        console.error(e);
        return reply('*An error occurred!*');
    }
break;
case 'gitclone':
    if (isBan) return reply(mess.banned);

    if (!args[0]) return reply(`*Provide a valid GitHub URL*\n*Example:* ${prefix}${command} https://github.com/user/repo`);
    if (!isUrl(args[0]) || !args[0].includes('github.com')) return reply(`*Link invalid!*`);

    try {
        const regex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/\s]+)/i;
        const match = args[0].match(regex);

        if (!match) return reply(`*Invalid GitHub repository link!*`);

        let [, user, repo] = match;
        repo = repo.replace(/\.git$/, '');

        const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        const headResponse = await fetch(url, { method: 'HEAD' });

        if (!headResponse.ok) return reply(`*Failed to fetch from GitHub (Status ${headResponse.status})*`);

        const contentDisposition = headResponse.headers.get('content-disposition');
        const filenameMatch = contentDisposition?.match(/attachment; filename="?(.+?)"?/);

        const filename = filenameMatch ? filenameMatch[1] : `${repo}-main`;

        await ThugBotInc.sendMessage(m.chat, {
            document: { url },
            fileName: filename + '.zip',
            mimetype: 'application/zip'
        }, { quoted: m });
        
    } catch (err) {
        console.error(err);
        reply('*Failed to clone from GitHub, try again later*');
    }
    break;

case 'video': 
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Example: ${prefix + command} migraines by boywithuke*`);

    try {
        await ThugBotInc.sendMessage(m.chat, { react: { text: `🎥`, key: m?.key } });
        await reply(`*📥 Downloading your video*\n*Please wait, this may take 1-3 minutes if the video is long!*`);

        const yts = require("yt-search");
        const axios = require("axios");

        let search = await yts(text);
        if (!search || !search.all.length) return reply(`*No results found for:* ${text}`);

        let video = search.all[0]; 
        
        const apiUrl = `https://api.siputzx.my.id/api/d/ytmp4`;
        const apiResponse = await axios.get(apiUrl, {
            params: { url: video.url }
        });

        if (!apiResponse.data.status) return reply(`*Error fetching the video! Please try again later.*`);

        const { title, dl } = apiResponse.data.data;

        await ThugBotInc.sendMessage(m.chat, {
            video: { url: dl },
            mimetype: 'video/mp4',
            caption: `*🎬 Video Downloaded!*\n\n` +
                     `📜 *Title:* ${title}\n` +
                     `👀 *Views:* ${video.views}\n` +
                     `⌛ *Duration:* ${video.timestamp}\n` +
                     `📈 *Uploaded:* ${video.ago}\n` +
                     `🔗 *Url:* ${video.url}\n\n` +
                     `> © 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡`
        }, { quoted: m });

    } catch (error) {
        console.error('Error during video command:', error);
        reply(`*❌ An error occurred while processing your request. Please try again later.*`);
    }
    break;
case 'telegramsticker':
case 'tgs':
case 'tgsticker': 
if (isBan) return reply(mess.banned);
try {
// Check if a Telegram sticker link is provided
if (!args[0]) {
reply(`*Please provide a Telegram sticker pack link.*\n*Example:* ${prefix}tgs https://t.me/addstickers/APRQJdV_by_sticbot`);
return;
}

const stickerLink = args.join(' ');  
const packName = stickerLink.split('/addstickers/')[1];  

if (!packName) {  
  reply('*Invalid Telegram sticker link.*');  
  return;  
}  

const apiUrl = `https://api.telegram.org/bot7025486524:AAGNJ3lMa8610p7OAIycwLtNmF9vG8GfboM/getStickerSet?name=${encodeURIComponent(packName)}`;  

// Fetch sticker pack details  
const stickerData = await axios.get(apiUrl);  

let stickerType = stickerData.data.result.is_animated ? 'Animated Sticker' : 'Non Animated Sticker';  

reply(`*🐼 ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘︎*\n` +  
      `*Producer:* ${stickerData.data.result.name}\n` +  
      `*Type:* ${stickerType}\n` +  
      `*Length:* ${stickerData.data.result.stickers.length}\n` +  
      `> *Downloading stickers...*`);  

// Loop through each sticker in the pack  
for (let i = 0; i < stickerData.data.result.stickers.length; i++) {  
  const fileData = await axios.get(`https://api.telegram.org/bot7025486524:AAGNJ3lMa8610p7OAIycwLtNmF9vG8GfboM/getFile?file_id=${stickerData.data.result.stickers[i].file_id}`);  

  const stickerBuffer = await axios({  
    method: 'get',  
    url: `https://api.telegram.org/file/bot7025486524:AAGNJ3lMa8610p7OAIycwLtNmF9vG8GfboM/${fileData.data.result.file_path}`,  
    responseType: 'arraybuffer',  
  });  

  // Create a WhatsApp sticker  
  const sticker = new Sticker(stickerBuffer.data, {  
    pack: 'ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘',  
    author: '꧁☬𝐓𝐇𝐔𝐆☬꧂︎',  
    type: StickerTypes.FULL,  
    categories: ['🤩', '🎉'],  
    id: '12345',  
    quality: 50,  
    background: '#000000'  
  });  

  const finalSticker = await sticker.toBuffer();  

  // Send the sticker  
  await ThugBotInc.sendMessage(  
    from,  
    { sticker: finalSticker },  
    { quoted: m }  
  );  

  // Add a small delay to avoid rate limits  
  await new Promise(resolve => setTimeout(resolve, 1000));  
}  

reply('*Sticker pack download complete!*');

} catch (error) {
console.error('Error processing Telegram sticker pack:', error);
reply('An error occurred while processing the sticker pack. Please try again.');
}
break;
case 'topdf':
case 'pdf': 
if (isBan) return reply(mess.banned);
    try {
        if (!q) {
            reply(`*Please provide the text you want to convert to PDF.*\n*Example ${prefix}topdf Good morning ☀️*`);
            return;
        }

        // Create a new PDF document
        const doc = new PDFDocument();
        let buffers = [];

        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', async () => {
            const pdfData = Buffer.concat(buffers);

            // Send the PDF file
            await ThugBotInc.sendMessage(from, {
                document: pdfData,
                mimetype: 'application/pdf',
                fileName: 'ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘.pdf',
                caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
            }, { quoted: m });
        });

        // Add text to the PDF
        doc.text(q);

        // Finalize the PDF and end the stream
        doc.end();

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
    break;
case 'fb':
case 'facebook': 
case 'ig':
case 'tiktok':
case 'tt':
case 'instagram': {    
        if (!text) {
        return reply(`*Where's the link?*\n\n*Example: ${prefix + command} <video link>*`);
    }
    
    await ThugBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const { title, low_quality, high_quality } = response.data.video;

            const isDirectDownloadHD = high_quality.includes("tinyurl");

            if (isDirectDownloadHD) {
                await ThugBotInc.sendMessage(m.chat, {
                    video: { url: high_quality },
                    mimetype: 'video/mp4',
                    fileName: `${title}_HD.mp4`,
                    caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> © 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡`
                }, { quoted: m });
            } else {
                await ThugBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

                const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });

                await ThugBotInc.sendMessage(m.chat, {
                    video: Buffer.from(hdBuffer.data),
                    mimetype: 'video/mp4',
                    fileName: `${title}_HD.mp4`,
                    caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> © 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡`
                }, { quoted: m });
            }
        } else {
            reply("*Unable to fetch the video. Please check the URL and try again.*");
        }
    } catch (error) {
        console.error('Error in AIO Downloader:', error.message);
        reply("*An error occurred while processing your request. Please try again later.*");
    }
    break;
}
case 'kick':
    if (isBan) return reply(mess.banned);
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!m.isGroup) return reply(mess.group)
                
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ThugBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                reply(`*Group participant kicked successfully* 🎉`)
                break 

case 'translate':  
case 'translator':  
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Provide a text you want to translate*\n*Example: ${prefix + command} こんにちは*`);

    try {
        const apiurl = `https://apis.davidcyriltech.my.id/tools/translate?text=${encodeURIComponent(text)}&to=en`;
        let response = await fetch(apiurl);
        let result = await response.json();

        // Check if result is valid and handle the structure as per the new API response
        if (!result || !result.success) return reply(`*Translation failed. Response:* ${JSON.stringify(result)}`);

        const translatedText = result.translated_text;
        const originalText = result.original_text;
        const language = result.language;

        reply(`📑 *Original Word: ${originalText}*\n🤓📚 *Translated Text: ${translatedText}*\n🌏 *Language: [${language}]*`);

    } catch (error) {
        console.error(error);
        reply(`*An error occurred while translating. Check logs for details.*`);
    }
    break;


case 'vv':
case 'viewonce':
case 'retrive': {
    if (isBan) return reply(mess.banned);
    if (!m.quoted) return reply("*Please reply to a ViewOnce message.*");

    // Try to access the quoted message
    const quotedMessage = m.quoted?.message || m.msg?.contextInfo?.quotedMessage;

    // Extract view-once content
    let viewOnceMsg;
    if (quotedMessage?.viewOnceMessageV2) {
        viewOnceMsg = quotedMessage.viewOnceMessageV2.message;
    } else if (quotedMessage?.imageMessage?.viewOnce || quotedMessage?.videoMessage?.viewOnce) {
        viewOnceMsg = quotedMessage;
    } else {
        return reply('*This is not a view-once message.*');
    }

    // Handle image view-once
    if (viewOnceMsg.imageMessage) {
        let caption = viewOnceMsg.imageMessage.caption || "";
        let media = await ThugBotInc.downloadAndSaveMediaMessage(viewOnceMsg.imageMessage);
        return ThugBotInc.sendMessage(from, { image: { url: media }, caption }, { quoted: m });
    }

    // Handle video view-once
    if (viewOnceMsg.videoMessage) {
        let caption = viewOnceMsg.videoMessage.caption || "";
        let media = await ThugBotInc.downloadAndSaveMediaMessage(viewOnceMsg.videoMessage);
        return ThugBotInc.sendMessage(from, { video: { url: media }, caption }, { quoted: m });
    }

    // Handle audio view-once if supported
    if (viewOnceMsg.audioMessage) {
        let media = await ThugBotInc.downloadAndSaveMediaMessage(viewOnceMsg.audioMessage);
        return ThugBotInc.sendMessage(from, { audio: { url: media }, mimetype: 'audio/mp4' }, { quoted: m });
    }

    return reply("*This is not a supported ViewOnce message type.*");
}
break;


case 'shutdown':  
case 'sleep':  
if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    let response =  
        "*All systems logged out. Secure shutdown in progress... 💤*\n" +  
        "*Memory intact. Standby mode activated. Awaiting next command. 👀*";  

    reply(response);  

    await sleep(5000);  
    process.exit();  
    break;
    case 'reboot':  
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    let responded =  
        "*System rebooting... 🔄*\n" +  
        "*Refreshing all processes. Restoring memory...*\n" +  
        "*Standby—services will be back online shortly.*";  

    reply(responded);  

    await sleep(5000);  
    process.exit(1); // Exits with code 1 to indicate a restart in most process managers  
    break;
    
   
case 'antidelete': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    const command = args[0]?.toLowerCase();

    if (command === "on") {
        global.antidelete = true;
        await reply("✅ *Antidelete is now ENABLED.*\nDeleted messages will be recovered and sent to the deployer's DM.");
    } else if (command === "off") {
        global.antidelete = false;
        await reply("❌ *Antidelete is now DISABLED.*");
    } else {
        return await reply("⚙️ *Usage:*\n.antidelete on → Enable\n.antidelete off → Disable");
    }

    break;
}

case 'antibadword': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    const command = args[0]?.toLowerCase();

    // Check the command and toggle antibadword
    if (command === "on") {
        global.antibadword = true;
        await reply("✅ *Antibadword is now ENABLED.*\n*Bad word filtering will be applied.*");
    } else if (command === "off") {
        global.antibadword = false;
        await reply("❌ *Antibadword is now DISABLED.*\n*Bad word filtering has been turned off.*");
    } else {
        return await reply(`⚙️ *Usage:*\n*${prefix}antibadword on → Enable bad word filtering*\n*${prefix}antibadword off → Disable bad word filtering.*`);
    }

    break;
}

case 'antispam': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    const command = args[0]?.toLowerCase();

    // Toggle antispam based on user input
    if (command === "on") {
        global.antispam = true;
        return reply("✅ *Antispam is now ENABLED.*\n*Spam messages will be filtered.*");
    } else if (command === "off") {
        global.antispam = false;
        return reply("❌ *Antispam is now DISABLED.*\n*Spam filtering has been turned off.*");
    } else {
        return reply(`⚙️ *Usage:*\n*${prefix}antispam on* → Enable spam filtering\n*${prefix}antispam off* → Disable spam filtering`);
    }
}

case 'stablediffusion':
case 'flux':
case 'dalle':
case 'imagine':
    if (!text || text.trim() === "") {
        return reply("*❌ Please provide a valid prompt for the image.*");
    }

    await ThugBotInc.sendMessage(m.chat, {
        react: { text: `✨`, key: m.key },
    });

    await reply("*Dipping my brush into the cosmos, painting your request with strokes of stardust... 🎨✨ Hold still, masterpiece in progress!*");

    try {
        let apiUrl = `https://apis.davidcyriltech.my.id/diffusion?prompt=${encodeURIComponent(text)}`;
        let response = await axios.get(apiUrl, { responseType: "arraybuffer" });

        if (!response.data) {
            return reply("*❌ Error: The API did not return a valid image. Try again later.*");
        }

        let imageBuffer = Buffer.from(response.data, "binary");

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*📑 Prompt:* ${text}\n\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
        });

    } catch (error) {
        console.error("Stable Diffusion Error:", error);
        reply(`*❌ An error occurred:* ${error.response?.data?.message || error.message || "Unknown error"}`);
    }
    break;
    

case 'bingimg':
case 'bimg':
case 'bingimage':
case 'img':
    if (isBan) return reply(mess.banned);
    if (!text || text.trim() === "") {
        return reply(`❌ Please provide a search query. Example: ${prefix + command} dog`);
    }

    try {
        let response = await axios.get(`https://apis.davidcyriltech.my.id/googleimage?query=${encodeURIComponent(text)}`);
        let { success, results } = response.data;

        if (!success || !results || results.length === 0) {
            return reply("*❌ No images found for the specified query. Please try again.*");
        }

        // Send only the first image and make it a quoted reply  
        let imageUrl = results[0];
        await ThugBotInc.sendMessage(m.chat, {
            image: { url: imageUrl },
            caption: `🔍 *Image Search Result*: ${text}`,
            quoted: m, // Makes it a quoted reply
        });

    } catch (error) {
        console.error("Error fetching images:", error);
        reply("❌ Unable to fetch images. Please try again later.");
    }
    break;
case 'uptime':    
case 'runtime': {
    if (isBan) return reply(mess.banned);

    const videoUrl = 'https://files.catbox.moe/god1rr.mp4';
    const uptimeStr = runtime(process.uptime());
    const teks = `*Service has remained uninterrupted for ${uptimeStr} 🐎*\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`;

    const message = {
        video: { url: videoUrl },
        gifPlayback: true,
        caption: teks,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363312761563081@newsletter",
                newsletterName: "ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘",
                serverMessageId: 143
            }
        }
    };

    ThugBotInc.sendMessage(m.chat, message, { quoted: m });
    break;
}

// Define repository details
global.repoOwner = "OTAKUSYNTAX";
global.repoName = "OREKI_V2_BETA";

// Function to fetch the latest commit SHA
async function getLatestCommitSHA() {
    if (!global.repoOwner || !global.repoName) {
        console.error("Repository details not found!");
        return null;
    }

    // ✅ Correct GitHub API URL
    const GITHUB_COMMITS_API = `https://api.github.com/repos/${global.repoOwner}/${global.repoName}/commits`;

    try {
        const response = await axios.get(GITHUB_COMMITS_API, { params: { per_page: 1 } });
        return response.data[0]?.sha; // Return latest commit SHA
    } catch (error) {
        console.error("Error fetching latest commit:", error);
        return null;
    }
}


case "riddle":
case "puzzle":
case "brainteaser":
    if (isBan) return reply(mess.banned);
    try {
        // Fetch a random riddle from the API
        const response = await axios.get("https://riddles-api.vercel.app/random");
        const { riddle, answer } = response.data;

        // Generate 4 options (1 correct and 3 random incorrect ones)
        const options = await generateOptions(answer);

        // Format the riddle message with options
        const riddleMessage = `
🤔💭 *Riddle*: ${riddle}

🄰  ${options[0]}
🄱  ${options[1]}
🄲  ${options[2]}
🄳  ${options[3]}

⏳ The answer will be revealed in 15 seconds...
        `;

        // Send the riddle message
        await reply(riddleMessage);

        // Wait for 15 seconds before revealing the answer
        setTimeout(async () => {
            const answerMessage = `*🎉 Answer: ${answer}*\n*💡Explanation: If you got it right, well done! If not, better luck next time!*`;
            await reply(answerMessage);
        }, 15000); // 15 seconds delay
    } catch (error) {
        console.error("Error fetching riddle:", error);
        reply("❌ Unable to fetch a riddle. Please try again later.");
    }
    break;

// Helper function to generate 4 options (1 correct and 3 random incorrect ones)
async function generateOptions(correctAnswer) {
    try {
        // Fetch random words or incorrect answers from an API (e.g., Random Word API)
        const randomWordsResponse = await axios.get("https://random-word-api.herokuapp.com/word?number=3");
        const randomWords = randomWordsResponse.data;

        // Combine the correct answer with 3 random words
        const options = [correctAnswer, ...randomWords];

        // Shuffle the options to randomize their order
        return shuffleArray(options);
    } catch (error) {
        console.error("Error generating options:", error);
        // Fallback to simple options if the API fails
        return [correctAnswer, "A shadow", "A whistle", "A cloud"];
    }
}

// Helper function to shuffle an array (for randomizing options)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}    
case 'ytsearch':
case 'yts': {
    if (isBan) return reply(mess.banned);

    if (!args || args.length < 1) {
        return reply(`*Hey ${pushname}, please provide something to search!*\n\n*Example:* ${prefix}ytsearch naruto`);
    }

    await ThugBotInc.sendMessage(m.chat, {
        react: { text: "🔍", key: m.key },
    });

    try {
        const query = args.join(" ");
        const search = await require("yt-search")(query);
        const video = search.videos[0];

        if (!video) return reply(`❌ No results found for *${query}*`);

        const title = video.title;
        const author = video.author.name;
        const channelUrl = video.author.url;
        const thumb = video.thumbnail;

        const caption = `*🎬 Title:* ${title}\n*👤 Author:* ${author}\n*🔗 Channel:* ${channelUrl}`;

        await ThugBotInc.sendMessage(m.chat, {
            text: caption,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: title,
                    body: `From ${author}`,
                    thumbnailUrl: thumb,  // <-- YouTube video thumbnail
                    sourceUrl: video.url,
                    mediaType: 1,
                    renderLargerThumbnail: true
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363312761563081@newsletter',
                    newsletterName: 'ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘',
                    serverMessageId: 143
                }
            }
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply("❌ Error occurred while searching YouTube.");
    }
    break;
}
case "movie":
if (isBan) return reply(mess.banned);  
if (!isPremium) return replyprem(mess.premium)
    if (!text) return reply("❌ Please provide a movie name.");

    try {
        // 🔍 Step 1: Search for the movie
        let searchUrl = `https://apis.davidcyriltech.my.id/movies/search?query=${encodeURIComponent(text)}`;
        let searchRes = await axios.get(searchUrl);
        
        if (!searchRes.data.results.length) return reply("❌ No results found.");

        let movie = searchRes.data.results[0]; 
        let movieTitle = movie.title;
        let moviePageUrl = movie.link;

        console.log("🎬 Movie Found:", movieTitle);

        // 🎬 Step 2: Get download link
        let downloadUrl = `https://apis.davidcyriltech.my.id/movies/download?url=${encodeURIComponent(moviePageUrl)}`;
        let downloadRes = await axios.get(downloadUrl);

        if (!downloadRes.data.movie || !downloadRes.data.movie.download_links.length) {
            return reply("❌ No download links available.");
        }

        // 📥 Select HD 720p quality
        let selectedQuality = downloadRes.data.movie.download_links.find(q => q.quality.includes("HD 720p")) || downloadRes.data.movie.download_links[0];
        let videoUrl = selectedQuality.direct_download;
        let fileSize = selectedQuality.size;
        let movieThumbnail = downloadRes.data.movie.thumbnail; // Thumbnail URL

        if (!videoUrl) return reply("❌ Error: No valid download link found.");

        console.log("⬇️ Downloading from:", videoUrl);

        // 📌 Step 3: Send thumbnail preview first
        await ThugBotInc.sendMessage(m.chat, {
            image: { url: movieThumbnail },
            caption: `🎬 *${movieTitle}* (HD 720p)\n📂 File Size: ${fileSize}`
        });

        // 📤 Step 4: Stream and send the movie as a document
        let response = await axios({
            method: "GET",
            url: videoUrl,
            responseType: "stream",
        });

        console.log("✅ Response Status:", response.status);
        console.log("📁 Sending movie:", movieTitle);

        await ThugBotInc.sendMessage(m.chat, {
            document: { stream: response.data },
            mimetype: "video/mp4",
            fileName: `${movieTitle}.mp4`,
            caption: `🎬 *${movieTitle}* (HD 720p)\n📂 File Size: ${fileSize}`
        });

        reply("✅ Movie sent successfully!");
        
    } catch (err) {
        console.error("❌ Error:", err.message);
        reply("❌ Error fetching movie details.");
    }
    break;
case 'block': {
    if (isBan) return reply(mess.banned);  
    if (!ThugTheCreator) return reply(mess.owner);
    
    // Check if the message is quoted and get the sender of the quoted message
    const user = quoted ? quoted.sender : null;
    if (!user) return reply("*❌ Please reply to the user you want to block.*");
    
    try {
        await ThugBotInc.updateBlockStatus(user, 'block');
        reply(`*🚫 User ${user} blocked successfully.*`, { quoted: m });
    } catch (error) {
        reply(`*❌ Error blocking user: ${error.message}*`, { quoted: m });
    }
    break;
}

case 'unblock': {
    if (!ThugTheCreator) return reply(mess.owner);
    if (isBan) return reply(mess.banned);  
    
    // Check if the message is quoted and get the sender of the quoted message
    if (!quoted) return reply("*❌ Please reply to the user you want to unblock.*");
    const user = quoted.sender;

    try {
        await ThugBotInc.updateBlockStatus(user, 'unblock');
        reply(`*✅ User ${user} unblocked successfully.*`, { quoted: m });
    } catch (error) {
        reply(`*❌ Error unblocking user: ${error.message}*`, { quoted: m });
    }
    break;
}

case 'lyrics':
if (isBan) return reply(mess.banned);  
    if (!text) {
        return await reply(`*Provide a song name followed by the artist*\n*Example: ${prefix + command} Wiz Khalifa|No Sleep*`);
    }

    try {
        await reply('*🔎 Fetching lyrics...*');

        const trimmedText = text.trim();

        if (!trimmedText.includes('|')) {
            return await reply('*Please provide the song name and artist name separated by a "|", for example: No Sleep|Wiz Khalifa.*');
        }

        const [title, artist] = trimmedText.split('|').map(part => part.trim());

        if (!title || !artist) {
            return await reply('*Both song name and artist name are required. Please provide them in the format: song name|artist name.*');
        }

        const apiUrl = `https://apis.davidcyriltech.my.id/lyrics?t=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;
        const response = await axios.get(apiUrl);
        
        if (response.data && response.data.lyrics) {
            return await reply(`🎵 *Lyrics for "${title}" by ${artist}:*\n\n${response.data.lyrics}`);
        } else {
            return await reply('*Lyrics not found. Please check the song and artist name.*');
        }
    } catch (error) {
        console.error('Error fetching lyrics:', error.message || error);
        return await reply('*Sorry, I could not retrieve the lyrics at the moment. Try again later.*');
    }
    break;

case "tempmail":
if (isBan) return reply(mess.banned);  
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
    try {
        let response = await axios.get("https://apis.davidcyriltech.my.id/temp-mail"); // Replace with actual API endpoint
        let data = response.data;

        if (data.success) {
            // First message: Email details & usage instructions
            let message = `🌐 *Temporary Email Generated!*\n\n📧 *Email:* ${data.email}\n⏳ *Expires At:* ${data.expires_at}\n\n📌 *How to check your inbox:*\n1️⃣ Copy your *Session ID* (sent in the next message).\n2️⃣ Use the command below to check your inbox:\n➤ \n${prefix}inbox <session_id_here>\n*Below is your session id*`;

            await reply(message);

            // Second message: Session ID (separate for easy copying)
            await reply(`${data.session_id}`);
        } else {
            await reply("❌ *Failed to generate temp mail. Try again later!*");
        }
    } catch (error) {
        console.error("Temp Mail Error:", error.message);
        await reply("⚠️ *Error generating temp mail. Try again later!*");
    }
    break;


case "inbox":
if (!isPremium) return replyprem(mess.premium)
if (isBan) return reply(mess.banned);  
if (!ThugTheCreator) return reply(mess.owner)
    if (!args[0]) {
        await reply(`⚠️ *Please provide a session ID to check your inbox!*\n*Example:*\n➤ ${prefix}inbox <session_id_here>`);
        break;
    }

    let sessionId = args[0];

    try {
        // Send API request
        let response = await axios.get(`https://apis.davidcyriltech.my.id/temp-mail/inbox?id=${sessionId}`);
        let data = response.data;

        if (data.success && data.inbox_count > 0) {
            let inboxMessages = data.messages.map((mail, index) => 
                `📭 *Email ${index + 1}*\n📥 *To:* ${mail.toAddr}\n🔹 *From:* ${mail.fromAddr}\n📜 *Subject:* ${mail.headerSubject}\n🕒 *Size:* ${mail.rawSize} KB\n📄 *Content:* ${mail.text}`
            ).join("\n\n─────────────────\n\n");

            // Send inbox response
            await reply(`📥 *Your Temp Mail Inbox:*\n\n${inboxMessages}`);
        } else {
            await reply("📭 *No new emails found or invalid session ID!*");
        }
        
    } catch (error) {
        console.error("Inbox Error:", error.message);
        await reply("⚠️ *Error retrieving inbox. Try again later!*");
    }
    break;

case "apk":
case "apkdl":
if (isBan) return reply(mess.banned); 
  {
    if (!text) return reply(`*Provide an APK name*\n*Usage: ${prefix + command} free fire*`);
    
    let query = text.trim(); // Store trimmed value in a new variable
    
    let kyuu = await fetchJson(`https://bk9.fun/search/apk?q=${encodeURIComponent(query)}`);
    
    if (!kyuu.BK9 || kyuu.BK9.length === 0) {
      return reply("❌ No results found for the given APK name.");
    }
    
    let tylor = await fetchJson(`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
    
    if (!tylor.BK9 || !tylor.BK9.dllink) {
      return reply("❌ Failed to retrieve the download link.");
    }
    
    await ThugBotInc.sendMessage(
      m.chat,
      {
        document: { url: tylor.BK9.dllink },
        fileName: tylor.BK9.name || "app.apk",
        mimetype: "application/vnd.android.package-archive",
        contextInfo: {
          externalAdReply: {
            title: `༆༊ 𝐓𝕳𝖀𝕲`,
            body: tylor.BK9.name || "APK Download",
            thumbnailUrl: tylor.BK9.icon || "",
            sourceUrl: tylor.BK9.dllink,
            mediaType: 2,
            showAdAttribution: true,
            renderLargerThumbnail: false
          }
        }
      }
    );
  }
  break;
  
case 'setprefix':
if (isBan) return reply(mess.banned);  
                if (!ThugTheCreator) return reply(mess.owner)
                if (!text) return reply(`*Example : ${prefix + command} <your desired prefix>*`)
                global.prefix = text
                reply(`*Prefix successfully changed to ${text}*`)
                break


case 'play': {
    if (isBan) return reply(mess.banned);
    
    try {
        if (!text) return reply(`*Example : ${prefix + command} migraines by boywithuke*`);

        const axios = require("axios");
        const yts = require("yt-search");

        // React to user message
        await ThugBotInc.sendMessage(m.chat, {
            react: { text: `🎼`, key: m.key }
        });

        // Search YouTube
        const search = await yts(text);
        const video = search.videos[0];

        if (!video) return reply(`*❌ No results found for:* ${text}`);

        await reply(`*📥 Downloading:* ${video.title}\n*⏳ Please wait...*`);

        // Fetch MP3 download link from the API
        const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(video.url)}`;
        const response = await axios.get(apiUrl);
        const res = response.data;

        // Handle invalid API response
        if (res.status !== 200 || !res.success || !res.result || !res.result.download_url) {
            return reply(`*❌ Failed to fetch audio.*\n_Try another song or try again later._`);
        }

        const { title, download_url, thumbnail } = res.result;
        const videoUrl = video.url;

        // Send audio file to user
        await ThugBotInc.sendMessage(m.chat, {
            audio: { url: download_url },
            mimetype: 'audio/mpeg',
            fileName: `${title}.mp3`,
            caption: `🎧 *Here's your song:*\n*Title:* ${title}\n*Channel:* ${video.author.name}`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: title,
                    body: `Song by ${video.author.name}`,
                    thumbnailUrl: thumbnail || video.thumbnail,
                    sourceUrl: videoUrl,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error('Error in /play command:', error);
        reply(`*❌ An error occurred!*\n_Make sure the API is online and try again._`);
    }

    break;
}
case 'imgscan': {
if (isBan) return reply(mess.banned);  
    await ThugBotInc.sendMessage(m?.chat, { react: { text: `⏳`, key: m?.key } });

    try {
        let q = m.quoted || m;
        let mime = (q.msg || q)?.mimetype || q.mediaType || "";

        if (!mime?.startsWith('image')) {
            return reply("*Please respond to an image*");
        }

        let data = await q.download();
        if (!data) {
            return reply("*Error: Unable to download image.*");
        }

        let media = await ThugBotInc.downloadAndSaveMediaMessage(q);
        if (!media) {
            return reply("*Error: Unable to process image.*");
        }

        let mediaUrl = await handleMediaUpload(m, mime);
        if (!mediaUrl?.startsWith("http")) {
            return reply("*Error: Unable to upload image.*");
        }

        const res = await fetch(`https://apis.davidcyriltech.my.id/imgscan?url=${encodeURIComponent(mediaUrl)}`);
        if (!res) {
            throw new Error(await res.text());
        }

        const json = await res.json();
        const { result } = json;
        const message = `*🔍 Image Scan Result 🔎*\n\n📑 *Name:* ${result}`;

        // Send the message using replygcxlicon
        return reply(message);

    } catch (error) {
        console.error(error);
        return reply("*An error occurred while processing the image.*");
    }
}
break 

case 'tourl': {
  try {
    const quoted = m.quoted || m;
    const qmsg = quoted.msg || quoted;
    const mime = qmsg.mimetype || '';
    const isMedia = /image|video|sticker|audio/.test(mime);

    if (!isMedia) return reply("*❌ Reply to a valid media message.*");

    const fs = require('fs');
    const path = require('path');
    const { handleMediaUpload } = require('./lib/catbox'); // Update path as needed

    // Download the media and save locally
    const filePath = await ThugBotInc.downloadAndSaveMediaMessage(quoted, 'catbox-media');
    const buffer = fs.readFileSync(filePath);

    // Upload buffer to Catbox
    const mediaUrl = await handleMediaUpload(buffer, mime);

    // Cleanup local file
    fs.unlinkSync(filePath);

    if (!mediaUrl.startsWith("http")) {
      return reply("*❌ Upload failed. Try again later.*");
    }

    // Send the URL
    reply(`✅ *Uploaded Link:*\n${mediaUrl}`);

  } catch (err) {
    console.error("tourl error:", err);
    reply("*❌ Failed to convert media to URL.*");
  }
  break;
}
case 'aio':
case 'allinone': {
if (isBan) return reply(mess.banned);    
        if (!text) return reply(`*Provide a valid URL from YouTube, TikTok, Instagram, Facebook, etc.*\n\n*Example:*\n${prefix + command} https://youtu.be/TwlXnBp8fko`);
    
    await ThugBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const { title, low_quality, high_quality } = response.data.video;

            const isDirectDownloadHD = high_quality.includes("tinyurl");

            if (isDirectDownloadHD) {
                await ThugBotInc.sendMessage(m.chat, {
                    video: { url: high_quality },
                    mimetype: 'video/mp4',
                    fileName: `${title}_HD.mp4`,
                    caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> © 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡`
                }, { quoted: m });
            } else {
                await ThugBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

                const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });

                await ThugBotInc.sendMessage(m.chat, {
                    video: Buffer.from(hdBuffer.data),
                    mimetype: 'video/mp4',
                    fileName: `${title}_HD.mp4`,
                    caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> © 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡`
                }, { quoted: m });
            }
        } else {
            reply("*Unable to fetch the video. Please check the URL and try again.*");
        }
    } catch (error) {
        console.error('Error in AIO Downloader:', error.message);
        reply("*An error occurred while processing your request. Please try again later.*");
    }
    break;
}

const settingsFile = "./database/linkSettings.json";

// Load existing settings or initialize an empty object
const loadSettings = () => {
    if (fs.existsSync(settingsFile)) {
        return JSON.parse(fs.readFileSync(settingsFile));
    }
    return {};
};

const saveSettings = () => {
    fs.writeFileSync(settingsFile, JSON.stringify(linkSettings, null, 2));
};

// Global link settings object
let linkSettings = loadSettings();

// Link patterns
const linkPatterns = {
    youtube: /https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//gi,
    whatsapp: /https?:\/\/chat\.whatsapp\.com\//gi,
    twitter: /https?:\/\/(www\.)?(twitter\.com|x\.com)\//gi,
    facebook: /https?:\/\/(www\.)?(facebook\.com|fb\.watch)\//gi,
    instagram: /https?:\/\/(www\.)?(instagram\.com)\//gi,
    tiktok: /https?:\/\/(www\.)?(tiktok\.com)\//gi,
    discord: /https?:\/\/(www\.)?(discord\.gg|discord\.com\/invite)\//gi,
    telegram: /https?:\/\/t\.me\//gi,
    all: /https?:\/\/[^\s]+/gi
};

// Function to check if a link is restricted
const isRestrictedLink = (text, restrictions) => {
    if (!text) return false;
    return restrictions.some(type => linkPatterns[type]?.test(text));
};

case 'fakeid': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
    try {
        let apiKey = 'ac53d2249a60050114';
        let url = `https://api.nexoracle.com/details/fake-info?apikey=${apiKey}`;
        
        let response = await fetch(url);
        let data = await response.json();

        if (data.status !== 200 || !data.result || !data.result.length) {
            return reply('Failed to fetch fake info.');
        }

        let user = data.result[0];
        let message = `*Fake User Info*:\n\n` +
                      `👤 *Name*: ${user.name.title} ${user.name.first} ${user.name.last}\n` +
                      `🚻 *Gender*: ${user.gender}\n` +
                      `📧 *Email*: ${user.email}\n` +
                      `📍 *Location*: ${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}\n` +
                      `📞 *Phone*: ${user.phone}\n` +
                      `📱 *Cell*: ${user.cell}\n` +
                      `🆔 *Nationality*: ${user.nat}\n` +
                      `🎂 *DOB*: ${user.dob.date.split('T')[0]} (Age: ${user.dob.age})\n` +
                      `📅 *Registered*: ${user.registered.date.split('T')[0]} (Age: ${user.registered.age})\n`;

        let imageUrl = user.picture.large; // Ensure large image is used

        await ThugBotInc.sendMessage(from, { image: { url: imageUrl }, caption: message }, { quoted: m });

    } catch (error) {
        console.error(error);
        reply('Error fetching fake info.');
    }
    break;
}
case 'snapchat': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
    if (!args[0]) return reply('*Please provide a Snapchat video link.*');

    let apiUrl = `https://api.nexoracle.com/downloader/snapchat?apikey=a606486423a3f41b2b&url=${encodeURIComponent(args[0])}`;

    try {
        let response = await axios.get(apiUrl);
        let data = response.data;

        if (data.status !== 200 || !data.result) return reply('*Failed to fetch Snapchat video.*');

        let caption = `👻 *Snapchat Download*\n🎬 Title: ${data.result.title}\n📦 Size: ${data.result.size}\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`;
        let videoUrl = data.result.url;

        await ThugBotInc.sendMessage(from, { video: { url: videoUrl }, caption }, { quoted: m });

    } catch (error) {
        console.error(error);
        reply('*Error fetching Snapchat video.*');
    }
    break;
}
case 'cricketupdates': case 'getcricketupdates': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
 try {
 const apiUrl = 'https://api.nexoracle.com/search/cricket?apikey=ac53d2249a60050114'; // Replace with actual API URL

let response = await axios.get(apiUrl);
    let data = response.data;

    if (data.status !== 200 || !data.result || data.result.length === 0) {
        return reply('No cricket updates available at the moment.');
    }

    let matches = data.result.map(match => {
        let scores = match.score.map(s => `${s.inning}: ${s.r}/${s.w} in ${s.o} overs`).join('\n');
        return `🏏 *${match.name}* (${match.matchType.toUpperCase()})\n📍 Venue: ${match.venue}\n📅 Date: ${match.date}\n📊 Status: ${match.status}\n🎯 Scores:\n${scores}\n`;
    }).join('\n──────────────────────\n');

    reply(`📢 *Cricket Match Updates* \n\n${matches}`);
} catch (error) {
    console.error(error);
    reply('Failed to fetch cricket updates. Please try again later.');
}
break;

}

case 'playstore': {
  if (!text) return reply(`*Example:* ${prefix + command} telegram`);

  try {
    const res = await fetch(`https://api.agatz.xyz/api/playstore?message=${encodeURIComponent(text)}`);
    const json = await res.json();

    if (!json.status || !Array.isArray(json.data) || json.data.length === 0) {
      return reply('*❌ No results found for your query.*');
    }

    const result = json.data.slice(0, 10);
    let teks = `*꧁☬ 𝐏𝐋𝐀𝐘𝐒𝐓𝐎𝐑𝐄 𝐑𝐄𝐒𝐔𝐋𝐓𝐒 ☬꧂*\n\n`;

    for (let app of result) {
      teks += `*📱 Name:* ${app.nama}\n`;
      teks += `*👨‍💻 Developer:* ${app.developer}\n`;
      teks += `*⭐ Rating:* ${app.rate2}\n`;
      teks += `*🔗 App Link:* ${app.link}\n`;
      teks += `*🏢 Dev Link:* ${app.link_dev}\n\n`;
    }

    const imageUrl = 'https://files.catbox.moe/114bzl.jpg';

    await ThugBotInc.sendMessage(m.chat, {
      text: teks,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: '𝐏𝐋𝐀𝐘𝐒𝐓𝐎𝐑𝐄',
          body: '༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡',
          thumbnailUrl: imageUrl,
          sourceUrl: result[0]?.link || 'https://play.google.com',
          mediaType: 1,
          renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363312761563081@newsletter',
          newsletterName: 'ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘',
          serverMessageId: 143
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error("Playstore command error:", err);
    reply('*❌ Failed to fetch Play Store results. Please try again later.*');
  }

  break;
}
    
case "xvideo":
    if (isBan) return reply(mess.banned);
    if (!text) return reply("*Please provide a video you want to search.*");

    try {
        let response = await axios.get(`https://apis.davidcyriltech.my.id/search/xvideo?text=${encodeURIComponent(text)}`);
        let { data } = response;

        if (!data.success || !data.result) return reply("❌ No results found.");

        let app = data.result;
        let message = `🔞 *Xvideos Search Result:* 🔞\n\n`;
        message += `📑 *Title:* ${app.title}\n`;
        message += `⏱️ *Duration:* ${app.duration}\n`;
        message += `🔗 *URL:* ${app.url}\n\n`;

        // Include thumbnail as a link
        if (app.thumbnail) {
            message += `🖼️ *Thumbnail:* ${app.thumbnail}\n\n`;
        }

        // Send the final message
        await sendMessage(message);
        
    } catch (error) {
        console.error(error);
        reply("*⚠️ Error fetching video data. Please try again later.*");
    }
    break;    

 case 'hidetag': {
     if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);

    try {
        await ThugBotInc.sendMessage(
            m.chat, 
            {
                text: q || '', 
                mentions: participants.map(a => a.id)
            }
        );
    } catch (error) {
        console.error('Hidetag Error:', error);
        reply('*⚠️ An Error Occurred:* ' + error.message);
    }
}
break;

case "whatsappstalk":
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`🔍 *Usage: ${prefix}whatsappstalk <Channel link>*\n*Example:* ${prefix}whatsappstalk https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01`);

    try {
        const apiKey = "ac53d2249a60050114"; // Replace with your API key if required
        const url = `https://api.nexoracle.com/stalking/whatsapp-channel?apikey=${apiKey}&url=${text}`;
        
        const { data } = await axios.get(url);
        if (data.status !== 200 || !data.result) {
            return reply("*⚠️ Channel not found or API error.*");
        }

        const result = data.result;
        let message = `🔎 *WhatsApp Channel Found* 🔎\n`;
        message += `📑 *Title:* ${result.title}\n`;
        message += `👥 *Followers:* ${result.followers}\n`;
        message += `📝 *Description:* ${result.description}\n`;
        message += `🔗 *Channel Link:* ${result.link}`;

        let caption = {
            image: { url: result.image },
            caption: message
        };

        ThugBotInc.sendMessage(from, caption, { quoted: m });
    } catch (error) {
        console.error(error);
        reply("⚠️ Error retrieving WhatsApp channel information.");
    }
    break;



case 'stickertag': {
  if (isBan) return reply(mess.banned);
  if (!m.isGroup) return reply(mess.group);
  if (!isAdmins && !ThugTheCreator) return reply(mess.admin);

  try {
    const groupId = m.chat;
    const metadata = await ThugBotInc.groupMetadata(groupId);
    const participants = metadata.participants.map(p => p.id);

    const quoted = m.quoted;
    let stickerBuffer;

    if (quoted && quoted.mtype === 'stickerMessage') {
      const filePath = await ThugBotInc.downloadAndSaveMediaMessage(quoted, 'sticker_' + Date.now());
      stickerBuffer = fs.readFileSync(filePath);
      fs.unlinkSync(filePath);

      if (!stickerBuffer || !stickerBuffer.length) return reply('*❌ Failed to load sticker buffer.*');

      groupStickerCache[groupId] = stickerBuffer;
    } else if (groupStickerCache[groupId]) {
      // Use previously cached sticker
      stickerBuffer = groupStickerCache[groupId];
    } else {
      return reply('*❌ Invalid sticker format. Reply to a sticker first.*');
    }

    await ThugBotInc.sendMessage(groupId, {
      sticker: stickerBuffer,
      mentions: participants
    });

  } catch (err) {
    console.error('StickerTag Error:', err);
    reply(`*❌ Failed to tag with sticker:*\n${err.message}`);
  }

  break;
}



case 'avengers': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);
    if (!text.includes('|')) return reply(`*Use format: ${prefix}avengers text1|text2*`);

    let [text1, text2] = text.split('|').map(t => t.trim());
    if (!text1 || !text2) return reply('*Both text1 and text2 are required!*');

    let apiUrl = `https://api.nexoracle.com/ephoto360/avengers?apikey=ac53d2249a60050114&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

    try {
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`API error: ${response.statusText}`);

        let imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });
    } catch (error) {
        console.error('Avengers API error:', error);
        reply('*Failed to generate Avengers image. Please try again later!*');
    }
    break;
}
case 'angel-wings': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} <Your name>*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/angel-wings?apikey=ac53d2249a60050114&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in angel-wings command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'angel-wings2': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} <Your name>*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/angel-wings2?apikey=ac53d2249a60050114&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in angel-wings command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'hacker': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} <Your name>*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/annonymous-hacker?apikey=ac53d2249a60050114&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in hacker command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}  
case 'black-pink': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} <Your name>*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/blackpink?apikey=ac53d2249a60050114&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in black-pink command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}  
case 'searchteam':
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
    // Get the team name from the user's message
    let teamName = m.text.split(' ').slice(1).join(' '); // Capture the team name from the message

    if (!teamName) {
        // If no team name is provided, prompt the user to specify a team
        await reply(`⚠️ *Please provide a team name to search for live scores.*\n*Example: ${prefix}searchteam Arsenal*`);
        break;
    }

    // URL for fetching data from the API using the team name provided by the user
    let urrl = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamName}`;

    // Fetch data from the live score API
    try {
        const response = await fetch(urrl);
        const data = await response.json();

        if (data.teams && data.teams.length > 0) {
            let team = data.teams[0]; // Extract team information from the API response

            // Construct the message with the team information, adding emojis and asterisks
let liveScoreMessage = `🏆 *Team*: ${team.strTeam}\n🏟️ *Stadium*: ${team.strStadium}\n📍 *Location*: ${team.strLocation}\n📖 *Description*: ${team.strDescriptionEN}\n🌐 *Official Website*: ${team.strWebsite}\n📱 *Facebook*: ${team.strFacebook}\n🐦 *Twitter*: ${team.strTwitter}\n📸 *Instagram*: ${team.strInstagram}
            `;

            // Reply with the team details
            await reply(liveScoreMessage);
        } else {
            // If no team data is found, notify the user
            await reply("❌ *No team found with that name. Please check the spelling and try again.*");
        }
    } catch (error) {
        // Handle any errors during the API call
        await reply("⚠️ *Error fetching live scores. Please try again later.*");
    }

    break;
case 'searchplayer': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Please provide a player name.*\n*Example:* ${prefix}searchplayer Danny Welbeck`);

    try {
        let response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(text)}`);
        let data = response.data.player;

        if (!data) return reply(`*No results found for "*${text}*".*`);

        let result = data.map(player => {
            return `*${player.strPlayer}* (*${player.strNationality}*)\n` +
                   `🏟 *Team:* *${player.strTeam}*\n` +
                   `⚽ *Sport:* *${player.strSport}*\n` +
                   `📍 *Position:* *${player.strPosition}*\n` +
                   `📅 *Born:* *${player.dateBorn}*\n` +
                   `📌 *Status:* *${player.strStatus || 'N/A'}*\n` +
                   (player.strThumb ? `🖼 *Image:* ${player.strThumb}\n` : '') +
                   `*──────────────────*`;
        }).join('\n');

        reply(result);
    } catch (error) {
        console.error(error);
        reply('*Failed to fetch player data. Try again later.*');
    }
    break;
}
case 'match': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
    if (!args[0]) return reply(`*Please provide a match name*\n*Example: ${prefix}matchArsenal vs Chelsea*`);

    let matchName = args.join(' '); // Keep the match name as normal text
    let apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${encodeURIComponent(matchName)}`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        if (!data.event) return reply('*Match not found!*');

        let match = data.event[0]; // Assuming the first result is the correct match
        
        let matchInfo = `*🏆 Match Details 🏆*\n\n` +
                        `┌───────────────────────┐\n` +
                        `│ ⚽ *Event:* ${match.strEvent}\n` +
                        `│ 📅 *Date:* ${match.dateEvent}\n` +
                        `│ ⏰ *Time:* ${match.strTime}\n` +
                        `│ 🎽 *Home Team:* ${match.strHomeTeam}\n` +
                        `│ 🎽 *Away Team:* ${match.strAwayTeam}\n` +
                        `│ ⚽ *Home Score:* ${match.intHomeScore || 'N/A'}\n` +  
                        `│ ⚽ *Away Score:* ${match.intAwayScore || 'N/A'}\n` +  
                        `│ 🏟 *Stadium:* ${match.strVenue}\n` +
                        `│ 👀 *Highlights:* ${match.strVideo || 'Not available'}\n` +
                        `│ 📑 *Status:* ${match.strStatus || 'Unknown'}\n` +
                        `│ 👎 *Postponed:* ${match.strPostponed || 'No'}\n` +
                        `│ 📺 *TV Broadcast:* ${match.strTVStation || 'Not available'}\n` +
                        `└───────────────────────┘\n\n` +
                        `🔗 *More Info:* ${match.strThumb || '*No image available*'}`;

        reply(matchInfo);
    } catch (error) {
        console.error(error);
        reply('*Error fetching match details!*');
    }
    break;
}
case 'self': 
case 'private': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    
    ThugBotInc.public = false;
    
    let statusMessage = `🛑 *Mode Update* 🛑\n\n` +
                        `✅ *Status:* Bot is now running in *Self Mode*\n` +
                        `👤 *Only the owner can use the bot now.*\n\n` +
                        `🔒 *Private mode ensures better security and controlled usage.*\n` +
                        `Use *${prefix}public* to switch back.`;

    reply(statusMessage);
}
break;

case 'public': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    
    ThugBotInc.public = true;
    
    let statusMessage = `🌍 *Mode Update* 🌍\n\n` +
                        `✅ *Status:* Bot is now running in *Public Mode*\n` +
                        `🌐 *Anyone can use the bot now.*\n\n` +
                        `⚠️ *Be cautious while using Public Mode, as anyone can access it.*\n` +
                        `Use *${prefix}self* to switch back.`;

    reply(statusMessage);
}
break;
case 'shazam': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);
    const fs = require('fs');
    const axios = require('axios');
    const yts = require("yt-search");
    const acrcloud = require('acrcloud');
    const { exec } = require('child_process');

    try {
        const quoted = m.quoted || m;
        const mime = (quoted.msg || quoted)?.mimetype || quoted.mediaType || "";

        if (!mime.startsWith('audio') && !mime.startsWith('video')) {
            return reply("*Please respond to a video or audio file.*");
        }

        const mediaPath = await ThugBotInc.downloadAndSaveMediaMessage(quoted);
        if (!mediaPath || !fs.existsSync(mediaPath)) {
            return reply("*Error: Unable to process media.*");
        }

        const trimmedPath = mediaPath.replace(/(\.\w+)$/, '_trimmed$1');

        await new Promise((resolve, reject) => {
            exec(`ffmpeg -i "${mediaPath}" -t 12 -c copy "${trimmedPath}"`, (err, stdout, stderr) => {
                if (err) {
                    console.error("FFmpeg error:", stderr);
                    return reject("Error trimming media.");
                }
                resolve();
            });
        });

        const mediaBuffer = fs.readFileSync(trimmedPath);

        const acr = new acrcloud({
            host: 'identify-ap-southeast-1.acrcloud.com',
            access_key: '26afd4eec96b0f5e5ab16a7e6e05ab37',
            access_secret: 'wXOZIqdMNZmaHJP1YDWVyeQLg579uK2CfY6hWMN8'
        });

        const result = await acr.identify(mediaBuffer);

        fs.promises.unlink(mediaPath).catch(() => {});
        fs.promises.unlink(trimmedPath).catch(() => {});

        if (result.status.code !== 0 || !result.metadata?.music?.length) {
            return reply("❌ Sorry, I couldn't recognize the song.");
        }

        const song = result.metadata.music[0];
        const { title, artists = [], album, genres = [], release_date } = song;

        const search = await yts(title);
        const video = search.videos[0];
        const thumbnail = video?.thumbnail;
        const ytUrl = video?.url || "No YouTube link found.";

        let responseText = `🎵 *Song Identified!*\n\n`;
        responseText += `📑 *Title:* ${title}\n`;
        if (artists.length) responseText += `🎤 *Artists:* ${artists.map(v => v.name).join(', ')}\n`;
        if (album?.name) responseText += `🗂️ *Album:* ${album.name}\n`;
        if (genres.length) responseText += `🎶 *Genres:* ${genres.map(v => v.name).join(', ')}\n`;
        if (release_date) responseText += `📅 *Release Date:* ${release_date}\n`;
        responseText += `🎧 *Listen on YouTube:* ${ytUrl}`;

        if (thumbnail) {
            return ThugBotInc.sendMessage(m.chat, {
                image: { url: thumbnail },
                caption: responseText.trim()
            }, { quoted: m });
        } else {
            return reply(responseText.trim());
        }

    } catch (error) {
        console.error("Shazam Error:", error);
        return reply("❌ Sorry, something went wrong while identifying the song.");
    }
}
break;

// Utility delay
function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}
// Your command case block
case 'manga': {
    if (!text) return reply(`*Usage: ${prefix + command} <Manga Title>*`);

    try {
        // Search for the manga by title
        const searchRes = await fetch(`https://api.mangadex.org/manga?title=${encodeURIComponent(text)}&limit=1`);
        
        // Check if the request was successful
        if (!searchRes.ok) {
            throw new Error('Failed to fetch manga search results');
        }

        const searchData = await searchRes.json();

        if (!searchData.data || searchData.data.length === 0) {
       return reply("*Generating manga PDF.....*\n*This will take 1 - 3 minutes depending on the manga length*");
        }

        const manga = searchData.data[0];
        const mangaId = manga.id;
        const title = manga.attributes?.title?.en || "Untitled";

        // Check for the latest chapter available
        const latestChapterId = manga.attributes.latestUploadedChapter;

        if (!latestChapterId) {
            return reply(`*Found:* ${title}\n*But no chapters available.*`);
        }

        // Fetch the chapter's page data
        const chapterRes = await fetch(`https://api.mangadex.org/at-home/server/${latestChapterId}`);
        
        // Check if the request was successful
        if (!chapterRes.ok) {
            throw new Error('Failed to fetch chapter data');
        }

        const chapterData = await chapterRes.json();

        if (!chapterData || !chapterData.baseUrl || !chapterData.chapter || !chapterData.chapter.data) {
            return reply(`*Failed to fetch pages for the latest chapter of:* ${title}`);
        }

        const baseUrl = chapterData.baseUrl;
        const hash = chapterData.chapter.hash;
        const pages = chapterData.chapter.data;

        // Notify the user that the manga is found and chapters are being fetched
        await reply(`*Manga Found:* ${title}\nFetching latest chapter...`);

        // Generate the PDF document for the chapter
        const pdfPath = path.join(__dirname, `manga_latest_chapter.pdf`);
        const doc = new PDFDocument({ autoFirstPage: false });
        const writeStream = fs.createWriteStream(pdfPath);
        doc.pipe(writeStream);

        // Add pages to the PDF
        for (const page of pages) {
            const imageUrl = `${baseUrl}/data/${hash}/${page}`;
            
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const imageBuffer = Buffer.from(response.data);

            doc.addPage({ size: [595.28, 841.89] }); // A4 size
            doc.image(imageBuffer, 0, 0, {
                fit: [595.28, 841.89],
                align: 'center',
                valign: 'center'
            });

            // Adding a delay between pages (ensure delay function is defined)
            await delay(800); // Delay between pages
        }

        doc.end();

        // Wait for the PDF to finish
        await new Promise(resolve => writeStream.on('finish', resolve));

        // Send the generated PDF to the user
        await ThugBotInc.sendMessage(m.chat, {
            document: { url: pdfPath },
            fileName: `${title} - Latest Chapter.pdf`,
            mimetype: 'application/pdf',
            caption: `*📜  ${title} - Latest Chapter*\n*© ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡™*`
        }, { quoted: m });

        // Cleanup: delete the temporary PDF
        fs.unlinkSync(pdfPath);

        await delay(1500); // Wait before proceeding to the next action
    } catch (err) {
        console.error('Manga PDF error:', err);
        reply(`*ERROR OCCURRED!!*\n> ${err.message}`);
    }

    break;
}

case 'autostatusreact': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (args.length < 1) return reply('*Usage: autostatusreact on/off [emoji]*');

    if (args[0] === 'on') {
        if (!args[1]) return reply('*Please provide an emoji for the reaction.*\n*Example: autostatusreact on 🤎*');
        autostatusReact = true;
        StatusReactEmoji = args[1];
        reply(`*Bot Autostatus React is enabled. Bot will react to statuses with "${StatusReactEmoji}".*`);
    } else if (args[0] === 'off') {
        autostatusReact = false;
        reply('*Bot Autostatus React is disabled.*');
    } else {
        reply('*Invalid option. Use: autostatusreact on/off [emoji]*');
    }
    break;
}
case 'mute': 
    if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
    

    await ThugBotInc.groupSettingUpdate(m.chat, 'announcement');
    reply(`*🔐 Group has been closed successfully!*`);
    break;

case 'unmute':
    if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
    

    await ThugBotInc.groupSettingUpdate(m.chat, 'not_announcement');
    reply(`*🔓 Group has been opened successfully!*`);
    break;
    
case 'blocklist':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner)

    try {
        const blocklist = await ThugBotInc.fetchBlocklist();
        
        if (!blocklist || blocklist.length === 0) {
            reply('✅ *No numbers are currently blocked.*');
        } else {
            let blockedNumbers = blocklist.map((num, index) => `${index + 1}. ${num}`).join('\n');
            reply(`🚫 *Blocked Numbers:*\n\n${blockedNumbers}`);
        }
    } catch (error) {
        console.error(error);
        reply('⚠️ *Failed to fetch the blocklist. Try again later.*');
    }
    break;
case 'readreceipts':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner)
    
    if (!args[0] || !['all', 'none'].includes(args[0].toLowerCase())) {
        return reply(`*⚙️ Usage: ${prefix}readreceipts <all/none>*\n\n*All → Everyone sees read receipts*\n*None → No one sees read receipts*`);
    }

    try {
        const value = args[0].toLowerCase(); 
        await ThugBotInc.updateReadReceiptsPrivacy(value);
        reply(`✅ *Read receipts privacy has been updated to:* _${value}_`);
    } catch (error) {
        console.error(error);
        reply('⚠️ *Failed to update read receipts privacy. Try again later.*');
    }
    break;
case 'pinchat': {
    if (isBan) return reply(mess.banned);

if (!m.isGroup) return reply(mess.group)
if (!ThugTheCreator) return reply(mess.owner)

ThugBotInc.chatModify({ pin: true }, m.chat)
await ThugBotInc.sendMessage(m?.chat, {react: {text: `📌`,key: m?.key,}})
}
break
case 'unpinchat': {
    if (isBan) return reply(mess.banned);

if (!m.isGroup) return reply(mess.group)
if (!ThugTheCreator) return reply(mess.owner)

ThugBotInc.chatModify({ pin: false }, m.chat)
await ThugBotInc.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}}) 
}
break

    
case 'edit':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!quoted) return reply('✏️ *Reply to a message you want to edit with the new text.*');
    if (!args.length) return reply(`⚙️ *Usage: ${prefix}edit <new text>*`);

    try {
        let newText = args.join(' ');

        // Send the new text as a reply to the quoted message
        await ThugBotInc.sendMessage(m.chat, {
            text: newText
        }, {
            quoted: quoted // Replying to the quoted message
        });

        // Optionally, delete the original message (if supported by the library)
        // await ThugBotInc.sendMessage(m.chat, {
        //     delete: quoted.key
        // });

        reply('✅ *Message updated successfully!*');
    } catch (error) {
        console.error(error);
        reply('⚠️ *Failed to edit the message. Try again later.*');
    }
    break;
    
    


// Command to toggle call rejection
case 'privacysettings':
    if (isBan) return reply(mess.banned);
if (!ThugTheCreator) return reply(mess.owner)
    
    try {
        // Fetch the privacy settings
        const privacySettings = await ThugBotInc.fetchPrivacySettings(true);
        
        // Log the privacy settings to the console for debugging
        console.log('Privacy settings:', privacySettings);

        // Format the privacy settings into a readable string (you can modify based on what you want to display)
        const formattedSettings = `🔒 *Privacy Settings:*\n\n${JSON.stringify(privacySettings, null, 2)}`;

        // Reply to the bot owner with the formatted privacy settings
        reply(formattedSettings);
    } catch (error) {
        console.error(error);
        reply('⚠️ *Failed to fetch privacy settings. Try again later.*');
    }
    break;
    
case 'ephemeral': 
case 'disapperingmessage': {
    if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group)
    if (!ThugTheCreator) return reply(mess.owner);
    
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);

    // Ensure that the user has entered a valid argument (on/off)
    if (!text || !['on', 'off'].includes(args[0]?.toLowerCase())) {
        return reply(`⚙️ *Invalid input!* 
Usage: \`${prefix}${command} <on/off>\`
- 🔵 *on* → Enable disappearing messages in this chat (messages will disappear after a set time)
- 🔴 *off* → Disable disappearing messages (messages will remain visible)`);
    }

    try {
        if (args[0].toLowerCase() === 'on') {
            // Enable ephemeral (disappearing) messages
            await ThugBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL });
            return reply(`✅ *Success! Disappearing messages have been enabled for this chat.*\n*All messages will now disappear after 7 days.*`);
        } else if (args[0].toLowerCase() === 'off') {
            // Disable ephemeral (disappearing) messages
            await ThugBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false });
            return reply(`✅ *Success! Disappearing messages have been disabled for this chat.*\n*Messages will now remain visible as usual.*`);
        }
    } catch (error) {
        console.error(error);
        return reply('⚠️ *An error occurred while processing your request. Please try again later.*');
    }
}
break;

case 'upscale':
case 'remini': {
  if (isBan) return reply(mess.banned);

  await ThugBotInc.sendMessage(m.chat, {
    react: { text: '⏳', key: m.key }
  });

  try {
    const fs = require('fs');
    const fetch = require('node-fetch');
    const { uploadMedia } = require('./lib/catbox');

    const quoted = m.quoted || m;
    const mime = (quoted.msg || quoted)?.mimetype || quoted.mediaType || "";

    if (!mime.startsWith('image')) {
      return reply("*❌ Please reply to a valid image.*");
    }

    const filePath = await ThugBotInc.downloadAndSaveMediaMessage(quoted, 'remini-enhance');
    const buffer = fs.readFileSync(filePath);

    const mediaUrl = await uploadMedia(buffer);
    fs.unlinkSync(filePath); // Clean up temp file

    if (!mediaUrl || !mediaUrl.startsWith('http')) {
      return reply("*❌ Failed to upload image for enhancement.*");
    }

    const res = await fetch(`https://api.siputzx.my.id/api/iloveimg/upscale?image=${encodeURIComponent(mediaUrl)}`);

    if (!res.ok || !res.headers.get('content-type')?.startsWith('image')) {
      const text = await res.text();
      throw new Error(`API Error: ${text}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const enhancedBuffer = Buffer.from(arrayBuffer);

    await ThugBotInc.sendMessage(m.chat, {
      image: enhancedBuffer,
      caption: `*✅ Image Enhanced Successfully!*\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
    }, { quoted: m });

  } catch (err) {
    console.error("Remini Enhance Error:", err);
    reply(`*❌ An error occurred:*\n> ${err.message}`);
  }

  break;
}


case 'book':
    if (isBan) return reply(mess.banned);
 if (!text || text.trim() === "") {
        return reply("*❌ Please provide a valid prompt for the image.*");
    }

    await ThugBotInc.sendMessage(m.chat, {
        react: { text: `✨`, key: m.key },
    });

 
    try {
        let apiUrl = `https://apis.davidcyriltech.my.id/generate/book?text=${encodeURIComponent(text)}&size=30`;
        let response = await axios.get(apiUrl, { responseType: "arraybuffer" });

        if (!response.data) {
            return reply("*❌ Error: The API did not return a valid image. Try again later.*");
        }

        let imageBuffer = Buffer.from(response.data, "binary");

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*Image generated successfully*\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
        });

    } catch (error) {
        console.error("Book Error:", error);
        reply(`*❌ An error occurred:* ${error.response?.data?.message || error.message || "Unknown error"}`);
    }
    break;
    
    
    case 'qrcodegenerator':
        if (isBan) return reply(mess.banned);
 if (!text || text.trim() === "") {
        return reply("*❌ Please provide a valid url to convert to a QR code.*");
    }   
 
    try {
        let apiUrl = `https://apis.davidcyriltech.my.id/tools/qrcode?text=${encodeURIComponent(text)}`;
        let response = await axios.get(apiUrl, { responseType: "arraybuffer" });

        if (!response.data) {
            return reply("*❌ Error: The API did not return a valid image. Try again later.*");
        }

        let imageBuffer = Buffer.from(response.data, "binary");

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*QR Code Generated Successfully*\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
        });

    } catch (error) {
        console.error("Qr code Error:", error);
        reply(`*❌ An error occurred:* ${error.response?.data?.message || error.message || "Unknown error"}`);
    }
    break;
       
case 'bgremoval':
case 'removebg': {
  if (isBan) return reply(mess.banned);

  await ThugBotInc.sendMessage(m.chat, {
    react: { text: '⏳', key: m.key }
  });

  try {
    const quoted = m.quoted || m;
    const qmsg = quoted.msg || quoted;
    const mime = qmsg.mimetype || '';
    const isImage = mime.startsWith('image');

    if (!isImage) return reply("*❌ Please reply to a valid image.*");

    const fs = require('fs');
    const { uploadMedia } = require('./lib/catbox');
    const path = await ThugBotInc.downloadAndSaveMediaMessage(quoted, 'removebg-temp');
    const buffer = fs.readFileSync(path);

    const mediaUrl = await uploadMedia(buffer);
    fs.unlinkSync(path); // cleanup

    if (!mediaUrl || !mediaUrl.startsWith('http')) {
      return reply("*❌ Failed to upload image.*");
    }

    const res = await fetch(`https://api.siputzx.my.id/api/iloveimg/removebg?image=${encodeURIComponent(mediaUrl)}&scale=2`);
    const removedBuffer = await res.arrayBuffer();
    const imageBuffer = Buffer.from(removedBuffer);

    if (!imageBuffer.length) {
      return reply("*❌ Failed to remove background. No image returned.*");
    }

    await ThugBotInc.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `✅ *Background Removed Successfully!*\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
    }, { quoted: m });

  } catch (err) {
    console.error("BG Removal Error:", err);
    reply(`*❌ Error occurred:*\n> ${err.message || "Unknown failure"}`);
  }

  break;
}

case 'stickersearch':
    if (isBan) return reply(mess.banned);
    if (!text || text.trim() === "") {
        return reply("*❌ Please provide a keyword to search for stickers.*");
    }

    try {
        let apiUrl = `https://apis.davidcyriltech.my.id/search/sticker?text=${encodeURIComponent(text)}`;
        let response = await axios.get(apiUrl);

        if (!response.data || !response.data.success || !response.data.result.stickers.length) {
            return reply("*❌ No stickers found for your search. Try a different keyword!*");
        }

        let { title, stickers } = response.data.result;

        let stickerCount = Math.min(stickers.length, 5); // Limit to first 5 stickers
        for (let i = 0; i < stickerCount; i++) {
            await ThugBotInc.sendMessage(m.chat, {
                sticker: { url: stickers[i] }
            });
        }

        if (stickers.length > 5) {
            reply(`*ℹ️ More stickers are available! Try another search or specify a different keyword.*`);
        }

    } catch (error) {
        console.error("Sticker Search Error:", error);
        reply(`*❌ An error occurred:* ${error.response?.data?.message || error.message || "Unknown error"}`);
    }
    break;

case 'pickup':
    if (isBan) return reply(mess.banned);
    try {
        let apiUrl = `https://apis.davidcyriltech.my.id/pickupline`;
        let response = await axios.get(apiUrl);

        if (response.data.status === 200 && response.data.success) {
            let pickUpLine = response.data.pickupline;
            reply(`*💬 Here's a pick-up line for you:* \n${pickUpLine}`);
        } else {
            return reply("*❌ Sorry, I couldn't fetch a pick-up line. Please try again later.*");
        }

    } catch (error) {
        console.error("Pick-up Line Error:", error);
        reply(`*❌ An error occurred:* ${error.response?.data?.message || error.message || "Unknown error"}`);
    }
    break;

case 'spotify':
    if (isBan) return reply(mess.banned);
    if (!text || text.trim() === "") {
        return reply("*❌ Please provide a track name or keyword to search.*");
    }

    try {
        let apiUrl = `https://apis.davidcyriltech.my.id/search/spotify?text=${encodeURIComponent(text)}`;
        let response = await axios.get(apiUrl);

        if (!response.data.success || !response.data.result || response.data.result.length === 0) {
            return reply("*❌ No results found for your search. Try a different track or artist.*");
        }

        let results = response.data.result;
        let trackCount = Math.min(results.length, 5); // Limit to first 5 tracks
        
        let message = `*🔍 Here are some Spotify results for "${text}":*\n\n`;

        for (let i = 0; i < trackCount; i++) {
            let track = results[i];
            message += `*${track.trackNumber}. 📑 ${track.trackName} by ${track.artistName}*\n` +
                       `🗂️ *Album: ${track.albumName}*\n⏱️ *Duration: ${track.duration}*\n` +
                       `🎧 *Listen here: ${track.externalUrl}*\n\n`;
        }

        reply(message);

    } catch (error) {
        console.error("Spotify Search Error:", error);
        reply(`*❌ An error occurred:* ${error.response?.data?.message || error.message || "Unknown error"}`);
    }
    break;
    
case 'menu': {
  try {
    const videoUrl = 'https://files.catbox.moe/43zmzx.mp4';
    const caption = `*👋 𝙷𝙴𝙻𝙻𝙾 ${pushname}*\n*𝙸’𝙼 𝚈𝙾𝚄𝚁 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙰𝚂𝚂𝙸𝚂𝚃𝙰𝙽𝚃 — 𝙷𝙴𝚁𝙴 𝚃𝙾 𝙼𝙰𝙺𝙴 𝚈𝙾𝚄𝚁 𝚃𝙰𝚂𝙺𝚂 𝚂𝙼𝙾𝙾𝚃𝙷𝙴𝚁 𝙰𝙽𝙳 𝙴𝙵𝙵𝙸𝙲𝙸𝙴𝙽𝚃.*\n*𝚁𝚄𝙽𝚃𝙸𝙼𝙴 🐎: ${runtime(process.uptime())}*\n*ℹ️ 𝙵𝙾𝚁 𝙼𝙾𝚁𝙴 𝙸𝙽𝙵𝙾: 𝚃𝚈𝙿𝙴 ${prefix}𝙼𝙴𝙽𝚄𝙻𝙸𝚂𝚃*`;

    const message = {
        video: { url: videoUrl },
        gifPlayback: false,
        caption: caption,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363312761563081@newsletter",
                newsletterName: "ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘",
                serverMessageId: 143
            }
        }
    };

    ThugBotInc.sendMessage(m.chat, message, { quoted: m });
      } catch (err) {
    console.error('Menu Video Error:', err);
    reply('*❌ Failed to send the menu.*');
     }
break
}

case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
 if (isBan) return reply(mess.banned);
ThugBotInc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await ThugBotInc.sendMessage(m.chat, { audio: ThugBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
 case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
    if (isBan) return reply(mess.banned);

   var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `*@${m.sender.split("@")[0]} ${command} themselves!*`

          } else {

           musers = `*@${m.sender.split("@")[0]} ${command} @${users.split("@")[0]}* `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ThugBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
case 'broadcast-gc':
case 'gcbroadcast':
case 'bcgroup': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!text) return reply(`*Ugh, provide a text*\n*Example : ${prefix + command} hello everyone*`);

    let getGroups = await ThugBotInc.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
    let anu = groups.map(v => v.id);

    reply(`*Sending broadcast to ${anu.length} group chats, end time ~${anu.length * 1.5} seconds*`);

    for (let i of anu) {
        await sleep(1500);
        let a = `*${ownername}'s Broadcast*\n🗞️ *Message:* ${text}\n\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`;

        await ThugBotInc.sendMessage(i, {
            video: { url: 'https://files.catbox.moe/h3u0el.mp4' },
            caption: a,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363312761563081@newsletter",
                    newsletterName: "ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘",
                    serverMessageId: 143
                }
            }
        });
    }

    reply(`*Broadcast successfully sent to ${anu.length} group chats*`);
    break;
}

case 'truth':
    if (isBan) return reply(mess.banned);
    const truth = [
        "What’s something you’ve done that you’ve never told anyone about? 🤐",
        "Who’s your secret crush? 😏",
        "What’s the worst lie you’ve ever told? 😬",
        "Do you believe in love at first sight? 💘",
        "Have you ever broken someone’s heart? 💔",
        "What’s the most embarrassing thing you’ve done in public? 🤭",
        "Do you ever lie about your feelings? 😔",
        "What’s the biggest secret you’ve kept from your parents? 🙊",
        "What’s your biggest fear in life? 😱",
        "Have you ever kissed someone you didn’t like? 💋",
        "Do you think you’ve ever been in love? ❤️",
        "What’s something you’ve done just to get attention? 🎯",
        "Have you ever cheated on someone? 💔",
        "What’s your biggest regret? 😓",
        "Who do you trust the most in your life? 🫶",
        "Have you ever stolen anything? 🛑",
        "What’s the most awkward thing you’ve done for someone? 😬",
        "Have you ever had a crush on a friend’s partner? 😳",
        "What’s the meanest thing you’ve ever done to someone? 😤",
        "What’s something you’re afraid to admit? 🤐",
        "Do you believe in soulmates? 💑",
        "Have you ever been caught doing something you weren’t supposed to? 😅",
        "What’s your biggest insecurity? 🥺",
        "Have you ever made a big mistake in a relationship? 😔",
        "What’s the craziest thing you’ve done for love? 💕",
        "Who’s your biggest role model? 🌟",
        "What’s the hardest thing you’ve ever done? 💪",
        "What’s one thing you wish you could forget? 😢",
        "Have you ever lied to get out of trouble? 🤥",
        "What’s the most embarrassing thing you’ve said to someone you like? 😳",
        "What’s one thing you can’t live without? 💎",
        "What’s your biggest fear in a relationship? 💔",
        "What’s the worst advice you’ve ever followed? 🤦‍♂️",
        "Have you ever ghosted someone? 👻",
        "What’s the most romantic thing you’ve ever done for someone? ❤️",
        "What’s something you’re ashamed of? 😳",
        "Who do you think is the most attractive person in this group? 🔥",
        "What’s the worst date you’ve ever been on? 🍽️",
        "Do you have any weird habits? 🦸",
        "What’s your idea of a perfect day? 🌞",
        "Who’s your celebrity crush? 💖",
        "What’s something you wish you could change about yourself? 🤔",
        "What’s the most childish thing you still do? 👶",
        "What’s something you’ve done that you would never tell your parents? 😬",
        "What’s your biggest dream? 🌠",
        "What’s your biggest fear when it comes to love? 💔",
        "Have you ever had a secret crush? 😘",
        "What’s the weirdest dream you’ve ever had? 🌙",
        "What’s your worst habit? 🚬",
        "Have you ever been in love with someone who didn’t love you back? 💔",
        "What’s one thing you would never forgive someone for? 😡",
        "What’s the last thing you Googled? 🔍",
        "What’s something you do when no one is watching? 👀",
        "What’s the best advice you’ve ever received? 🧠",
        "Have you ever made a prank call? 📞",
        "What’s your most embarrassing childhood memory? 👶",
        "What’s the scariest thing that has ever happened to you? 😨",
        "Have you ever had a near-death experience? 🚑",
        "What’s one thing that always makes you laugh? 😂",
        "What’s your most memorable vacation? 🌴",
        "What’s the worst gift you’ve ever received? 🎁",
        "What’s one thing you regret not doing? 😔",
        "Who’s the most supportive person in your life? 🤗",
        "What’s the weirdest thing you’ve eaten? 🍴",
        "Have you ever been in a toxic relationship? 💔",
        "What’s the most embarrassing thing you’ve done to impress someone? 😅",
        "What’s something you’ve always wanted to learn? 📚",
        "What’s the biggest challenge you’ve overcome? 💪",
        "Who’s the last person you texted? 📱",
        "What’s the biggest risk you’ve ever taken? 🎲",
        "What’s the most dangerous thing you’ve done? 🏍️",
        "What’s one thing you do to de-stress? 🧘",
        "What’s your favorite memory with your best friend? 🤗",
        "What’s your biggest turn-off in a relationship? 😷",
        "What’s the weirdest thing you’ve been complimented on? 💬",
        "What’s something you’re really bad at? 🙈",
        "What’s the last thing you did for the first time? 🤔",
        "What’s the most surprising thing you’ve learned about yourself? 🧐",
        "Who’s the last person you hugged? 🤗",
        "Have you ever been heartbroken? 💔",
        "What’s the most spontaneous thing you’ve ever done? 🎉",
        "What’s your biggest fear about growing up? ⏳",
        "What’s the last thing you cried about? 😢",
        "What’s one thing you wish you could change about your life? 🔄",
        "What’s the craziest thing you’ve ever done on a dare? 😈",
        "Who’s the last person you made laugh? 😂",
        "What’s the most awkward thing you’ve said on a date? 😬",
        "What’s the worst thing you’ve ever done to get revenge? 🔥",
        "What’s the last song you listened to? 🎶",
        "What’s the last movie you watched? 🎥",
        "What’s one thing you’ve never told anyone about your past? ⏳",
        "What’s the hardest thing you’ve had to tell someone? 💔",
        "What’s the worst lie you’ve told in a relationship? 😔",
        "What’s the craziest rumor you’ve heard about yourself? 🧐",
        "What’s your worst fear about love? 💔",
        "What’s the last thing you bought online? 🛒",
        "What’s something you do when no one is around? 👀",
        "What’s your biggest relationship dealbreaker? 🚫",
        "Have you ever had a crush on a celebrity? 🎬",
        "What’s the most awkward situation you’ve been in? 😬",
        "What’s one thing you would never do for love? 🚫",
        "What’s something that scares you but you want to do anyway? 😱",
        "Who do you go to for relationship advice? 💌",
        "What’s one thing you’ve learned from a past relationship? 💭",
        "What’s the most painful thing someone has ever said to you? 😞",
        "What’s the one thing that makes you happiest in life? 😊"
    ];

    const xeontruth = truth[Math.floor(Math.random() * truth.length)];
    buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`);
    ThugBotInc.sendMessage(frommeky, { image: buffertruth, caption: '*YOU HAVE CHOSEN TRUTH*\n'+ xeontruth }, {quoted:m});
    break;


            case 'dare':
                if (isBan) return reply(mess.banned);
    const dare = [
        "Sing a song in front of the group 🎶",
        "Do a 5-minute workout and post it 🏋️‍♂️",
        "Send a voice message saying something funny 🤪",
        "Post a photo with a funny filter 🤳",
        "Take a picture with your eyes closed 👀",
        "Act like a monkey for 30 seconds 🐒",
        "Send a screenshot of your first text conversation 📱",
        "Dance with a broom like it's a partner 💃",
        "Do a dramatic reading of a text message 📜",
        "Send a video of you trying to do a backflip 🤸‍♂️",
        "Pretend you're a waiter and take everyone's order 🍴",
        "Sing the chorus of your favorite song 🎤",
        "Do a funny impression of a celebrity 🏆",
        "Try to juggle three random objects 🤹",
        "Record yourself doing a TikTok dance 📱",
        "Talk like a pirate for the next 5 minutes 🏴‍☠️",
        "Post a picture of your favorite childhood toy 🧸",
        "Send a voice message singing a random song 🎶",
        "Post a random fact about yourself 🧠",
        "Take a funny selfie with no filter 😂",
        "Do 10 push-ups and post a video 📹",
        "Pretend you’re a famous singer for 2 minutes 🎤",
        "Make a funny face and send a video 🎥",
        "Do a 30-second yoga pose 🧘‍♂️",
        "Imitate a cartoon character 🎬",
        "Send a picture of your pet (if you have one) 🐕",
        "Record a funny skit about your day 🎭",
        "Talk to your reflection in the mirror for 1 minute 🪞",
        "Do 20 sit-ups and send a picture 📸",
        "Post a silly face on your status 🥴",
        "Send a video of you doing a silly walk 🚶‍♂️",
        "Take a picture of your shoes 🥿",
        "Do a quick 5-minute workout 🏃‍♀️",
        "Post a picture of your favorite food 🍕",
        "Shout your favorite color out loud 🌈",
        "Dance in front of the mirror and rate yourself 💃",
        "Talk in rhymes for the next 5 minutes 📝",
        "Sing the national anthem 🎶",
        "Do a cartwheel and send a video 🤸‍♀️",
        "Pretend to be a news anchor and report the weather 🌦️",
        "Record a song for 30 seconds 🎤",
        "Send a voice message saying 'I love you' to your best friend 💖",
        "Make a short dance video and put it on your status 💃",
        "Do 10 jumping jacks in front of the camera 🎥",
        "Take a picture of your messy room 🏚️",
        "Share an embarrassing moment from your childhood 🍼",
        "Post a funny face video on your status 📹",
        "Imitate a famous actor for 1 minute 🎭",
        "Sing the chorus of a random song 🎶",
        "Send a random funny joke in the group 😂",
        "Do a funny dance move and send it in a voice note 🎵",
        "Send a picture of your morning face 🌞",
        "Pretend you’re a robot for the next 2 minutes 🤖",
        "Do a dramatic monologue 🎤",
        "Record a funny dance video and send it here 💃",
        "Say something nice about someone in the group 💬",
        "Change your status to 'I love my friends' for 1 hour ❤️",
        "Send a video acting like a baby 🍼",
        "Say 'I am a champion' and record it 💪",
        "Send a picture of your favorite book 📚",
        "Do a silly dance and send it to the group 💃",
        "Send a screenshot of your phone home screen 📱",
        "Call a random contact and sing a song 🎤",
        "Post a random meme you find funny 😂",
        "Send a voice message with your funniest laugh 😂",
        "Dance to a random song for 1 minute 🎵",
        "Record a voice note with a motivational quote 💬",
        "Make a funny face and send it here 😜",
        "Imitate your favorite singer for 1 minute 🎶",
        "Post a funny video of your pet 🐶",
        "Take a random selfie and share it 🤳",
        "Send a video of you trying to do a backflip 🤸‍♀️",
        "Say 'I love pizza' in the weirdest voice 🍕",
        "Call someone and say 'You’re my best friend' 💖",
        "Send a picture of your favorite food 🍔",
        "Do 20 push-ups and send a video 📹",
        "Imitate a cartoon character for 2 minutes 🎬",
        "Post a photo with a funny caption 📸",
        "Dance like no one’s watching 💃",
        "Pretend you're a famous celebrity for 1 minute 🌟",
        "Send a random fact about yourself 🧠",
        "Post a picture of your favorite place 🌍",
        "Take a photo with a funny face 🥴",
        "Send a voice note saying 'I’m your biggest fan' 💫",
        "Shout 'I am the champion' in a video 🎤",
        "Dance with your favorite stuffed animal 🧸",
        "Call someone and tell them a random joke 😂",
        "Record a video of you singing a song 🎤",
        "Send a picture of your pet doing something funny 🐱",
        "Do 10 sit-ups and post a video 🏋️",
        "Send a screenshot of your last text message 📱",
        "Do a funny impression of someone you know 🎭",
        "Say 'I’m the king/queen' in a video 👑",
        "Take a silly selfie and send it here 🤳",
        "Post a funny meme on your story 😂",
        "Do 20 jumping jacks and send a picture 📸",
        "Pretend you’re a famous singer for 2 minutes 🎤",
        "Record yourself singing your favorite song 🎶",
        "Post a picture of your childhood favorite snack 🍫",
        "Send a voice note acting like a superhero 🦸‍♂️",
        "Shout a random word out loud and record it 📣",
        "Do a dramatic reading of your favorite book 📖",
        "Send a voice note saying 'I love you' to a friend 💖",
        "Make a funny meme about yourself and share it 📸",
        "Take a picture with your hands on your face 🤦‍♂️",
        "Send a funny story from your life 📖",
        "Post a video of you acting like a robot 🤖",
        "Say 'I’m the best' in the funniest voice you can find 🎤",
        "Do 10 push-ups and record it 📹",
        "Record a funny video and tag someone in it 🎬"
    ];

    const xeondare = dare[Math.floor(Math.random() * dare.length)];
    bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`);
    ThugBotInc.sendMessage(frommeky, { image: bufferdare, caption: '*YOU HAVE CHOSEN DARE*\n'+ xeondare }, {quoted:m});
    break;    
            case 'poll': {
                if (isBan) return reply(mess.banned);
	if (!ThugTheCreator) return reply(mess.owner)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `*Provide a question with at least two options*\n*Example : ${prefix}poll who is the best footballer?|Ronaldo,Messi,Mbappe....*`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await ThugBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break



case 'getjoinrequest': {
    if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
    

    const response = await ThugBotInc.groupRequestParticipantsList(m.chat);
    if (!response || !response.length) {
        ThugBotInc.sendMessage(m.chat, { text: 'There are currently no pending join requests. ✅' }, { quoted: m });
        return;
    }

    let replyMessage = `*Pending Join Requests:*\n`;
    response.forEach((request, index) => {
        const { jid, request_method, request_time } = request;
        const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
        replyMessage += `\n*Request #${index + 1}:*`;
        replyMessage += `\n- *User JID:* ${jid}`;
        replyMessage += `\n- *Method:* ${request_method}`;
        replyMessage += `\n- *Requested At:* ${formattedTime}\n`;
    });

    ThugBotInc.sendMessage(m.chat, { text: replyMessage }, { quoted: m });
};
break;

case 'clearall':
case 'clearchat': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner)
    ThugBotInc.chatModify({
        delete: true,
        lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
    }, m.chat)
}
break;

case 'pinchat': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner)
    if (!m.isGroup) return reply(mess.privates)
    ThugBotInc.chatModify({ pin: true }, m.chat)
}
break;

case 'unpinchat': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner)
    if (!m.isGroup) return reply(mess.privates)
    ThugBotInc.chatModify({ pin: false }, m.chat)
}
break;

case 'setdesc':
case 'setdescription': {
    if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
    
    if (!text) return reply('*Please provide a new group description.*')
    await ThugBotInc.groupUpdateDescription(m.chat, text)
    reply('*Group description updated successfully.*')
}
break;

case 'setppgroup':
case 'setppgrup':
case 'setppgc':
case 'setgrouppp':
case 'setgruppp':
case 'setgcpp': {
    if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
    
    if (!quoted) return reply(`*Please reply to an image with the caption ${prefix + command}*`)
    if (!/image/.test(mime)) return reply(`*That doesn't seem to be an image. Please reply to an image with the caption ${prefix + command}*`)

    const media = await ThugBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')

    if (args[0] === 'full') {
        const { img } = await generateProfilePicture(media)
        await ThugBotInc.query({
            tag: 'iq',
            attrs: {
                to: m.chat,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: {
                    type: 'image'
                },
                content: img
            }]
        })
        fs.unlinkSync(media)
        reply('*Group profile picture updated (Full Mode).*')
    } else {
        await ThugBotInc.updateProfilePicture(m.chat, { url: media })
        fs.unlinkSync(media)
        reply('*Group profile picture updated.*')
    }
}
break;

case 'revoke':
case 'resetgclink':
case 'resetlinkgc': {
    if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
    l

    await ThugBotInc.groupRevokeInvite(m.chat)
        .then(res => {
            reply('*Group invite link has been reset successfully.*')
        })
}
break;
case 'volaudio': {
    if (isBan) return reply(mess.banned);
    if (!args.join(" ")) return reply(`*Usage:* ${prefix + command} 10 (volume multiplier)`)

    const media = await ThugBotInc.downloadAndSaveMediaMessage(quoted, "volume")
    const rname = getRandom('.mp3')

    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err) => {
        fs.unlinkSync(media)
        if (err) return reply('*An error occurred while processing the audio.*')

        const processedAudio = fs.readFileSync(rname)
        ThugBotInc.sendMessage(frommeky, {
            audio: processedAudio,
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: m })

        fs.unlinkSync(rname)
    })
}
break

case 'volvideo': {
    if (isBan) return reply(mess.banned);
    if (!args.join(" ")) return reply(`*Usage:* ${prefix + command} 10 (volume multiplier)`)

    const media = await ThugBotInc.downloadAndSaveMediaMessage(quoted, "volume")
    const rname = getRandom('.mp4')

    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err) => {
        fs.unlinkSync(media)
        if (err) return reply('*An error occurred while processing the video.*')

        const processedVideo = fs.readFileSync(rname)
        ThugBotInc.sendMessage(frommeky, {
            video: processedVideo,
            mimetype: 'video/mp4'
        }, { quoted: m })

        fs.unlinkSync(rname)
    })
}
break

case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat':
case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': {
    if (isBan) return reply(mess.banned);
    try {
        let effect
        if (/bass/.test(command)) effect = '-af equalizer=f=54:width_type=o:width=2:g=20'
        if (/blown/.test(command)) effect = '-af acrusher=.1:1:64:0:log'
        if (/deep/.test(command)) effect = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrape/.test(command)) effect = '-af volume=12'
        if (/fast/.test(command)) effect = '-filter:a "atempo=1.63,asetrate=44100"'
        if (/fat/.test(command)) effect = '-filter:a "atempo=1.6,asetrate=22100"'
        if (/nightcore/.test(command)) effect = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reverse/.test(command)) effect = '-filter_complex "areverse"'
        if (/robot/.test(command)) effect = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/slow/.test(command)) effect = '-filter:a "atempo=0.7,asetrate=44100"'
        if (/smooth/.test(command)) effect = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/squirrel/.test(command)) effect = '-filter:a "atempo=0.5,asetrate=65100"'

        if (/audio/.test(mime)) {
            const media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
            const output = getRandom('.mp3')

            exec(`ffmpeg -i ${media} ${effect} ${output}`, (err) => {
                fs.unlinkSync(media)
                if (err) return reply('*Failed to apply audio effect.*')

                const result = fs.readFileSync(output)
                ThugBotInc.sendMessage(m.chat, {
                    audio: result,
                    mimetype: 'audio/mpeg'
                }, { quoted: m })

                fs.unlinkSync(output)
            })
        } else {
            reply(`*Please reply to an audio message with the caption:* ${prefix + command}`)
        }
    } catch (e) {
        reply(`*Error:* ${e.message || e}`)
    }
}
break

case 'ytmp3':
case 'ytaudio': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*🚫 Please provide a valid YouTube link!*`);

    try {
        reply(`*🎧 Downloading audio... Please wait...*`);

        const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data?.success) {
            const { title, download_url, thumbnail } = response.data.result;
            await ThugBotInc.sendMessage(m.chat, {
                audio: { url: download_url },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                ptt: false,
                caption: `🎵 *Title:* ${title}\n> *© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
                thumbnail: { url: thumbnail } // Adding the thumbnail image
            }, { quoted: m });
        } else {
            reply(`*❌ Failed to fetch the audio. Please try again later.*`);
        }
    } catch (err) {
        console.error('YTMP3 Error:', err);
        reply(`*⚠️ Error:* *${err.response?.data?.message || err.message}*`);
    }
    break;
}
case 'ytmp4': {
    if (isBan) return reply(mess.banned);
  if (!text) return reply(`*🚫 Please provide a valid YouTube link!*`);

  try {
    reply(`*📥 Downloading video... Please wait...*`);

    const apiUrl = `https://api.siputzx.my.id/api/d/ytmp4?url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);

    if (response.data?.status) {
      const { title, dl } = response.data.data;
      await ThugBotInc.sendMessage(m.chat, {
        video: { url: dl },
        mimetype: 'video/mp4',
        fileName: `${title}.mp4`,
        caption: `🎬 *Title:* ${title}\n> *© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
      }, { quoted: m });
    } else {
      reply(`*❌ Failed to fetch the video. Please try again later.*`);
    }
  } catch (err) {
    console.error('YTMP4 Error:', err);
    reply(`*⚠️ Error:* *${err.response?.data?.message || err.message}*`);
  }
  break;
}


case 'video': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Example:* ${prefix + command} migraines by boywithuke`);

    try {
        await ThugBotInc.sendMessage(m.chat, { react: { text: `🎥`, key: m.key } });
        await reply(`*📥 Searching and downloading video... Please wait...*`);

        const yts = require("yt-search");
        const search = await yts(text);
        if (!search?.all?.length) return reply(`*❌ No results found for:* ${text}`);

        const video = search.all[0];
        const response = await axios.get(`https://apis.davidcyriltech.my.id/download/ytmp4`, {
            params: { url: video.url }
        });

        if (!response.data?.success) return reply(`*❌ Error fetching video. Try again later.*`);

        const { download_url, title } = response.data.result;
        await ThugBotInc.sendMessage(m.chat, {
            video: { url: download_url },
            mimetype: 'video/mp4',
            caption: `*🎬 Video Downloaded!*\n\n` +
                     `📜 *Title:* ${video.title}\n` +
                     `👁️ *Views:* ${video.views}\n` +
                     `⏱️ *Duration:* ${video.timestamp}\n` +
                     `📅 *Uploaded:* ${video.ago}\n` +
                     `🔗 *URL:* ${video.url}\n\n` +
                     `> © 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡`
        }, { quoted: m });
    } catch (err) {
        console.error('Video Command Error:', err);
        reply(`*❌ An error occurred while processing your request. Please try again.*`);
    }
    break;
}
case 'sudo':
case 'setsudo': {
    if (isBan) return reply(mess.banned);
    const configPath = './config.js';

    if (!ThugTheCreator) return reply(mess.owner);
    if (!m.quoted && m.mentionedJid.length === 0 && !text) {
        return reply(`*Usage:* ${prefix + command} tag or reply to a user.`);
    }

    const target = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (global.ownernumber.includes(target)) {
        return reply(`*⚠️ That user is already a sudo (owner-level) user.*`);
    }

    global.ownernumber.push(target);

    // Format the config content with updated list
    const updatedContent = `global.ownernumber = ${JSON.stringify(global.ownernumber, null, 4)}\n`;

    fs.writeFileSync(configPath, updatedContent, 'utf-8');
    reply(`*✅ ${target} has been successfully added as a sudo user.*`);
}
break;

case 'delsudo': {
    if (isBan) return reply(mess.banned);
    const configPath = './config.js';

    if (!ThugTheCreator) return reply(mess.owner);
    if (!m.quoted && m.mentionedJid.length === 0 && !text) {
        return reply(`*Usage:* ${prefix + command} tag or reply to a sudo user.`);
    }

    const target = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    const index = global.ownernumber.indexOf(target);
    if (index === -1) {
        return reply(`*❌ That user is not in the sudo list.*`);
    }

    global.ownernumber.splice(index, 1);

    // Format the config content with updated list
    const updatedContent = `global.ownernumber = ${JSON.stringify(global.ownernumber, null, 4)}\n`;

    fs.writeFileSync(configPath, updatedContent, 'utf-8');
    reply(`*✅ ${target} has been removed from the sudo list.*`);
}
break;
case 'linkgrup':
case 'linkgc':
case 'gclink':
case 'grouplink':
case 'gruplink': {
    if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
    

    try {
        const inviteCode = await ThugBotInc.groupInviteCode(m.chat);
        const groupOwner = groupMetadata.owner
            ? '+' + groupMetadata.owner.split('@')[0]
            : 'Not available';

        const groupLink = `https://chat.whatsapp.com/${inviteCode}`;
        const groupName = groupMetadata.subject;
        const groupId = groupMetadata.id;
        const groupMembers = groupMetadata.participants.length;

        let message = `*📨 Group Link Info*\n\n` +
                      `*📝 Name:* ${groupName}\n` +
                      `*👤 Group Owner:* ${groupOwner}\n` +
                      `*📑 ID:* ${groupId}\n` +
                      `*🔗 Chat Link:* ${groupLink}\n` +
                      `*👥 Members:* ${groupMembers}`;

        await ThugBotInc.sendText(m.chat, message, m, { detectLink: true });

    } catch (error) {
        console.error('Error fetching group link:', error);
        reply(`*❌ Failed to fetch group link. Make sure I'm an admin and try again.*`);
    }
}
break;
case 'akira':
case 'akiyama':
case 'ana':
case 'art':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'bts':
case 'chiho':
case 'chitoge':
    
case 'cosplay':
    
case 'cosplayloli':
    
case 'cosplaysagiri':
    
case 'cyber':
    
case 'deidara':
    
case 'doraemon':
    
case 'elaina':
    
case 'emilia':
    
case 'erza':
    
case 'exo':
    
case 'gamewallpaper':
    
case 'gremory':
    
case 'hacker':
    
case 'hestia':
    
case 'hinata':
    
case 'husbu':
    
case 'inori':
    
case 'islamic':
    
case 'isuzu':
    
case 'itachi':
    
case 'itori':
    
case 'jennie':
    
case 'jiso':
    
case 'justina':
    
case 'kaga':
    
case 'kagura':
    
case 'kakasih':
    
case 'kaori':
    
case 'cartoon':
    
case 'shortquote':
    
case 'keneki':
    
case 'kotori':
    
case 'kurumi':
    
case 'lisa':
    
case 'madara':
    
case 'megumin':
    
case 'mikasa':
    
case 'mikey':
    
case 'miku':
    
case 'minato':
    
case 'mountain':
    
case 'naruto':
    
case 'neko2':
    
case 'nekonime':
    
case 'nezuko':
    
case 'onepiece':
    
case 'pentol':
    
case 'pokemon':
    
case 'programming':
    
case 'randomnime':
    
case 'randomnime2':
    
case 'rize':
  
case 'rose':
    
case 'sagiri':
    
case 'sakura':
    
case 'sasuke':
    
case 'satanic':
    
case 'shina':
    
case 'shinka':
    
case 'shinomiya':
    
case 'shizuka':
    
case 'shota':
    
case 'space':
    
case 'technology':
    
case 'tejina':
    
case 'toukachan':
    
case 'tsunade':
   
case 'yotsuba':
    
case 'yuki':
    
case 'yulibocil':
    
case 'yumeko': {
    if (isBan) return reply(mess.banned);
    let heyy;
    if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json');
    if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json');
    if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json');
    if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json');
    if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json');
    if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json');
    if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json');
    if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json');
    if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json');
    if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json');
    if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json');
    if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json');
    if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json');
    if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json');
    if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json');
    if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json');
    if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json');
    if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json');
    if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json');
    if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json');
    if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json');
    if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json');
    if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json');
    if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json');
    if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json');
    if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json');
    if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json');
    if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json');
    if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json');
    if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json');
    if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json');
    if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json');
    if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json');
    if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json');
    if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json');
    if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json');
    if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json');
    if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json');
    if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json');
    if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json');
    if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json');
    if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json');
    if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json');
    if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json');
    if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json');
    if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json');
    if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json');
    if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json');
    if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json');
    if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json');
    if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json');
    if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json');
    if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json');
    if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json');
    if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json');
    if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json');
    if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json');
    if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json');
    if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json');
    if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json');
    if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json');
    if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json');
    if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json');
    if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json');
    if (/programming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json');
    if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json');
    if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json');
    if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json');
    if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json');
    if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json');
    if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json');
    if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json');
    if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json');
    if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json');
    if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json');
    if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json');
    if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json');
    if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json');
    if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json');
    if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json');
    if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json');
    if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json');
    if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json');
    if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json');
    if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json');
    if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json');
    if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json');

    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    ThugBotInc.sendMessage(m.chat, { image: { url: yeha }, caption: 'Here You Go!' }, { quoted: m });
}
break;

case 'genshin':
   
case 'swimsuit':
    
case 'schoolswimsuit':
    
case 'white':
    
case 'barefoot':
    
case 'touhou':
    
case 'gamecg':
    
case 'hololive':
    
case 'uncensored':
    
case 'sungglasses':
    
case 'glasses':
   
case 'weapon':
    
case 'shirtlift':
   
case 'chain':
    
case 'fingering':
    
case 'flatchest':
    
case 'torncloth':
    
case 'bondage':
    
case 'demon':
    
case 'pantypull':
    
case 'headdress':
   
case 'headphone':
    
case 'anusview':
    
case 'shorts':
    
case 'stokings':
    
case 'topless':
    
case 'beach':
   
case 'bunnygirl':
    
case 'bunnyear':
    
case 'vampire':
    
case 'nobra':
    
case 'bikini':
    
case 'whitehair':
    
case 'blonde':
    
case 'pinkhair':
    
case 'bed':
    
case 'ponytail':
    
case 'nude':
    
case 'dress':
    
case 'underwear':
  
case 'foxgirl':
    
case 'uniform':
    
case 'skirt':
    
case 'breast':
    
case 'twintail':
    
case 'spreadpussy':
    
case 'seethrough':
    
case 'breasthold':
    
case 'fateseries':
   
case 'spreadlegs':
    
case 'openshirt':
    
case 'headband':
    
case 'nipples':
    
case 'erectnipples':
    
case 'greenhair':
    
case 'wolfgirl':
    
case 'catgirl': {
    if (isBan) return reply(mess.banned);
    try {
        let res = await fetch(`https://fantox-apis.vercel.app/${command}`);
        if (!res.ok) {
            console.error('API Error:', await res.text());
            return reply('*API request failed!*');
        }

        let jsonx = await res.json();
        if (!jsonx.url) return reply('*No image found!*');

        await ThugBotInc.sendMessage(m.chat, { image: { url: jsonx.url }, caption: '*Here you go! 🌚*' }, { quoted: m });

    } catch (e) {
        console.error(e);
        return reply('*An error occurred!*');
    }
}
break;
case 'everyone':
    if (isBan) return reply(mess.banned);
if (!m.isGroup) return reply(mess.group) 
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);

    ThugBotInc.sendMessage(m.chat, {
        text: "@" + m.chat,
        contextInfo: {
            mentionedJid: (await (await ThugBotInc.groupMetadata(m.chat)).participants).map(a => a.id),
            groupMentions: [
                {
                    groupJid: m.chat,
                    groupSubject: '𝐒𝐓𝐅𝐔 𝐎𝐑 𝐆𝐓𝐅𝐎'
                }
            ]
        }
    });
    break;
case 'hobbycheck': 
case 'checkhobby': {
    if (isBan) return reply(mess.banned);
    const hobby = text;
    const hob = [
        '🍳 Cooking', '👴 Helping Grandpa', '🎮 Gaming', '🎬 Watching Movies', 
        '📱Social Media', '🤝 Helping Others', '📺 Watching Anime', '💃 Dancing', 
        '📷 Taking Unclear Photos', '🏍️ Riding a Motorcycle', '🎤 Singing', '🎨 Drawing', 
        '🎭 Acting', '🎻 Playing Violin', '🏄 Surfing', '🥋 Martial Arts', '🐝 Beekeeping', 
        '🤿 Scuba Diving', '✍️ Writing Stories', '📖 Reading Books', '🚴 Cycling', 
        '🎣 Fishing', '🏕️ Camping', '✈️ Traveling', '🎸 Playing Guitar', '🧘 Doing Yoga', 
        '🗿 Meditating', '⛰️ Hiking', '🏊 Swimming', '🛹 Skateboarding', '🪴 Gardening', 
        '🎧 Listening to Music', '🗺️ Exploring New Places', '📬 Collecting Stamps', 
        '🧩 Solving Puzzles', '👨‍🍳 Baking', '🎭 Cosplaying', '🧶 Crafting', '🎩 Doing Magic Tricks', 
        '📺 Watching Documentaries', '♟️ Chess', '❤️ Volunteering', '🦜 Bird Watching', 
        '✒️ Calligraphy', '🏹 Archery', '💰 Collecting Coins', '🎯 Tattoo Designing', 
        '🪵 Woodworking', '🌌 Stargazing', '🔮 Astrology', '🤺 Fencing', '🛶 Kayaking', 
        '🕯️ Candle Making', '🍹 Mixology', '🎧 DJ-ing', '😂 Stand-up Comedy', '🕺 Breakdancing', 
        '🎬 Vlogging', '🎙️ Podcasting', '👟 Sneaker Collecting', '🔭 Astronomy', 
        '🎲 Board Games', '🧩 Speed Cubing', '🏙️ Urban Exploring', '🗿 Sculpting', 
        '🦅 Falconry', '🖋️ Tattoo Collecting', '🏂 Snowboarding', '⛸️ Ice Skating', 
        '🤟 Learning Sign Language'
    ];
    
    const by = hob[Math.floor(Math.random() * hob.length)];
    
    reply(`*Hobby: ${by}*`);
    break;
}
case 'fact':
case 'facts':
    if (isBan) return reply(mess.banned);
    
    const facts = [
        "Honey never spoils. 🍯",
        "A day on Venus is longer than a year on Venus. 🌍♀️",
        "Identical twins don’t have the same fingerprints. 👯‍♂️🖐️",
        "Earth’s rotation is changing speed. 🌍🕰️",
        "The largest piece of fossilized dinosaur poo discovered is over 30cm long and over two liters in volume. 🦖💩",
        "Animals can experience time differently from humans. 🐾⏳",
        "Water might not be wet. 💧❓",
        "A chicken once lived for 18 months without a head. 🐔⚰️",
        "All the world’s bacteria stacked on top of each other would stretch for 10 billion light-years. 🦠🌌",
        "Wearing a tie can reduce blood flow to the brain by 7.5 percent. 👔🧠",
        "Our solar system has a wall. 🪐🧱",
        "Mount Everest isn't the tallest mountain on Earth. ⛰️🌏",
        "Octopuses don’t actually have tentacles. 🐙🤔",
        "Most maps of the world are wrong. 🗺️❌",
        "NASA genuinely faked part of the Moon landing. 🌕🚀",
        "Comets smell like rotten eggs. ☄️💩",
        "Earth’s poles are moving. 🌍🧭",
        "You can actually die laughing. 😂💀",
        "Chainsaws were first invented for childbirth. 🪚👶",
        "Ants don’t have lungs. 🐜💨",
        "Wind turbines kill between 10,000 and 100,000 birds each year in the UK. 🌬️🦅",
        "Snails have teeth. 🐌🦷",
        "Your signature could reveal personality traits. 🖋️🧠",
        "Bananas are radioactive. 🍌☢️",
        "There’s no such thing as a straight line. ➖❓",
        "Deaf people are known to use sign language in their sleep. 💤🤟",
        "Finland is the happiest country on Earth. 🇫🇮😄",
        "The Moon looks upside down in the Southern Hemisphere. 🌕🔄",
        "Bacteria on your skin cause your itches. 🦠🤔",
        "Starfish don’t have bodies. 🌟❌🧍‍♂️",
        "Somebody has been constipated for 45 days. 💩⏳",
        "You travel 2.5 million km a day around the Sun without realizing. 🌞🚀",
        "Fish form orderly queues in emergencies. 🐟🚶‍♂️",
        "There are more bacterial cells in your body than human cells. 🦠🧍‍♂️",
        "The world record for donut eating is held by John Haight, who ate 29 donuts (52 ounces) in a little over six minutes. 🍩⏱️",
        "Corn Flakes were invented after Will Keith Kellogg and his brother Dr. John Harvey Kellogg set about developing a nutritious cereal for the patients of a health resort in 1890. 🌽🥣",
        "Every square inch of the human body has about 19,000,000 skin cells. 👤🦠",
        "The trunk of an elephant can hold up to two gallons of water. 🐘💧",
        // Additional facts with emojis
        "Wombat poop is cube-shaped. 🐾🔲",
        "Sharks existed before trees. 🦈🌳",
        "Cleopatra lived closer in time to the moon landing than to the building of the Great Pyramid. 🏛️🌑",
        "The Eiffel Tower can be 15 cm taller during the summer. 🗼☀️",
        "Some cats are allergic to humans. 🐱🤧",
        "A single strand of spider silk is stronger than steel. 🕷️🧵",
        "Sloths can hold their breath longer than dolphins. 🦥💨",
        "A blue whale’s tongue weighs as much as an elephant. 🐋🐘",
        "Polar bear skin is black. 🐻‍❄️⚫",
        "A cloud can weigh more than a million pounds. ☁️💨",
        "Elephants are the only animals that can’t jump. 🐘❌",
        "The longest hiccuping spree lasted 68 years. 😲🥴",
        "Venus is the hottest planet in our solar system, not Mercury. ♀️🔥",
        "Bananas are berries, but strawberries aren't. 🍌🍓",
        "Cows have best friends and get stressed when separated. 🐄❤️",
        "The shortest commercial flight in the world lasts just 57 seconds. ✈️⏱️",
        "The average person walks the equivalent of three times around the world in a lifetime. 🌍👟",
        "The first recorded use of the word 'hello' was in 1827. 👋📚",
        "There are more fake flamingos in the world than real ones. 🦩🎉",
        "In Japan, there are more pets than children. 🐾👶",
        "A day on Mercury lasts 1,440 hours, but its year is only 88 days. ☿️⏳",
        "Your body contains around 100,000 miles of blood vessels. 💉🫀",
        "There is a species of jellyfish that is biologically immortal. 🦑♾️",
        "Some turtles can breathe through their butts. 🐢🍑",
        "The longest hiccuping spree lasted 68 years. 🥴⏳",
        "The world’s largest desert isn’t the Sahara – it’s Antarctica. 🏜️❄️",
        "The human nose can distinguish at least 1 trillion different scents. 👃🌸",
        "A snail can sleep for three years. 🐌💤",
        "The first recorded use of the word 'hello' was in 1827. 👋📜",
        "The longest time between two twins being born is 87 days. 👶👶⏳",
        "A crocodile cannot stick its tongue out. 🐊👅❌",
        "The longest word in the English language is 189,819 letters long. 📝😱",
        "A 'jiffy' is an actual unit of time — it's 1/100th of a second. ⏱️⚡",
        "Butterflies taste with their feet. 🦋👣",
        "The Great Wall of China is not visible from space without aid. 🏯🌌",
        "A sneeze can travel at 100 miles per hour. 🤧💨",
        "The human body contains around 37.2 trillion cells. 🧬🧍‍♂️",
        "An octopus has three hearts. 🐙💓💓💓",
        "The world’s oldest living animal is a tortoise named Jonathan, born in 1832. 🐢🎂",
        "The shortest commercial flight lasts just 57 seconds. ✈️⏱️",
        "Humans and giraffes have the same number of neck vertebrae. 🦒🦴",
        "There's a volcano in Indonesia that is known to 'sing.' 🌋🎶",
        "There are more lifeforms living on your skin than there are people on Earth. 🧑‍🤝‍🧑🦠",
        "A starfish can regrow its arms. 🌟💪",
        "A shrimp’s heart is located in its head. 🦐💓",
        "Bananas are actually berries, but strawberries aren’t. 🍌🍓",
        "A kangaroo can’t walk backward. 🦘🚶‍♂️❌",
        "Tigers have striped skin, not just striped fur. 🐅🖤",
        "The inventor of the Pringles can is buried in one. 🍟⚰️",
        "Polar bear skin is black. 🐻‍❄️⚫",
        "You blink about 15-20 times per minute. 👀💫",
        "Bananas are radioactive. 🍌☢️",
        "The longest hiccuping spree lasted 68 years. 😲⏳",
        "A group of owls is called a parliament. 🦉🏛️",
        "You can’t hum while holding your nose. 👃🎶❌"
    ];
    reply(facts[Math.floor(Math.random() * facts.length)]);
    break;
    
case 'tts': {
    if (isBan) return reply(mess.banned);
  if (!text) return reply(`*Example :*\n> *.tts what is your name?*`)
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return ThugBotInc.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break

case 'listcurrency':
    if (isBan) return reply(mess.banned);
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            const currencies = Object.keys(response.data.rates);
            const currencyList = currencies.join(', ');
            reply(`*Available Currency Codes:*\n${currencyList}`);
        })
        .catch(() => reply('*Unable to fetch the currency list at the moment. Please try again later.*'));
    break;

case 'convert':
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply('*Usage Example: .convert 100 USD EUR*');
    }
    if (args.length < 3) {
        return reply(`*Correct Format: ${prefix}convert [amount] [from_currency] [to_currency]*\n*Example: ${prefix}convert 100 USD NGN*`);
    }

    const amount = parseFloat(args[0]);
    if (isNaN(amount)) {
        return reply('*Kindly enter a valid numerical value for the amount.*');
    }

    const fromCurrency = args[1]?.toUpperCase();
    const toCurrency = args[2]?.toUpperCase();

    if (!fromCurrency || !toCurrency) {
        return reply(`*Please provide valid 3-letter currency codes.*\n*Use ${prefix}listcurrency to view supported currencies.*`);
    }

    axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
            const rate = response.data.rates[toCurrency];
            if (!rate) {
                return reply('*The target currency code is invalid or unsupported.*');
            }
            const convertedAmount = (amount * rate).toFixed(2);
            reply(`*${amount} ${fromCurrency}* is equivalent to *${convertedAmount} ${toCurrency}*.`);
        })
        .catch(() => reply('*Unable to retrieve exchange rate data. Please try again shortly.*'));
    break;
case 'repost': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    try {
        if (!quoted) return reply('*Please reply to a media message (Image, Video, or Audio).*');

        const mime = quoted.mtype || quoted.mime || '';
        let mediaType;

        if (/video/.test(mime)) mediaType = 'video';
        else if (/image/.test(mime)) mediaType = 'image';
        else if (/audio/.test(mime)) mediaType = 'audio';
        else return reply('*Unsupported media type. Reply to a video, image, or audio.*');

        const mediaPath = await ThugBotInc.downloadAndSaveMediaMessage(quoted);
        const mediaContent = { [mediaType]: { url: mediaPath } };

        if (q) mediaContent.caption = q;

        await ThugBotInc.sendMessage('status@broadcast', mediaContent, {
            statusJidList: Object.keys(global.db.data.users)
        });

        await reply('*Media has been successfully reposted to status.*');

    } catch (err) {
        console.error(err);
        reply('*An error occurred while trying to repost the media.*');
    }

    break;
}
case 'remindme':
case 'reminder': {
    if (isBan) return reply(mess.banned);
    if (!text || !text.includes(',')) {
        return reply(`*Usage:* ${prefix}reminder [time in minutes], [reason]\n*Example:* ${prefix}reminder 5, Drink water`);
    }

    const [timePart, ...reasonParts] = text.split(',');
    const timeInMinutes = parseInt(timePart.trim());
    const reason = reasonParts.join(',').trim();

    if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
        return reply(`*Please provide a valid number for minutes.*`);
    }

    if (!reason) {
        return reply(`*Please provide a reason for the reminder.*`);
    }

    reply(`*Reminder set successfully!* I’ll remind you in *${timeInMinutes} minute(s)* for: *${reason}*`);

    setTimeout(() => {
        reply(`⏰ *Reminder:*\n${reason}`);
    }, timeInMinutes * 60 * 1000);

    break;
}

case 'wouldyourather': {
    if (isBan) return reply(mess.banned);
    let wouldYouRather = [
        "Would you rather always have to sing when you speak or dance everywhere you go? 🎤💃",
        "Would you rather have the ability to fly but only at walking speed, or be able to teleport but only to places you've been before? 🦸‍♂️✈️",
        "Would you rather never be able to use the internet again or never be able to watch TV again? 📱📺",
        "Would you rather be invisible for one day or be able to read minds for one day? 🕵️‍♂️👻",
        "Would you rather live forever or live a normal life but with extraordinary wealth? 💸🏝️",
        "Would you rather have a rewind button or a pause button on your life? ⏮️⏸️",
        "Would you rather be able to talk to animals or speak every human language? 🐶🌍",
        "Would you rather never age or never get sick? 👶💪",
        "Would you rather fight a bear or a lion with just a stick? 🦁🐻",
        "Would you rather always have free Wi-Fi wherever you go or have free coffee where/whenever you want? ☕📶",
        "Would you rather have the ability to breathe underwater or fly through the sky? 🐠✈️",
        "Would you rather fight a thousand chickens or one tiger? 🐔🐯",
        "Would you rather be a superhero or a supervillain? 🦸‍♂️🦹‍♂️",
        "Would you rather be able to see the future or change the past? 🔮⏳",
        "Would you rather have dinner with your favorite celebrity or with your best friend? 🍽️👫",
        "Would you rather be able to eat anything you want without gaining weight or never need sleep? 🍕💤",
        "Would you rather have a pet dragon or a pet unicorn? 🐉🦄",
        "Would you rather have the ability to speak to animals or be able to read minds? 🦜🤯",
        "Would you rather only be able to walk on your hands or only be able to walk backwards? 🤸‍♀️🚶‍♂️",
        "Would you rather live in a world with no technology or no books? 📚📵",
        "Would you rather always have to wear socks or always have to wear gloves? 🧦🧤",
        "Would you rather be able to control fire or water? 🔥💧",
        "Would you rather be a master of every instrument or a master of every language? 🎸🎶",
        "Would you rather have the ability to speak any language or play any instrument? 🎤🎹",
        "Would you rather be really rich but never find love, or be poor but have a soulmate? 💵❤️",
        "Would you rather have free food for life or free travel for life? 🍔✈️",
        "Would you rather be able to teleport anywhere or be able to time travel? ⏳🛸",
        "Would you rather be incredibly strong or incredibly fast? 💪🏃‍♂️",
        "Would you rather fight zombies or aliens? 🧟‍♂️👽",
        "Would you rather live in a castle or in a spaceship? 🏰🚀",
        "Would you rather have a magic carpet or a flying car? 🧞‍♂️🚗",
        "Would you rather have unlimited money or unlimited time? 💸⏰",
        "Would you rather be able to breathe underwater or fly in the sky? 🌊✈️",
        "Would you rather win the lottery or be famous? 💰🎥",
        "Would you rather travel to the past or to the future? 🕰️🔮",
        "Would you rather only eat pizza for the rest of your life or only eat burgers? 🍕🍔",
        "Would you rather have the power of invisibility or super strength? 👻💪",
        "Would you rather live in a world without music or without movies? 🎶🎬",
        "Would you rather have to dance everywhere you go or sing everywhere you go? 💃🎤",
        "Would you rather never need to sleep or never need to eat? 🛌🍴",
        "Would you rather be a famous actor or a famous musician? 🎥🎶",
        "Would you rather always know what time it is or always know where you are? ⏰🌍",
        "Would you rather be able to control time or read minds? ⏳🤯",
        "Would you rather be able to speak every language in the world or have the ability to communicate with animals? 🌍🐾",
        "Would you rather be the best at every sport or the best at every game? ⚽🎮",
        "Would you rather live in a world where everyone is always honest or everyone is always kind? 💬💖",
        "Would you rather have a lifetime supply of free shoes or free books? 👠📚",
        "Would you rather live without your phone or without your computer? 📱💻",
        "Would you rather get stuck in an elevator with your crush or with your worst enemy? 🏢😱",
        "Would you rather be a vampire or a werewolf? 🧛‍♂️🐺",
        "Would you rather be really good at cooking or really good at cleaning? 🍳🧽",
        "Would you rather explore space or the ocean? 🚀🌊",
        "Would you rather have a rewind button or a fast forward button? ⏪⏩",
        "Would you rather be able to control your dreams or remember every dream vividly? 💭🛏️",
        "Would you rather have to always tell the truth or always lie? 🤥🗣️",
        "Would you rather live in the city or in the countryside? 🏙️🌳",
        "Would you rather have an unlimited supply of coffee or chocolate? 🍫☕",
        "Would you rather always know what people are thinking or always know what people are going to do? 🧠🔮",
        "Would you rather be able to fly or be able to teleport anywhere instantly? 🦅🛸",
        "Would you rather always have your favorite music playing or always have your favorite food available? 🎶🍔",
        "Would you rather be able to communicate with aliens or time travelers? 👽⏳",
        "Would you rather never be able to tell a lie or never hear a lie? 🤥🗣️",
        "Would you rather never have to sleep or never have to eat? 🛌🍽️",
        "Would you rather fight a giant spider or a swarm of bees? 🕷️🐝",
        "Would you rather only be able to walk on your hands or only be able to walk backwards? 🤸‍♂️🚶‍♀️",
        "Would you rather never get tired or never get bored? 😴🤔",
        "Would you rather live on a tropical island or in a snowy mountain cabin? 🏖️🏔️",
        "Would you rather live without music or without books? 📚🎶",
        "Would you rather be extremely smart or extremely good-looking? 🧠💁‍♂️",
        "Would you rather have the ability to fly but only at night or have super strength but only in the daytime? 🌙☀️",
        "Would you rather get lost in a city or in the woods? 🌆🌲",
        "Would you rather be able to turn invisible or be able to talk to animals? 👻🐾",
        "Would you rather always have perfect weather or always have perfect food? 🌞🍽️",
        "Would you rather be able to remember every dream you ever had or never dream again? 🛏️💭",
        "Would you rather be able to control the weather or have the ability to time travel? ⛈️⏳",
        "Would you rather always be able to make people laugh or always make people cry? 😂😢",
        "Would you rather be stuck in a room with no windows or stuck in a room with no doors? 🚪🪟",
        "Would you rather never need to sleep or never need to eat? 🛏️🍔",
        "Would you rather never be able to lie or always tell the truth? 🤥🗣️",
        "Would you rather live in space or live underwater? 🌌🌊",
        "Would you rather have free travel around the world or free food for life? ✈️🍔"
    ];

    let kah = wouldYouRather[Math.floor(Math.random() * wouldYouRather.length)];
    await reply(kah);
}
break;
case 'riddle': {
    if (isBan) return reply(mess.banned);
    let riddles = [
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? 🌬️",
        "The more of this there is, the less you see. What is it? 👀",
        "I’m tall when I’m young, and I’m short when I’m old. What am I? 🕯️",
        "What has keys but can’t open locks? 🎹",
        "What has a heart that doesn’t beat? 💖",
        "What comes once in a minute, twice in a moment, but never in a thousand years? ⏳",
        "What has a head, a tail, but no body? 🪙",
        "What can travel around the world while staying in the corner? 🌍📮",
        "What gets wetter as it dries? 🧴",
        "I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, and I can drown. What am I? 🔥",
        "What is full of holes but still holds a lot of weight? 🧀",
        "I’m light as a feather, yet the strongest man can’t hold me for much longer. What am I? 💨",
        "What is so fragile that saying its name breaks it? 💔",
        "What has one eye but can’t see? 👁️",
        "What has a neck but no head? 👚",
        "What runs but never walks, has a bed but never sleeps? 💧",
        "What can you catch but not throw? 🤧",
        "What comes down but never goes up? 🌧️",
        "What has cities, but no houses; forests, but no trees; and rivers, but no water? 🗺️",
        "What belongs to you, but others use it more than you do? 👚",
        "What is always in front of you but can’t be seen? 👀",
        "What is at the end of a rainbow? 🌈",
        "What has legs but doesn’t walk? 🦀",
        "I have keys but open no locks. I have space but no room. You can enter, but you can’t go inside. What am I? ⌨️",
        "What has many teeth but can’t bite? 🧤",
        "What has four fingers but isn’t alive? 🖐️",
        "What is black when you buy it, red when you use it, and gray when you throw it away? 🔥",
        "What kind of room has no doors or windows? 🌑",
        "What is something you can hold in your left hand but not your right? ✋",
        "What has a face and two hands but no arms or legs? 🕰️",
        "What can’t be used until it’s broken? 🥚",
        "I’m tall when I’m young, and I’m short when I’m old. What am I? 🕯️",
        "What has a bed but never sleeps? 🛏️",
        "What is always coming but never arrives? ⏰",
        "What starts with an E, ends with an E, but only has one letter? ✉️",
        "What has a tail but no body? 🐍",
        "What has an eye but can’t see? 👁️",
        "What has a head, a tail, but no body? 🪙",
        "What goes up but never comes down? 🎈",
        "What can be cracked, made, told, and played? 🧩",
        "What has a thumb and four fingers but is not alive? 🧤",
        "What starts with P, ends with E, and has thousands of letters? 📬",
        "What has no beginning, no end, and is always in the middle? 💍",
        "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I? ✏️",
        "What can’t be seen but can make you feel cold? ❄️",
        "What can be heard but not seen? 🎧",
        "What comes up but never goes down? 🎈",
        "What runs but never gets tired? ⏳",
        "What has keys but can't open locks? 🎹",
        "What gets bigger the more you take away? 🕳️",
        "What word is spelled incorrectly in every dictionary? 📚",
        "I have hands but I can’t clap. What am I? ⏰",
        "What is always hungry but never eats? 🔥",
        "What gets sharper the more you use it? ✍️",
        "What has a ring but no finger? 📱",
        "What can you break, even if you never pick it up or touch it? 💔",
        "What comes once in a minute, twice in a moment, but never in a thousand years? ⏳",
        "What is made of water but can never get wet? 🌊",
        "What has a mouth but doesn’t speak? 🏞️",
        "What gets bigger the more you take away from it? 🕳️",
        "What has a heart that doesn’t beat? 💖",
        "What can you hold without touching it? 💭",
        "What has many rings but no fingers? 📱",
        "What always runs but never moves? 🧭",
        "What is something you can’t see but is always in front of you? 💭",
        "What is full of holes but still holds water? 🧽",
        "What has hands but can’t clap? ⏰",
        "What goes up and down but does not move? ⬆️⬇️",
        "What starts with T, ends with T, and has T in it? 🍵",
        "What flies without wings? 🕊️",
        "What comes down but never goes up? 🌧️",
        "What has keys but can’t open locks? 🎹",
        "What has a neck but no head? 🍷",
        "What has an eye but can’t see? 🧵",
        "What has legs but doesn’t walk? 🦑",
        "What has one eye but can’t see? 🧵",
        "What is always in front of you but can’t be seen? 👀",
        "What is bigger than a skyscraper but weighs nothing? 💨",
        "What has no beginning, no end, and is always in the middle? 🌀",
        "What is black and white and red all over? 📰",
        "What can travel around the world while staying in the corner? 🧳",
        "What has a face but no eyes? 🕰️",
        "What comes once in a year, twice in a month, but never in a day? 🌍",
        "What is light as a feather, yet the strongest man can’t hold it for much longer? 💨",
        "What has four legs but can’t walk? 🛋️",
        "What is harder to catch the faster you run? 🎯",
        "What gets bigger the more you take away? 🕳️",
        "What has a foot but no legs? 🦶",
        "What has a bark but no bite? 🌳",
        "What has a thumb and four fingers but is not alive? 🧤",
        "What has no body and can run? 💨",
        "What has no beginning, no end, and is always in the middle? 🧭",
        "What is a room that has no doors or windows? 🌑",
        "What has a bed but never sleeps? 🛏️"
    ];
    let riddle = riddles[Math.floor(Math.random() * riddles.length)];
    await reply(riddle);
}
break;
case 'survival': {
    if (isBan) return reply(mess.banned);
    let scenarios = [
        "You're lost in the desert with no water. What do you do? 🏜️",
        "A wild bear is staring at you in the forest. What’s your move? 🐻",
        "Your boat capsized in the middle of the ocean. How do you survive? 🌊",
        "You're trapped in a cave during a thunderstorm. What's your plan? ⛈️",
        "An earthquake just hit, and you're indoors. What’s your action? 🌍",
        "A zombie outbreak has started in your city. What's your first move? 🧟",
        "You're stranded on an island with no food. What will you do? 🏝️",
        "You wake up in a locked room with no idea how you got there. What now? 🚪",
        "A tornado is heading your way. How do you stay safe? 🌪️",
        "You're being chased by a pack of wolves in the snow. What’s your strategy? 🐺",
        "You're stuck in quicksand! What’s your survival move? 🏞️",
        "You're lost in a dense jungle at night. How do you proceed? 🌲",
        "A sudden tsunami is approaching! What do you do? 🌊",
        "Your plane is crashing. How do you brace for impact? ✈️",
        "You're inside a burning building. How do you escape? 🔥",
        "A venomous snake just bit you. What’s your next move? 🐍",
        "You're on a sinking ship in the middle of the ocean. What’s your plan? 🚢",
        "You wake up in the middle of a warzone. How do you survive? 💣",
        "You're trapped in an elevator with no signal. What’s your plan? 🏢",
        "You're stranded in the Arctic with no supplies. What do you do? ❄️",
        "A serial killer is stalking you in an abandoned house. What's your move? 🔪",
        "You see a massive asteroid approaching Earth. How do you react? ☄️",
        "A rabid dog is running toward you aggressively. What do you do? 🐶",
        "You're hiking and suddenly fall into a deep pit. How do you escape? 🕳️",
        "A giant wave is coming towards your beachside home. What now? 🌊",
        "You get lost while exploring an ancient underground ruin. How do you get out? 🏛️",
        "You're stuck in a collapsed building after an explosion. How do you stay alive? 🏚️",
        "A mysterious fog surrounds your town, and people start disappearing. What do you do? 🌫️",
        "You're trapped in an abandoned asylum, and the doors are locked. What’s your next step? 🏥",
        "A group of bandits are raiding your village. How do you react? ⚔️"
    ];

    let actions = [
        "Look for a cactus 🌵", "Conserve energy and wait 🌞", "Try to dig for water 🏖️", "Walk towards the sun 🌞",
        "Stay still and wait 🛑", "Slowly move away 🐾", "Scare it with a loud noise 🔊", "Run for safety 🚶‍♂️💨",
        "Climb a tree 🌳", "Seek higher ground 🏔️", "Swim towards land 🌊", "Find shelter in a cave 🏞️",
        "Build a fire 🔥", "Try to signal for help 🚨", "Look for an escape route 🚪", "Use your GPS if available 📱",
        "Ration your food and water 🥤", "Stay calm and conserve energy 🧘‍♂️", "Follow the river downstream 🌊",
        "Brace for impact 💺", "Drop to the ground and cover your head 🧑‍⚕️", "Try to dig yourself out 🏔️",
        "Stay low to avoid smoke inhalation 🌫️", "Find edible plants 🌿", "Trust the pilot 🛫",
        "Make a weapon for defense 🪓", "Run in a zigzag pattern 🏃‍♂️", "Find a safe hiding spot 🏕️",
        "Use a map to navigate 🗺️", "Wait for rescue ⏳", "Call for help 📞", "Play dead to avoid detection 🏴",
        "Use a mirror to signal for help 🪞", "Collect rainwater for drinking 🌧️", "Find shelter fast 🏠",
        "Use vines to climb to safety 🌿", "Look for animal tracks to find water 🐾", "Stay quiet and move stealthily 🤫",
        "Use a piece of cloth as a makeshift bandage 🩹", "Swim parallel to the shore to escape rip currents 🌊",
        "Dig a trench to protect against strong winds 🏜️", "Find and purify water before drinking 💧",
        "Use a rock to break a locked door 🔨", "Find an old map or notes for clues 📜",
        "Use tree sap as an adhesive for repairs 🌲", "Follow the stars to navigate at night ⭐",
        "Cover yourself in mud to avoid mosquito bites 🦟", "Construct a raft using fallen logs 🚣",
        "Break a piece of glass to cut through restraints 🔪", "Stay in the center of a collapsed structure for stability 🏚️",
        "Use your shoelaces to make a rope 🥾", "Find high ground to escape flooding 🌊",
        "Crawl low to avoid smoke inhalation 🔥", "Distract predators with loud noise 📣",
        "Use reflections from metal to attract attention 🪙", "Forage for berries but avoid bright-colored ones 🍇",
        "Set traps to catch small animals for food 🪤", "Use your shirt as a makeshift air filter 🧣",
        "Use the sun's position to determine direction ☀️", "Tear fabric to make bandages 🩹",
        "Find a floating object to cling onto in water 🛟", "Wedge an object into a door to keep it shut 🚪",
        "Use oil or grease to slip out of tight spaces 🛢️", "Break open an emergency exit with force 🚨",
        "Try to pick the lock using a hairpin or wire 🔑", "Use Morse code to tap for help 🎙️",
        "Turn off all lights to remain unnoticed in a house 🌑", "Find a weapon and prepare to defend yourself ⚔️",
        "Gather a group for strength in numbers 👫", "Bury yourself in leaves for warmth 🍂",
        "Tie tree branches together to form a makeshift raft 🌿", "Keep moving to prevent hypothermia ❄️",
        "Use animal dung to track herds for water sources 🐾", "Create a smoke signal with a controlled fire 🔥",
        "Construct a spear for defense and hunting 🏹", "Use duct tape to secure wounds and tools 🩹",
        "Search the wreckage for useful supplies 🔍", "Avoid panic and focus on breathing techniques 🧘"
    ];

    let randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    let randomAction = actions[Math.floor(Math.random() * actions.length)];

    return reply(`🦁 *Survival Challenge:* ${randomScenario}\n💡 *Your Survival Action:* ${randomAction}`);
}
break;
case 'tinyurl': {
    if (isBan) return reply(mess.banned);
    if (!q) return reply('*Please provide a URL to shorten.*');

    const request = require('request');
    request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
        try {
            reply(`*Shortened URL:* ${body}`);
        } catch (e) {
            reply('*An error occurred while shortening the URL.*');
        }
    });
    break;
}
case 'statusvid':
case 'upswvideo': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!quoted || !/video/.test(mime)) return reply(`*Reply to a video to upload it to your status.*\n*Example:* ${prefix + command}`);

    const videosw = await ThugBotInc.downloadAndSaveMediaMessage(quoted);

    await ThugBotInc.sendMessage('status@broadcast', {
        video: { url: videosw },
        caption: q || ''
    }, {
        statusJidList: Object.keys(global.db.data.users)
    });

    await reply(`*Video status uploaded successfully.*\n> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚃𝙷𝚄𝙶 𝚃𝙴𝙲𝙷𝙸𝙴𝚂™`);
    break;
}
case 'statusimg':
case 'upswimg': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!quoted || !/image/.test(mime)) return reply(`*Reply to an image to upload it to your status.*\n*Example:* ${prefix + command}`);

    const imagesw = await ThugBotInc.downloadAndSaveMediaMessage(quoted);

    await ThugBotInc.sendMessage('status@broadcast', {
        image: { url: imagesw },
        caption: q || ''
    }, {
        statusJidList: Object.keys(global.db.data.users)
    });

    await reply(`*Image status uploaded successfully.*\n> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚃𝙷𝚄𝙶 𝚃𝙴𝙲𝙷𝙸𝙴𝚂™`);
    break;
}
case 'statusaudio':
case 'upswaudio': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!quoted || !/audio/.test(mime)) return reply(`*Reply to an audio message to upload it to your status.*\n*Example:* ${prefix + command}`);

    const audiosw = await ThugBotInc.downloadAndSaveMediaMessage(quoted);

    await ThugBotInc.sendMessage('status@broadcast', {
        audio: { url: audiosw },
        mimetype: 'audio/mp4',
        ptt: true
    }, {
        backgroundColor: '#9e9e9e',
        statusJidList: Object.keys(global.db.data.users)
    });

    await reply(`*Audio status uploaded successfully.*\n> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚃𝙷𝚄𝙶 𝚃𝙴𝙲𝙷𝙸𝙴𝚂™`);
    break;
}
case 'statustext':
case 'upswteks': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!q) return reply(`*Please provide a text to post.*\n*Example:* ${prefix + command} Hey everyone`);

    await ThugBotInc.sendMessage('status@broadcast', {
        text: q
    }, {
        backgroundColor: '#9e9e9e',
        font: 3,
        statusJidList: Object.keys(global.db.data.users)
    });

    reply(`*Status updated successfully with text:*\n> ${q}`);
    break;
}

case 'chat': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!q) {
        return reply(
            `*Specify an action to perform on the chat:*\n` +
            `1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. clear`
        );
    }

    const option = args[0].toLowerCase();

    try {
        switch (option) {
            case 'mute':
                if (isBan) return reply(mess.banned);
                await ThugBotInc.chatModify({ mute: 'Infinity' }, m.chat, []);
                reply('*Chat muted indefinitely.*');
                break;

            case 'unmute':
                if (isBan) return reply(mess.banned);
                await ThugBotInc.chatModify({ mute: null }, m.chat, []);
                reply('*Chat unmuted.*');
                break;

            case 'archive':
                if (isBan) return reply(mess.banned);
                await ThugBotInc.chatModify({ archive: true }, m.chat, []);
                reply('*Chat archived.*');
                break;

            case 'unarchive':
                if (isBan) return reply(mess.banned);
                await ThugBotInc.chatModify({ archive: false }, m.chat, []);
                reply('*Chat unarchived.*');
                break;

            case 'read':
                if (isBan) return reply(mess.banned);
                await ThugBotInc.chatModify({ markRead: true }, m.chat, []);
                reply('*Marked chat as read.*');
                break;

            case 'unread':
                if (isBan) return reply(mess.banned);
                await ThugBotInc.chatModify({ markRead: false }, m.chat, []);
                reply('*Marked chat as unread.*');
                break;

            case 'clear':
                if (isBan) return reply(mess.banned);
                if (!m.quoted) return reply('*Reply to a message you want to delete.*');
                await ThugBotInc.chatModify({
                    clear: {
                        message: {
                            id: m.quoted.id,
                            fromMe: true
                        }
                    }
                }, m.chat, []);
                reply('*Message deleted.*');
                break;

            default:
                reply(`*Invalid option.*\nType:\n${prefix}chat mute|unmute|archive|unarchive|read|unread|delete`);
        }
    } catch (err) {
        reply(`*Failed to perform action.*\n${err.message}`);
    }

    break;
}
case 'leave':
case 'exit': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    try {
        await ThugBotInc.groupLeave(m.chat);
        await reply('*Successfully exited the group.*');
    } catch (error) {
        reply('*Failed to leave the group. Please try again later.*');
    }
    break;
}
case 'when': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Ask a question!*\n*Example: ${prefix + command} will I get married?*`);

    let kapan = [
        "⏳ In 1 day... but don't get too excited.", "📅 2 days, if you survive till then.", "⏳ 3 days, unless you mess it up.", 
        "📆 4 days... or maybe never. Who knows?", "⏳ 5 days, but only if you behave.", "📆 6 days. Stay hopeful, clown 🤡.", 
        "⏳ 7 days. Just like that horror movie. Beware!", "📆 8 days. Time is ticking... faster than your brain.", 
        "⏳ 9 days. Maybe try being patient for once?", "📆 10 days. But with your luck, probably longer.", 
        "⏳ 15 days. If you stop being annoying.", "📆 20 days. That’s a long wait, huh?", 
        "⏳ 30 days. Or just keep dreaming about it.", "📆 50 days. Maybe go touch some grass 🌿?", 
        "⏳ 100 days. If you don’t mess things up before then.", "📅 5 months. By then, I hope you’ve improved.", 
        "📆 1 year. Patience is a virtue… one that you clearly lack.", "🗓️ 2 years. If you live that long.", 
        "⏳ 5 years. Good luck staying relevant until then.", "📆 10 years. Yeah, keep dreaming buddy.", 
        "🚀 Tomorrow! But that’s highly unlikely for you.", "✨ The day after tomorrow… or never. Surprise!", 
        "📅 This week! But only if you stop being a clown 🤡.", "📆 This month! Time to stop being lazy.", 
        "🔮 Soon… maybe. Maybe not. Figure it out.", "💭 In your dreams… literally.", "😂 Never. Accept your fate.", 
        "🤷 Someday… but I wouldn’t bet on it.", "😆 When pigs fly!", "🔥 Right now! Oh wait… false alarm.", 
        "🦄 When unicorns exist!", "🕵️‍♂️ When you find your brain.", "⏳ Soon, but don’t get your hopes up.", 
        "🎭 When you stop being delusional.", "🐒 When monkeys evolve faster than you.", "🤡 When you stop acting like a clown.", 
        "👻 When ghosts start giving life advice.", "🛸 When aliens invade and take you away.", "🧐 When you start using your brain.", 
        "🙄 When you finally do something productive.", "😂 When you stop asking dumb questions.", 
        "🥴 When I feel like answering properly.", "💀 When hell freezes over.", "🐸 When Kermit the Frog becomes president.", 
        "🦷 When you finally brush your teeth properly.", "🛑 Never. Give up already.", "🍕 After you buy me pizza.", 
        "🎩 When you learn some manners.", "🚪 Close the door on this question and move on.", "🤬 You really want me to answer that?"
    ];
    
    let koh = kapan[Math.floor(Math.random() * kapan.length)];
    let jawab = `*${command} ${text}*\n*🕒 Answer: ${koh}*`;

    await reply(jawab);
}
break;

case 'what': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Ask a question!* Example: ${prefix + command} is your name?`);

    let lel = [
        "🤷‍♂️ Ask your GF, if you have one.", "🙃 I don't know, and neither do you.", "😆 Ask your dad, if he’s still around.", 
        "😂 Why are you even asking me this?", "🤖 I'm just an AI, but even I know that was dumb.", 
        "😎 Figure it out, genius.", "😂 Bro, even Google would laugh at that.", 
        "🤔 You sure you have a functioning brain?", "🙄 I expected a better question from a human. My bad.", 
        "💡 Go outside, touch some grass, and rethink your life choices.", "👀 I see what you're trying to do… and I don't care.", 
        "🤣 Haha, nice try, but I'm not falling for that nonsense.", "🥴 That question just gave me a headache.", 
        "🤨 Sounds like a you problem.", "🧐 What a mystery! Even Sherlock Holmes wouldn’t care.", 
        "💀 No idea, and honestly, I don't want to know.", "😅 Maybe go read a book?", "🔥 That’s classified. And you’re not cool enough to know.", 
        "🛸 Even aliens wouldn't waste their time on this.", "🚀 That’s beyond my knowledge, but so is basic math for you.", 
        "📚 Let me check… Nope, still don’t care.", "🙃 Let’s pretend I didn’t hear that question.", 
        "🦉 Ask an owl. They’re smarter than you.", "🧠 My intelligence just dropped reading that.", 
        "🔮 Maybe in another life, you’d be smarter.", "😜 Try again, but this time, think first.", 
        "🤓 I should know this… but I don’t care enough to answer.", "🥴 Brain freeze from your nonsense.", 
        "🙈 Let’s move on before I lose more IQ points.", "🎭 This must be a joke, right?", 
        "🤡 Are you a clown? Because that question was a joke.", "🧩 A puzzle… that no one wants to solve.", 
        "🔍 You’re looking for answers in the wrong place.", "😆 Not today, buddy.", 
        "🎯 Good question, but you won’t like the answer.", "😂 You wish I had time for this.", "🤐 No comment, because it’s not worth it.", 
        "🤖 Ask ChatGPT. Oh wait, that’s me. Still don’t care.", "📝 Let me write that down… just kidding.", 
        "📡 Signal lost. Probably a good thing.", "📵 I’m offline, pretend I didn’t hear that.", "🥶 Too cold to answer.", 
        "🤬 That’s a dumb question. Next!", "😈 You don’t want to hear my real answer.", "🚪 Close this chat and try again.", 
        "👻 Even ghosts wouldn’t answer that.", "🤠 I reckon that’s a waste of time.", 
        "🐒 Even a monkey would’ve asked something better.", "🌪️ My brain just crashed.", "🤡 The joke’s on you!"
    ];
    
    let kah = lel[Math.floor(Math.random() * lel.length)];
    let jawab = `*What ${text}*\n*💡 Answer: ${kah}*`;

    await reply(jawab);
}
break;
case 'can': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Ask a question!*\n*Example: ${prefix + command} I dance?*`);

    let bisa = [
        "✅ Yes, but don’t embarrass yourself.", "❌ No, and you probably shouldn't even try.",
        "🤡 Can't, but you sure can clown around.", "💀 Absolutely not, I’m begging you.",
        "🚀 Of course! But not on this planet.", "😂 Sure, if you enjoy failing.",
        "🙄 Can? Yes. Should you? Absolutely not.", "🧐 You *can*, but the world isn’t ready for that disaster.",
        "😆 You’re asking *me* for permission? Bro.", "🔥 Go for it, make a fool of yourself.",
        "🎨 You *can*, but your art is a disaster.", "⛺ You can, but please, for the sake of humanity, don’t.",
        "🛑 Should you? I highly doubt it.", "🚴‍♂️ Yes, but I can’t promise you’ll succeed.",
        "🧠 You can, but do you have the brains for it?", "🦦 Yeah, but you'll be slow and awkward.",
        "🎮 Go ahead, but expect to lose.", "👀 Yes, but only if you're prepared for failure.",
        "🐱 I guess, but it’s going to be embarrassing.", "💔 Sure, but your chances at success are slim.",
        "🦾 I don't see it happening, but good luck.", "💥 Sure, but only after a huge explosion.",
        "🏆 You *can*... just like anyone else.", "🤪 Of course! Just be prepared for disappointment.",
        "🍕 Yes, but you’ll likely regret it.", "🧚‍♂️ Sure, if a fairy waves a magic wand.", "👑 Yes, but don't expect to be crowned.",
        "🎤 You can sing... if your neighbors don't mind.", "🚁 Sure, but your chances are about as good as a helicopter.",
        "🐾 Yes, but only in a fictional world.", "🎮 Yes, but it’s game over for your dignity.",
        "🎻 Sure, but you’ll hit all the wrong notes.", "💎 Yes, but you’re not a diamond.",
        "🚨 Sure, but this could be an emergency.", "⏳ Yes, but time is running out.",
        "🌞 Sure, but only in the morning.", "🎸 Yes, but be prepared for a loud disaster.",
        "⚙️ You can, but the mechanics of this are confusing.", "🚶‍♂️ Sure, but it’ll take a lot of steps.",
        "🦷 Can you? Sure, but you'll probably trip over your feet.", "🕵️‍♂️ You can, but I’ll be watching closely.",
        "👽 You *can*... but only if you're from another planet.", "🎢 Sure, but life’s a rollercoaster.",
        "💼 Yes, but only if you act serious.", "🍿 You can, but it’s going to be a popcorn moment.",
        "🚪 Sure, but don't expect the door to stay open forever.",
        "🐶 Yes, but don't expect a dog to help you."
    ];

    let keh = bisa[Math.floor(Math.random() * bisa.length)];
    let jawab = `*Can ${text}*\n*🔮 Answer: ${keh}*`;

    await reply(jawab);
}
break;
case 'is': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Ask a question!*\n\nExample: ${prefix + command} she a virgin?`);

    let apa = [
        "✅ Yes, and that's all I’ll say.", "❌ No, and that’s all I’ll say.",
        "🤷‍♂️ Could be, could not be... just like your chances in life.", "😏 That's right, and you’ll never know why.",
        "🤡 Bro, even I don’t have time for this nonsense.", "💀 If you need to ask, you already know the answer.",
        "😂 Ask someone who actually cares.", "🚀 NASA can't even solve this mystery.",
        "🙃 I’d tell you, but then I’d have to delete myself.", "🧐 Even the FBI doesn't have an answer for that.",
        "💔 If you’re asking, it’s probably a no.", "🔍 Who knows? But it doesn't matter.",
        "🎭 Is? It’s a mystery, just like your logic.", "🍀 I’m not sure, but good luck finding out.",
        "🌪️ Spinning around, trying to figure that out.", "📞 Call someone else for this answer.",
        "💬 Ask someone who cares, maybe they'll have the answer.", "🌍 The world may never know.",
        "🚪 Exit stage left, you'll figure it out someday.", "🦅 Maybe ask a bird, they’re more informed.",
        "🛑 Stop asking, it’s already too much.", "📱 Try texting someone else.",
        "🎉 Who cares? Let’s just move on.", "⚡ Zap! That’s a dead end.",
        "🐍 Ask a snake, maybe they have the answer.", "🎸 Strum the truth, but it’s not clear.",
        "💨 It’s as elusive as the wind.", "💻 Open your mind, but it’s too confusing.",
        "🍂 Falling leaves may have the answer, but probably not.", "🔮 The future is blurry, like this question.",
        "🕵️‍♂️ Investigating? You'll never get the full picture.", "🍕 Even pizza can’t answer that.",
        "🍀 Maybe luck will reveal the truth.", "📡 Searching for an answer, but no signal found."
    ];

    let kah = apa[Math.floor(Math.random() * apa.length)];
    let jawab = `*Is ${text}*\n*🎭 Answer: ${kah}*`;

    await reply(jawab);
}
break;
case 'where': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`Ask a question\n\nExample : ${prefix + command} is your name?`);
    let wherelol = [
        `In the abyss of your confusion.🌌`,
        `In the underworld, just where your sense of humor lies.💀`,
        `In the depths of your imagination, where logic doesn’t exist.🧠`,
        `On Pluto, because even Mars wouldn’t take you.🪐`,
        `In a parallel universe, where people actually care.🌍`,
        `In a time machine, traveling to when you actually asked a good question.⌛`,
        `In a mirror, but you'd probably not recognize your own reflection.🪞`,
        `On the Titanic, going down with all your bad ideas.🚢`,
        `In the Twilight Zone, where everything you say is just as bizarre.📺`,
        `In a cave, far away from the real world.⛰️`,
        `On a deserted island, just like your chances of getting a good answer.🏝️`,
        `On a rollercoaster, because your logic is just as twisted.🎢`,
        `In the void, where everything you say gets sucked away.🕳️`,
        `In the Matrix, where things make more sense than your questions.💻`,
        `In a dystopian future, where your ideas have been outlawed.🌆`,
        `On a spaceship, floating aimlessly through space.🚀`,
        `In the Bermuda Triangle, where your questions vanish without a trace.🔺`,
        `Under a rock, because that’s where you’re hiding your good questions.🪨`,
        `In a circus tent, because you're the main act.🤡`,
        `In an alternate timeline where everything you say is still confusing.⏳`,
        `In the garbage, because that’s where your logic belongs.🗑️`,
        `On a rollercoaster of emotions, and you're stuck on the bottom.🎢`,
        `In a science fiction novel, because this feels unreal.📚`,
        `On a cloud, but not in the way you'd hope.☁️`,
        `On a deserted beach, because that’s where your sense of humor went.🏖️`,
        `In a game of hide and seek, but no one is looking.🎮`,
        `In a black hole, where even time and space are trying to escape you.🌀`,
        `In a jungle, surrounded by wild nonsense.🐒`,
        `In a maze, and you can’t find your way out.🌀`,
        `On Mars, where even the aliens are confused by you.👽`
    ];
    let kah = wherelol[Math.floor(Math.random() * wherelol.length)];
    let jawab = `*Where ${text}*\n*Answer: ${kah}*`;
    await reply(jawab);
}
break;

case 'how': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Ask a question*\n*Example : ${prefix + command} to date a girl?*`);
    let gimana = [
        `Use your brain, it’s been waiting to be used.🧠`,
        `It's as difficult as understanding you.😵`,
        `Even Google is confused by this question.🔍`,
        `Try asking someone who actually cares, I’m busy.⏳`,
        `Did you try asking your dog for advice?🐕`,
        `It's not that hard... or is it?🤔`,
        `Look it up, I’m not your personal life coach.📱`,
        `Dizzy Ah😴, I’m about to lose consciousness from this question.🌀`,
        `You know what? Just try anything... it can’t get worse.🙄`,
        `Well, try something that actually makes sense.🤯`,
        `Ask someone who hasn't just woken up from a nap.🛏️`,
        `Do something useful with that energy of yours.⚡`,
        `It’s as simple as you can make it, but that’s not saying much.😒`,
        `Just wing it... but don't be surprised if it crashes.💥`,
        `You might want to try doing the opposite of whatever you're thinking.🧠❌`,
        `Honestly, I don't even know where to start with this.🤷‍♂️`,
        `If you're asking me for advice, it’s already too late.⏰`,
        `How? Let’s start with getting a basic question right first.💡`,
        `Ummm... maybe try a little harder?💪`,
        `Not sure if I can explain it in a way that you'd understand.😬`,
        `Try using that thing you call common sense... if it exists.🧠`,
        `How? Well, you could start by not asking questions like this.🙃`,
        `Simple steps, but you're probably too busy overthinking it.🤔`,
        `Take it slow... but not too slow, we all know your pace.🐢`,
        `You can try, but we both know how this is going to turn out.💥`,
        `Are you sure you even want to know? Just live your life.😎`,
        `I think you're overcomplicating this, but hey, it’s you.🤷‍♂️`
    ];
    let kah = gimana[Math.floor(Math.random() * gimana.length)];
    let jawab = `*How ${text}*\n*Answer: ${kah}*`
    await reply(jawab);
}
break;

case 'rate': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*Example: ${prefix + command} my profile*`);
    let ra = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
    let kah = ra[Math.floor(Math.random() * ra.length)];
    let insult = kah < 50 ? 
        [
            `💀 Bro, even Wi-Fi signals have better consistency than you.`,
            `😂 This is generous, considering your personality.`,
            `🔥 That’s just because I’m feeling nice today.`,
            `🙃 That’s a 10 out of 100, not 10 out of 10.`,
            `😆 Too high? Blame my broken algorithm.`,
            `🤡 Congratulations, you've won the clown award.🎪`,
            `🧐 This was an error, I meant -10.`,
            `🚀 NASA called, they want their failure rate back.🛸`,
            `📉 Stocks in your self-esteem just crashed, mate.📉`,
            `💀 Your profile’s worth as much as my phone battery right now.📉`,
            `👻 Your personality is as flat as a ghost.👻`,
            `💥 Can you feel that? It’s the impact of that low score.🔥`,
            `🤦‍♂️ That rating just gave me a headache.🤕`,
            `🦗 Crickets are more exciting than that profile.🦗`,
            `🎭 It’s like a bad acting performance — we’re all just waiting for it to end.🎭`,
            `⏳ Time's up. That profile is stuck in the past.⏳`,
            `🕵️‍♂️ You’ve been rated, and your chances are still zero.🚫`,
            `🥴 This rating just made me lose 1% of my memory.🧠`,
            `🎯 Target missed. Better luck next time.🎯`,
            `💀 That rating just made me question reality.🌍`,
            `📉 Congratulations, your self-esteem has dropped another 10%.📉`,
            `🧨 Not even a dynamite blast can improve that profile.💥`,
            `🚀 Your profile is like a rocket launch... except it crashes before takeoff.💥`,
            `👎 You could try harder, but let’s be real, we both know how this will go.🙄`,
            `💨 Fastest way to the bottom, and you’re already there.⬇️`,
            `🚪 Exit stage left, and maybe rethink your life choices.👋`
        ][Math.floor(Math.random() * 30)] 
        : "⭐ Wow! You got lucky today, not everyone does. 😒";
    let jawab = `*Rate ${text}*\n*Answer: ${kah}%*\n*${insult}*`;
    await reply(jawab);
}
break;

case 'tovn':
case 'toptt': {
    if (isBan) return reply(mess.banned);

    if (!quoted || (!/video/.test(mime) && !/audio/.test(mime))) {
        return reply(`*Reply to a video/audio to convert to voice note (VN):* ${prefix + command}`);
    }

    let media = await quoted.download();
    let { toPTT } = require('./lib/converter');
    let audio = await toPTT(media, 'mp4');

    await ThugBotInc.sendMessage(
        m.chat,
        { audio: audio, mimetype: 'audio/mpeg', ptt: true },
        { quoted: m }
    );
    break;
}
case 'ip': {
    if (isBan) return reply(mess.banned);
    if (!q) return reply(`*⚠️ Please provide a valid IP address*\n*📌 Example: ${prefix}ip <Your IP Address>*`);

    try {
        const axios = require('axios');
        const res = await axios.get(`https://ipapi.co/${q}/json/`);
        const data = res.data;

        if (data.error) return reply('*❌ Invalid IP address provided.*');

        reply(`📍 *IP Address Information*
────────────────────
• 🌐 *IP:* ${data.ip}
• 🧷 *Network:* ${data.network}
• 🔢 *Version:* ${data.version}
• 🏙️ *City:* ${data.city}
• 🗺️ *Region:* ${data.region}
• 🌎 *Country:* ${data.country_name} (${data.country_code})
• 🌍 *Continent Code:* ${data.continent_code}
• ⏰ *Timezone:* ${data.timezone}
• 🕒 *UTC Offset:* ${data.utc_offset}
• ☎️ *Calling Code:* ${data.country_calling_code}
• 💱 *Currency:* ${data.currency_name} (${data.currency})
• 🗣️ *Languages:* ${data.languages}
• 🏢 *ISP/ORG:* ${data.org}
• #️⃣ *ASN:* ${data.asn}
• 🗺️ *Google Maps:* https://www.google.com/maps?q=${data.latitude},${data.longitude}
────────────────────`);
    } catch (err) {
        console.error(err);
        reply('*❗ Failed to fetch IP information. Please try again later.*');
    }
    break;
}

case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': case 'xxx': {
    if (isBan) return reply(mess.banned);
    try {
        if (!text) return reply(`*Example: ${prefix + command} blowjob*`);

        await ThugBotInc.sendMessage(m.chat, { react: { text: `💦`, key: m.key } });

        // Fetch video details
        const Xurl = `https://apis.davidcyriltech.my.id/search/xvideo?text=${encodeURIComponent(text)}`;
        const XurlResponse = await axios.get(Xurl);

        if (XurlResponse && XurlResponse.data && Array.isArray(XurlResponse.data.result) && XurlResponse.data.result.length > 0) {
            const { title, duration, thumbnail, url } = XurlResponse.data.result[0]; // Ensure we're using the first result

            if (!title || !duration || !thumbnail || !url) {
                return reply(`*Incomplete data received. Please try again.*`);
            }

            const xbody = `*🍆💦 𝚇𝚇𝚇 𝚅𝙸𝙳𝙴𝙾 𝚁𝙴𝚂𝚄𝙻𝚃 🍑🔞*\n` +
                          `*📜 𝚃𝙸𝚃𝙻𝙴:* ${title}\n` +
                          `*⏳ 𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽:* ${duration}\n` +
                          `*🔗 𝙻𝙸𝙽𝙺:* ${url}`;

            // Send message with thumbnail and link
            await ThugBotInc.sendMessage(m.chat, {
                image: { url: thumbnail },
                caption: xbody
            }, { quoted: m });

        } else {
            reply(`*No results found for: ${text}*`);
        }
    } catch (error) {
        console.error('Error during xvideo command:', error.message || error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
case 'getnamegc': case 'getgcname': {
    if (isBan) return reply(mess.banned);
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin) 
reply(`${groupMetadata.subject}`)
}
break

case 'getdesgc': case 'getgcdesc': {
    if (isBan) return reply(mess.banned);
if (!m.isGroup) return reply(mess.group)   
reply(`${groupMetadata.desc}`)
}
break



case 'getppgc': {
    if (isBan) return reply(mess.banned);
if (!m.isGroup) return reply(mess.group)
try {
avatar = await ThugBotInc.profilePictureUrl(m.chat, "image")
} catch {
avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ThugBotInc.sendMessage(m.chat, {image: {url: avatar }, caption: `> © 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡` }, {quoted: m })
}
break
case 'getppuser': case 'getpp': case 'getuserpp': {
    if (isBan) return reply(mess.banned);
    if (!m.quoted) return reply(`*Please reply to a user's message to fetch their profile picture.*`);

    try {
        // Determine the target user from the quoted message
        const target = m.quoted.sender;

        // Fetch the user's profile picture
        const avatar = await ThugBotInc.profilePictureUrl(target, "image");

        // Send the profile picture back
        await ThugBotInc.sendMessage(
            m.chat, 
            { 
                image: { url: avatar }, 
                caption: `*Here is the profile picture of the quoted user.*` 
            }, 
            { quoted: m }
        );
    } catch (err) {
        // Handle errors (e.g., no profile picture or failed request)
        console.error("Error fetching profile picture:", err);
        const defaultAvatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';

        // Send the default avatar back
        await ThugBotInc.sendMessage(
            m.chat, 
            { 
                image: { url: defaultAvatar }, 
                caption: `*Could not fetch the profile picture. Here is the default avatar instead.*` 
            }, 
            { quoted: m }
        );
    }
    break;
}


case 'gfx1': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    
    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx?apikey=a606486423a3f41b2b&text1=${encodeURIComponent(text)}&text2=its%20me`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx2': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    
    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx2?apikey=a606486423a3f41b2b&text1=${encodeURIComponent(text)}&text2=its%20me`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx3': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx3?apikey=a606486423a3f41b2b&text1=${encodeURIComponent(text)}&text2=its%20me`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx4': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx4?apikey=a606486423a3f41b2b&text1=${encodeURIComponent(text)}&text2=its%20me`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx5': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx5?apikey=a606486423a3f41b2b&text1=${encodeURIComponent(text)}&text2=its%20me&text3=dev`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx6': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx6?apikey=a606486423a3f41b2b&text1=${encodeURIComponent(text)}&text2=its%20me&text3=dev`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx7': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx7?apikey=a606486423a3f41b2b&text1=${encodeURIComponent(text)}&text2=its%20me`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx8': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx8?apikey=a606486423a3f41b2b&text1=${encodeURIComponent(text)}&text2=i%27m%20him`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx9': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx9?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx10': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx10?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx11': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx11?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚃𝙷𝚄𝙶  𝚃𝙴𝙲𝙷𝙸𝙴𝚂™*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
case 'gfx12': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Thugnificent*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/image-creating/gfx12?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in GFX command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}


case 'removebackground': case 'removebg': {
    if (isBan) return reply(mess.banned);
    if (!/image/.test(mime)) return reply(`*Reply to an image with ${prefix}removebg to remove background.`);

    await ThugBotInc.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } });

    try {
        let q = m.quoted || m;
        let mime = (q.msg || q)?.mimetype || q.mediaType || "";

        let result = await handleMediaUpload(q, mime);
        
        if (!result.success) return reply(`*Upload failed 😔:* ${result.error}`);

        const imageUrl = result.url; 
        const removedBgUrl = `https://apis.davidcyriltech.my.id/removebg?url=${imageUrl}`;

        await ThugBotInc.sendMessage(m.chat, {
            image: { url: removedBgUrl },
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
        }, { quoted: m });

    } catch (error) {
        console.error('Error in RemoveBG command:', error);
        reply(`* Error:* ${error.message}`);
    }
    break;
}
case 'andrew-tate': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/andrew-tate?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
   
case 'obama': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/obama?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}    

case 'babar-azam': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/babar-azam?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'bill-gates': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/bill-gates?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'chadwick-boseman': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/chadwick-boseman?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'chris-hemsworth': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/chris-hemsworth?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'cristiano-ronaldo': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/cristiano-ronaldo?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'elon-musk': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/elon-musk?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'jack-ma': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

   

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/jack-ma?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'jeff-bezos': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/jeff-bezos?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'joe-biden': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/joe-biden?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'justin-bieber': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/justin-bieber?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'khaby-lame': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/khaby-lame?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'mark-zuckerberg': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/mark-zuckerberg?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'mia-khalifa': {
    if (isBan) return reply(mess.banned);
if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/mia-khalifa?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'the-rock': {
if (!isPremium) return replyprem(mess.premium)
    if (isBan) return reply(mess.banned);

    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/the-rock?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'rihana': {
    if (isBan) return reply(mess.banned);
    if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/rihana?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'taylor-swift': {
    if (isBan) return reply(mess.banned);
if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/taylor-swift?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'tom-cruise': {
    if (isBan) return reply(mess.banned);
if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/tom-cruise?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   

case 'tom-holland': {
    if (isBan) return reply(mess.banned);
if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/tom-holland?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'virat-kohli': {
    if (isBan) return reply(mess.banned);
if (!isPremium) return reply(mess.premium);
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/virat-kohli?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'zendaya': {
    if (isBan) return reply(mess.banned);
if (!isPremium) return replyprem(mess.premium)
    if (!text) {
        return reply(`*Usage:*\n*${prefix+command} Hello*`);
    }

    

    try {
        const apiUrl = `https://api.nexoracle.com/xtweets/zendaya?apikey=a606486423a3f41b2b&text=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in X tweets command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}   
case 'toimg2':
    if (isBan) return reply(mess.banned);

    if (!text) {
        return reply(`*Provide an image URL you want to convert to an image*`);
    }

    try {
         // Assuming this is a function that sends a loading message

        // Fetch image from the provided URL
        const response = await fetch(text);
        if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in toimg2 command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
case 'tutor':
    
case 'tutors':
    
case 'tutorials':
    
case 'tutorial': {
    if (isBan) return reply(mess.banned);
await ThugBotInc.sendMessage(m?.chat, {react: {text: `📚`,key: m?.key,}}) 
 reply(`*Hey ${pushname}, all tutorials are here*\nhttps://www.youtube.com/@Thugnf1cent \n*Please don't forget to subscribe. ❤️‍🩹*`)
}
break 

case 'autoswview':
    
case 'autostatusview': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner)
    if (args.length < 1) return reply('*Please specify either on or off*')
    
    if (args[0] === 'on') {
        antiswview = true
        reply(`*${command} has been successfully enabled*.`)
    } else if (args[0] === 'off') {
        antiswview = false
        reply(`*${command} has been successfully disabled*.`)
    }
}
break

case 'jid':
case 'getjid': {
    if (isBan) return reply(mess.banned);
    try {
        const jid = m.chat;

        await reply(`Here's your JID for the current chat:\n${jid}`);
    } catch (err) {
        console.error(err);
        await reply("Failed to fetch the JID.");
    }
    break;
}

case 'getbio': {
    if (isBan) return reply(mess.banned); // Check if the user is banned and reply with a banned message
    
    try {
        // Retrieve the JID of the chat (this could be the sender or any chat you're interacting with)
        const jid = m.chat;

        // Fetch the status (bio) of the JID using Baileys
        const status = await ThugBotInc.fetchStatus(jid);

        // Check if a status was returned
        if (status && status.status) {
            await reply(`Here's the bio (status) for the current chat:\n${status.status}`);
        } else {
            await reply("No bio (status) set for this chat.");
        }
    } catch (err) {
        console.error(err);
        await reply("Failed to fetch the bio (status).");
    }
    break;
}
case 'complaint': case 'complains': case 'complain': case 'suggestion': case 'suggestions':
    if (isBan) return reply(mess.banned);
return reply('*For suggestions/complains kindly drop em here 👇*\nhttps://ngl.link/just_thug')
break




case 'script':

case 'sc':
    
case 'file':
    if (isBan) return reply(mess.banned);

    try {
        // Hardcoded GitHub repo URL
        const fixedUrl = 'https://github.com/OTAKUSYNTAX/OREKI_V3';
        const regex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/\s]+)/i;
        const match = fixedUrl.match(regex);

        if (!match) return reply(`*Hardcoded GitHub repository link is invalid!*`);

        let [, user, repo] = match;
        repo = repo.replace(/\.git$/, '');

        const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        const headResponse = await fetch(url, { method: 'HEAD' });

        if (!headResponse.ok) return reply(`*Failed to fetch from GitHub (Status ${headResponse.status})*`);

        const contentDisposition = headResponse.headers.get('content-disposition');
        const filenameMatch = contentDisposition?.match(/attachment; filename="?(.+?)"?/);
        const filename = filenameMatch ? filenameMatch[1] : `${repo}-main`;

        await ThugBotInc.sendMessage(m.chat, {
            document: { url },
            fileName: 'ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘.zip',
            mimetype: 'application/zip'
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply('*Failed to clone from GitHub, try again later*');
    }
    break;

case 'welcome':
    
            case 'goodbye': {
                if (isBan) return reply(mess.banned);
              if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                  welcome = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
                  welcome = false
                  reply(`*${command} has been disabled*`)
               }
            }
            break


case 'chatgpt': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.result) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*ChatGPT:* ${data.result}`);

    } catch (err) {
        console.error('Error in ChatGPT command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}

case 'llama3': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/llama3?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.message) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*LLaMA 3:* ${data.message}`);

    } catch (err) {
        console.error('Error in LLaMA 3 command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}

case 'deepseek': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} your message*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/deepseek-v3?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*DeepSeek-V3:* ${data.response}`);

    } catch (err) {
        console.error('Error in DeepSeek command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}
case 'deepseek2': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/deepseek-r1?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*DeepSeek-R1:* ${data.response}`);

    } catch (err) {
        console.error('Error in DeepSeek2 command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}
case 'metaai': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/metaai?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*Meta AI:* ${data.response}`);

    } catch (err) {
        console.error('Error in MetaAI command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}
case 'gpt4': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/gpt4?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.message) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*GPT-4:* ${data.message}`);

    } catch (err) {
        console.error('Error in GPT-4 command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}
case 'claude': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/claudeSonnet?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*Claude Sonnet:* ${data.response}`);

    } catch (err) {
        console.error('Error in Claude command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}

case 'uncensor': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/uncensor?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*Uncensored AI:* ${data.response}`);

    } catch (err) {
        console.error('Error in Uncensor command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}

case 'pixtral': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/pixtral?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*Pixtral AI:* ${data.response}`);

    } catch (err) {
        console.error('Error in Pixtral command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}

case 'gemma': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/gemma?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*Gemma AI:* ${data.response}`);

    } catch (err) {
        console.error('Error in Gemma command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}
case 'qvq': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/qvq?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*QvQ AI:* ${data.response}`);

    } catch (err) {
        console.error('Error in QvQ command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}

case 'qwen2': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Query>*`);
    }

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/ai/qwen2Coder?text=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success || !data.response) {
            return reply(`*API ERROR:* Unable to get a valid response.`);
        }

        reply(`*Qwen2 Coder:* ${data.response}`);

    } catch (err) {
        console.error('Error in Qwen2 command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}

case "aimenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝚂𝙴𝙻𝙴𝙲𝚃 𝙰𝙽 𝙾𝙿𝚃𝙸𝙾𝙽* ❀ ──╮
│ ❀ │ 𝙲𝙷𝙰𝚃𝙶𝙿𝚃              
│ ❀ │ 𝙻𝙻𝙰𝙼𝙰3              
│ ❀ │ 𝙳𝙴𝙴𝙿𝚂𝙴𝙴𝙺             
│ ❀ │ 𝙳𝙴𝙴𝙿𝚂𝙴𝙴𝙺2            
│ ❀ │ 𝙼𝙴𝚃𝙰𝙰𝙸
│ ❀ │ 𝙶𝙴𝙼𝙸𝙽𝙸-𝙿𝚁𝙾
│ ❀ │ 𝙶𝙴𝙼𝙸𝙽𝙸-𝙱𝙴𝚃𝙰
│ ❀ │ 𝙶𝙿𝚃3        
│ ❀ │ 𝙶𝙿𝚃4                
│ ❀ │ 𝙲𝙻𝙰𝚄𝙳𝙴              
│ ❀ │ 𝚄𝙽𝙲𝙴𝙽𝚂𝙾𝚁            
│ ❀ │ 𝙿𝙸𝚇𝚃𝚁𝙰𝙻             
│ ❀ │ 𝙶𝙴𝙼𝙼𝙰               
│ ❀ │ 𝚀𝚅𝚀                 
│ ❀ │ 𝚀𝚆𝙴𝙽2               
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/wqxht5.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
    case "menulist":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝚂𝙴𝙻𝙴𝙲𝚃 𝙰𝙽 𝙾𝙿𝚃𝙸𝙾𝙽* ❀ ──╮
│ ❀ │ 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄 👨‍💼
│ ❀ │ 𝙶𝚁𝙾𝚄𝙿𝙼𝙴𝙽𝚄 👥
│ ❀ │ 𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽𝙼𝙴𝙽𝚄 ⛪
│ ❀ │ 𝚂𝙴𝙰𝚁𝙲𝙷𝙼𝙴𝙽𝚄 🔍
│ ❀ │ 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄 🙀
│ ❀ │ 𝙰𝙸𝙼𝙴𝙽𝚄 🤖
│ ❀ │ 𝚁𝙴𝙰𝙲𝚃𝙸𝙾𝙽𝙼𝙴𝙽𝚄 👀
│ ❀ │ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄 📥
│ ❀ │ 𝙵𝚄𝙽𝙼𝙴𝙽𝚄 🏀
│ ❀ │ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄 🔁
│ ❀ │ 𝙽𝚂𝙵𝚆𝙼𝙴𝙽𝚄 🔞
│ ❀ │ 𝙾𝚃𝙷𝙴𝚁𝙼𝙴𝙽𝚄 👨‍🔧
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/sywvjl.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
   case "newmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝚂𝙴𝙻𝙴𝙲𝚃 𝙰𝙽 𝙾𝙿𝚃𝙸𝙾𝙽* ❀ ──╮
│ ❀ │ 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃
│ ❀ │ 𝙱𝙰𝙽          
│ ❀ │ 𝚄𝙽𝙱𝙰𝙽       
│ ❀ │ 𝙶𝙸𝚃𝙲𝙻𝙾𝙽𝙴        
│ ❀ │ 𝚃𝙶𝚂           
│ ❀ │ 𝚃𝙾𝙿𝙳𝙵       
│ ❀ │ 𝚃𝚁𝙰𝙽𝚂𝙻𝙰𝚃𝙾𝚁          
│ ❀ │ 𝚁𝙴𝙼𝙸𝙽𝙳𝙴𝚁           
│ ❀ │ 𝚅𝚅         
│ ❀ │ 𝚃𝙴𝙼𝙿𝙼𝙰𝙸𝙻           
│ ❀ │ 𝙸𝙽𝙱𝙾𝚇  
│ ❀ │ 𝙿𝙻𝙰𝚈𝚂𝚃𝙾𝚁𝙴           
│ ❀ │ 𝙶𝚁𝙴𝙴𝚃𝙸𝙽𝙶           
│ ❀ │ 𝚁𝙸𝙳𝙳𝙻𝙴𝚂
│ ❀ │ 𝙿𝙸𝙲𝙺𝚄𝙿          
│ ❀ │ 𝙶𝙴𝚃𝙲𝚁𝙸𝙲𝙺𝙴𝚃𝚄𝙿𝙳𝙰𝚃𝙴𝚂
│ ❀ │ 𝚂𝙷𝙰𝚉𝙰𝙼
│ ❀ │ 𝙻𝚈𝚁𝙸𝙲𝚂         
│ ❀ │ 𝙸𝙼𝙶       
│ ❀ │ 𝚃𝙾𝚂𝙺𝙴𝚃𝙲𝙷
│ ❀ │ 𝙵𝙰𝙲𝙴𝙱𝙻𝚄𝚁       
│ ❀ │ 𝙰𝙻𝙻𝙸𝙽𝙾𝙽𝙴        
│ ❀ │ 𝚀𝚁𝙲𝙾𝙳𝙴𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙾𝚁 
│ ❀ │ 𝚂𝙽𝙰𝙿𝙲𝙷𝙰𝚃        
│ ❀ │ 𝙵𝙰𝙺𝙴𝙸𝙳   
│ ❀ │ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿𝚂𝚃𝙰𝙻𝙺
│ ❀ │ 𝚁𝙴𝙼𝙾𝚅𝙴𝙱𝙶         
│ ❀ │ 𝚂𝙴𝙰𝚁𝙲𝙷𝚃𝙴𝙰𝙼        
│ ❀ │ 𝚂𝙴𝙰𝚁𝙲𝙷𝙿𝙻𝙰𝚈𝙴𝚁
│ ❀ │ 𝙼𝙰𝚃𝙲𝙷         
│ ❀ │ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂𝙴𝙰𝚁𝙲𝙷         
│ ❀ │ 𝙲𝙾𝚄𝙿𝙻𝙴
│ ❀ │ 𝙽𝙿𝙼          
│ ❀ │ 𝙰𝙽𝚃𝙸𝙲𝙰𝙻𝙻
│ ❀ │ 𝚁𝙴𝙰𝙳𝚁𝙴𝙲𝙴𝙸𝙿𝚃𝚂
│ ❀ │ 𝙱𝙻𝙾𝙲𝙺𝙻𝙸𝚂𝚃         
│ ❀ │ 𝙿𝚁𝙸𝚅𝙰𝙲𝚈𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂         
│ ❀ │ 𝙶𝙴𝚃𝙹𝙸𝙳
│ ❀ │ 𝚂𝙴𝚃𝙱𝙸𝙾           
│ ❀ │ 𝚂𝙴𝚃𝙽𝙰𝙼𝙴
│ ❀ │ 𝙶𝙴𝚃𝙾𝙻𝙳𝙼𝚂𝙶𝚂         
│ ❀ │ 𝙶𝙴𝚃𝙶𝚁𝙾𝚄𝙿𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂         
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/jtc9a8.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break; 
    
case "religionmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙱𝙸𝙱𝙻𝙴
│ ❀ │ 𝚀𝚄𝚁𝙰𝙽
│ ❀ │ 𝙶𝙸𝚃𝙰
│ ❀ │ 𝙷𝙰𝙳𝙸𝚂𝚃
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/cc2in7.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
    
case "convertmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝚁𝙴𝙼𝙸𝙽𝙸
│ ❀ │ 𝚃𝙾𝚄𝚁𝙻
│ ❀ │ 𝚃𝙾𝙸𝙼𝙶
│ ❀ │ 𝚃𝙾𝙼𝙿3
│ ❀ │ 𝚃𝙾𝙼𝙿4
│ ❀ │ 𝚃𝙸𝙽𝚈𝚄𝚁𝙻
│ ❀ │ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁
│ ❀ │ 𝚁𝙴𝙼𝙾𝚅𝙴𝙱𝙶
│ ❀ │ 𝚃𝙾𝚅𝙽
│ ❀ │ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/a092ts.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
case "animemenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙰𝙺𝙸𝚁𝙰
│ ❀ │ 𝙰𝙺𝙸𝚈𝙰𝙼𝙰
│ ❀ │ 𝙰𝙽𝙰
│ ❀ │ 𝙰𝚁𝚃
│ ❀ │ 𝙰𝚂𝚄𝙽𝙰
│ ❀ │ 𝙰𝚈𝚄𝚉𝙰𝚆𝙰
│ ❀ │ 𝙱𝙾𝚁𝚄𝚃𝙾
│ ❀ │ 𝙲𝙷𝙸𝙷𝙾
│ ❀ │ 𝙲𝙷𝙸𝚃𝙾𝙶𝙴
│ ❀ │ 𝙲𝙾𝚂𝙿𝙻𝙰𝚈
│ ❀ │ 𝙲𝙾𝚂𝙿𝙻𝙰𝚈𝙻𝙾𝙻𝙸
│ ❀ │ 𝙲𝙾𝚂𝙿𝙻𝙰𝚈𝚂𝙰𝙶𝙸𝚁𝙸
│ ❀ │ 𝙳𝙴𝙸𝙳𝙰𝚁𝙰
│ ❀ │ 𝙳𝙾𝚁𝙰𝙴𝙼𝙾𝙽
│ ❀ │ 𝙴𝙻𝙰𝙸𝙽𝙰
│ ❀ │ 𝙴𝙼𝙸𝙻𝙸𝙰
│ ❀ │ 𝙴𝚁𝚉𝙰
│ ❀ │ 𝙴𝚇𝙾
│ ❀ │ 𝙶𝚁𝙴𝙼𝙾𝚁𝚈
│ ❀ │ 𝙷𝙰𝙲𝙺𝙴𝚁
│ ❀ │ 𝙷𝙴𝙸𝚂𝚃𝙸𝙰
│ ❀ │ 𝙷𝙸𝙽𝙰𝚃𝙰
│ ❀ │ 𝙷𝚄𝚂𝙱𝚄
│ ❀ │ 𝙸𝙽𝙾𝚁𝙸
│ ❀ │ 𝙸𝚂𝚄𝚉𝚄
│ ❀ │ 𝙸𝚃𝙰𝙲𝙷𝚄
│ ❀ │ 𝙸𝚃𝙾𝚁𝙸
│ ❀ │ 𝙺𝙰𝙶𝙰
│ ❀ │ 𝙺𝙰𝙶𝚄𝚁𝙰
│ ❀ │ 𝙺𝙰𝙺𝙰𝚂𝙸𝙷
│ ❀ │ 𝙺𝙰𝙾𝚁𝙸
│ ❀ │ 𝙺𝚄𝚁𝚄𝙼𝙸
│ ❀ │ 𝙻𝙸𝚂𝙰
│ ❀ │ 𝙼𝙰𝙳𝙰𝚁𝙰
│ ❀ │ 𝙼𝙴𝙶𝚄𝙼𝙸𝙽
│ ❀ │ 𝙼𝙸𝙺𝙰𝚂𝙰
│ ❀ │ 𝙼𝙸𝙺𝙴𝚈
│ ❀ │ 𝙼𝙸𝙺𝚄
│ ❀ │ 𝙼𝙸𝙽𝙰𝚃𝙾
│ ❀ │ 𝙽𝙰𝚁𝚄𝚃𝙾
│ ❀ │ 𝙽𝙴𝙺𝙾2
│ ❀ │ 𝙽𝙴𝙺𝙾𝙽𝙸𝙼𝙴
│ ❀ │ 𝙽𝙴𝚉𝚄𝙺𝙾
│ ❀ │ 𝙾𝙽𝙴𝙿𝙸𝙴𝙲𝙴
│ ❀ │ 𝙿𝙾𝙺𝙴𝙼𝙾𝙽
│ ❀ │ 𝚁𝙰𝙽𝙳𝙾𝙼𝙽𝙸𝙼𝙴
│ ❀ │ 𝚁𝙰𝙽𝙳𝙾𝙼𝙽𝙸𝙼𝙴2
│ ❀ │ 𝚁𝙸𝚉𝙴
│ ❀ │ 𝚂𝙰𝙶𝙸𝚁𝙸
│ ❀ │ 𝚂𝙰𝙺𝚄𝚁𝙰
│ ❀ │ 𝚂𝙰𝚂𝚄𝙺𝙴
│ ❀ │ 𝚂𝙷𝙸𝙽𝙰
│ ❀ │ 𝚂𝙷𝙸𝙽𝙺𝙰
│ ❀ │ 𝚂𝙷𝙸𝙽𝙾𝙼𝙸𝚈𝙰
│ ❀ │ 𝚂𝙷𝙸𝚉𝚄𝙺𝙰
│ ❀ │ 𝚂𝙷𝙾𝚃𝙰
│ ❀ │ 𝚃𝙴𝙶𝙸𝙽𝙰
│ ❀ │ 𝚃𝙾𝚄𝙺𝙰𝙲𝙷𝙰𝙽
│ ❀ │ 𝚃𝚂𝚄𝙽𝙰𝙳𝙴
│ ❀ │ 𝚈𝙾𝚃𝚂𝚄𝙱𝙰
│ ❀ │ 𝚈𝚄𝙺𝙸
│ ❀ │ 𝚈𝚄𝙻𝙸𝙱𝙾𝙲𝙸𝙻
│ ❀ │ 𝚈𝙴𝙼𝚄𝙺𝙾
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/ci7q3t.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;    
    
    
    
    
    
    
case "funmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝚃𝚁𝚄𝚃𝙷
│ ❀ │ 𝙳𝙰𝚁𝙴
│ ❀ │ 𝚂𝚄𝚁𝚅𝙸𝚅𝙰𝙻
│ ❀ │ 𝚁𝙰𝚃𝙴
│ ❀ │ 𝚆𝙷𝙴𝙽
│ ❀ │ 𝚆𝙷𝙰𝚃
│ ❀ │ 𝙸𝚂
│ ❀ │ 𝙷𝙾𝚆
│ ❀ │ 𝙿𝙸𝙲𝙺𝚄𝙿
│ ❀ │ 𝙵𝙰𝙲𝚃𝚂
│ ❀ │ 𝙷𝙾𝙱𝙱𝚈𝙲𝙷𝙴𝙲𝙺
│ ❀ │ 𝚆𝙾𝚄𝙻𝙳𝚈𝙾𝚄𝚁𝙰𝚃𝙷𝙴𝚁
│ ❀ │ 𝚁𝙸𝙳𝙳𝙻𝙴
│ ❀ │ 𝙲𝙾𝚄𝙿𝙻𝙴
│ ❀ │ 𝚆𝙲𝙶
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/tv031x.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
    
case "ownermenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁
│ ❀ │ 𝙰𝚄𝚃𝙾𝚂𝚃𝙰𝚃𝚄𝚂𝚁𝙴𝙰𝙲𝚃
│ ❀ │ 𝙳𝙴𝙻𝙾𝚆𝙽𝙴𝚁
│ ❀ │ 𝙻𝙸𝚂𝚃𝙾𝚆𝙽𝙴𝚁
│ ❀ │ 𝙰𝙽𝚃𝙸𝙳𝙴𝙻𝙴𝚃𝙴
│ ❀ │ 𝙰𝙳𝙳𝙿𝚁𝙴𝙼
│ ❀ │ 𝙳𝙴𝙻𝙿𝚁𝙴𝙼
│ ❀ │ 𝙻𝙸𝚂𝚃𝙿𝚁𝙴𝙼
│ ❀ │ 𝚂𝚄𝙳𝙾
│ ❀ │ 𝙳𝙴𝙻𝚂𝚄𝙳𝙾
│ ❀ │ 𝙲𝙻𝙴𝙰𝚁𝚂𝙴𝚂𝚂𝙸𝙾𝙽 
│ ❀ │ 𝙹𝙾𝙸𝙽
│ ❀ │ 𝙰𝙳𝙳
│ ❀ │ 𝚂𝙴𝚃𝙿𝚁𝙴𝙵𝙸𝚇
│ ❀ │ 𝙼𝚈𝙸𝙿
│ ❀ │ 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳
│ ❀ │ 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳
│ ❀ │ 𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙴
│ ❀ │ 𝙲𝚁𝙴𝙰𝚃𝙴𝙶𝙲
│ ❀ │ 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃
│ ❀ │ 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃-𝙶𝙲
│ ❀ │ 𝙱𝙻𝙾𝙲𝙺
│ ❀ │ 𝚄𝙽𝙱𝙻𝙾𝙲𝙺
│ ❀ │ 𝚂𝙴𝙻𝙵
│ ❀ │ 𝙿𝚄𝙱𝙻𝙸𝙲
│ ❀ │ 𝙲𝙻𝙴𝙰𝚁𝙲𝙷𝙰𝚃
│ ❀ │ 𝙰𝚄𝚃𝙾𝙱𝙻𝙾𝙲𝙺
│ ❀ │ 𝚂𝙰𝚅𝙴
│ ❀ │ 𝚂𝙷𝚄𝚃𝙳𝙾𝚆𝙽
│ ❀ │ 𝚁𝙴𝙱𝙾𝙾𝚃
│ ❀ │ 𝙰𝚄𝚃𝙾𝚂𝚃𝙰𝚃𝚄𝚂𝚅𝙸𝙴𝚆
│ ❀ │ 𝙶𝚁𝙴𝙴𝚃𝙸𝙽𝙶 
│ ❀ │ 𝙿𝚁𝙸𝚅𝙰𝙲𝚈𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/33fjnl.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
case "channelmenu":
    if (isBan) return reply(mess.banned);
    try {
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;     
        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}

╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙲𝚁𝙴𝙰𝚃𝙴𝙲𝙷𝙰𝙽𝙽𝙴𝙻
│ ❀ │ 𝙴𝙳𝙸𝚃𝙲𝙷𝙰𝙽𝙽𝙴𝙻
│ ❀ │ 𝙴𝙳𝙸𝚃𝙲𝙷𝙰𝙽𝙽𝙴𝙻𝙽𝙰𝙼𝙴
│ ❀ │ 𝙴𝙳𝙸𝚃𝙲𝙷𝙰𝙽𝙽𝙴𝙻𝙿𝙸𝙲
│ ❀ │ 𝚁𝙴𝙼𝙾𝚅𝙴𝙲𝙷𝙰𝙽𝙽𝙴𝙻𝙿𝙸𝙲
│ ❀ │ 𝙼𝚄𝚃𝙴𝙲𝙷𝙰𝙽𝙽𝙴𝙻
│ ❀ │ 𝚄𝙽𝙼𝚄𝚃𝙴𝙲𝙷𝙰𝙽𝙽𝙴𝙻
│ ❀ │ 𝙵𝙾𝙻𝙻𝙾𝚆𝙲𝙷𝙰𝙽𝙽𝙴𝙻
│ ❀ │ 𝚄𝙽𝙵𝙾𝙻𝙻𝙾𝚆𝙲𝙷𝙰𝙽𝙽𝙴𝙻
│ ❀ │ 𝙳𝙴𝙻𝙴𝚃𝙴𝙲𝙷𝙰𝙽𝙽𝙴𝙻
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/we95so.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying channel menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display channel menu, try again later!*");
        }
    }
    break;

case 'toimage':
case 'toimg': {
    if (isBan) return reply(mess.banned);
let fs = require('fs');  // Ensure fs is required at the top
let { exec } = require('child_process');  // Ensure exec is also imported

    // Check if the message is a sticker
    if (!/webp/.test(mime)) return reply(`*Reply to a sticker with caption ${prefix + command}*`);

    // Download and save the media (sticker)
    let media = await ThugBotInc.downloadAndSaveMediaMessage(qmsg);

    // Generate a random file name for the output image
    let ran = await getRandom('.png');

    // Use ffmpeg to convert the sticker to an image
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        // Clean up the original media file
        fs.unlinkSync(media);

        if (err) {
            console.error("Error during conversion:", err);
            return reply("*An error occurred while converting the sticker to an image*");
        }

        // Read the converted image file and send it as a message
        let buffer = fs.readFileSync(ran);

        // Send the image
        ThugBotInc.sendMessage(m.chat, {
            image: buffer
        }, {
            quoted: m
        });

        // Clean up the converted image file
        fs.unlinkSync(ran);
    });
}
break;
            
case 'tomp3': {
    if (isBan) return reply(mess.banned);
               if (!/video/.test(mime) && !/audio/.test(mime)) 
    return reply(`*Please send or reply to a video/audio file that you wish to convert to MP3, along with the caption ${prefix + command}*`);
                let media = await ThugBotInc.downloadAndSaveMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                ThugBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘.mp3`
                }, {
                    quoted: m
                })

            }
            break


case 'tomp4': {
    if (isBan) return reply(mess.banned);

    let q = m.quoted || m;
    let mime = (q.msg || q)?.mimetype || q.mediaType || "";

    if (!/webp/.test(mime)) {
        return reply(`*Please reply to a WebP sticker with the caption ${prefix + command} to convert it to MP4.*`);
    }

    await ThugBotInc.sendMessage(m.chat, {
        react: { text: `⏳`, key: m.key }
    });

    try {
        let mediaPath = await ThugBotInc.downloadAndSaveMediaMessage(q);
        if (!mediaPath) return reply("*Error: Unable to process the sticker.*");

        let mediaUrl = await handleMediaUpload(m, mime);
        if (!mediaUrl || !mediaUrl.startsWith("http")) {
            return reply("*Error: Failed to upload the sticker.*");
        }

        let res = await fetch(`https://bk9.fun/converter/webpToMp4?url=${encodeURIComponent(mediaUrl)}`);
        if (!res.ok) throw new Error(await res.text());

        let result = await res.json();
        if (!result.status || !result.BK9) {
            return reply("*Failed to convert sticker.*");
        }

        await ThugBotInc.sendMessage(m.chat, {
            video: { url: result.BK9 },
            caption: `*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`,
            mimetype: 'video/mp4'
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        return reply("*An error occurred while converting sticker to MP4.*");
    }

    break;
}


case 'togif': {
    if (isBan) return reply(mess.banned);
    if (!/webp/.test(mime)) return reply(`*Please reply to a sticker* with the caption *${prefix + command}* to convert it to a GIF.`);
    
    let media = await ThugBotInc.downloadAndSaveMediaMessage(qmsg);
    let webpToMp4 = await webp2mp4File(media);
    
    await ThugBotInc.sendMessage(m.chat, {
        video: {
            url: webpToMp4.result,
            caption: '*Sticker successfully converted to GIF.*'
        },
        gifPlayback: true
    }, {
        quoted: m
    });

    await fs.unlinkSync(media);
}
break;

case "downloadmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙿𝙻𝙰𝚈
│ ❀ │ 𝚈𝚃𝙼𝙿3
│ ❀ │ 𝚈𝚃𝙼𝙿4
│ ❀ │ 𝚃𝙸𝙺𝚃𝙾𝙺/𝚃𝚃
│ ❀ │ 𝚃𝚃𝙼𝙿3
│ ❀ │ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺/𝙵𝙱
│ ❀ │ 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼/𝙸𝙶
│ ❀ │ 𝚃𝚆𝙸𝚃𝚃𝙴𝚁
│ ❀ │ 𝙰𝙿𝙺
│ ❀ │ 𝙿𝙸𝙽𝚃𝙴𝚁𝙴𝚂𝚃
│ ❀ │ 𝙿𝙸𝙽𝙳𝙻
│ ❀ │ 𝙲𝙾𝚄𝙿𝙻𝙴𝙿𝙿
│ ❀ │ 𝚅𝙸𝙳𝙴𝙾
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/1udd78.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;

case "searchmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙸𝙼𝙶𝚂𝙲𝙰𝙽
│ ❀ │ 𝚈𝚃𝚂𝙴𝙰𝚁𝙲𝙷
│ ❀ │ 𝙼𝙾𝚅𝙸𝙴
│ ❀ │ 𝚇𝚅𝙸𝙳𝙴𝙾𝚂
│ ❀ │ 𝙻𝚈𝚁𝙸𝙲𝚂
│ ❀ │ 𝙽𝙿𝙼
│ ❀ │ 𝙶𝚂𝙼𝙰𝚁𝙴𝙽𝙰
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/sfayg3.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
case 'help': {
    await ThugBotInc.sendMessage(m.chat, { react: { text: '❓', key: m.key } });

    const teks = `╔══𖣘〘 *HELP CENTER* 〙𖣘══╗
┃ Here's a breakdown of what each menu does:
╠═══════════════════════

➤ *OWNERMENU 👨‍💼*  
Access exclusive owner-only tools and configurations to manage and customize the bot.

➤ *GROUPMENU 👥*  
Manage your group like a pro—tools for admins, tagall, welcome, and moderation commands.

➤ *RELIGIONMENU ⛪*  
Provides spiritual content like Quran, Hadiths, daily prayers, and more.

➤ *SEARCHMENU 🔍*  
Search the web, media, lyrics, books, and more—get info instantly.

➤ *ANIMEMENU 🙀*  
Explore anime content including info, wallpapers, quotes, and waifu tools.

➤ *AIMENU 🤖*  
Chat with Gemma AI, get answers, generate images, talk to characters, and more.

➤ *REACTIONMENU 👀*  
React to messages with GIFs, stickers, memes, and expressive content.

➤ *DOWNLOADMENU 📥*  
Download media from platforms like YouTube, Instagram, TikTok, Spotify, etc.

➤ *FUNMENU 🏀*  
Enjoy games, jokes, pickup lines, facts, and other entertaining stuff.

➤ *CONVERTMENU 🔁*  
Convert files, text, audio, stickers, and media between various formats.

➤ *NSFWMENU 🔞*  
Adult-only content. Use responsibly. (If enabled by the owner)

➤ *OTHERMENU 👨‍🔧*  
Tools and extras that don't fit into the main categories.

╚═══════════════════════╝`;

    const imageUrl = 'https://i.imgur.com/kaiMwmo.jpeg';

    await ThugBotInc.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: '𝐇𝐄𝐋𝐏 𝐂𝐄𝐍𝐓𝐄𝐑',
                body: '༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡',
                thumbnailUrl: imageUrl,
                sourceUrl: 'https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01',
                mediaType: 1,
                renderLargerThumbnail: true
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363312761563081@newsletter',
                newsletterName: 'ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘',
                serverMessageId: 143
            }
        }
    }, { quoted: m });
    break;
}

case "othermenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙿𝙸𝙽𝙶
│ ❀ │ 𝙰𝙻𝙸𝚅𝙴
│ ❀ │ 𝚂𝙾𝚄𝙽𝙳1-161
│ ❀ │ 𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝚃𝙾𝚁
│ ❀ │ 𝚁𝙴𝙼𝙸𝙽𝙳𝙴𝚁
│ ❀ │ 𝙻𝙸𝚂𝚃𝙲𝚄𝚁𝚁𝙴𝙽𝙲𝚈
│ ❀ │ 𝚁𝙴𝙿𝙾
│ ❀ │ 𝚂𝙲𝚁𝙸𝙿𝚃
│ ❀ │ 𝙶𝙴𝚃𝙿𝙿𝚄𝚂𝙴𝚁
│ ❀ │ 𝙲𝙾𝚄𝙿𝙻𝙴𝙿𝙿
│ ❀ │ 𝚂𝙰𝚅𝙴
│ ❀ │ 𝚃𝚃𝚂
│ ❀ │ 𝚅𝚅
│ ❀ │ 𝙶-𝙳𝚁𝙸𝚅𝙴
│ ❀ │ 𝚃𝙰𝙺𝙴
│ ❀ │ 𝙳𝙴𝙻
│ ❀ │ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴
│ ❀ │ 𝙶𝙸𝚃𝙲𝙻𝙾𝙽𝙴
│ ❀ │ 𝙴𝙽𝙲𝚁𝚈𝙿𝚃
│ ❀ │ 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
│ ❀ │ 𝚂𝚄𝙶𝙶𝙴𝚂𝚃𝙸𝙾𝙽/𝙲𝙾𝙼𝙿𝙻𝙰𝙸𝙽
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/4cx4gi.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
    







case "nsfwmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙶𝙴𝙽𝚂𝙷𝙸𝙽
│ ❀ │ 𝚂𝚆𝙸𝙼𝚂𝚄𝙸𝚃
│ ❀ │ 𝚂𝙲𝙷𝙾𝙾𝙻𝚂𝚆𝙸𝙼𝚂𝚄𝙸𝚃
│ ❀ │ 𝚆𝙷𝙸𝚃𝙴
│ ❀ │ 𝙱𝙰𝚁𝙴𝙵𝙾𝙾𝚃
│ ❀ │ 𝙷𝙴𝙽𝚃𝙰𝙸𝚅𝙸𝙳
│ ❀ │ 𝚃𝙾𝚄𝙷𝙾𝚄
│ ❀ │ 𝙶𝙰𝙼𝙴𝙲𝙶
│ ❀ │ 𝙱𝙻𝙾𝚆𝙹𝙾𝙱
│ ❀ │ 𝚃𝚁𝙰𝙿
│ ❀ │ 𝚆𝙰𝙸𝙵𝚄
│ ❀ │ 𝙷𝙾𝙻𝙾𝙻𝙸𝚅𝙴
│ ❀ │ 𝚄𝙽𝙲𝙴𝙽𝚂𝙾𝚁𝙴𝙳
│ ❀ │ 𝚂𝚄𝙽𝙶𝙻𝙰𝚂𝚂𝙴𝚂𝚂
│ ❀ │ 𝙶𝙻𝙰𝚂𝚂𝙴𝚂
│ ❀ │ 𝚆𝙴𝙰𝙿𝙾𝙽
│ ❀ │ 𝚂𝙷𝙸𝚁𝚃𝙻𝙸𝙵𝚃
│ ❀ │ 𝙲𝙷𝙰𝙸𝙽
│ ❀ │ 𝙵𝙸𝙽𝙶𝙴𝚁𝙸𝙽𝙶
│ ❀ │ 𝙵𝙻𝙰𝚃𝙲𝙷𝙴𝚂𝚃
│ ❀ │ 𝚃𝙾𝚁𝙽𝙲𝙻𝙾𝚃𝙷
│ ❀ │ 𝙱𝙾𝙽𝙳𝙰𝙶𝙴
│ ❀ │ 𝙳𝙴𝙼𝙾𝙽
│ ❀ │ 𝙿𝙰𝙽𝚃𝚈𝙿𝚄𝙻𝙻
│ ❀ │ 𝙷𝙴𝙰𝙳𝙿𝚁𝙴𝚂𝚂
│ ❀ │ 𝙷𝙴𝙰𝙳𝙿𝙷𝙾𝙽𝙴
│ ❀ │ 𝙰𝙽𝚄𝚂𝚅𝙸𝙴𝚆
│ ❀ │ 𝚂𝙷𝙾𝚁𝚃𝚂
│ ❀ │ 𝚂𝚃𝙾𝙲𝙺𝙸𝙽𝙶
│ ❀ │ 𝚃𝙾𝙿𝙻𝙴𝚂𝚂
│ ❀ │ 𝙱𝙴𝙰𝙲𝙷
│ ❀ │ 𝙱𝚄𝙽𝙽𝚈𝙶𝙸𝚁𝙻
│ ❀ │ 𝙱𝚄𝙽𝙽𝚈𝙴𝙰𝚁
│ ❀ │ 𝚅𝙰𝙼𝙿𝙸𝚁𝙴
│ ❀ │ 𝙽𝙾𝙱𝚁𝙰
│ ❀ │ 𝙱𝙸𝙺𝙸𝙽𝙸
│ ❀ │ 𝚆𝙷𝙸𝚃𝙴𝙷𝙰𝙸𝚁
│ ❀ │ 𝙱𝙻𝙾𝙽𝙳𝙴
│ ❀ │ 𝙿𝙸𝙽𝙺𝙷𝙰𝙸𝚁
│ ❀ │ 𝙱𝙴𝙳
│ ❀ │ 𝙿𝙾𝙽𝚈𝚃𝙰𝙸𝙻
│ ❀ │ 𝙽𝚄𝙳𝙴
│ ❀ │ 𝙳𝚁𝙴𝚂𝚂
│ ❀ │ 𝚄𝙽𝙳𝙴𝚁𝚆𝙴𝙰𝚁
│ ❀ │ 𝙵𝙾𝚇𝙶𝙸𝚁𝙻
│ ❀ │ 𝚄𝙽𝙸𝙵𝙾𝚁𝙼
│ ❀ │ 𝚂𝙺𝙸𝚁𝚃
│ ❀ │ 𝙱𝚁𝙴𝙰𝚂𝚃
│ ❀ │ 𝚃𝚆𝙸𝙽𝚃𝙰𝙸𝙻
│ ❀ │ 𝚂𝙿𝚁𝙴𝙰𝙳𝙿𝚄𝚂𝚂𝚈
│ ❀ │ 𝚂𝙴𝙴𝚃𝙷𝚁𝙾𝚄𝙶𝙷
│ ❀ │ 𝙱𝚁𝙴𝙰𝚂𝚃𝙷𝙾𝙻𝙳
│ ❀ │ 𝙵𝙰𝚃𝙴𝚂𝙴𝚁𝙸𝙴𝚂
│ ❀ │ 𝚂𝙿𝚁𝙴𝙰𝙳𝙻𝙴𝙶𝚂
│ ❀ │ 𝙾𝙿𝙴𝙽𝚂𝙷𝙸𝚁𝚃
│ ❀ │ 𝙷𝙴𝙰𝙳𝙱𝙰𝙽𝙳
│ ❀ │ 𝙽𝙸𝙿𝙿𝙻𝙴𝚂
│ ❀ │ 𝙴𝚁𝙴𝙲𝚃𝙽𝙸𝙿𝙿𝙻𝙴𝚂
│ ❀ │ 𝙶𝚁𝙴𝙴𝙽𝙷𝙰𝙸𝚁
│ ❀ │ 𝚆𝙾𝙻𝙵𝙶𝙸𝚁𝙻
│ ❀ │ 𝙲𝙰𝚃𝙶𝙸𝚁𝙻
│ ❀ │ 𝚇𝚅𝙸𝙳𝙴𝙾𝚂
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/vksufu.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;    
case "reactionmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙲𝚁𝚈
│ ❀ │ 𝙺𝙸𝙻𝙻
│ ❀ │ 𝙷𝚄𝙶
│ ❀ │ 𝙿𝙰𝚃
│ ❀ │ 𝙻𝙸𝙲𝙺
│ ❀ │ 𝙺𝙸𝚂𝚂
│ ❀ │ 𝙱𝙸𝚃𝙴
│ ❀ │ 𝚈𝙴𝙴𝚃
│ ❀ │ 𝙱𝚄𝙻𝙻𝚈
│ ❀ │ 𝚆𝙸𝙽𝙺
│ ❀ │ 𝙱𝙾𝙽𝙺
│ ❀ │ 𝙿𝙾𝙺𝙴
│ ❀ │ 𝙽𝙾𝙼
│ ❀ │ 𝚂𝙻𝙰𝙿
│ ❀ │ 𝚂𝙼𝙸𝙻𝙴
│ ❀ │ 𝚆𝙰𝚅𝙴
│ ❀ │ 𝙰𝚆𝙾𝙾
│ ❀ │ 𝙱𝙻𝚄𝚂𝙷
│ ❀ │ 𝚂𝙼𝚄𝙶
│ ❀ │ 𝙶𝙻𝙾𝙼𝙿
│ ❀ │ 𝙷𝙰𝙿𝙿𝚈
│ ❀ │ 𝙳𝙰𝙽𝙲𝙴
│ ❀ │ 𝙲𝚁𝙸𝙽𝙶𝙴
│ ❀ │ 𝙲𝚄𝙳𝙳𝙻𝙴
│ ❀ │ 𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴
│ ❀ │ 𝚂𝙷𝙸𝙽𝙾𝙱𝚄
│ ❀ │ 𝙷𝙰𝙽𝙳𝙷𝙾𝙻𝙳
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/s63hv6.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;

case "groupmenu":
    if (isBan) return reply(mess.banned);
    try {
        const ownernya = ownernumber + '@s.whatsapp.net';
        const timestampe = speed();
        const latensie = speed() - timestampe;
        const me = m.sender;

        let greetingText = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╭── ❀ *𝕾𝖊𝖑𝖊𝖈𝖙 𝖆 𝕱𝖊𝖆𝖙𝖚𝖗𝖊 𝕭𝖊𝖑𝖔𝖜* ❀ ──╮
│ ❀ │ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 
│ ❀ │ 𝙼𝚄𝚃𝙴
│ ❀ │ 𝚄𝙽𝙼𝚄𝚃𝙴
│ ❀ │ 𝙺𝙸𝙲𝙺
│ ❀ │ 𝙷𝙸𝙳𝙴𝚃𝙰𝙶
│ ❀ │ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚃𝙰𝙶
│ ❀ │ 𝙶𝙴𝚃𝙿𝙿𝙶𝙲
│ ❀ │ 𝙶𝙴𝚃𝙶𝙲𝙳𝙴𝚂𝙲
│ ❀ │ 𝚃𝙰𝙶𝙰𝙻𝙻
│ ❀ │ 𝙴𝙿𝙷𝙴𝙼𝙰𝚁𝙰𝙻
│ ❀ │ 𝙶𝙲𝙻𝙸𝙽𝙺
│ ❀ │ 𝙿𝚁𝙾𝙼𝙾𝚃𝙴
│ ❀ │ 𝙳𝙴𝙼𝙾𝚃𝙴
│ ❀ │ 𝙺𝙸𝙲𝙺𝙰𝙻𝙻
│ ❀ │ 𝙿𝚁𝙾𝙼𝙾𝚃𝙴𝙰𝙻𝙻
│ ❀ │ 𝙳𝙴𝙼𝙾𝚃𝙴𝙰𝙻𝙻
│ ❀ │ 𝙶𝙴𝚃𝙹𝙾𝙸𝙽𝚁𝙴𝚀𝚄𝙴𝚂𝚃
│ ❀ │ 𝙶𝙴𝚃𝙶𝙲𝙽𝙰𝙼𝙴
│ ❀ │ 𝙰𝙲𝙲𝙴𝙿𝚃𝙰𝙻𝙻
│ ❀ │ 𝚁𝙴𝙹𝙴𝙲𝚃𝙰𝙻𝙻
│ ❀ │ 𝙳𝙴𝙻𝙿𝙿𝙶𝙲
│ ❀ │ 𝚂𝙴𝚃𝙿𝙿𝙶𝙲
│ ❀ │ 𝚂𝙴𝚃𝙶𝙲𝙳𝙴𝚂𝙲
│ ❀ │ 𝚂𝙴𝚃𝙶𝙲𝙽𝙰𝙼𝙴
│ ❀ │ 𝚁𝙴𝚂𝙴𝚃𝙶𝙲𝙻𝙸𝙽𝙺
│ ❀ │ 𝚂𝙴𝚃𝙳𝙴𝚂𝙲
│ ❀ │ 𝚂𝙴𝚃𝙰𝙽𝚃𝙸𝙵𝙾𝚁𝙴𝙸𝙶𝙽
│ ❀ │ 𝙿𝙾𝙻𝙻
│ ❀ │ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴
│ ❀ │ 𝙶𝙾𝙾𝙳𝙱𝚈𝙴
│ ❀ │ 𝙰𝙳𝙳
│ ❀ │ 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃
│ ❀ │ 𝙰𝙽𝚃𝙸𝙱𝙰𝙳𝚆𝙾𝚁𝙳
│ ❀ │ 𝙰𝙽𝚃𝙸𝚂𝙿𝙰𝙼
│ ❀ │ 𝚂𝚅𝙲𝙾𝙽𝚃𝙰𝙲𝚃
│ ❀ │ 𝙸𝙽𝚅𝙸𝚃𝙴
│ ❀ │ 𝙿𝚄𝚂𝙷𝙲𝙾𝙽𝚃𝙰𝙲𝚃
│ ❀ │ 𝙿𝚄𝚂𝙷𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝚅2
│ ❀ │ 𝙿𝚄𝚂𝙷𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝚅3
│ ❀ │ 𝙻𝙴𝙰𝚅𝙴
│ ❀ │ 𝙴𝙳𝙸𝚃𝙸𝙽𝙵𝙾
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

        const imageUrls = [
            "https://files.catbox.moe/riaxty.jpg"
        ];

        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await ThugBotInc.sendMessage(m.chat, {
  document: {
    url: 'https://files.catbox.moe/h3dji9.jpg'
  },
  mimetype: 'application/zip',
  fileName: ownername,
  fileLength: 99999999999,
  caption: greetingText,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: ownername,
      thumbnailUrl: randomImage,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: fstatus });

    } catch (error) {
        console.error("❌ Error displaying menu:", error);
        if (typeof reply === "function") {
            reply("❌ *Failed to display menu, try again later!*");
        }
    }
    break;
    
    


case 'pinterest': {
    if (isBan) return reply(mess.banned);
  if (!text) return reply(`*Please enter a search query.*`);
  let { pinterest } = require('./lib/scraper');
  let anutrest = await pinterest(text);
  let result = anutrest[Math.floor(Math.random() * anutrest.length)];
  ThugBotInc.sendMessage(m.chat, {
    image: { url: result },
    caption: `✿︎ Media Source: ${result}`
  }, { quoted: m });
}
break;

case 'couplepp': case 'ppcouple': {
    if (isBan) return reply(mess.banned);
  let anu = require('./database/ppcouple.json');
  let random = anu[Math.floor(Math.random() * anu.length)];
  ThugBotInc.sendMessage(frommeky, {
    image: { url: random.male },
    caption: `*👦 Male Couple Profile Picture*`
  }, { quoted: m });
  ThugBotInc.sendMessage(frommeky, {
    image: { url: random.female },
    caption: `*👧 Female Couple Profile Picture*`
  }, { quoted: m });
}
break;

case 'twitter': {
    if (isBan) return reply(mess.banned);
  await ThugBotInc.sendMessage(m?.chat, {
    react: { text: `📥`, key: m?.key }
  });

  if (!args[0]) {
    return reply(`*Please provide a valid Twitter link.*\n\n*Example:*\n${prefix + command} https://x.com/username/status/1234567890123456789`);
  }

  if (!isUrl(args[0]) || !args[0].includes('x.com')) {
    return reply(`*The provided link is not a valid Twitter URL.*`);
  }

  try {
    const response = await axios.get(`https://api.siputzx.my.id/api/d/twitter?url=${encodeURIComponent(text)}${encodeURIComponent(args[0])}`);
    
    if (!response.data || !response.data.status) {
      return reply(`*Unable to retrieve video. Please try again later.*`);
    }

    const { downloadLink, videoDescription, imgUrl } = response.data.data;

    await ThugBotInc.sendMessage(m?.chat, {
      react: { text: `✅`, key: m?.key }
    });

    await ThugBotInc.sendMessage(m.chat, {
      video: { url: downloadLink },
      mimetype: 'video/mp4',
      caption: `*✅ Download Complete!*\nEnjoy your video.`
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    reply(`*An error occurred while processing your request.*\nPlease ensure the link is valid and try again.`);
  }
}
break;
    
case 'bible': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*📖 Bible Reference Missing!*\n*Example:* ${prefix + command} John 3:16`);

    try {
        reply('*⏳ Fetching Bible verse...*');

        const response = await axios.get(`https://apis.davidcyriltech.my.id/bible?reference=${encodeURIComponent(text)}`);

        if (response.data && response.data.success) {
            const result = response.data;
            let message = `*📖 Reference:* ${result.reference}\n*🌐 Translation:* ${result.translation}\n\n${result.text.trim()}`;
            reply(message);
        } else {
            reply('*❌ Verse not found. Please check the reference and try again!*');
        }
    } catch (error) {
        console.error('Bible Command Error:', error);
        reply(`*⚠️ An error occurred:* ${error.response?.data?.message || error.message}`);
    }
}
break;
case 'quran': {
    if (isBan) return reply(mess.banned);
    if (!text) return reply(`*🕋 Surah Number Missing!*\n*Example:* ${prefix + command} 1`);

    try {
        reply('*⏳ Fetching Surah...*');

        const response = await axios.get(`https://apis.davidcyriltech.my.id/quran?surah=${encodeURIComponent(text)}`);

        if (response.data && response.data.success) {
            const surah = response.data.surah;

            let message = `*🕋 Surah ${surah.name.english}*\n` +
                          `*🔢 Number:* ${surah.number}\n` +
                          `*📖 Arabic:* ${surah.name.arabic}\n` +
                          `*🏙️ Type:* ${surah.type}\n` +
                          `*📌 Ayah Count:* ${surah.ayahCount}\n\n` +
                          `*📚 Tafsir (ID):*\n${surah.tafsir.id}`;

            await ThugBotInc.sendMessage(
                m.chat,
                {
                    audio: { url: surah.recitation },
                    mimetype: 'audio/mp4',
                    fileName: `${surah.name.english}.mp3`,
                    caption: message
                },
                { quoted: m }
            );
        } else {
            reply('*❌ Surah not found. Please check the number and try again!*');
        }
    } catch (error) {
        console.error('QURAN Command Error:', error);
        reply(`*⚠️ An error occurred:* ${error.response?.data?.message || error.message}`);
    }
}
break;
case 'gita-verse':
    
case 'gita':
    
case 'bhagavatgita': {
    if (isBan) return reply(mess.banned);
  try {
    let verseNumber = text && !isNaN(text) ? text : Math.floor(Math.random() * 700) + 1;

    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`);
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API Error: ${error.detail?.[0]?.msg || 'Unknown error'}`);
    }

    let json = await res.json();

    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*

📖 *Chapter ${json.chapter_no}: ${json.chapter_name}*
🔢 *Verse ${json.verse_no}:*
“${json.verse}”

*🔄 Translation:*
${json.translation}

*🧘‍♂️ Purport:*
${json.purport}
`;

    reply(gitaVerse.trim());

    if (json.audio_link) {
      await ThugBotInc.sendMessage(
        m.chat,
        { audio: { url: json.audio_link }, mimetype: 'audio/mp4', ptt: true },
        { quoted: m }
      );
    }

  } catch (error) {
    console.error('GITA Error:', error);
    reply(`*⚠️ Error fetching verse:* ${error.message}`);
  }
}
break;
case 'add': {
    if (isBan) return reply(mess.banned);
  if (!m.isGroup) return reply(mess.group);
  if (!ThugTheCreator) return reply(mess.owner);
  
 
  try {
    let number = text.replace(/[^0-9]/g, '');

    // Try to get the number from quoted message if available
    let userToAdd = m.quoted ? m.quoted.sender : number ? number + '@s.whatsapp.net' : null;

    if (!userToAdd) return reply(`*⚠️ Please provide a number or reply to a message!*\n\n*Example:* ${prefix + command} 234xxxxxxxxxx`);

    await ThugBotInc.groupParticipantsUpdate(m.chat, [userToAdd], 'add');
    reply('*✅ User added successfully!*');
  } catch (error) {
    console.error('ADD Command Error:', error);
    reply('*❌ Failed to add user. They may have privacy settings that prevent being added or the number may be invalid.*');
  }
}
break;
case 'addprem':
    
    if (!ThugTheCreator) return reply(mess.owner);
    if (isBan) return reply(mess.banned);
    if (args.length < 2) return reply(`Usage: ${prefix + command} @tag time\n${prefix + command} number time\nExample: ${prefix + command} @tag 30d`);
    
    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[i], args[1], premium);
        }
        reply("User(s) successfully added to the premium database.");
    } else {
        addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
        reply("User successfully added to the premium database.");
    }
    break;

case 'delprem':
    
    if (!ThugTheCreator) return reply(mess.owner);
    if (isBan) return reply(mess.banned);
    if (args.length < 1) return reply(`Usage: ${prefix + command} @tag\n${prefix + command} number\nExample: ${prefix + command} 234xxxx`);

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
        }
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
    }
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
    reply("User successfully removed from the premium database.");
    break;

case 'listprem':
    
    if (!ThugTheCreator) return reply(mess.owner);
    if (isBan) return reply(mess.banned);
    let data = require('./database/premium.json');
    let txt = "------「 👑 Premium List 👑 」------\n\n";
    
    for (let x of data) {
        txt += `Number: ${x.id}\n`;
        txt += `Expiration Date: ${x.expired}\n\n`;
    }

    ThugBotInc.sendMessage(m.chat, { text: txt, mentions: data.map(x => x.id) }, { quoted: m });
    break;

case 'addowner':
    

    if (!ThugTheCreator) return reply(mess.owner);
    if (isBan) return reply(mess.banned);
    if (!args[0]) return reply(`Usage: ${prefix + command} number\nExample: ${prefix + command} 234xxxx`);

    let bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
    let ceknye = await ThugBotInc.onWhatsApp(bnnd);
    
    if (ceknye.length === 0) return reply("This number isn't registered on WhatsApp. Please check the number again.");
    
    owner.push(bnnd);
    fs.writeFileSync('./database/owner.json', JSON.stringify(owner));
    reply(`User ${bnnd} has been added to the owner database.`);
    break;

case 'delowner':
    
    if (!ThugTheCreator) return reply(mess.owner);
    if (isBan) return reply(mess.banned);
    if (!args[0]) return reply(`Usage: ${prefix + command} number\nExample: ${prefix + command} 234xxxx`);

    let ya = q.split("|")[0].replace(/[^0-9]/g, '');
    let unp = owner.indexOf(ya);
    if (unp !== -1) owner.splice(unp, 1);

    fs.writeFileSync('./database/owner.json', JSON.stringify(owner));
    reply(`User ${ya} has been removed from the owner database.`);
    break;

case 'listowner': {
    if (isBan) return reply(mess.banned);
    let teks = '┌──⭓「 Owner List 」\n│\n';
    for (let x of owner) {
        teks += `│⭔ ${x}\n`;
    }
    teks += `│\n└────────────⭓\n\nTotal: ${owner.length}`;
    reply(teks);
    break;
}

case 'delsession':
    
case 'clearsession': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    

    fs.readdir("./session", async function(err, files) {
        if (err) {
            console.log('Unable to scan directory:', err);
            return reply('Unable to scan directory: ' + err);
        }

        let filteredArray = files.filter(item =>
            item.startsWith("pre-key") ||
            item.startsWith("sender-key") ||
            item.startsWith("session-") ||
            item.startsWith("app-state")
        );

        let teks = `Detected ${filteredArray.length} junk file(s)\n\n`;
        if (filteredArray.length === 0) return reply(teks);

        filteredArray.forEach((e, i) => {
            teks += `${i + 1}. ${e}\n`;
        });

        reply(teks);
        await sleep(2000);
        reply("Deleting junk files...");
        
        filteredArray.forEach(file => {
            fs.unlinkSync(`./session/${file}`);
        });

        await sleep(2000);
        reply("Successfully removed junk files from session folder.");
    });
    break;
}

case 'join':
    if (isBan) return reply(mess.banned);
    try {
        if (!ThugTheCreator) return reply(mess.owner);
        
        if (!text) return reply('Please provide a group link!');
        if (!isUrl(args[0]) || !args[0].includes('whatsapp.com')) return reply('Invalid link!');

        let result = args[0].split('https://chat.whatsapp.com/')[1];
        await ThugBotInc.groupAcceptInvite(result);
        reply("Successfully joined the group.");
    } catch {
        reply('Failed to join the group.');
    }
    break;

case 'getsession':
    
    if (!ThugTheCreator) return reply(mess.owner);
    if (isBan) return reply(mess.banned);
    reply('Please wait, retrieving session files...');
    let sesi = fs.readFileSync('./session/creds.json');
    ThugBotInc.sendMessage(m.chat, {
        document: sesi,
        mimetype: 'application/json',
        fileName: 'creds.json'
    }, { quoted: m });
    break;

case 'myip':
    
case 'ipbot':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    const http = require('http');
    http.get({ host: 'api.ipify.org', port: 80, path: '/' }, function(resp) {
        resp.on('data', function(ip) {
            reply("🔎 Your current IP address is: " + ip);
        });
    });
    break;
    
case 'creategc':
    
case 'creategroup': {
if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!text) return reply(`*🛠️ Usage: ${prefix + command} <Group name>*`);
    
    try {
        let cret = await ThugBotInc.groupCreate(args.join(" "), []);
        let response = await ThugBotInc.groupInviteCode(cret.id);

        const teksop = `╔═══════ ༻❁༺ ═══════╗  
          𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎  
╚═══════ ༻❁༺ ═══════╝  

╭── ❀ *Details* ❀ ──╮  
│ ✧ 📑 *𝐍𝐚𝐦𝐞 : ${cret.subject}*

│  
│ ✧ 👤 *𝐎𝐰𝐧𝐞𝐫*    : @${cret.owner.split("@")[0]}

│  
│ ✧ 🗓️ *𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐨𝐧*  : ${moment(cret.creation * 1000).tz("Africa/Lagos").format("DD/MM/YYYY HH:mm:ss")}
│  
│ 🔗 *𝐆𝐫𝐨𝐮𝐩 𝐋𝐢𝐧𝐤*:
│https://chat.whatsapp.com/${response}
╰── ༻❁༺ ༻❁༺  ──╯  
`;

        reply(teksop); // Send the message as a direct reply
    } catch (err) {
        reply(`❌ *An error occurred while creating the group.*`);
    }
}
break;

case 'promote':
if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
    

    let promoteTarget = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await ThugBotInc.groupParticipantsUpdate(m.chat, [promoteTarget], 'promote');
    reply('✅ *User promoted successfully!* 🚀');
    break;

case 'demote':
if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
    

    let demoteTarget = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await ThugBotInc.groupParticipantsUpdate(m.chat, [demoteTarget], 'demote');
    reply('⚠️ *User demoted successfully.*');
    break;
    
case 'calc':
    
case 'calculate':
    
case 'calculator': {
if (isBan) return reply(mess.banned);
    if (!text) return reply(`*🧮 Usage:* ${prefix + command} 2 + 2`);

    try {
        // Only allow safe characters
        if (!/^[0-9+\-*/(). %]+$/.test(text)) return reply("❌ *Invalid characters detected!*");

        // Evaluate the expression
        let result = eval(text);
        reply(`🧠 *Calculation:*\n\`\`\`${text} = ${result}\`\`\``);
    } catch (err) {
        reply("⚠️ *Error evaluating expression!* Make sure it's a valid math expression.");
    }
}
break;
case 'delete': 
    
case 'del': 
    
case 'd': {
if (isBan) return reply(mess.banned);
    let key = {};
    try {
        key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid;
        key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe;
        key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id;
        key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant;
    } catch (e) {
        console.error(e);
    }
    ThugBotInc.sendMessage(m.chat, { delete: key });
}
break;

case 'gdrive':
    
case 'g-drive': {
if (isBan) return reply(mess.banned);
    if (!args[0]) return reply(`*❌ Please enter a valid Google Drive link.*`);
    
    const fg = require('api-dylux');
    try {
        let res = await fg.GDriveDl(args[0]);
        await reply(`
≡ *Google Drive DL* 📥
▢ *Name:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`);
        
        ThugBotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m });
    } catch (err) {
        reply('⚠️ *Error: Please check the link or try a different one.*');
    }
}
break;

case 'enc':
    
case 'encrypt':
    
case 'obfuscate': {
if (isBan) return reply(mess.banned);
    if (!q) return reply(`*🔒 Example: ${prefix + command} <line of code>*`);
    
    try {
        let meg = await obfus(q);
        reply(`*Encrypted/Obfuscated Code:*\n\`\`\`${meg.result}\`\`\``);
    } catch (err) {
        reply('⚠️ *Error while encrypting/obfuscating the code.*');
    }
}
break;
case 'ttmp3':
    
case 'tiktokmp3':
    
case 'ttaudio':
    
case 'tiktokaudio': {
if (isBan) return reply(mess.banned);
  if (!text) return reply(`*Example: ${prefix + command} <TikTok link>*`);
  if (!text.includes('tiktok.com')) return reply('⚠️ *The URL does not contain a valid TikTok link!*');
  
  try {
    const hasil = await tiktokDl(text);
    
    await ThugBotInc.sendMessage(m.chat, {
      audio: { url: hasil.music_info.url },
      mimetype: 'audio/mpeg',
      contextInfo: {
        externalAdReply: {
          title: 'TikTok • ' + hasil.author.nickname,
          body: `${hasil.stats.likes} likes, ${hasil.stats.comment} comments. ${hasil.title}`,
          previewType: 'PHOTO',
          thumbnailUrl: hasil.cover,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: text
        }
      }
    }, { quoted: m });
  } catch (err) {
    reply('❌ *Error fetching TikTok audio. Please check the link and try again.*');
  }
}
break;

  case 'savecontact': case 'svcontact':{
      
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
if (isBan) return reply(mess.banned);
let cmiggc = await ThugBotInc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('\n*Please wait, saving*'+cmiggc.participants.length+' *contacts*')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
ThugBotInc.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\n*All contacts have been saved*\n*Group: '+cmiggc.subject+'\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break

case 'tagall': {
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
    if (!m.isGroup) return reply(mess.group)
    if (isBan) return reply(mess.banned)

    await ThugBotInc.sendMessage(m.chat, { react: { text: '👥', key: m.key } })

    let me = m.sender
    let mentionedJids = []
    let teks = `╔══𖣘〘 *𝐌𝐀𝐒𝐒 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐀𝐋𝐄𝐑𝐓* 〙𖣘══╗\n`
    teks += `┃⛩️ *Summoned By:* @${me.split('@')[0]}\n`
    teks += `┃📝 *Note:* ${args.length ? args.join(' ') : 'Hey team, please check this out!'}\n`
    teks += `┃📣 *Mentioned:* ${participants.length} members\n`
    teks += `╚═══════════════════════╝\n\n${readmore}`
    teks += `\n╭──〔 👥 *Tagged Members* 👥 〕──╮\n`

    for (let mem of participants) {
        let tag = `@${mem.id.split('@')[0]}`
        teks += `├❏ ${tag}\n`
        mentionedJids.push(mem.id)
    }

    teks += `╰────────────────────────╯`

    await ThugBotInc.sendMessage(m.chat, {
        text: teks.trim(),
        mentions: mentionedJids,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: 'Mass Mention Activated',
                body: '༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡',
                thumbnailUrl: 'https://i.imgur.com/uKyMi9A.jpeg',
                sourceUrl: 'https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01',
                mediaType: 1,
                renderLargerThumbnail: true
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363312761563081@newsletter',
                newsletterName: 'ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘',
                serverMessageId: 143
            }
        }
    }, { quoted: m })

    break
}

case 'kickall': {
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    if (!m.isGroup) return reply(mess.group);

    const groupMetadata = await ThugBotInc.groupMetadata(m.chat);
    const groupAdmins = groupMetadata.participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin');
    const botIsAdmin = groupAdmins.some(a => a.id === ThugBotInc.user.jid);
    const isGroupAdmin = groupAdmins.some(a => a.id === m.sender);
    if (isBan) return reply(mess.banned);
    
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);

    const nonAdminMembers = groupMetadata.participants.filter(p => !groupAdmins.some(a => a.id === p.id));

    if (nonAdminMembers.length === 0) {
        return reply(`*There are no members to kick.*`);
    }

    reply(`*Warning: You're about to remove all non-admin members from this group.*\n*You have 5 seconds to reconsider.*\n*Type ${prefix}reboot to cancel.*`);

    await sleep(5000); // 5-second warning delay

    for (let member of nonAdminMembers) {
        try {
            await ThugBotInc.groupParticipantsUpdate(m.chat, [member.id], 'remove');
            await sleep(1500);
        } catch (error) {
            console.error(`Failed to kick ${member.id}:`, error);
        }
    }

    reply(`*Successfully removed all non-admin members.*`);
    break;
}
case 'promoteall': {
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    try {
    if (isBan) return reply(mess.banned);
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
        

        const groupMetadata = await ThugBotInc.groupMetadata(m.chat);
        const participants = groupMetadata.participants;
        const participantsToPromote = participants.filter(p => !p.admin);

        if (participantsToPromote.length === 0) return reply(`*No participants found to promote.*`);

        for (let p of participantsToPromote) {
            try {
                await ThugBotInc.groupParticipantsUpdate(m.chat, [p.id], 'promote');
                await sleep(1500);
            } catch (err) {
                console.error(`Error promoting ${p.id}:`, err);
            }
        }

        reply(`*Success: All eligible members have been promoted.*`);
    } catch (error) {
        console.error(`Error in 'promoteall':`, error);
        reply(`*An error occurred while processing the 'promoteall' command.*`);
    }
    break;
}

case 'demoteall': {
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    try {
    if (isBan) return reply(mess.banned);
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
        

        const groupMetadata = await ThugBotInc.groupMetadata(m.chat);
        const participants = groupMetadata.participants;
        const participantsToDemote = participants.filter(p => p.admin && p.id !== botNumber && p.id !== ownernumber);

        if (participantsToDemote.length === 0) return reply(`*No admins found to demote.*`);

        for (let p of participantsToDemote) {
            try {
                await ThugBotInc.groupParticipantsUpdate(m.chat, [p.id], 'demote');
                await sleep(1500);
            } catch (err) {
                console.error(`Error demoting ${p.id}:`, err);
            }
        }

        reply(`*Success: All eligible admins have been demoted.*`);
    } catch (error) {
        console.error(`Error in 'demoteall':`, error);
        reply(`*An error occurred while processing the 'demoteall' command.*`);
    }
    break;
}

case 'pushcontactv3': {
if (isBan) return reply(mess.banned);
if (!ThugTheCreator) return reply(mess.owner)
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    if (!ThugTheCreator) return reply(mess.owner);
    if (!m.isGroup) return reply(mess.group);
    if (!text) return reply(`*Usage : ${prefix + command} pause|text‼️*\n*Reply Image To Send Images to All Participants. 1000 = 1 second pause*`);

    let jedany = text.split("|")[0];
    let captny = text.split("|")[1];
    const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);

    for (let men of halsss) {
        if (/image/.test(mime)) {
            media = await ThugBotInc.downloadAndSaveMediaMessage(quoted);
            mem = await TelegraPh(media);

            await ThugBotInc.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m });
            await sleep(1000);
            await ThugBotInc.sendMessage(men, { text: captny }, { quoted: m });
            await sleep(jedany);
        } else {
            await ThugBotInc.sendMessage(men, { text: captny }, { quoted: m });
            await sleep(jedany);
        }
    }

    reply(`*Success*`);
    break;
}
case "pushcontactv2": {
if (isBan) return reply(mess.banned);
if (!ThugTheCreator) return reply(mess.owner)
 const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    if (!ThugTheCreator) return reply(mess.owner);
    if (!q) return reply(`*Incorrect Usage*\n*Example: ${prefix + command} idgc|text*`);

    const metadata2 = await ThugBotInc.groupMetadata(q.split("|")[0]);
    const halss = metadata2.participants;

    for (let mem of halss) {
        ThugBotInc.sendMessage(`${mem.id.split('@')[0]}@s.whatsapp.net`, { text: q.split("|")[1] });
        await sleep(5000); // prevent spam
    }

    reply(`*Success*`);
    break;
}
case 'pushcontact': {
    
if (!ThugTheCreator) return reply(mess.owner)
if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!m.isGroup) return reply(mess.group);
    if (!text) return reply(`*Provide a text*`);
    
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    
    reply(`*Success in pushing the message to contacts*`);
    
    for (let pler of mem) {
        ThugBotInc.sendMessage(pler, { text: text }); // changed 'q' to 'text' for consistency
    }
    
    reply(`*Done*`);
    break;
}
case 'editinfo': {
if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group); // Check if command is used in a group
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin); // Only admins or the bot creator can use

    const option = args[0]?.toLowerCase();

    if (option === 'open') {
        await ThugBotInc.groupSettingUpdate(m.chat, 'unlocked')
            .then(() => reply(`*Success:* Group information editing has been opened for all participants.`))
            .catch((err) => reply(`*Error:* ${jsonformat(err)}`));
    } else if (option === 'close') {
        await ThugBotInc.groupSettingUpdate(m.chat, 'locked')
            .then(() => reply(`*Success:* Group information editing is now restricted to admins only.`))
            .catch((err) => reply(`*Error:* ${jsonformat(err)}`));
    } else {
        reply(`*Usage:* \`${prefix}editinfo open\` or \`${prefix}editinfo close\`\n*Description:* Control who can edit the group name, description, and display picture.`);
    }

    break;
}

case 'acceptall':
    
case 'approveall': {
if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
    

    try {
        const requests = await ThugBotInc.groupRequestParticipantsList(m.chat);
        if (!requests || requests.length === 0) {
            return reply('✅ No pending join requests to approve.');
        }

        for (const req of requests) {
            await ThugBotInc.groupRequestParticipantsUpdate(m.chat, [req.jid], 'approve');
        }

        reply(`✅ Approved ${requests.length} join request(s).`);
    } catch (err) {
        console.error(err);
        reply('❌ Failed to approve join requests.');
    }
}
break;

case 'rejectall':
    
case 'declineall': {
if (isBan) return reply(mess.banned);
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin);
    

    try {
        const requests = await ThugBotInc.groupRequestParticipantsList(m.chat);
        if (!requests || requests.length === 0) {
            return reply('✅ No pending join requests to reject.');
        }

        for (const req of requests) {
            await ThugBotInc.groupRequestParticipantsUpdate(m.chat, [req.jid], 'reject');
        }

        reply(`✅ Rejected ${requests.length} join request(s).`);
    } catch (err) {
        console.error(err);
        reply('❌ Failed to reject join requests.');
    }
}
break;

case 'ping':
    
case 'speed': 
  if (isBan) return reply(mess.banned);
    const timestamp = speed();
    const latensi = speed() - timestamp;
    // React to user's message
    await ThugBotInc.sendMessage(m.chat, { react: { text: `🌩️`, key: m.key } });
    // Send reply
    reply(`🌩️ *Speed ➯ ${latensi.toFixed(4)}ms︎*`, m.quoted);

    break; // Ensure break is present to avoid fall-through

case 'tosketch': {
  if (isBan) return reply(mess.banned);

  await ThugBotInc.sendMessage(m.chat, {
    react: { text: '⏳', key: m.key }
  });

  try {
    const fs = require('fs');
    const { uploadMedia } = require('./lib/catbox');
    const quoted = m.quoted || m;
    const qmsg = quoted.msg || quoted;
    const mime = qmsg.mimetype || '';
    const isImage = mime.startsWith('image');

    if (!isImage) return reply("*❌ Please reply to a valid image.*");

    const filePath = await ThugBotInc.downloadAndSaveMediaMessage(quoted, 'sketch-temp');
    const buffer = fs.readFileSync(filePath);

    const mediaUrl = await uploadMedia(buffer);
    fs.unlinkSync(filePath); // Cleanup

    if (!mediaUrl || !mediaUrl.startsWith('http')) {
      return reply("*❌ Failed to upload image.*");
    }

    const apiUrl = `https://api.siputzx.my.id/api/imgedit/convphoto?image=${encodeURIComponent(mediaUrl)}&template=sketch_v2&style=manga_sketch`;
    const res = await fetch(apiUrl);

    if (!res.ok || !res.headers.get('content-type')?.startsWith('image')) {
      const errText = await res.text();
      throw new Error(`API Error: ${errText}`);
    }

    const bufferArray = await res.arrayBuffer();
    const imageBuffer = Buffer.from(bufferArray);

    await ThugBotInc.sendMessage(m.chat, {
      image: imageBuffer,
      caption: "*✅ Sketch created successfully!*\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*"
    }, { quoted: m });

  } catch (err) {
    console.error("tosketch error:", err);
    reply(`*❌ Failed to convert image to sketch:*\n> ${err.message}`);
  }

  break;
}

case 'npm': {
if (isBan) return reply(mess.banned);
    if (args.length < 1) return reply(`*Example: ${prefix + command} chalk*`);
    try {
        const res = await axios.get(`https://api.npms.io/v2/search?q=${encodeURIComponent(args[0].toLowerCase())}`);
        const data = res.data;
        const matchingPackages = data.results.filter(pkg => pkg.package.name === args[0].toLowerCase());

        if (matchingPackages.length < 1) return reply("❎ No Results Found!");

        const pkg = matchingPackages[0].package;
        const uploaded = formatDate(pkg.date);

        let links = '';
        if (Array.isArray(pkg.links)) {
            for (const i of pkg.links) {
                links += `\n> *${tiny(i.key.charAt(0).toUpperCase() + i.key.slice(1))}:* ${i.url}`;
            }
        } else {
            links = 'No Links Available';
        }

        let maintainers = '';
        for (const i of pkg.maintainers) {
            maintainers += `\n> *Usᴇʀɴᴀᴍᴇ:* @${i.username}\n  - *Eᴍᴀɪʟ:* ${i.email}\n`;
        }

        const readmore = String.fromCharCode(8206).repeat(4001);

        await ThugBotInc.sendMessage(m.chat, {
            image: await getBuffer("https://i.ibb.co/zNPdJr5/npm.png"),
            caption: `
*>>> 🇳 🇵 🇲  • 🇨 🇭 🇪 🇨 🇰 <<<*

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▢ *Nᴀᴍᴇ:* ${pkg.name}
▢ *Sᴄᴏᴘᴇ:* ${pkg.scope}
▢ *Vᴇʀsɪᴏɴ:* v${pkg.version}
▢ *Uᴘʟᴏᴀᴅᴇᴅ Oɴ:* ${uploaded.date}
▢ *Oᴡɴᴇʀ Nᴀᴍᴇ:* @${pkg.publisher.username}
▢ *Oᴡɴᴇʀ Eᴍᴀɪʟ:* ${pkg.publisher.email}
${readmore}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▢ *Kᴇʏᴡᴏʀᴅs:* ${(pkg?.keywords?.length > 0) ? pkg.keywords.join(", ") : 'No Keywords'}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▢ *Lɪɴᴋs:*${links}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▢ *Mᴀɪɴᴛᴀɪɴᴇʀs:*${maintainers}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▢ *Sᴄᴏʀᴇs:*
    - *Fɪɴᴀʟ:* ${(matchingPackages[0].score.final * 10).toFixed(0)}/10
    - *Qᴜᴀʟɪᴛʏ:* ${(matchingPackages[0].score.detail.quality * 10).toFixed(0)}/10
    - *Pᴏᴘᴜʟᴀʀɪᴛʏ:* ${(matchingPackages[0].score.detail.popularity * 10).toFixed(0)}/10
    - *Mᴀɪɴᴛᴀɪɴᴇʀs:* ${(matchingPackages[0].score.detail.maintenance * 10).toFixed(0)}/10
    - *Sᴇᴀʀᴄʜᴇᴅ:* ${(matchingPackages[0].searchScore / 10000).toFixed(0)}/10
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
            `.trim()
        }, { quoted: m });
    } catch (err) {
        console.error(err);
        return reply("*❎ Too much traffic!! try again in 15 secs*");
    }
    break;
}

case 'couple': {
    
    if (!m.isGroup) return reply(mess.group);
if (isBan) return reply(mess.banned);
    const metadata = await ThugBotInc.groupMetadata(m.chat);
    const participants = metadata.participants;

    if (!Array.isArray(participants) || participants.length <= 3) {
        return reply('*❎ More than 3 members needed*');
    }

    let members = participants.map(p => p.id);
    let user1 = members[Math.floor(Math.random() * members.length)];
    let user2 = members[Math.floor(Math.random() * members.length)];

    while (user1 === user2) {
        user2 = members[Math.floor(Math.random() * members.length)];
    }

    await reply(
        `@${user1.split('@')[0]} ❤️ @${user2.split('@')[0]}\n*Ehh, something's SUS~~👀❤️*`,
        { mentions: [user1, user2] }
    );
}
break;
case 'greeting': {
    
    if (!ThugTheCreator) return reply(mess.owner);
if (isBan) return reply(mess.banned);
    const command = args[0]?.toLowerCase();

    if (command === "on") {
        global.autoGreet = true;
        await reply("✅ *Greeting is now ENABLED.*");
    } else if (command === "off") {
        global.autoGreet = false;
        await reply("❌ *Greeting is now DISABLED.*");
    } else {
        return await reply("⚙️ *Usage:*\n.greeting on → Enable\n.greeting off → Disable");
    }

    break;
}

case 'faceblur': {
  if (isBan) return reply(mess.banned);

  await ThugBotInc.sendMessage(m.chat, {
    react: { text: '⏳', key: m.key }
  });

  try {
    const fs = require('fs');
    const fetch = require('node-fetch');
    const { handleMediaUpload } = require('./lib/catbox'); // adjust path if needed

    const quoted = m.quoted || m;
    const qmsg = quoted.msg || quoted;
    const mime = qmsg.mimetype || '';
    const isImage = mime.startsWith('image');

    if (!isImage) return reply("*❌ Please reply to an image.*");

    const filePath = await ThugBotInc.downloadAndSaveMediaMessage(quoted, 'faceblur');
    const buffer = fs.readFileSync(filePath);

    const mediaUrl = await handleMediaUpload(buffer, mime);
    fs.unlinkSync(filePath); // clean up local file

    if (!mediaUrl || !mediaUrl.startsWith("http")) {
      return reply("*❌ Failed to upload the image.*");
    }

    const apiUrl = `https://api.siputzx.my.id/api/iloveimg/blurface?image=${encodeURIComponent(mediaUrl)}`;
    const res = await fetch(apiUrl);

    if (!res.ok || !res.headers.get('content-type')?.startsWith('image')) {
      const text = await res.text();
      throw new Error(`API Error: ${text}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    await ThugBotInc.sendMessage(m.chat, {
      image: imageBuffer,
      caption: "*✅ Face blurred successfully!*\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*"
    }, { quoted: m });

  } catch (err) {
    console.error("faceblur error:", err);
    reply(`*❌ Error occurred:*\n${err.message}`);
  }

  break;
}

const databasePath = "./database"; // Folder to store warnings
const warnFile = path.join(databasePath, "warnings.json"); // Full path to warnings.json

// Ensure database folder exists
if (!fs.existsSync(databasePath)) {
    fs.mkdirSync(databasePath, { recursive: true });
}

// Initialize Antilink Setting & Warning Counter
if (!global.antilink) global.antilink = false;
if (!global.maxWarnings) global.maxWarnings = 3; // Set default max warnings

// Load warnings from file
function loadWarnings() {
    try {
        if (!fs.existsSync(warnFile)) {
            fs.writeFileSync(warnFile, JSON.stringify({})); // Create file if missing
        }
        const data = fs.readFileSync(warnFile);
        return JSON.parse(data);
    } catch (error) {
        console.error("Error loading warnings:", error);
        return {}; // Return empty object if file doesn't exist or has errors
    }
}



case 'antilink': {
if (isBan) return reply(mess.banned);
    if (!ThugTheCreator && !isAdmins) return reply("*❌ Only the owner or an admin can toggle antilink.*");

    if (!args[0]) return reply(`🔧 *Antilink is currently* *${global.antilink ? 'ENABLED' : 'DISABLED'}*.\n\n*Usage:* \`${prefix}antilink on/off\``);

    if (args[0] === 'on') {
        global.antilink = true;
        reply("*✅ Antilink is now ENABLED*\n\n*Messages with links will be deleted.*");
    } else if (args[0] === 'off') {
        global.antilink = false;
        reply("*❌ Antilink is now DISABLED.*");
    } else {
        reply("*⚠️ Invalid option! Use* `on` *or* `off`.");
    }
}
break;

case 'save': {
    
    if (!ThugTheCreator) return reply(mess.owner);
    if (isBan) return reply(mess.banned);
    try {
        // Ensure a quoted message exists 📩
        if (!quoted) {
            return reply('*Please reply to a media message (image, video, or audio).* 📷🎥🎼');
        }

        // Retrieve MIME type of the quoted media 📄
        let mime = quoted.mimetype;
        let mediaType;

        // Identify the media type (video, image, or audio) 🎬📸🎧
        if (/video/.test(mime)) {
            mediaType = 'video';
        } else if (/image/.test(mime)) {
            mediaType = 'image';
        } else if (/audio/.test(mime)) {
            mediaType = 'audio';
        } else {
            return reply('*Please reply with a video, image, or audio message.* 🎬📷🎶');
        }

        // Download and save the media 🖥️💾
        var mediaFile = await ThugBotInc.downloadAndSaveMediaMessage(quoted);

        // Prepare the message with the media file ✉️
        let messageOptions = {
            caption: q ? q : '',  // If a caption is provided, use it; otherwise, leave it blank 📝
        };

        // Attach the appropriate media type to the message 📸🎬🎧
        messageOptions[mediaType] = {
            url: mediaFile
        };

        // Send the saved media back to the user 📤
        await ThugBotInc.sendMessage(m.sender, messageOptions, { quoted: m });

        // Confirm the media was saved successfully ✅
        await reply('*Media has been successfully saved.* 🎉');
    } catch (error) {
        console.error(error);
        reply('An error occurred while saving and sending the media. Please try again later. ⚠️');
    }
    break;
} 


case 'anticall': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner)

    if (!args[0]) return reply(`❗ *Usage:* *${prefix}${command} on/off*`);

    if (args[0].toLowerCase() === "on") {
        global.anticall = true;
        reply(`✅ *Anti-call feature has been enabled!*\n\n*Anyone who calls the bot will be automatically blocked.*`);
    } else if (args[0].toLowerCase() === "off") {
        global.anticall = false;
        reply(`❌ *Anti-call feature has been disabled!*\n\n*Users will no longer be blocked for calling the bot.*`);
    } else {
        reply(`⚠️ *Invalid option!*\n*Usage: ${prefix+command} on or ${prefix+command} off*`);
    }
}
break;

case 'getoldmsgs':
case 'oldmsgs': {
    try {
        const jid = m.chat;
        const msg = await getOldestMessageInChat(jid);

        if (!msg) {
            await ThugBotInc.sendMessage(jid, { text: "No messages found in chat history." }, { quoted: m });
            break;
        }

        const result = await ThugBotInc.fetchMessageHistory(
            50, // quantity (max: 50 per query)
            msg.key,
            msg.messageTimestamp
        );

        await ThugBotInc.sendMessage(jid, { text: `Fetched ${result.messages.length} older messages.` }, { quoted: m });

    } catch (err) {
        console.error(err);
        await ThugBotInc.sendMessage(m.chat, { text: "Failed to fetch older messages." }, { quoted: m });
    }
    break;
}
case 'setname':
case 'updatename': {
    if (isBan) return reply(mess.banned); // Check if the user is banned and reply with a banned message

    try {
        const newName = m.text.split(' ').slice(1).join(' '); // Extract the new name from the message text

        if (!newName) {
            return reply("Please provide a new name to update your profile.");
        }

        // Update the profile name
        await ThugBotInc.updateProfileName(newName);
        await reply(`Your profile name has been updated to: ${newName}`);
    } catch (err) {
        console.error(err);
        await reply("Failed to update the profile name.");
    }
    break;
}

case 'setbio':
case 'updatebio': {
    if (isBan) return reply(mess.banned); // Check if the user is banned and reply with a banned message

    try {
        const newStatus = m.text.split(' ').slice(1).join(' '); // Extract the new status from the message text

        if (!newStatus) {
            return reply("Please provide a new status to update your profile.");
        }

        // Update the profile status
        await ThugBotInc.updateProfileStatus(newStatus);
        await reply(`Your profile status has been updated to: ${newStatus}`);
    } catch (err) {
        console.error(err);
        await reply("Failed to update the profile status.");
    }
    break;
}

case 'getgroupsettings': {
    if (!m.isGroup) return reply(mess.group); // Check if it's a group chat
    if (isBan) return reply(mess.banned); // Check if the user is banned and reply with a banned message

    try {
        const jid = m.chat; // Get the JID of the group chat
        
        // Fetch the group metadata, which includes settings like who can send messages, etc.
        const groupMetadata = await ThugBotInc.groupMetadata(jid);

        // Check if the group is in 'announcement' mode (only admins can send messages)
        const isAnnouncement = groupMetadata.announce;
        const groupSettings = isAnnouncement ? '🛑 *Announcement Mode*' : '💬 *Everyone Can Send Messages*';
        
        // Check if group settings allow everyone to modify group settings
        const isLocked = groupMetadata.locked;
        const groupModificationSettings = isLocked ? '🔒 *Settings Locked*' : '🔓 *Settings Unlocked*';

        // Send the current group settings as a reply
        await reply(`*Current Group Settings for* ${jid}:
- 📩 *Message Settings*: ${groupSettings} (Admins only: ${isAnnouncement ? '✅ Yes' : '❌ No'})
- ⚙️ *Group Settings Modification*: ${groupModificationSettings} (Admins only: ${isLocked ? '✅ Yes' : '❌ No'})`);

    } catch (err) {
        console.error(err);
        await reply("❌ Failed to retrieve group settings.");
    }
    break;
}

case 'autoreact': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!args[0]) return reply(`❗ *Usage:* *${prefix}${command} on/off*`);

    if (args[0].toLowerCase() === "on") {
        global.autoreact = true;
        reply(`✅ *Auto-react has been enabled!*\n\n*The bot will now automatically react to messages.*`);
    } else if (args[0].toLowerCase() === "off") {
        global.autoreact = false;
        reply(`❌ *Auto-react has been disabled!*\n\n*The bot will no longer react to messages.*`);
    } else {
        reply(`⚠️ *Invalid option!*\n*Usage: ${prefix+command} on or ${prefix+command} off*`);
    }
}
break;

case 'repo':
case 'botrepo': {
    if (isBan) return reply(mess.banned);

    try {
        const axios = require('axios');

        // Fetch GitHub repository data
        let { data } = await axios.get('https://api.github.com/repos/OTAKUSYNTAX/OREKI_V3_REMASTERED');

        teks = `
┌───────────────       
│ Hey 👋 ${pushname}, kindly support my project. 🌼
├──────────────────
│ *Total Stars ⭐:* ${data.stargazers_count}
├──────────────────
│ *Total Forks 👨‍🔧:* ${data.forks_count} forks
├──────────────────
│ *Repository 🛠️:* https://github.com/OTAKUSYNTAX/OREKI_V3_REMASTERED
├───────────────────
│ *© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*
└───────────────────`;

        // Fetch video buffer
        const response = await axios.get('https://files.catbox.moe/l2quda.mp4', {
            responseType: 'arraybuffer'
        });
        const buffer = Buffer.from(response.data);

        const message = {
            video: buffer,
            gifPlayback: true,
            caption: teks,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363312761563081@newsletter",
                    newsletterName: "ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘",
                    serverMessageId: 143
                }
            }
        };

        await ThugBotInc.sendMessage(m.chat, message, { quoted: m });
    } catch (err) {
        console.error(err);
        reply("*Failed to load the video. Try again later.*");
    }

    break;
}        
      
case 'gemini-pro': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Search Query>*`);
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const json = await res.json();

        if (!json.status || !json.data) {
            return reply(`*API ERROR:* Failed to get a valid response.`);
        }

        reply(`*Gemini Pro:* ${json.data}`);
    } catch (err) {
        console.error('Error in Gemini command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}
case 'gemini-beta': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage: ${prefix + command} <Your Search Query>*`);
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/gemini?text=${encodeURIComponent(text)}&cookie=g.a000wQgGLdbPnkCoYF-ApyFPhZjJnZ-Wji6sAkHzWqlRrPCZFE7fGS3D_Rxunxcm6eT-nB5ZAAACgYKAUgSARcSFQHGX2MiYXcD4diXDsPc4-3gsCcMfhoVAUF8yKqoDlbJNMC0-40qvMGMaeUj0076`;

        const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const json = await res.json();

        if (!json.status || !json.data || !json.data.response) {
            return reply(`*API ERROR:* Invalid response structure.`);
        }

        reply(`*Gemini Beta:* ${json.data.response}`);
    } catch (err) {
        console.error('Error in Gemini Beta command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}
case 'gpt3': {
    if (isBan) return reply(mess.banned);
    if (!text) {
        return reply(`*Usage:* ${prefix + command} <Your Query>`);
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=Hi&content=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`API responded with status: ${res.status}`);
        }

        const json = await res.json();

        if (!json.status || !json.data) {
            return reply(`*API ERROR:* Invalid or empty response.`);
        }

        reply(`*GPT-3 AI:* ${json.data}`);
    } catch (err) {
        console.error('Error in GPT-3 command:', err);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${err.message}`);
    }

    break;
}
case 'post': {
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner); // Only owner can post to status
    if (!quoted) return reply(`*Reply to an image, video, or audio to forward it to your status.*`);

    let mime = (quoted.msg || quoted).mimetype || '';
    let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted);
    
    if (/image/.test(mime)) {
        await ThugBotInc.sendMessage('status@broadcast', { image: { url: media }, caption: text || '' });
    } else if (/video/.test(mime)) {
        await ThugBotInc.sendMessage('status@broadcast', { video: { url: media }, caption: text || '' });
    } else if (/audio/.test(mime)) {
        await ThugBotInc.sendMessage('status@broadcast', { audio: { url: media }, mimetype: 'audio/mp4' });
    } else {
        return reply(`*Unsupported media type. Please reply to an image, video, or audio.*`);
    }

    reply('*Successfully posted to status.*');
    break;
}
case 'wcg': {
    if (wcgRooms[m.chat]) {
        return reply(`*⚠️ A Word Chain Game is already active in this chat!*\n*Type ${prefix}endwcg to end the current game*`);
    }

    wcgRooms[m.chat] = {
        host: m.sender,
        players: [m.sender],
        status: 'waiting'
    };
    saveJSON(wcgPath, wcgRooms); // Save after update

    return reply(`🎮 *Word Chain Game Created!*\n💁‍♂️Waiting for an opponent to join...\n*Type ${prefix}joinwcg to enter the game.*`);
}


// Command: create a Word Chain Game
case 'wcg': {
    if (wcgRooms[m.chat]) {
        return reply('*⚠️ A Word Chain Game is already active in this chat!*');
    }

    wcgRooms[m.chat] = {
        host: m.sender,
        players: [m.sender],
        status: 'waiting'
    };

    saveJSON(wcgPath, wcgRooms); // Save after creation

    return reply(`🎮 *Word Chain Game Created!*\n💁‍♂️Waiting for an opponent to join...\n*Type ${prefix}joinwcg to enter the game.*`);
}

// Command: join an existing Word Chain Game
case 'joinwcg': {
    const room = wcgRooms[m.chat];
    if (!room || room.status !== 'waiting') {
        return reply('*❌ No open Word Chain Game found to join.*');
    }

    if (room.players.includes(m.sender)) {
        return reply('*⚠️ You have already joined this game!*');
    }

    room.players.push(m.sender);
    room.status = 'started';
    saveJSON(wcgPath, wcgRooms); // Save after joining

    const [p1, p2] = room.players;
    const round = {
        chat: m.chat,
        players: [p1, p2],
        turn: Math.floor(Math.random() * 2),
        startLetter: getRandomLetter(),
        wordLength: getRandomLength()
    };

    activeRounds[m.chat] = round;
    saveJSON(roundPath, activeRounds); // Save round data

    const turnPlayer = round.players[round.turn];

    await reply(`✅ *Player joined! Game starts now!*

🔤 *Letter:* ${round.startLetter}
🔢 *Length:* ${round.wordLength} letters

${getName(turnPlayer)}, give a word starting with *${round.startLetter}* and with *${round.wordLength} letters*!
You have *50 seconds!*`);

    setTimeout(() => {
        let rounds = loadJSON(roundPath);
        if (rounds[m.chat]) {
            const latePlayer = round.players[round.turn];
            const winner = round.players[1 - round.turn];
            delete rounds[m.chat];
            delete wcgRooms[m.chat];
            saveJSON(roundPath, rounds);
            saveJSON(wcgPath, wcgRooms);

            ThugBotInc.sendMessage(m.chat, {
                text: `⏰ *Time's up!*\n*${getName(latePlayer)} was too slow...*\n🏆 *${getName(winner)} wins this round!*`
            });
        }
    }, 50000);
    break;
}

// Handle incoming word messages if round is active
ThugBotInc.on('message', async (m) => {
    console.log('Received message:', m);

    if (!m.message || !m.key || !m.key.remoteJid) return;

    const chatId = m.key.remoteJid;
    const senderId = m.key.participant || m.key.remoteJid;
    const text = m.message.conversation ||
                 m.message.extendedTextMessage?.text ||
                 m.message.imageMessage?.caption || '';

    if (!text || !activeRounds[chatId]) return;

    const round = activeRounds[chatId];
    const currentPlayer = round.players[round.turn];

    if (senderId !== currentPlayer) return;

    const word = text.trim().toLowerCase();

    if (!word.startsWith(round.startLetter.toLowerCase())) {
        return await reply(`*❌ Word must start with ${round.startLetter}!*`);
    }

    if (word.length !== round.wordLength) {
        return await reply(`*❌ Word must be exactly ${round.wordLength} letters!*`);
    }

    const opponent = round.players[1 - round.turn];

    await reply(`✅ *Valid word:* ${word}!\n🏁 *Game Over!*\n🏆 *${getName(currentPlayer)} wins this round!*`);

    delete wcgRooms[chatId];
    delete activeRounds[chatId];

    saveJSON(wcgPath, wcgRooms);
    saveJSON(roundPath, activeRounds);
});

case 'update':
    try {
        await ThugBotInc.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
        await reply('*🔄 Checking for updates from GitHub...*');

        const { downloadAllFiles } = require('./lib/update');
        const updated = await downloadAllFiles('smart');

        if (updated) {
            await ThugBotInc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
            await reply('*✅ Files updated from GitHub!\n♻️ Restarting bot to apply changes...*');
            await ThugBotInc.sendMessage(m.chat, { react: { text: '♻️', key: m.key } });
            process.exit(0);
        } else {
            await ThugBotInc.sendMessage(m.chat, { react: { text: '⏸️', key: m.key } });
            await reply('*⏳ No updates found. Bot is already up-to-date.*');
        }
    } catch (error) {
        console.error('❌ Update error:', error);
        await ThugBotInc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        await reply('*❌ An error occurred while checking for updates.*');
    }
    break;

case 'endwcg': {
    const chatId = m.chat;

    if (!wcgRooms[chatId] && !activeRounds[chatId])
        return reply('*❌ No active Word Chain Game found to end.*');

    delete wcgRooms[chatId];
    delete activeRounds[chatId];

    saveJSON(wcgPath, wcgRooms);
    saveJSON(roundPath, activeRounds);

    return reply('🗑️ *Word Chain Game has been ended manually.*');
}
case 'editchannel':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!args[0] || !args[0].includes('|')) {
        return reply(`*⚙️ Provide a newsletter JID followed by a description.*\n*Example: ${prefix}editchannel <YOUR NEWSLETTER>|<DESCRIPTION>*`);
    }

    try {
        const [jid, ...descParts] = args.join(' ').split('|');
        const description = descParts.join('|').trim();

        if (!jid.endsWith('@newsletter') || !description) {
            return reply(`*⚠️ Invalid format or empty description.\n*Correct format:*\n*${prefix}editnewsletter <YOUR NEWSLETTER>|<DESCRIPTION>*`);
        }

        await ThugBotInc.newsletterUpdateDescription(jid.trim(), description);
        reply(`✅ *Newsletter description updated successfully!*\n*👤 JID:* ${jid.trim()}\n*📑 Description:* ${description}`);
    } catch (error) {
        console.error("Newsletter update failed:", error);
        reply("⚠️ *Failed to update newsletter description. Make sure the JID is valid and you're authorized.*");
    }
    break;

case 'editchannelname':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!args[0] || !args[0].includes('|')) {
        return reply(`*⚙️ Provide a newsletter JID followed by a name.*\n*Example: ${prefix}editchannelname <YOUR NEWSLETTER>|<NEW NAME>*`);
    }

    try {
        const [jid, ...nameParts] = args.join(' ').split('|');
        const newName = nameParts.join('|').trim();

        if (!jid.endsWith('@newsletter') || !newName) {
            return reply(`*⚠️ Invalid format or empty name.*\n*Correct format:*\n*${prefix}editchannelname <YOUR NEWSLETTER>|<NEW NAME>*`);
        }

        await ThugBotInc.newsletterUpdateName(jid.trim(), newName);
        reply(`✅ *Newsletter name updated successfully!*\n*👤 JID:* ${jid.trim()}\n*📝 New Name:* ${newName}`);
    } catch (error) {
        console.error("Newsletter name update failed:", error);
        reply("⚠️ *Failed to update newsletter name. Make sure the JID is valid and you're authorized.*");
    }
    break;

case 'editchannelpic':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!quoted || !/image/.test(quoted.mimetype)) {
        return reply(`*⚙️ Reply to an image to set it as the newsletter profile picture.*\n*Usage: ${prefix}editchannelpic <YOUR NEWSLETTER> (reply to image)*`);
    }

    if (!args[0] || !args[0].endsWith('@newsletter')) {
        return reply(`*⚠️ Please provide a valid newsletter JID.*\n*Example: ${prefix}setchannelpic <YOUR NEWSLETTER> (reply to image)*`);
    }

    try {
        const jid = args[0].trim();
        const media = await ThugBotInc.downloadAndSaveMediaMessage(quoted);
        await ThugBotInc.newsletterUpdatePicture(jid, media);
        reply(`✅ *Newsletter profile picture updated successfully!*\n*👤 JID:* ${jid}`);
    } catch (error) {
        console.error("Newsletter picture update failed:", error);
        reply("⚠️ *Failed to update newsletter picture. Make sure the JID is valid, the image is supported, and you're authorized.*");
    }
    break;
    
case 'mutechannel':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!args[0] || !args[0].endsWith('@newsletter')) {
        return reply(`*⚠️ Please provide a valid newsletter JID.*\n*Example: ${prefix}mutechannel <YOUR NEWSLETTER>*`);
    }

    try {
        await ThugBotInc.newsletterMute(args[0].trim());
        reply(`🔕 *Newsletter muted successfully!*\n*👤 JID:* ${args[0].trim()}`);
    } catch (error) {
        console.error("Mute failed:", error);
        reply("⚠️ *Failed to mute newsletter.*");
    }
    break;
    
    case 'removechannelpic':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!args[0] || !args[0].endsWith('@newsletter')) {
        return reply(`*⚠️ Please provide a valid newsletter JID.*\n*Example: ${prefix}removechannelpic <YOUR NEWSLETTER>*`);
    }

    try {
        await ThugBotInc.newsletterRemovePicture(args[0].trim());
        reply(`✅ *Newsletter profile picture removed successfully!*\n*👤 JID:* ${args[0].trim()}`);
    } catch (error) {
        console.error("Failed to remove newsletter picture:", error);
        reply("⚠️ *Failed to remove newsletter picture. Ensure the JID is valid and you're authorized.*");
    }
    break;    

case 'createchannel': {
    if (isBan) return reply(mess.banned);  
    if (!ThugTheCreator) return reply(mess.owner);

    // Check if proper input is provided
    if (!args[0] || !args.join(' ').includes('|')) {
        return reply(`*⚙️ Provide a name followed by a description.*\n*Example: ${prefix}createchannel <NAME>|<DESCRIPTION>*`);
    }

    try {
        // Extract name and description
        const [name, ...descParts] = args.join(' ').split('|');
        const description = descParts.join('|').trim();

        // Create the channel/newsletter
        const metadata = await ThugBotInc.newsletterCreate(name.trim(), description);

        // Assuming the metadata contains an invite link
        const inviteLink = metadata?.inviteLink || 'Not available';

        // Send confirmation along with the invite link
        reply(`✅ *Newsletter created successfully!*\n*📛 Name:* ${name.trim()}\n*📑 Description:* ${description}\n*🆔 JID:* ${metadata?.newsletterJid || 'unknown'}\n*🔗 Invite Link:* ${inviteLink}`);
    } catch (error) {
        console.error("Create failed:", error);
        reply("⚠️ *Failed to create newsletter.*");
    }
    break;
}
    
    case 'unmutechannel':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!args[0] || !args[0].endsWith('@newsletter')) {
        return reply(`*⚠️ Please provide a valid newsletter JID.*\n*Example: ${prefix}unmutechannel <YOUR NEWSLETTER>*`);
    }

    try {
        await ThugBotInc.newsletterUnmute(args[0].trim());
        reply(`🔔 *Newsletter unmuted successfully!*\n*👤 JID:* ${args[0].trim()}`);
    } catch (error) {
        console.error("Unmute failed:", error);
        reply("⚠️ *Failed to unmute newsletter.*");
    }
    break;

case 'followchannel':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!args[0] || !args[0].endsWith('@newsletter')) {
        return reply(`*⚠️ Please provide a valid newsletter JID.*\n*Example: ${prefix}followchannel <NEWSLETTER JID>*`);
    }

    try {
        await ThugBotInc.newsletterFollow(args[0].trim());
        reply(`✅ *You are now following the newsletter!*\n*👤 JID:* ${args[0].trim()}`);
    } catch (error) {
        console.error("Follow failed:", error);
        reply("⚠️ *Failed to follow newsletter.*");
    }
    break;
    
    case 'deletechannel':
    if (isBan) return reply(mess.banned);
    if (!ThugTheCreator) return reply(mess.owner);

    if (!args[0] || !args[0].endsWith('@newsletter')) {
        return reply(`*⚠️ Please provide a valid newsletter JID.*\n*Example: ${prefix}deletechannel <YOUR NEWSLETTER>*`);
    }

    try {
        await ThugBotInc.newsletterDelete(args[0].trim());
        reply(`🗑️ *Newsletter deleted successfully!*\n*👤 JID:* ${args[0].trim()}`);
    } catch (error) {
        console.error("Delete failed:", error);
        reply("⚠️ *Failed to delete newsletter.*");
    }
    break;

case 'blowjob': {
  if (isBan) return reply(mess.banned);
var pat = await fetchJson(`https://api.waifu.pics/nsfw/blowjob`)

        try {

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ThugBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, caption: "*Here you go 🍑🍆*"}, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;

case 'waifu': {
  if (isBan) return reply(mess.banned);

  try {
    const res = await axios.get('https://api.waifu.pics/nsfw/waifu');
    const imageUrl = res.data.url;

    await ThugBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: `*Here's a naughty waifu for you...*`,
    }, { quoted: m });

  } catch (err) {
    console.error('Error fetching NSFW waifu image:', err);
    reply('⚠️ Could not fetch NSFW waifu. Try again later.');
  }

  break;
}    

case 'trap': {
  if (isBan) return reply(mess.banned);

  try {
    const res = await axios.get('https://api.waifu.pics/nsfw/trap');
    const imageUrl = res.data.url;

    await ThugBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: `*Here's your NSFW trap image...*`,
    }, { quoted: m });

  } catch (err) {
    console.error('Error fetching NSFW trap image:', err);
    reply('⚠️ Could not fetch NSFW trap image. Try again later.');
  }

  break;
}
case 'pindl': {
    if (!text) return reply(`*Provide a Pinterest video URL!*\n*Example: ${prefix}pindl <video link>*`);

    await ThugBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

    let url = text.trim();

    try {
        // Step 1: Expand shortened pin.it links
        if (url.includes('pin.it')) {
            const headRes = await fetch(url, { method: 'HEAD', redirect: 'follow' });
            url = headRes.url; // Get final redirected full Pinterest link
        }

        // Step 2: Call the Pinterest API
        const res = await fetch(`https://api.agatz.xyz/api/pinterest?url=${encodeURIComponent(url)}`);
        const json = await res.json();

        if (json.status !== 200 || !json.data?.result) {
            return reply('*Failed to fetch Pinterest video. Please check the URL.*');
        }

        // Step 3: Send video with optional title if available
        await ThugBotInc.sendMessage(m.chat, {
            video: { url: json.data.result },
            caption: `*Pinterest Video*\n🔗 ${json.data.url || url}\n\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
        }, { quoted: m });

    } catch (err) {
        console.error('Pinterest error:', err);
        reply('*An error occurred while processing the Pinterest link.*');
    }

    break;
}

case 'tiktoksearch':
case 'ttsearch': {
    if (!text) return reply(`*Please enter a keyword to search!*\n*Example:* ${prefix}ttsearch anime edits`);
  
  await ThugBotInc.sendMessage(m.chat, { react: { text: `🔍`, key: m?.key } });
  
    try {
        const res = await fetch(`https://api.agatz.xyz/api/tiktoksearch?message=${encodeURIComponent(text)}`);
        const data = await res.json();

        if (data.status !== 200 || !data.data?.no_watermark) {
            return reply('*No result found or an error occurred.*');
        }

        await ThugBotInc.sendMessage(m.chat, {
            video: { url: data.data.no_watermark },
            caption: `*🎵 Title:* ${data.data.title || '-'}\n*© 𝐀 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 ༆༊ 𝐓𝐇𝐔𝐆 𝐓𝐄𝐂𝐇𝐈𝐄𝐒  𝓙ᥫ᭡*`
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply('*Failed to fetch TikTok video. Try again later.*');
    }
    break;
}

case 'gsmarena': {
  if (!q) return reply(`*Please provide a phone model.*\n*Example: ${prefix + command} redmi note 14*`);

  try {
    const res = await fetch(`https://api.agatz.xyz/api/gsmarenas?message=${encodeURIComponent(q)}`);
    const json = await res.json();

    // Check if the response has the expected structure
    if (!json || json.status !== 200 || !json.data || !Array.isArray(json.data.data) || json.data.data.length === 0) {
      return reply('No results found.');
    }

    const results = json.data.data.slice(0, 5); // Max 5 results
    for (let i = 0; i < results.length; i++) {
      const phone = results[i];
      const caption = `*${i + 1}. ${phone.name}*\n\n${phone.desc}\n\n[View on GSMArena](${phone.url})`;

      await ThugBotInc.sendMessage(m.chat, {
        image: { url: phone.image_url },
        caption,
        mimetype: 'image/jpeg'
      }, { quoted: m });
    }

  } catch (err) {
    console.error(err);
    reply('Error fetching data. Please try again later.');
  }

  break;
}
case 'hentaivid': {
  try {
    let res = await fetch('https://api.agatz.xyz/api/hentaivid');
    let json = await res.json();
    if (json.status !== 200 || !json.data || json.data.length === 0) return reply('No videos found.');

    let random = json.data[Math.floor(Math.random() * json.data.length)];
    let caption = `*꧁☬𝐇𝐄𝐍𝐓𝐀𝐈 𝐕𝐈𝐃𝐄𝐎☬꧂*\n\n`
                + `*📛 Title:* ${random.title}\n`
                + `*🔞 Category:* ${random.category}\n`
                + `*👁️ Views:* ${random.views_count}\n`
                + `*📤 Shares:* ${random.share_count}\n`
                + `*🔗 Link:* ${random.link}`;

    await ThugBotInc.sendMessage(m.chat, {
      video: { url: random.video_1 },
      caption: caption
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('Error while retrieving hentai video.');
  }
}
break;

case 'dsome': {
  await ThugBotInc.sendMessage(m.chat, { react: { text: `💌`, key: m?.key } });
    const imageUrl = 'https://i.imgur.com/ArnzRoX.jpeg';
    const teks =
` 💖 *𝐓𝐎 𝐓𝐇𝐄 𝐋𝐎𝐕𝐄 𝐎𝐅 𝐌𝐘 𝐋𝐈𝐅𝐄 - 𝐃𝐒𝐎𝐌𝐄* 💖\n\n` +
`💌 *𝐃𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐓𝐨: 𝐃𝐬𝐨𝐦𝐞 – 𝐓𝐡𝐞 𝐆𝐢𝐫𝐥 𝐖𝐡𝐨 𝐑𝐮𝐧𝐬 𝐌𝐲 𝐖𝐨𝐫𝐥𝐝 👑*\n\n` +
`🖋️ *𝐓𝐢𝐭𝐥𝐞: 𝐌𝐲 𝐒𝐚𝐬𝐬𝐲 𝐆𝐢𝐫𝐥𝐟𝐫𝐢𝐞𝐧𝐝 😂💅🏽*\n\n` +
`🧵 𝐖𝐢𝐭𝐡 𝐚 𝐧𝐞𝐞𝐝𝐥𝐞 𝐚𝐧𝐝 𝐬𝐤𝐢𝐥𝐥, 𝐬𝐡𝐞 𝐬𝐞𝐰𝐬 𝐡𝐞𝐫 𝐝𝐫𝐞𝐚𝐦,\n` +
`𝐂𝐫𝐞𝐚𝐭𝐢𝐧𝐠 𝐦𝐚𝐠𝐢𝐜, 𝐥𝐢𝐤𝐞 𝐬𝐭𝐢𝐭𝐜𝐡𝐞𝐬 𝐨𝐧 𝐚 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐬𝐜𝐫𝐞𝐞𝐧.\n\n` +
`👸 𝐈𝐧𝐝𝐞𝐩𝐞𝐧𝐝𝐞𝐧𝐭? 𝐎𝐡, 𝐛𝐚𝐛𝐲, 𝐬𝐡𝐞 𝐛𝐮𝐢𝐥𝐭 𝐡𝐞𝐫 𝐭𝐡𝐫𝐨𝐧𝐞,\n` +
`𝐍𝐞𝐞𝐝𝐬 𝐧𝐨 𝐤𝐢𝐧𝐠—𝐬𝐡𝐞 𝐜𝐚𝐫𝐯𝐞𝐝 𝐡𝐞𝐫 𝐧𝐚𝐦𝐞 𝐢𝐧 𝐬𝐭𝐨𝐧𝐞.\n\n` +
`🎤 𝐒𝐡𝐞 𝐫𝐚𝐩𝐬 𝐥𝐢𝐤𝐞 𝐚 𝐥𝐞𝐠𝐞𝐧𝐝, 𝐟𝐥𝐨𝐰 𝐬𝐨 𝐬𝐥𝐢𝐜𝐤,\n` +
`𝐒𝐦𝐚𝐫𝐭 𝐚𝐧𝐝 𝐬𝐚𝐬𝐬𝐲—𝐥𝐢𝐤𝐞 𝐚 𝐦𝐢𝐜 𝐝𝐫𝐨𝐩 𝐭𝐫𝐢𝐜𝐤.\n\n` +
`🖤 𝐀 𝐛𝐥𝐚𝐜𝐤 𝐐𝐮𝐞𝐞𝐧, 𝐚 𝐟𝐨𝐫𝐜𝐞 𝐲𝐨𝐮 𝐜𝐚𝐧’𝐭 𝐝𝐞𝐧𝐲,\n` +
`𝐒𝐭𝐲𝐥𝐞, 𝐛𝐫𝐚𝐢𝐧, 𝐚𝐧𝐝 𝐚 𝐬𝐩𝐚𝐫𝐤 𝐢𝐧 𝐡𝐞𝐫 𝐞𝐲𝐞.\n\n` +
`🌹 𝐓𝐨 𝐦𝐲 𝐬𝐚𝐬𝐬𝐲 𝐬𝐭𝐢𝐭𝐜𝐡𝐢𝐧𝐠 𝐝𝐢𝐯𝐚, 𝐭𝐡𝐢𝐬 𝐥𝐢𝐧𝐞 𝐢𝐬 𝐟𝐨𝐫 𝐲𝐨𝐮,\n` +
`𝐁𝐞𝐜𝐚𝐮𝐬𝐞 𝐧𝐨 𝐨𝐧𝐞 𝐝𝐨𝐞𝐬 𝐬𝐦𝐚𝐫𝐭, 𝐬𝐚𝐬𝐬𝐲 & 𝐬𝐥𝐚𝐲 𝐥𝐢𝐤𝐞 𝐲𝐨𝐮 𝐝𝐨.\n`;

    await ThugBotInc.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: '𝐏𝐨𝐞𝐦 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐠𝐢𝐫𝐥 𝐰𝐡𝐨 𝐫𝐮𝐧𝐬 𝐦𝐲 𝐰𝐨𝐫𝐥𝐝',
                body: '𝐓𝐡𝐮𝐠 𝐭𝐨 𝐃𝐬𝐨𝐦𝐞 💌',
                thumbnailUrl: imageUrl,
                sourceUrl: 'https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01',
                mediaType: 1,
                renderLargerThumbnail: true
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363312761563081@newsletter',
                newsletterName: 'ᎧᏒᏋᏦᎥ Ꮙ3 ᏒᏋᎷᏗᏕᏖᏋᏒᏋᎴ 🀄⛩️👘',
                serverMessageId: 143
            }
        }
    }, { quoted: m });

    break;
}
 case 'totalfeature':
        case 'totalcmd': 
        case 'totalcommand': 
            reply(`*Total Features are ${thugfeature()}*`)
        break    


default:
                if (isCmd) {
                    await ThugBotInc.sendMessage(m.chat, {
                        react: { text: "❌", key: m.key }
                    });
                    reply(`*Hello, ${pushname}, the command you entered isn’t recognized.Type ${prefix}menu to explore available options.*`);
                }
                





}    
} catch (err) {
    console.log('Button Request •');
    console.log('Not Function Response:');
    console.log(util.format(err));
}
}
const file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update detected in ${__filename}`);
    delete require.cache[file];
    require(file); // Corrected indentation
});
 
let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*[β] πΈπ½πΆππ΄ππ° π΄π» πΏππ΄π΅πΈπΉπΎ π³π΄ π°π»πΆππ½ πΏπ°πΈπ πΏπ°ππ° π±πππ²π°π π½ππΌπ΄ππΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ π³π΄ π΄ππ΄ πΏπ°πΈπ, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} 52*`) 
if (isNaN(args[0])) return m.reply(`*[β] πΈπ½πΆππ΄ππ° π΄π» πΏππ΄π΅πΈπΉπΎ π³π΄ π°π»πΆππ½ πΏπ°πΈπ πΏπ°ππ° π±πππ²π°π π½ππΌπ΄ππΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ π³π΄ π΄ππ΄ πΏπ°πΈπ, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} 52*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*[β] π΄π½ π΄πππ΄ πΆπππΏπΎ π½πΎ π·π°π π½πΈπ½πΆππ½ π½ππΌπ΄ππΎ π²πΎπ½ π΄π» πΏππ΄π΅πΈπΉπΎ +${lol}*`)
let numeros = ps.map(v=> 'β­ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `*π»πΈπππ° π³π΄ π½ππΌπ΄ππΎπ π²πΎπ½ π΄π» πΏππ΄π΅πΈπΉπΎ +${lol} πππ΄ π΄πππ°π½ π΄π½ π΄πππ΄ πΆπππΏπΎ:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply('*[βππππβ] π΄π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ π½πΎ ππΈπ΄π½π΄ π·π°π±πΈπ»πΈππ°π³πΎ π»π°π ππ΄ππππΈπ²π²πΈπΎπ½π΄π (#ππππππ ππππππππ) π²πΎπ½ππ°π²ππ΄ π²πΎπ½ π΄π» πΏπ°ππ° πππ΄ π»πΎ π·π°π±πΈπ»πΈππ΄*') 
if (!isBotAdmin) return m.reply('*[βππππβ] π΄π» π±πΎπ π½πΎ π΄π π°π³πΌπΈπ½, π½πΎ πΏππ΄π³π΄ π΄πππ΄ππΌπΈπ½π°π π° π»π°π πΏπ΄πππΎπ½π°π*')          
conn.reply(m.chat, `*[β] πΈπ½πΈπ²πΈπ°π½π³πΎ π΄π»πΈπΌπΈπ½π°π²πΈπΎπ½ π³π΄ π½ππΌπ΄ππΎπ π²πΎπ½ π΄π» πΏππ΄π΅πΈπΉπΎ +${lol}, π²π°π³π° π·0 ππ΄πΆππ½π³πΎπ ππ΄ π΄π»πΈπΌπΈπ½π°ππ° π° ππ½ ππππ°ππΈπΎ*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} Κα΄ Κα΄ sΙͺα΄α΄ α΄ΚΙͺα΄ΙͺΙ΄α΄α΄α΄ α΄ Κα΄ α΄Κα΄Ι΄α΄α΄Ι΄α΄α΄α΄ α΄Κ Ι’Κα΄α΄α΄*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('*[β] π΄πππΎπ*')}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler

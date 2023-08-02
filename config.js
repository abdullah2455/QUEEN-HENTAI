import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['+923094847200', 'MUHAMMAD ABDULLAH²⁰²³', true],
  ['+923094847200', 'MUHAMMAD ABDULLAH²⁰²³', true], 
  [''] 
] //Number of owners

global.mods = ['+923094847200','+923094847200'] 
global.prems = ['+923069051683', '+923069051683', '+923069051683']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '💝 MUHAMMAD ABDULLAH 💝'
global.premium = 'true'
global.packname = '💝 ABDULLAH BOTS💝 Created By 💝 ABDULLAH²⁰²³ 💝' 
global.author = '💝 Abdullah Official²⁰²³ 💝' 
global.igfg = '▢ Follow on Instagram\nhttps://instagram.com/malikabdullah1786?igshid=ZGUzMzM3NWJiOQ== Official²⁰²³\n' 
global.dygp = 'https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S'
global.fgsc = 'https://github.com/dinuwah/QUEEN-HENTAI' 
global.fgyt = 'https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S'
global.fgpyp = 'https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S'
global.fglog = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg' 


global.wait = '*💝 _Waiting Bro Uploading by 💝 Abdullah 💝..._*'
global.rwait = '🇱🇰'
global.dmoji = '🤣'
global.done = '👍'
global.error = '👎' 
global.xmoji = '🫶' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

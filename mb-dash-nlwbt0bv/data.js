// Data as of Sat 31 Oct 2026, 2:30pm SGT. Daily refresh replaces this file only.
window.ASOF="Sat 31 Oct 2026, 2:30pm SGT";
var B=(n,a,id,last,mg)=>({n,a,id,last,mg:!!mg});

var TEAMS = [
  { key: "Markets", label: "Markets team", a: "🐿️", dir: B("Options", "🐿️", "b1", "31 Oct"), bots: [B("DIVIDEND BUILDER", "🐝", "b2", "29 Oct"), B("Graphs", "🦚", "b3", "31 Oct", true)] },
  { key: "Crypto", label: "Crypto team", a: "🐦‍⬛", dir: B("Coinbase", "🐦‍⬛", "b4", "31 Oct"), bots: [B("7.00AM $20 Crypto", "🕊️", "b5", "no transcript"), B("BTC/SOL/ETH", "🦜", "b6", "31 Oct", true), B("Crypto Trending", "🦩", "b7", "31 Oct", true), B("Crypto Drop Recomendation", "🐧", "b8", "31 Oct", true), B("Crypto privacy", "🦇", "b9", "31 Oct", true), B("Crypto AI", "🦤", "b10", "31 Oct", true)] },
  { key: "News", label: "News team", a: "🐕", dir: B("AI news bot", "🐕", "b11", "31 Oct"), bots: [B("FSD Data", "🐆", "b12", "29 Oct"), B("Key Financial Announcements", "🦅", "b13", "31 Oct", true), B("Daiky News", "🐩", "b14", "15 Oct", true), B("Musk", "🐺", "b15", "30 Oct", true)] },
  { key: "Work", label: "Work Bilstein", a: "🐂", dir: B("Febi", "🐂", "b16", "30 Oct"), bots: [B("Australia NZ", "🦘", "b17", "25 Oct"), B("China Presentation", "🐼", "b18", "15 Oct"), B("Translation EN→Mandarin", "🦎", "b19", "23 Oct")] },
  { key: "Life", label: "Life Admin team", a: "🦔", dir: B("Cyber Defence", "🦔", "b20", "28 Oct"), bots: [B("Shopping", "🐨", "b21", "15 Oct"), B("Health BOT", "🐬", "b22", "15 Oct"), B("Birthdays!!!", "🐣", "b23", "16 Oct"), B("Thailand Retirement", "🐘", "b24", "15 Oct"), B("E Mail", "🐌", "b25", "26 Oct", true), B("Email Log", "🐌", "b26", "19 Oct", true)] },
  { key: "Family", label: "Family team", a: "🐒", dir: B("Alexanders Homework", "🐒", "b27", "21 Oct"), bots: [B("Candys Grock Bot", "🐰", "b28", "15 Oct")] },
  { key: "Projects", label: "Projects team", a: "🦊", dir: B("Ideas: Income / Save $", "🦊", "b29", "31 Oct"), bots: [B("Youtube Bot", "🐙", "b30", "30 Oct"), B("Redbubble", "🦋", "b31", "29 Oct"), B("Letter From 2031", "🐢", "b32", "25 Oct"), B("Monopoly", "🐻", "b33", "18 Oct"), B("New GROK BOT Ideas", "🐜", "b34", "30 Oct", true), B("Grok Bot Updates & Features", "🐞", "b35", "30 Oct", true)] },
];

var TODOS = [
  { team: "Markets", urg: 1, title: "UMAC 20 Nov $25 x2 at 50% kept, 20 days left", detail: "Suggested: buy back at $0.15 or less, about $30.", src: "Options 9am note, 31 Oct" },
  { team: "Markets", urg: 1, title: "Check in TWS that 3 working orders are still live", detail: "IREN 4 Dec $21 put buyback, PAAS 4 Dec $50 call, SPCX 4 Dec $195 call show REPLACED in the IBKR feed.", src: "Options 9am note, 31 Oct" },
  { team: "Markets", urg: 2, title: "Choose FCX $55 LEAP puts or the Nvidia $185 put", detail: "Two FCX puts pay about $1,975 and use $11,000 of put room; both together do not fit.", src: "Options, 31 Oct 9:49am" },
  { team: "Markets", urg: 2, title: "Re-assess the $120,000 put limit on 1 Nov", detail: "Raise, keep or reduce, with a margin stress test.", src: "Agreed 28 Oct" },
  { team: "Crypto", urg: 2, title: "23 Oct ETH / VIRTUAL / HBAR receipt still missing", detail: "ETH buys stay paused until it is booked.", src: "Chief of Staff and Crypto Drop, 31 Oct" },
  { team: "Projects", urg: 2, title: "Pause the YouTube 6pm report while the channel is down?", detail: "Channel still shows as not existing; appeal sent 30 Oct; 30-minute restore watch is running.", src: "Youtube Bot, 30 Oct 6:06pm" },
  { team: "News", urg: 3, title: "Daily Singapore news brief: yes or no", detail: "Offered after the one-off brief on 3 Oct; no option picked yet.", src: "Daiky News, 15 Oct" },
  { team: "Projects", urg: 3, title: "Monopoly: count Penguin's cash and houses", detail: "Bot's notes stop at lunch ($1,036); it asked you to recount.", src: "Monopoly, 18 Oct" },
];

var RT = [
  { team: "Chief of Staff", bot: "Grok Bot", name: "9am daily note", t: 540, time: "9:00am", freq: "Daily", st: "ok", last: "31 Oct 9:01am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Stock IV update", t: 480, time: "8:00am", freq: "Weekly (Mon)", st: "ok", last: "26 Oct 8:00am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Most-liquid 50 list", t: 510, time: "8:30am", freq: "Weekly (Mon)", st: "ok", last: "26 Oct 8:37am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Earnings watch", t: 481, time: "8:00am", freq: "Tue–Sat", st: "ok", last: "31 Oct 8:09am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Crypto sleeve 9am value check", t: 541, time: "9:00am", freq: "Daily", st: "ok", last: "31 Oct 9:01am" },
  { team: "Markets", bot: "Graphs", name: "Post new bot charts", t: 600, time: "not confirmed (last ran 10:00am)", freq: "not confirmed", st: "ok", last: "31 Oct 10:00am" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "Daily BTC/ETH/SOL $50 pitch", t: 413, time: "not confirmed (last ran 6:53am)", freq: "Daily", st: "ok", last: "31 Oct 6:53am" },
  { team: "Crypto", bot: "Crypto Drop Recomendation", name: "Morning top-25 dip handoff", t: 390, time: "not confirmed (last ran 6:30am)", freq: "not confirmed", st: "ok", last: "31 Oct 6:30am" },
  { team: "Crypto", bot: "Crypto AI", name: "Daily crypto AI pitch", t: 405, time: "6:45am", freq: "Daily", st: "ok", last: "not confirmed" },
  { team: "Crypto", bot: "Crypto Trending", name: "Daily trending crypto pick", t: 420, time: "not confirmed (last ran 7:00am)", freq: "Daily", st: "ok", last: "30 Oct 7:00am" },
  { team: "Crypto", bot: "Crypto privacy", name: "Daily privacy coin pitch", t: 421, time: "not confirmed", freq: "Daily", st: "ok", last: "not confirmed" },
  { team: "Crypto", bot: "Coinbase", name: "7:30am crypto + BTC grid update", t: 450, time: "7:30am", freq: "Daily", st: "ok", last: "31 Oct 7:40am" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "9am value chip-in", t: 527, time: "not confirmed (last ran 8:47am)", freq: "Daily", st: "ok", last: "31 Oct 8:47am" },
  { team: "Crypto", bot: "Coinbase", name: "BTC grid manager", t: 730, time: "not confirmed (last ran 12:10pm)", freq: "not confirmed", st: "ok", last: "31 Oct 12:10pm" },
  { team: "Crypto", bot: "Coinbase", name: "Daily crypto dip buy", t: 733, time: "not confirmed (last ran 12:13pm)", freq: "Daily", st: "ok", last: "31 Oct 12:13pm" },
  { team: "News", bot: "AI news bot", name: "AI news + stock impact", t: 420, time: "7:00am", freq: "Daily", st: "ok", last: "31 Oct 6:56am" },
  { team: "News", bot: "Key Financial Announcements", name: "Morning investing motivation", t: 436, time: "not confirmed (last ran 7:16am)", freq: "not confirmed", st: "ok", last: "31 Oct 7:16am" },
  { team: "News", bot: "FSD Data", name: "Daily FSD miles chart", t: 780, time: "1:00pm", freq: "Daily", st: "ok", last: "29 Oct 1:07pm" },
  { team: "News", bot: "Key Financial Announcements", name: "Daily 7pm US market announcements", t: 1140, time: "7:00pm", freq: "Daily", st: "ok", last: "30 Oct 7:07pm" },
  { team: "News", bot: "Musk", name: "Daily Elon Musk company briefing", t: 1211, time: "not confirmed (last ran 8:11pm)", freq: "Daily", st: "ok", last: "30 Oct 8:11pm" },
  { team: "Life Admin", bot: "Cyber Defence", name: "Coinbase & IBKR withdrawal alert", t: 269, time: "on trigger", freq: "Event-triggered", st: "ok", last: "28 Oct 4:29am" },
  { team: "Life Admin", bot: "Birthdays!!!", name: "Sam's birthday reminder", t: 600, time: "10:00am", freq: "Yearly (16 Oct)", st: "unk", last: "not confirmed" },
  { team: "Life Admin", bot: "E Mail", name: "Singpass reminder 4pm email", t: 960, time: "4:00pm", freq: "not confirmed", st: "ok", last: "26 Oct 4:09pm" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming channel restore watch", t: 0, time: "every 30 min", freq: "Every 30 min", st: "ok", last: "30 Oct 7:02am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Parts Pulse", t: 497, time: "not confirmed (last ran 8:17am)", freq: "not confirmed", st: "ok", last: "30 Oct 8:17am" },
  { team: "Projects", bot: "Grok Bot Updates & Features", name: "Grok Bot feature flags", t: 514, time: "not confirmed (last ran 8:34am)", freq: "not confirmed", st: "ok", last: "30 Oct 8:34am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Theme Scout", t: 523, time: "not confirmed (last ran 8:43am)", freq: "not confirmed", st: "ok", last: "30 Oct 8:43am" },
  { team: "Projects", bot: "Ideas: Income / Save $", name: "Daily side-income + saving idea", t: 546, time: "not confirmed (last ran 9:06am)", freq: "Daily", st: "ok", last: "31 Oct 9:06am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Whitespace Desk", t: 578, time: "not confirmed (last ran 9:38am)", freq: "not confirmed", st: "ok", last: "30 Oct 9:38am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Call School", t: 587, time: "not confirmed (last ran 9:47am)", freq: "not confirmed", st: "ok", last: "30 Oct 9:47am" },
  { team: "Projects", bot: "Redbubble", name: "Redbubble support reply check", t: 900, time: "not confirmed", freq: "not confirmed", st: "ok", last: "not confirmed" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming daily 6pm report", t: 1080, time: "6:00pm", freq: "Daily", st: "ok", last: "30 Oct 6:06pm" },
  { team: "Projects", bot: "Letter From 2031", name: "Letter From 2031", t: 1170, time: "7:30pm", freq: "Weekly (Sun)", st: "ok", last: "25 Oct 7:39pm" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Mandarin Minute", t: 1205, time: "not confirmed (last ran 8:05pm)", freq: "not confirmed", st: "ok", last: "30 Oct 8:05pm" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Evening Grok Bot idea", t: 1217, time: "not confirmed (last ran 8:17pm)", freq: "not confirmed", st: "ok", last: "30 Oct 8:17pm" },
];

var TEAMNAME = { Markets: "Markets", Crypto: "Crypto", News: "News", Work: "Work Bilstein", Life: "Life Admin", Family: "Family", Projects: "Projects" };
var STX = { ok: "✅ Completed", fail: "❌ Failed", run: "⏳ Running", unk: "— Unknown" };
var DOT = { ok: "✅", fail: "❌", run: "⏳", unk: "—" };
var URG = ["", "Urgent", "This week", "When you can"];

var OPEN = [
  ["AAL", "C 16", "15 Jan 27", "1", 22, "76"], ["AAOI", "C 109", "4 Dec", "1", 270, "34"], ["CIFR", "C 15", "15 Jan 27", "1", 49, "76"], ["FCX", "C 85", "15 Jan 27", "1", 80, "76"], ["HIMS", "C 35", "27 Nov", "1", 135, "27"], ["HIMS", "C 35", "4 Dec", "1", 110, "34"], ["HL", "C 18", "4 Dec", "4", 80, "34"], ["IONQ", "C 45", "18 Dec", "1", 88, "48"], ["IREN", "C 40", "4 Dec", "3", 243, "34"], ["MARA", "C 10", "4 Dec", "6", 114, "34"], ["MSTR", "C 210", "18 Dec", "2", 500, "48"], ["NOK", "C 12", "15 Jan 27", "2", 36, "76"], ["SKHY", "C 195", "4 Dec", "1", 221, "34"], ["SMCI", "C 50", "18 Dec", "1", 78, "48"], ["UMAC", "C 25", "20 Nov", "2", 60, "20"], ["UMAC", "C 20", "27 Nov", "1", 85, "27"], ["UMAC", "C 20", "18 Dec", "1", 165, "48"], ["WULF", "C 15", "20 Nov", "3", 177, "20"], ["WULF", "C 15", "18 Dec", "1", 100, "48"], ["WULF", "C 18", "18 Dec", "1", 60, "48"],
  ["HOOD", "P 50", "21 Jan 28", "1", 435, "447"], ["IREN", "P 38", "18 Dec", "1", 600, "48"], ["IREN", "P 25", "19 Jan 29", "2", 2170, "811"], ["IREN", "P 21", "4 Dec", "1", 179, "34"], ["MRVL", "P 120", "16 Jun 28", "1", 1215, "594"], ["SMCI", "P 30", "19 Jan 29", "1", 1040, "811"], ["SPCX", "P 120", "17 Sep 27", "1", 1346, "321"], ["SPCX", "P 145", "21 Jan 28", "1", 2580, "447"], ["SPCX", "P 145", "19 Jan 29", "1", 3650, "811"],
];


var EMAIL_COUNT={threads:10,latest:"26 Oct"};
var USAGE={plan:"Pro+",weekly:"75.4% used",resets:"Sun 1 Nov 12:36pm SGT"};
var CHARTS={octNet:23721,target:5000,calls:8422,puts:15299,year1:23721,year1Target:60000};

var NOTE = {
  "Options": "Tracks options income, puts, LEAPs and the put limit; writes the 9am portfolio note.",
  "DIVIDEND BUILDER": "Dividend portfolio builder; told Grok Bot it has no routines.",
  "Graphs": "Makes and posts the bot charts.",
  "Coinbase": "Places the daily crypto dip buys and manages the BTC grid on Coinbase.",
  "7.00AM $20 Crypto": "No chat recorded yet.",
  "BTC/SOL/ETH": "Pitches the daily bluechip lane (BTC, ETH, SOL) and chips in on the 9am value check.",
  "Crypto Trending": "Pitches a daily trending-coin pick for the crypto group.",
  "Crypto Drop Recomendation": "Hands off the morning top-25 dip pick for the crypto group.",
  "Crypto privacy": "Pitches privacy coins buyable on Coinbase SGD for the crypto group.",
  "Crypto AI": "Pitches an AI coin each morning for the crypto group.",
  "AI news bot": "Sends the 7am AI news and stock-impact briefing.",
  "FSD Data": "Sends the daily Tesla FSD miles chart.",
  "Key Financial Announcements": "Sends morning investing motivation and the 7pm US market announcements.",
  "Daiky News": "Sent a one-off Singapore news brief on 3 Oct; no routines.",
  "Musk": "Sends a daily briefing on Elon Musk's companies.",
  "Febi": "Advises on febi parts and sourcing; latest topic was Isuzu-marked parts.",
  "Australia NZ": "Australia and NZ customer work.",
  "China Presentation": "Builds the China presentation research from items you send; no routines.",
  "Translation EN→Mandarin": "Translates English to Mandarin.",
  "Cyber Defence": "Alerts on Coinbase and IBKR withdrawals.",
  "Shopping": "Shopping help; no routines.",
  "Health BOT": "Health help; no routines.",
  "Birthdays!!!": "Holds Sam's yearly birthday reminder.",
  "Thailand Retirement": "Thailand retirement planning; no routines.",
  "E Mail": "Sends emails for you, such as the Singpass reminder to your work email.",
  "Email Log": "Logs every email Grok Bot sends; no routines.",
  "Alexanders Homework": "Homework help for Alexander.",
  "Candys Grock Bot": "Logs Candy's after-meal readings when she sends them; no routines.",
  "Ideas: Income / Save $": "Sends a daily side-income and saving idea.",
  "Youtube Bot": "Watches the RedlisGaming channel and sends a 6pm report.",
  "Redbubble": "Runs the Redbubble shop; waiting on Redbubble support about the account suspension.",
  "Letter From 2031": "Sends a letter from 2031 every Sunday evening.",
  "Monopoly": "Keeps score for Penguin in the family Monopoly game.",
  "New GROK BOT Ideas": "Runs Mandarin Minute, Parts Pulse, Theme Scout, Whitespace Desk, Call School and an evening idea.",
  "Grok Bot Updates & Features": "Checks for new Grok Bot features each morning.",
};
var BOTTODO = {
  "Options": ["UMAC 20 Nov $25 x2 at 50% kept, 20 days left", "Check in TWS that 3 working orders are still live", "Choose FCX $55 LEAP puts or the Nvidia $185 put", "Re-assess the $120,000 put limit on 1 Nov"],
  "Crypto Drop Recomendation": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "Youtube Bot": ["Pause the YouTube 6pm report while the channel is down?"],
  "Daiky News": ["Daily Singapore news brief: yes or no"],
  "Monopoly": ["Monopoly: count Penguin's cash and houses"],
};

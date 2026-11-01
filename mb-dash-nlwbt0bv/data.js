// Data as of Sun 1 Nov 2026, 9:25am SGT. Daily refresh replaces this file only.
window.ASOF="Sun 1 Nov 2026, 9:25am SGT";
var B=(n,a,id,last,mg)=>({n,a,id,last,mg:!!mg});

var TEAMS = [
  { key: "Markets", label: "Markets team", a: "🐿️", dir: B("Options", "🐿️", "b1", "1 Nov"), bots: [B("DIVIDEND BUILDER", "🐝", "b2", "29 Oct"), B("Graphs", "🦚", "b3", "1 Nov", true)] },
  { key: "Crypto", label: "Crypto team", a: "🐦‍⬛", dir: B("Coinbase", "🐦‍⬛", "b4", "1 Nov"), bots: [B("7.00AM $20 Crypto", "🕊️", "b5", "1 Nov"), B("BTC/SOL/ETH", "🦜", "b6", "1 Nov", true), B("Crypto Trending", "🦩", "b7", "1 Nov", true), B("Crypto Drop Recomendation", "🐧", "b8", "1 Nov", true), B("Crypto privacy", "🦇", "b9", "1 Nov", true), B("Crypto AI", "🦤", "b10", "1 Nov", true)] },
  { key: "News", label: "News team", a: "🐕", dir: B("AI news bot", "🐕", "b11", "1 Nov"), bots: [B("FSD Data", "🐆", "b12", "1 Nov"), B("Key Financial Announcements", "🦅", "b13", "1 Nov", true), B("Daiky News", "🐩", "b14", "15 Oct", true), B("Musk", "🐺", "b15", "30 Oct", true)] },
  { key: "Work", label: "Work Bilstein", a: "🐂", dir: B("Febi", "🐂", "b16", "30 Oct"), bots: [B("Australia NZ", "🦘", "b17", "25 Oct"), B("China Presentation", "🐼", "b18", "15 Oct"), B("Translation EN→Mandarin", "🦎", "b19", "23 Oct")] },
  { key: "Life", label: "Life Admin team", a: "🦔", dir: B("Cyber Defence", "🦔", "b20", "28 Oct"), bots: [B("Shopping", "🐨", "b21", "15 Oct"), B("Health BOT", "🐬", "b22", "15 Oct"), B("Birthdays!!!", "🐣", "b23", "16 Oct"), B("Thailand Retirement", "🐘", "b24", "15 Oct"), B("E Mail", "🐌", "b25", "1 Nov", true), B("Email Log", "🐌", "b26", "19 Oct", true)] },
  { key: "Family", label: "Family team", a: "🐒", dir: B("Alexanders Homework", "🐒", "b27", "21 Oct"), bots: [B("Candys Grock Bot", "🐰", "b28", "15 Oct")] },
  { key: "Projects", label: "Projects team", a: "🦊", dir: B("Ideas: Income / Save $", "🦊", "b29", "1 Nov"), bots: [B("Youtube Bot", "🐙", "b30", "31 Oct"), B("Redbubble", "🦋", "b31", "29 Oct"), B("Letter From 2031", "🐢", "b32", "25 Oct"), B("Monopoly", "🐻", "b33", "18 Oct"), B("New GROK BOT Ideas", "🐜", "b34", "31 Oct", true), B("Grok Bot Updates & Features", "🐞", "b35", "30 Oct", true)] },
];

var TODOS = [
  { team: "Markets", urg: 1, title: "UMAC 20 Nov $25 x2 at 50% kept, 19 days left", detail: "Suggested: buy back at $0.15 or less, about $30.", src: "Grok Bot 9am note, 1 Nov" },
  { team: "Markets", urg: 1, title: "Check in TWS that 3 working orders are still live", detail: "IREN 4 Dec $21 put buyback, PAAS 4 Dec $50 call, SPCX 4 Dec $195 call still show REPLACED in the IBKR feed.", src: "Grok Bot 9am note, 1 Nov" },
  { team: "Work", urg: 1, title: "Review the numbered v4 work deck (today)", detail: "41 pages, each marked Page N / 41. The PDF is in your work inbox and in the E Mail chat; tell E Mail the page number and the change.", src: "E Mail, 31 Oct 8:58pm and 1 Nov 7:59am" },
  { team: "Markets", urg: 2, title: "NVDA $185 + FCX $55 puts on next red day?", detail: "Options suggests both: about $3,860 premium, using $24,000 of the $27,800 put room. Put limit kept at $120,000 for November.", src: "Options, 31 Oct 3:38pm and 1 Nov 9:05am" },
  { team: "Markets", urg: 2, title: "HL 4 Dec $18 x4 buyback at $0.10?", detail: "Now 48% kept. Options suggested buying back alongside UMAC; AAOI, IREN x3 and MSTR x2 Dec calls are past 50% but on hold until Monday's 4:30pm review.", src: "Options, 31 Oct 3:38pm; Grok Bot 9am note, 1 Nov" },
  { team: "Crypto", urg: 2, title: "23 Oct ETH / VIRTUAL / HBAR receipt still missing", detail: "ETH buys stay paused until it is booked.", src: "Chief of Staff and BTC/SOL/ETH, 1 Nov" },
  { team: "Family", urg: 2, title: "Mum's family-tree search: next step", detail: "Chief of Staff's pick: order the grandparents' marriage certificate (about £12.50). Or the Army service record (£42.25, ~30 working days), or switch on Route traffic through this computer so it can search FreeBMD.", src: "Chief of Staff, 1 Nov 9:05am" },
  { team: "News", urg: 3, title: "Daily Singapore news brief: yes or no", detail: "Offered after the one-off brief on 3 Oct; no option picked yet.", src: "Daiky News, 15 Oct" },
  { team: "Projects", urg: 3, title: "Monopoly: count Penguin's cash and houses", detail: "Bot's notes stop at lunch ($1,036); it asked you to recount.", src: "Monopoly, 18 Oct" },
];

var RT = [
  { team: "Chief of Staff", bot: "Grok Bot", name: "9am daily note", t: 540, time: "9:00am", freq: "Daily", st: "ok", last: "1 Nov 9:04am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Stock IV update", t: 480, time: "8:00am", freq: "Weekly (Mon)", st: "ok", last: "26 Oct 8:00am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Most-liquid 50 list", t: 510, time: "8:30am", freq: "Weekly (Mon)", st: "ok", last: "26 Oct 8:37am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Earnings watch", t: 481, time: "8:00am", freq: "Tue–Sat", st: "ok", last: "31 Oct 8:09am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Live dashboard refresh", t: 555, time: "9:15am", freq: "Daily", st: "run", last: "1 Nov 9:15am (first run, running now)" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Crypto sleeve 9am value check", t: 541, time: "9:00am", freq: "Daily", st: "ok", last: "1 Nov 8:57am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Monthly put limit review", t: 450, time: "7:30am", freq: "Monthly (1st)", st: "ok", last: "1 Nov 7:33am" },
  { team: "Markets", bot: "Graphs", name: "Post new bot charts", t: 600, time: "not confirmed (last ran 9:08am)", freq: "not confirmed", st: "ok", last: "1 Nov 9:08am" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "Daily BTC/ETH/SOL $50 pitch", t: 413, time: "not confirmed (last ran 6:50am)", freq: "Daily", st: "ok", last: "1 Nov 6:50am" },
  { team: "Crypto", bot: "Crypto Drop Recomendation", name: "Morning top-25 dip handoff", t: 390, time: "not confirmed (last ran 6:31am)", freq: "not confirmed", st: "ok", last: "1 Nov 6:31am" },
  { team: "Crypto", bot: "Crypto AI", name: "Daily crypto AI pitch", t: 405, time: "6:45am", freq: "Daily", st: "ok", last: "1 Nov 6:51am" },
  { team: "Crypto", bot: "Crypto Trending", name: "Daily trending crypto pick", t: 420, time: "not confirmed (last ran 6:56am)", freq: "Daily", st: "ok", last: "1 Nov 6:56am" },
  { team: "Crypto", bot: "Crypto privacy", name: "Daily privacy coin pitch", t: 407, time: "not confirmed (last ran 6:47am)", freq: "Daily", st: "ok", last: "1 Nov 6:47am" },
  { team: "Crypto", bot: "Coinbase", name: "7:30am crypto + BTC grid update", t: 450, time: "7:30am", freq: "Daily", st: "ok", last: "1 Nov 7:38am" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "9am value chip-in", t: 528, time: "not confirmed (last ran 8:48am)", freq: "Daily", st: "ok", last: "1 Nov 8:48am" },
  { team: "Crypto", bot: "Coinbase", name: "BTC grid manager", t: 730, time: "not confirmed (last ran 12:10pm)", freq: "not confirmed", st: "ok", last: "31 Oct 12:10pm" },
  { team: "Crypto", bot: "Coinbase", name: "Daily crypto dip buy", t: 733, time: "from 8:00am, on a 1% dip", freq: "Daily", st: "run", last: "1 Nov: BTC / FET / AVAX not filled at 8:46am" },
  { team: "News", bot: "AI news bot", name: "AI news + stock impact", t: 420, time: "7:00am", freq: "Daily", st: "ok", last: "1 Nov 6:53am" },
  { team: "News", bot: "Key Financial Announcements", name: "Morning investing motivation", t: 436, time: "not confirmed (last ran 7:15am)", freq: "not confirmed", st: "ok", last: "1 Nov 7:15am" },
  { team: "News", bot: "FSD Data", name: "Weekly FSD miles update", t: 541, time: "9:00am", freq: "Weekly (Sun)", st: "ok", last: "1 Nov 9:08am" },
  { team: "News", bot: "Key Financial Announcements", name: "7pm US market announcements", t: 1140, time: "7:00pm", freq: "not confirmed (no run seen Sat 31 Oct)", st: "ok", last: "30 Oct 7:07pm" },
  { team: "News", bot: "Musk", name: "Daily Elon Musk company briefing", t: 1211, time: "not confirmed (last ran 8:11pm)", freq: "Daily", st: "ok", last: "31 Oct 8:11pm" },
  { team: "Life Admin", bot: "Cyber Defence", name: "Coinbase & IBKR withdrawal alert", t: 269, time: "on trigger", freq: "Event-triggered", st: "ok", last: "28 Oct 4:29am" },
  { team: "Life Admin", bot: "Birthdays!!!", name: "Sam's birthday reminder", t: 600, time: "10:00am", freq: "Yearly (16 Oct)", st: "unk", last: "not confirmed" },
  { team: "Life Admin", bot: "E Mail", name: "Singpass reminder 4pm email", t: 960, time: "4:00pm", freq: "not confirmed", st: "ok", last: "26 Oct 4:09pm" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming channel restore watch", t: 0, time: "every 30 min", freq: "Every 30 min (channel back 30 Oct; not confirmed if still on)", st: "unk", last: "30 Oct 7:02am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Parts Pulse", t: 497, time: "not confirmed (last ran 8:17am)", freq: "not confirmed", st: "ok", last: "30 Oct 8:17am" },
  { team: "Projects", bot: "Grok Bot Updates & Features", name: "Grok Bot feature flags", t: 514, time: "not confirmed (last ran 8:34am)", freq: "not confirmed", st: "ok", last: "30 Oct 8:34am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Theme Scout", t: 523, time: "not confirmed (last ran 8:43am)", freq: "not confirmed", st: "ok", last: "30 Oct 8:43am" },
  { team: "Projects", bot: "Ideas: Income / Save $", name: "Daily side-income + saving idea", t: 554, time: "not confirmed (last ran 9:14am)", freq: "Daily", st: "ok", last: "1 Nov 9:14am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Whitespace Desk", t: 578, time: "not confirmed (last ran 9:38am)", freq: "not confirmed", st: "ok", last: "30 Oct 9:38am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Call School", t: 587, time: "not confirmed (last ran 9:47am)", freq: "not confirmed", st: "ok", last: "30 Oct 9:47am" },
  { team: "Projects", bot: "Redbubble", name: "Redbubble support reply check", t: 900, time: "not confirmed", freq: "not confirmed", st: "ok", last: "not confirmed" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming daily 6pm report", t: 1080, time: "6:00pm", freq: "Daily", st: "ok", last: "31 Oct 6:02pm" },
  { team: "Projects", bot: "Letter From 2031", name: "Letter From 2031", t: 1170, time: "7:30pm", freq: "Weekly (Sun)", st: "ok", last: "25 Oct 7:39pm (next: tonight)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Mandarin Minute", t: 1205, time: "not confirmed (last ran 8:05pm)", freq: "not confirmed", st: "ok", last: "30 Oct 8:05pm" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Evening Grok Bot idea", t: 1214, time: "not confirmed (last ran 8:14pm)", freq: "not confirmed", st: "ok", last: "31 Oct 8:14pm" },
];

var TEAMNAME = { Markets: "Markets", Crypto: "Crypto", News: "News", Work: "Work Bilstein", Life: "Life Admin", Family: "Family", Projects: "Projects" };
var STX = { ok: "✅ Completed", fail: "❌ Failed", run: "⏳ Running", unk: "— Unknown" };
var DOT = { ok: "✅", fail: "❌", run: "⏳", unk: "—" };
var URG = ["", "Urgent", "This week", "When you can"];

var OPEN = [
  ["AAL", "C 16", "15 Jan 27", "1", 22, "75"], ["AAOI", "C 109", "4 Dec", "1", 270, "33"], ["CIFR", "C 15", "15 Jan 27", "1", 49, "75"], ["FCX", "C 85", "15 Jan 27", "1", 80, "75"], ["HIMS", "C 35", "27 Nov", "1", 135, "26"], ["HIMS", "C 35", "4 Dec", "1", 110, "33"], ["HL", "C 18", "4 Dec", "4", 80, "33"], ["IONQ", "C 45", "18 Dec", "1", 88, "47"], ["IREN", "C 40", "4 Dec", "3", 243, "33"], ["MARA", "C 10", "4 Dec", "6", 114, "33"], ["MSTR", "C 210", "18 Dec", "2", 500, "47"], ["NOK", "C 12", "15 Jan 27", "2", 36, "75"], ["SKHY", "C 195", "4 Dec", "1", 221, "33"], ["SMCI", "C 50", "18 Dec", "1", 78, "47"], ["UMAC", "C 25", "20 Nov", "2", 60, "19"], ["UMAC", "C 20", "27 Nov", "1", 85, "26"], ["UMAC", "C 20", "18 Dec", "1", 165, "47"], ["WULF", "C 15", "20 Nov", "3", 177, "19"], ["WULF", "C 15", "18 Dec", "1", 100, "47"], ["WULF", "C 18", "18 Dec", "1", 60, "47"],
  ["HOOD", "P 50", "21 Jan 28", "1", 435, "446"], ["IREN", "P 38", "18 Dec", "1", 600, "47"], ["IREN", "P 25", "19 Jan 29", "2", 2170, "810"], ["IREN", "P 21", "4 Dec", "1", 179, "33"], ["MRVL", "P 120", "16 Jun 28", "1", 1215, "593"], ["SMCI", "P 30", "19 Jan 29", "1", 1040, "810"], ["SPCX", "P 120", "17 Sep 27", "1", 1346, "320"], ["SPCX", "P 145", "21 Jan 28", "1", 2580, "446"], ["SPCX", "P 145", "19 Jan 29", "1", 3650, "810"],
];


var EMAIL_COUNT={threads:37,latest:"31 Oct"};
var USAGE={plan:"Pro+",weekly:"83.2% used",resets:"Sun 1 Nov 12:36pm SGT"};
var CHARTS={octNet:23721,target:5000,calls:8422,puts:15299,year1:23721,year1Target:60000};

var NOTE = {
  "Options": "Tracks options income, puts, LEAPs and the put limit; ran the 1 Nov stress test (limit kept at $120,000).",
  "DIVIDEND BUILDER": "Dividend portfolio builder; told Grok Bot it has no routines.",
  "Graphs": "Makes and posts the bot charts.",
  "Coinbase": "Places the daily crypto dip buys and manages the BTC grid on Coinbase.",
  "7.00AM $20 Crypto": "Group chat where the crypto lanes pitch each morning and Chief of Staff locks the 7am US$50 buy.",
  "BTC/SOL/ETH": "Pitches the daily bluechip lane (BTC, ETH, SOL) and chips in on the 9am value check.",
  "Crypto Trending": "Pitches a daily trending-coin pick for the crypto group.",
  "Crypto Drop Recomendation": "Hands off the morning top-25 dip pick for the crypto group.",
  "Crypto privacy": "Pitches privacy coins buyable on Coinbase SGD for the crypto group.",
  "Crypto AI": "Pitches an AI coin each morning for the crypto group.",
  "AI news bot": "Sends the 7am AI news and stock-impact briefing.",
  "FSD Data": "Sends the Tesla FSD and Robotaxi miles update every Sunday around 9am (weekly since 29 Oct).",
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
  "E Mail": "Sends emails for you; prepared the numbered v4 work deck for your iPad review.",
  "Email Log": "Logs every email Grok Bot sends; no routines.",
  "Alexanders Homework": "Homework help for Alexander.",
  "Candys Grock Bot": "Logs Candy's after-meal readings when she sends them; no routines.",
  "Ideas: Income / Save $": "Sends a daily side-income and saving idea.",
  "Youtube Bot": "Watches the RedlisGaming channel (fully back since 30 Oct) and sends a 6pm report.",
  "Redbubble": "Runs the Redbubble shop; waiting on Redbubble support about the account suspension.",
  "Letter From 2031": "Sends a letter from 2031 every Sunday evening.",
  "Monopoly": "Keeps score for Penguin in the family Monopoly game.",
  "New GROK BOT Ideas": "Runs Mandarin Minute, Parts Pulse, Theme Scout, Whitespace Desk, Call School and an evening idea.",
  "Grok Bot Updates & Features": "Checks for new Grok Bot features each morning.",
};
var BOTTODO = {
  "Options": ["UMAC 20 Nov $25 x2 at 50% kept, 19 days left", "Check in TWS that 3 working orders are still live", "NVDA $185 + FCX $55 puts on next red day?", "HL 4 Dec $18 x4 buyback at $0.10?"],
  "Crypto Drop Recomendation": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "BTC/SOL/ETH": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "E Mail": ["Review the numbered v4 work deck (today)"],
  "Daiky News": ["Daily Singapore news brief: yes or no"],
  "Monopoly": ["Monopoly: count Penguin's cash and houses"],
};

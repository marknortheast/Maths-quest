// Data as of Tue 3 Nov 2026, 9:24am SGT. Daily refresh replaces this file only.
window.ASOF="Tue 3 Nov 2026, 9:24am SGT";
var B=(n,a,id,last,mg)=>({n,a,id,last,mg:!!mg});

var TEAMS = [
  { key: "Markets", label: "Markets team", a: "🐿️", dir: B("Options", "🐿️", "b1", "3 Nov"), bots: [B("DIVIDEND BUILDER", "🐝", "b2", "1 Nov"), B("Graphs", "🦚", "b3", "3 Nov", true)] },
  { key: "Crypto", label: "Crypto team", a: "🐦‍⬛", dir: B("Coinbase", "🐦‍⬛", "b4", "3 Nov"), bots: [B("7.00AM $20 Crypto", "🕊️", "b5", "3 Nov"), B("BTC/SOL/ETH", "🦜", "b6", "2 Nov", true), B("Crypto Trending", "🦩", "b7", "2 Nov", true), B("Crypto Drop Recomendation", "🐧", "b8", "2 Nov", true), B("Crypto privacy", "🦇", "b9", "2 Nov", true), B("Crypto AI", "🦤", "b10", "2 Nov", true)] },
  { key: "News", label: "News team", a: "🐕", dir: B("AI news bot", "🐕", "b11", "1 Nov"), bots: [B("FSD Data", "🐆", "b12", "1 Nov"), B("Key Financial Announcements", "🦅", "b13", "1 Nov", true), B("Daiky News", "🐩", "b14", "15 Oct", true), B("Musk", "🐺", "b15", "1 Nov", true)] },
  { key: "Work", label: "Work Bilstein", a: "🐂", dir: B("Febi", "🐂", "b16", "30 Oct"), bots: [B("Australia NZ", "🦘", "b17", "25 Oct"), B("China Presentation", "🐼", "b18", "15 Oct"), B("Translation EN→Mandarin", "🦎", "b19", "23 Oct")] },
  { key: "Life", label: "Life Admin team", a: "🦔", dir: B("Cyber Defence", "🦔", "b20", "28 Oct"), bots: [B("Shopping", "🐨", "b21", "15 Oct"), B("Health BOT", "🐬", "b22", "15 Oct"), B("Birthdays!!!", "🐣", "b23", "16 Oct"), B("Thailand Retirement", "🐘", "b24", "15 Oct"), B("E Mail", "🐌", "b25", "2 Nov", true), B("Email Log", "🐌", "b26", "19 Oct", true)] },
  { key: "Family", label: "Family team", a: "🐒", dir: B("Alexanders Homework", "🐒", "b27", "21 Oct"), bots: [B("Candys Grock Bot", "🐰", "b28", "15 Oct")] },
  { key: "Projects", label: "Projects team", a: "🦊", dir: B("Ideas: Income / Save $", "🦊", "b29", "2 Nov"), bots: [B("Youtube Bot", "🐙", "b30", "2 Nov"), B("Redbubble", "🦋", "b31", "29 Oct"), B("Letter From 2031", "🐢", "b32", "1 Nov"), B("Monopoly", "🐻", "b33", "18 Oct"), B("New GROK BOT Ideas", "🐜", "b34", "2 Nov", true), B("Grok Bot Updates & Features", "🐞", "b35", "2 Nov", true)] },
];

var TODOS = [
  { team: "Markets", urg: 1, title: "SMCI 18 Dec $50 call: buy back at $0.36 before tonight's results", detail: "50% kept. SMCI, MARA and SPCX report tonight. ⭐ Buy back at $0.36 (keeps 54%), or hold (the call is 64% out of the money).", src: "Options 7:30am update, 3 Nov" },
  { team: "Markets", urg: 1, title: "IREN 4 Dec $21 put: roll to 15 Jan $20 for a credit", detail: "IREN is only 4.9% above the strike, results about 5 Nov. ⭐ Buy back the Dec $21 and sell the 15 Jan 2027 $20 for at least $0.40 credit (also frees $100 of put room). Or hold through results and roll after.", src: "Options 7:30am update, 3 Nov; Grok Bot 9am note, 3 Nov" },
  { team: "Markets", urg: 1, title: "WULF 20 Nov $15 x3: buy back at $0.26", detail: "59% kept, 17 days left (21-day rule), results 9 Nov. ⭐ Buy back 3 at $0.26 GTC (keeps 56%). The UMAC 20 Nov $25 x2 buy-back at $0.10 is already working.", src: "Options 7:30am update, 3 Nov; Grok Bot 9am note, 3 Nov" },
  { team: "Work", urg: 2, title: "Work deck review: next up page 17", detail: "Pages 1 to 16 were reviewed and updated on 1 Nov; the latest PDF and PowerPoint were emailed to your work inbox. Tell E Mail the page number and the change.", src: "E Mail, 1 Nov 7:37pm" },
  { team: "Markets", urg: 2, title: "Other calls past 50%: buy back before results?", detail: "⭐ HIMS 27 Nov $35 at $0.45 and 4 Dec $35 at $0.50 (results 9 Nov); UMAC 27 Nov $20 at $0.38 and 18 Dec $20 at $0.70 (results ~5 Nov); IONQ 18 Dec $45 at $0.38 (results 4 Nov); WULF 18 Dec $18 at $0.28; CIFR 15 Jan $15 at $0.23; MARA 4 Dec $10 x6 at $0.09.", src: "Options 7:30am update, 3 Nov" },
  { team: "Markets", urg: 2, title: "Wife's SPCX: covered call after tonight's results", detail: "On a green day after results: ⭐ 15 Jan 2027 $180 call at about $2.36 (about $236, delta 0.155). Alternative $185 at about $1.94. The $175 is just above the safe band.", src: "Options 7:30am update, 3 Nov" },
  { team: "Crypto", urg: 2, title: "23 Oct ETH / VIRTUAL / HBAR receipt still missing", detail: "ETH buys stay paused until it is booked.", src: "Grok Bot 9am note, 3 Nov" },
  { team: "Life", urg: 2, title: "Withdrawal alert shows as paused", detail: "The Coinbase & IBKR withdrawal alert is still listed as paused in the plan usage report (last alert 28 Oct 4:29am). Confirm whether that is intended.", src: "Plan usage report, 3 Nov" },
  { team: "Family", urg: 2, title: "Mum's family-tree search: next step", detail: "Chief of Staff's pick: order the grandparents' marriage certificate (about £12.50). Or the Army service record (£42.25, ~30 working days), or switch on Route traffic through this computer so it can search FreeBMD.", src: "Chief of Staff, 1 Nov 9:05am" },
  { team: "Markets", urg: 3, title: "Put room down to $9,100 of $120,000", detail: "Monday's NVDA 15 Dec 2028 $190 put (+$3,120) used $19,000 of room; $110,900 is used. The VST Jan 2029 $130 put idea ($13,000) won't fit unless puts close or the limit is raised at the 1 Dec review.", src: "Options 7:30am update, 3 Nov" },
  { team: "Crypto", urg: 3, title: "Top up the Coinbase main portfolio USDC", detail: "About 126 USDC cash was left after the 2 Nov buys; today's US$50 BTC / RENDER / PUMP buys are waiting for a dip. You said you plan to top up.", src: "Chief of Staff 7am lock, 3 Nov" },
  { team: "News", urg: 3, title: "Daily Singapore news brief: yes or no", detail: "Offered after the one-off brief on 3 Oct; no option picked yet.", src: "Daiky News, 15 Oct" },
  { team: "Projects", urg: 3, title: "Monopoly: count Penguin's cash and houses", detail: "Bot's notes stop at lunch ($1,036); it asked you to recount.", src: "Monopoly, 18 Oct" },
];

var RT = [
  { team: "Chief of Staff", bot: "Grok Bot", name: "9am daily note", t: 540, time: "9:00am", freq: "Daily", st: "ok", last: "3 Nov 9:10am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Stock IV update", t: 480, time: "8:00am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:08am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Most-liquid 50 list", t: 510, time: "8:30am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:32am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Earnings watch", t: 481, time: "8:00am", freq: "Tue–Sat", st: "ok", last: "3 Nov 8:10am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Live dashboard refresh", t: 555, time: "9:15am", freq: "Daily", st: "run", last: "2 Nov 9:21am (OK); 3 Nov running now" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Crypto sleeve 9am value check", t: 541, time: "9:00am", freq: "Daily", st: "ok", last: "3 Nov 8:59am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Monthly put limit review", t: 450, time: "7:30am", freq: "Monthly (1st)", st: "ok", last: "1 Nov 7:33am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Daily holdings price digest", t: 394, time: "not confirmed (last seen 6:34am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "3 Nov 6:34am" },
  { team: "Markets", bot: "Options", name: "Options positions morning check", t: 407, time: "not confirmed (last seen 6:47am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "3 Nov 6:47am" },
  { team: "Markets", bot: "Options", name: "7:30am options progress update", t: 450, time: "7:30am", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "3 Nov 7:30am (charts posted 7:53am)" },
  { team: "Markets", bot: "Options", name: "Daily megacap chart scan", t: 488, time: "not confirmed (last seen 8:08am)", freq: "about 5 runs a week", st: "ok", last: "3 Nov 8:08am" },
  { team: "Markets", bot: "Options", name: "4:30pm pre-market full options review", t: 990, time: "4:30pm", freq: "about 5 runs a week", st: "ok", last: "2 Nov 4:39pm" },
  { team: "Markets", bot: "Graphs", name: "Post new bot charts", t: 535, time: "not confirmed (last ran 8:55am)", freq: "not confirmed (about 105 runs a week)", st: "ok", last: "3 Nov 8:55am" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "Daily BTC/ETH/SOL $50 pitch", t: 413, time: "not confirmed (last seen 6:50am)", freq: "Daily", st: "ok", last: "1 Nov 6:50am (2–3 Nov runs not confirmed)" },
  { team: "Crypto", bot: "Crypto Drop Recomendation", name: "Morning top-25 dip handoff", t: 390, time: "not confirmed (last seen 6:31am)", freq: "not confirmed", st: "ok", last: "1 Nov 6:31am (2–3 Nov runs not confirmed)" },
  { team: "Crypto", bot: "Crypto AI", name: "Daily crypto AI pitch", t: 405, time: "6:45am", freq: "Daily", st: "ok", last: "1 Nov 6:51am (2–3 Nov runs not confirmed)" },
  { team: "Crypto", bot: "Crypto Trending", name: "Daily trending crypto pick", t: 420, time: "not confirmed (last seen 6:56am)", freq: "Daily", st: "ok", last: "1 Nov 6:56am (2–3 Nov runs not confirmed)" },
  { team: "Crypto", bot: "Crypto privacy", name: "Daily privacy coin pitch", t: 407, time: "not confirmed (last seen 6:47am)", freq: "Daily", st: "ok", last: "1 Nov 6:47am (2–3 Nov runs not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "7:30am crypto + BTC grid update", t: 450, time: "7:30am", freq: "Daily", st: "ok", last: "1 Nov 7:38am (2–3 Nov runs not confirmed)" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "9am value chip-in", t: 528, time: "not confirmed (last seen 8:48am)", freq: "Daily", st: "ok", last: "1 Nov 8:48am (2–3 Nov runs not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "BTC grid manager", t: 730, time: "every 30 min (about 336 runs a week)", freq: "Every 30 min", st: "ok", last: "2 Nov (time not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "Daily crypto dip buy", t: 733, time: "from 8:00am, on a 1% dip", freq: "Daily (checks about every 30 min)", st: "run", last: "3 Nov: BTC / RENDER / PUMP waiting for a 1% dip (last check 9:17am); 2 Nov SOL / LINK filled" },
  { team: "News", bot: "AI news bot", name: "AI news + stock impact", t: 420, time: "7:00am", freq: "Daily", st: "ok", last: "1 Nov 6:53am (2–3 Nov runs not confirmed)" },
  { team: "News", bot: "Key Financial Announcements", name: "Morning investing motivation", t: 436, time: "not confirmed (last seen 7:15am)", freq: "not confirmed", st: "ok", last: "1 Nov 7:15am" },
  { team: "News", bot: "FSD Data", name: "Weekly FSD miles update", t: 541, time: "9:00am", freq: "Weekly (Sun)", st: "ok", last: "1 Nov 9:08am" },
  { team: "News", bot: "Key Financial Announcements", name: "7pm US market announcements", t: 1140, time: "7:00pm", freq: "not confirmed (no run seen Sat 31 Oct)", st: "ok", last: "30 Oct 7:07pm" },
  { team: "News", bot: "Musk", name: "Daily Elon Musk company briefing", t: 1211, time: "not confirmed (last seen 8:11pm)", freq: "Daily", st: "ok", last: "1 Nov (time not confirmed)" },
  { team: "Life Admin", bot: "Cyber Defence", name: "Coinbase & IBKR withdrawal alert", t: 269, time: "on trigger", freq: "Event-triggered (listed as paused)", st: "unk", last: "28 Oct 4:29am" },
  { team: "Life Admin", bot: "Birthdays!!!", name: "Sam's birthday reminder", t: 600, time: "10:00am", freq: "Yearly (16 Oct)", st: "unk", last: "not confirmed" },
  { team: "Life Admin", bot: "E Mail", name: "Singpass reminder 4pm email", t: 960, time: "4:00pm", freq: "not confirmed", st: "ok", last: "26 Oct 4:09pm" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming channel restore watch", t: 0, time: "every 30 min", freq: "Every 30 min (channel back 30 Oct; not confirmed if still on)", st: "unk", last: "30 Oct 7:02am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Parts Pulse", t: 497, time: "not confirmed (last seen 8:17am)", freq: "not confirmed", st: "ok", last: "30 Oct 8:17am" },
  { team: "Projects", bot: "Grok Bot Updates & Features", name: "Grok Bot feature flags", t: 514, time: "not confirmed (last seen 8:34am)", freq: "not confirmed (about 5 runs a week)", st: "ok", last: "2 Nov (time not confirmed)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Theme Scout", t: 523, time: "not confirmed (last seen 8:43am)", freq: "not confirmed", st: "ok", last: "30 Oct 8:43am" },
  { team: "Projects", bot: "Ideas: Income / Save $", name: "Daily side-income + saving idea", t: 554, time: "not confirmed (last seen 9:14am)", freq: "Daily", st: "ok", last: "2 Nov (time not confirmed)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Whitespace Desk", t: 578, time: "not confirmed (last seen 9:38am)", freq: "not confirmed (about 5 runs a week)", st: "ok", last: "30 Oct 9:38am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Call School", t: 587, time: "not confirmed (last seen 9:47am)", freq: "not confirmed", st: "ok", last: "30 Oct 9:47am" },
  { team: "Projects", bot: "Redbubble", name: "Redbubble support reply check", t: 900, time: "not confirmed", freq: "not confirmed", st: "ok", last: "not confirmed" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming daily 6pm report", t: 1080, time: "6:00pm", freq: "Daily", st: "ok", last: "2 Nov 6:04pm" },
  { team: "Projects", bot: "Letter From 2031", name: "Letter From 2031", t: 1170, time: "7:30pm", freq: "Weekly (Sun)", st: "ok", last: "1 Nov 7:40pm (next: Sun 8 Nov)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Mandarin Minute", t: 1205, time: "not confirmed (last seen 8:05pm)", freq: "not confirmed", st: "ok", last: "30 Oct 8:05pm" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Evening Grok Bot idea", t: 1214, time: "not confirmed (last seen 8:14pm)", freq: "not confirmed", st: "ok", last: "31 Oct 8:14pm" },
];

var TEAMNAME = { Markets: "Markets", Crypto: "Crypto", News: "News", Work: "Work Bilstein", Life: "Life Admin", Family: "Family", Projects: "Projects" };
var STX = { ok: "✅ Completed", fail: "❌ Failed", run: "⏳ Running", unk: "— Unknown" };
var DOT = { ok: "✅", fail: "❌", run: "⏳", unk: "—" };
var URG = ["", "Urgent", "This week", "When you can"];

var OPEN = [
  ["AAL", "C 16", "15 Jan 27", "1", 22, "73"], ["CIFR", "C 15", "15 Jan 27", "1", 49, "73"], ["FCX", "C 85", "15 Jan 27", "1", 80, "73"], ["HIMS", "C 35", "27 Nov", "1", 135, "24"], ["HIMS", "C 35", "4 Dec", "1", 110, "31"], ["HOOD", "C 105", "18 Dec", "1", 170, "45"], ["IONQ", "C 45", "18 Dec", "1", 88, "45"], ["MARA", "C 10", "4 Dec", "6", 114, "31"], ["NOK", "C 12", "15 Jan 27", "2", 36, "73"], ["NVDA", "C 250", "18 Dec", "1", 125, "45"], ["PAAS", "C 45", "18 Dec", "2", 170, "45"], ["SKHY", "C 195", "4 Dec", "1", 221, "31"], ["SMCI", "C 50", "18 Dec", "1", 78, "45"], ["SOFI", "C 17", "19 Mar 27", "1", 251, "136"], ["SOFI", "C 20", "19 Mar 27", "4", 412, "136"], ["SPCX", "C 185", "15 Jan 27", "1", 191, "73"], ["TSLA", "C 480", "19 Feb 27", "1", 1638, "108"], ["UMAC", "C 25", "20 Nov", "2", 60, "17"], ["UMAC", "C 20", "27 Nov", "1", 85, "24"], ["UMAC", "C 20", "18 Dec", "1", 165, "45"], ["WULF", "C 15", "20 Nov", "3", 177, "17"], ["WULF", "C 15", "18 Dec", "1", 100, "45"], ["WULF", "C 18", "18 Dec", "1", 60, "45"],
  ["CLSK", "P 11", "19 Mar 27", "2", 722, "136"], ["HOOD", "P 50", "21 Jan 28", "1", 435, "444"], ["IREN", "P 21", "4 Dec", "1", 179, "31"], ["IREN", "P 36", "19 Feb 27", "1", 1113, "108"], ["IREN", "P 35", "21 Jan 28", "1", 1682, "444"], ["IREN", "P 25", "19 Jan 29", "2", 2170, "808"], ["MRVL", "P 120", "16 Jun 28", "1", 1215, "591"], ["NVDA", "P 190", "15 Dec 28", "1", 3120, "773"], ["SKHY", "P 145", "19 Mar 27", "1", 2175, "136"], ["SMCI", "P 30", "19 Jan 29", "1", 1040, "808"], ["SPCX", "P 120", "17 Sep 27", "1", 1346, "318"], ["SPCX", "P 145", "21 Jan 28", "1", 2580, "444"], ["SPCX", "P 145", "19 Jan 29", "1", 3650, "808"],
];


var EMAIL_COUNT={threads:45,latest:"2 Nov"};
var USAGE={plan:"Pro+",weekly:"38.2% used",resets:"Sun 8 Nov 12:36pm SGT"};
var CHARTS={octNet:23721,target:5000,calls:8422,puts:15299,year1:27292,year1Target:60000};

var NOTE = {
  "Options": "Tracks options income, puts, LEAPs and the put limit. November so far: $3,571 net (calls $201, puts $3,370), 71% of the $5,000 target; October finished at $23,721. Put room $9,100 of $120,000.",
  "DIVIDEND BUILDER": "Dividend portfolio builder; told Grok Bot it has no routines.",
  "Graphs": "Makes and posts the bot charts; last posting run 3 Nov 8:55am.",
  "Coinbase": "Places the daily crypto dip buys and runs the BTC grid manager on Coinbase about every 30 minutes; 3 Nov BTC / RENDER / PUMP buys (US$50) are waiting for a dip.",
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
  "Cyber Defence": "Alerts on Coinbase and IBKR withdrawals; the alert routine is listed as paused.",
  "Shopping": "Shopping help; no routines.",
  "Health BOT": "Health help; no routines.",
  "Birthdays!!!": "Holds Sam's yearly birthday reminder.",
  "Thailand Retirement": "Thailand retirement planning; no routines.",
  "E Mail": "Sends emails for you and makes work charts and spreadsheets (more on 2 Nov); work deck review next up page 17 (as of 1 Nov).",
  "Email Log": "Logs every email Grok Bot sends; no routines.",
  "Alexanders Homework": "Homework help for Alexander.",
  "Candys Grock Bot": "Logs Candy's after-meal readings when she sends them; no routines.",
  "Ideas: Income / Save $": "Sends a daily side-income and saving idea.",
  "Youtube Bot": "Watches the RedlisGaming channel (fully back since 30 Oct) and sends a 6pm report; latest 2 Nov.",
  "Redbubble": "Runs the Redbubble shop; waiting on Redbubble support about the account suspension.",
  "Letter From 2031": "Sends a letter from 2031 every Sunday evening; latest 1 Nov.",
  "Monopoly": "Keeps score for Penguin in the family Monopoly game.",
  "New GROK BOT Ideas": "Runs Mandarin Minute, Parts Pulse, Theme Scout, Whitespace Desk, Call School and an evening idea.",
  "Grok Bot Updates & Features": "Checks for new Grok Bot features each morning.",
};
var BOTTODO = {
  "Options": ["SMCI 18 Dec $50 call: buy back at $0.36 before tonight's results", "IREN 4 Dec $21 put: roll to 15 Jan $20 for a credit", "WULF 20 Nov $15 x3: buy back at $0.26", "Other calls past 50%: buy back before results?", "Wife's SPCX: covered call after tonight's results", "Put room down to $9,100 of $120,000"],
  "Coinbase": ["Top up the Coinbase main portfolio USDC"],
  "Crypto Drop Recomendation": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "BTC/SOL/ETH": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "E Mail": ["Work deck review: next up page 17"],
  "Cyber Defence": ["Withdrawal alert shows as paused"],
  "Daiky News": ["Daily Singapore news brief: yes or no"],
  "Monopoly": ["Monopoly: count Penguin's cash and houses"],
};

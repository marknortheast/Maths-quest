// Data as of Wed 4 Nov 2026, 9:22am SGT. Daily refresh replaces this file only.
window.ASOF="Wed 4 Nov 2026, 9:22am SGT";
var B=(n,a,id,last,mg)=>({n,a,id,last,mg:!!mg});

var TEAMS = [
  { key: "Markets", label: "Markets team", a: "🐿️", dir: B("Options", "🐿️", "b1", "4 Nov"), bots: [B("DIVIDEND BUILDER", "🐝", "b2", "2 Nov"), B("Graphs", "🦚", "b3", "4 Nov", true)] },
  { key: "Crypto", label: "Crypto team", a: "🐦‍⬛", dir: B("Coinbase", "🐦‍⬛", "b4", "4 Nov"), bots: [B("7.00AM $20 Crypto", "🕊️", "b5", "4 Nov"), B("BTC/SOL/ETH", "🦜", "b6", "4 Nov", true), B("Crypto Trending", "🦩", "b7", "4 Nov", true), B("Crypto Drop Recomendation", "🐧", "b8", "4 Nov", true), B("Crypto privacy", "🦇", "b9", "4 Nov", true), B("Crypto AI", "🦤", "b10", "4 Nov", true)] },
  { key: "News", label: "News team", a: "🐕", dir: B("AI news bot", "🐕", "b11", "3 Nov"), bots: [B("FSD Data", "🐆", "b12", "1 Nov"), B("Key Financial Announcements", "🦅", "b13", "3 Nov", true), B("Daiky News", "🐩", "b14", "15 Oct", true), B("Musk", "🐺", "b15", "3 Nov", true)] },
  { key: "Work", label: "Work Bilstein", a: "🐂", dir: B("Febi", "🐂", "b16", "30 Oct"), bots: [B("Australia NZ", "🦘", "b17", "25 Oct"), B("China Presentation", "🐼", "b18", "15 Oct"), B("Translation EN→Mandarin", "🦎", "b19", "23 Oct")] },
  { key: "Life", label: "Life Admin team", a: "🦔", dir: B("Cyber Defence", "🦔", "b20", "28 Oct"), bots: [B("Shopping", "🐨", "b21", "15 Oct"), B("Health BOT", "🐬", "b22", "15 Oct"), B("Birthdays!!!", "🐣", "b23", "16 Oct"), B("Thailand Retirement", "🐘", "b24", "15 Oct"), B("E Mail", "🐌", "b25", "4 Nov", true), B("Email Log", "🐌", "b26", "19 Oct", true)] },
  { key: "Family", label: "Family team", a: "🐒", dir: B("Alexanders Homework", "🐒", "b27", "21 Oct"), bots: [B("Candys Grock Bot", "🐰", "b28", "15 Oct")] },
  { key: "Projects", label: "Projects team", a: "🦊", dir: B("Ideas: Income / Save $", "🦊", "b29", "4 Nov"), bots: [B("Youtube Bot", "🐙", "b30", "3 Nov"), B("Redbubble", "🦋", "b31", "29 Oct"), B("Letter From 2031", "🐢", "b32", "1 Nov"), B("Monopoly", "🐻", "b33", "18 Oct"), B("New GROK BOT Ideas", "🐜", "b34", "4 Nov", true), B("Grok Bot Updates & Features", "🐞", "b35", "4 Nov", true)] },
];

var TODOS = [
  { team: "Markets", urg: 1, title: "SOFI 19 Mar $17 call: roll to 17 Jun 2027 $18 for a credit", detail: "SOFI is $16.77, only 1.4% under the strike (inside your 15% zone, and your rule is never to get called away). ⭐ Buy back the Mar $17 (~$2.12) and sell the 17 Jun 2027 $18 (~$2.41) for about $0.25–0.30 credit. Or hold until SOFI closes above $18.", src: "Options 7:30am update, 4 Nov; Grok Bot 9am note, 4 Nov" },
  { team: "Crypto", urg: 1, title: "Top up the Coinbase main portfolio USDC before tomorrow's buy", detail: "Main-portfolio USDC is down to about 26 after this morning's FET / XLM / INJ buys (US$49.89, all filled). Tomorrow's US$50 buy needs a top-up first.", src: "Grok Bot 9am note, 4 Nov; Coinbase fills, 4 Nov 8:42am" },
  { team: "Markets", urg: 2, title: "FCX 15 Jan $85 call: GTC buy-back at $0.40", detail: "49% kept. ⭐ A GTC buy-back at $0.40 locks 50%. Or hold (FCX $61.77, 38% below the strike).", src: "Options 7:30am update, 4 Nov" },
  { team: "Markets", urg: 2, title: "Buy-backs working before results", detail: "Working GTC buy-backs: SMCI 18 Dec $50 at $0.36 (49%; SMCI reported, about +11% after hours), IONQ 18 Dec $45 at $0.35 (results tonight 4 Nov), UMAC 18 Dec $20 at $0.65 (results 5 Nov), HIMS 4 Dec $35 at $0.50 (results 9 Nov). MARA 4 Dec $10 x6 at $0.09 and CIFR 15 Jan $15 at $0.23 are now far from the market after Tuesday's miner rally.", src: "Options 7:30am update, 4 Nov" },
  { team: "Markets", urg: 2, title: "UMAC 20 Nov $25 x2: let it expire", detail: "16 days left, 77% kept, UMAC 71% below the strike. You cancelled the $0.10 buy-back. ⭐ Let it expire, or buy back at $0.05.", src: "Options 7:30am update, 4 Nov" },
  { team: "Markets", urg: 2, title: "Wife's SPCX: covered call on a green day", detail: "SPCX $141.31. ⭐ 15 Jan 2027 $180 call (delta about 0.15) once results are confirmed out, on a green day. Never to be called away.", src: "Options 7:30am update, 4 Nov" },
  { team: "Work", urg: 2, title: "Work deck review: next up page 17", detail: "Pages 1 to 16 were reviewed and updated on 1 Nov; the latest PDF and PowerPoint were emailed to your work inbox. Tell E Mail the page number and the change.", src: "E Mail, 1 Nov 7:37pm" },
  { team: "Crypto", urg: 2, title: "23 Oct ETH / VIRTUAL / HBAR receipt still missing", detail: "ETH buys stay paused until it is booked.", src: "Grok Bot 9am note, 4 Nov" },
  { team: "Life", urg: 2, title: "Withdrawal alert shows as paused", detail: "The Coinbase & IBKR withdrawal alert was listed as paused in the plan usage report on 3 Nov (last alert 28 Oct 4:29am), and it had no runs in the last 7 days. Confirm whether that is intended.", src: "Plan usage report, 3–4 Nov" },
  { team: "Family", urg: 2, title: "Mum's family-tree search: next step", detail: "Chief of Staff's pick: order the grandparents' marriage certificate (about £12.50). Or the Army service record (£42.25, ~30 working days), or switch on Route traffic through this computer so it can search FreeBMD.", src: "Chief of Staff, 1 Nov 9:05am" },
  { team: "Markets", urg: 3, title: "Put room $9,200 of $120,000", detail: "$110,800 is used (short-dated $22,300 + long-dated $88,500), +$100 room from the IREN roll. The VST Jan 2029 $130 put idea ($13,000, results 6 Nov) won't fit unless puts close or the limit is raised at the 1 Dec review.", src: "Options 7:30am update, 4 Nov" },
  { team: "Markets", urg: 3, title: "TSLA: one free lot for a covered call", detail: "200 shares, 1 call, 1 lot free. ⭐ 18 Dec $470 at about $4.45 (delta 0.15) on a green day. Alt $450 at about $7.50, but it would need rolling right away.", src: "Options 7:30am update, 4 Nov" },
  { team: "News", urg: 3, title: "Daily Singapore news brief: yes or no", detail: "Offered after the one-off brief on 3 Oct; no option picked yet.", src: "Daiky News, 15 Oct" },
  { team: "Projects", urg: 3, title: "Monopoly: count Penguin's cash and houses", detail: "Bot's notes stop at lunch ($1,036); it asked you to recount.", src: "Monopoly, 18 Oct" },
];

var RT = [
  { team: "Chief of Staff", bot: "Grok Bot", name: "9am daily note", t: 540, time: "9:00am", freq: "Daily", st: "ok", last: "4 Nov 9:06am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Stock IV update", t: 480, time: "8:00am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:08am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Most-liquid 50 list", t: 510, time: "8:30am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:32am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Earnings watch", t: 481, time: "8:00am", freq: "Tue–Sat", st: "ok", last: "4 Nov 8:11am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Live dashboard refresh", t: 555, time: "9:15am", freq: "Daily", st: "run", last: "3 Nov 9:19am (OK); 4 Nov running now" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Crypto sleeve 9am value check", t: 541, time: "9:00am", freq: "Daily", st: "ok", last: "4 Nov 9:04am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Monthly put limit review", t: 450, time: "7:30am", freq: "Monthly (1st)", st: "ok", last: "1 Nov 7:33am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Daily holdings price digest", t: 394, time: "not confirmed (last seen 6:42am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "4 Nov 6:42am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Options positions morning check", t: 407, time: "not confirmed (last seen 6:47am)", freq: "Weekdays (about 5 runs a week)", st: "unk", last: "3 Nov 6:47am; 4 Nov 6:47am IBKR data pulls seen, result not confirmed" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "IBKR deposit history watch", t: 1430, time: "not confirmed", freq: "about 5 runs a week", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "Options", name: "7:30am options progress update", t: 450, time: "7:30am", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "4 Nov 7:37am (charts 7:34am)" },
  { team: "Markets", bot: "Options", name: "Daily megacap chart scan", t: 482, time: "not confirmed (last seen 8:02am)", freq: "about 5 runs a week", st: "ok", last: "4 Nov 8:02am" },
  { team: "Markets", bot: "Options", name: "Daily 3pm options lesson", t: 900, time: "3:00pm", freq: "Daily (about 7 runs a week)", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "Options", name: "4:30pm pre-market full options review", t: 990, time: "4:30pm", freq: "about 5 runs a week", st: "ok", last: "3 Nov (time not confirmed; its approvals filled overnight)" },
  { team: "Markets", bot: "Options", name: "Weekly compute price tracker", t: 1431, time: "not confirmed", freq: "Weekly (about 1 run a week)", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "DIVIDEND BUILDER", name: "Weekly IBKR dividends", t: 543, time: "not confirmed (last seen 9:03am)", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 9:03am (next: Mon 9 Nov)" },
  { team: "Markets", bot: "Graphs", name: "Post new bot charts", t: 533, time: "not confirmed (last ran 8:53am)", freq: "not confirmed (about 105 runs a week)", st: "ok", last: "4 Nov 8:53am" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "Daily BTC/ETH/SOL $50 pitch", t: 413, time: "not confirmed (last seen 6:50am)", freq: "Daily", st: "ok", last: "1 Nov 6:50am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Crypto Drop Recomendation", name: "Morning top-25 dip handoff", t: 390, time: "not confirmed (last seen 6:31am)", freq: "Daily (about 7 runs a week)", st: "ok", last: "1 Nov 6:31am confirmed; XLM dip pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto AI", name: "Daily crypto AI pitch", t: 405, time: "6:45am", freq: "Daily", st: "ok", last: "1 Nov 6:51am confirmed; FET AI pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto Trending", name: "Daily trending crypto pick", t: 420, time: "not confirmed (last seen 6:56am)", freq: "Daily", st: "ok", last: "1 Nov 6:56am confirmed; INJ trending pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto privacy", name: "Daily privacy coin pitch", t: 407, time: "not confirmed (last seen 6:47am)", freq: "Daily", st: "ok", last: "1 Nov 6:47am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "7:30am crypto + BTC grid update", t: 450, time: "7:30am", freq: "Daily", st: "ok", last: "1 Nov 7:38am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "9am value chip-in", t: 528, time: "not confirmed (last seen 8:48am)", freq: "Daily", st: "ok", last: "1 Nov 8:48am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "BTC grid manager", t: 730, time: "every 30 min (about 336 runs a week)", freq: "Every 30 min", st: "ok", last: "4 Nov (time not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "Daily crypto dip buy", t: 733, time: "from 8:00am, on a 1% dip", freq: "Daily (checks about every 30 min)", st: "ok", last: "4 Nov 8:42am: INJ (8:10am), FET and XLM filled, US$49.89; 3 Nov RENDER / PUMP / BTC filled by 2:15pm" },
  { team: "News", bot: "AI news bot", name: "AI news + stock impact", t: 420, time: "7:00am", freq: "Daily", st: "ok", last: "1 Nov 6:53am confirmed; bot active 3 Nov (run times not confirmed)" },
  { team: "News", bot: "Key Financial Announcements", name: "Morning investing motivation", t: 436, time: "not confirmed (last seen 7:15am)", freq: "Daily (about 7 runs a week)", st: "ok", last: "1 Nov 7:15am confirmed; bot active 3 Nov" },
  { team: "News", bot: "FSD Data", name: "Weekly FSD miles update", t: 541, time: "9:00am", freq: "Weekly (Sun)", st: "ok", last: "1 Nov 9:08am (next: Sun 8 Nov)" },
  { team: "News", bot: "Key Financial Announcements", name: "7pm US market announcements", t: 1140, time: "7:00pm", freq: "about 5 runs a week", st: "ok", last: "30 Oct 7:07pm confirmed; bot active 3 Nov" },
  { team: "News", bot: "Musk", name: "Daily Elon Musk company briefing", t: 1211, time: "not confirmed (last seen 8:11pm)", freq: "Daily", st: "ok", last: "bot active 3 Nov (time not confirmed)" },
  { team: "Life Admin", bot: "Cyber Defence", name: "Coinbase & IBKR withdrawal alert", t: 269, time: "on trigger", freq: "Event-triggered (listed as paused)", st: "unk", last: "28 Oct 4:29am" },
  { team: "Life Admin", bot: "Birthdays!!!", name: "Sam's birthday reminder", t: 600, time: "10:00am", freq: "Yearly (16 Oct)", st: "unk", last: "not confirmed" },
  { team: "Life Admin", bot: "E Mail", name: "Singpass reminder 4pm email", t: 960, time: "4:00pm", freq: "not confirmed", st: "ok", last: "26 Oct 4:09pm" },
  { team: "Life Admin", bot: "E Mail", name: "Show new emails as they arrive", t: 1432, time: "on trigger", freq: "Event-triggered", st: "unk", last: "not confirmed" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming channel restore watch", t: 0, time: "every 30 min", freq: "Paused (channel back 30 Oct)", st: "unk", last: "30 Oct 7:02am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Parts Pulse", t: 497, time: "not confirmed (last seen 8:17am)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:17am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "Grok Bot Updates & Features", name: "Grok Bot feature flags", t: 514, time: "not confirmed (last seen 8:34am)", freq: "about 5 runs a week", st: "ok", last: "4 Nov (time not confirmed)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Theme Scout", t: 523, time: "not confirmed (last seen 8:43am)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:43am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "Ideas: Income / Save $", name: "Daily side-income + saving idea", t: 554, time: "not confirmed (last seen 9:14am)", freq: "Daily", st: "ok", last: "4 Nov (time not confirmed)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Whitespace Desk", t: 578, time: "not confirmed (last seen 9:38am)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 9:38am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Call School", t: 587, time: "not confirmed (last seen 9:47am)", freq: "about 3 runs a week", st: "ok", last: "30 Oct 9:47am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "Redbubble", name: "Redbubble support reply check", t: 900, time: "not confirmed", freq: "about 7 runs a week", st: "ok", last: "not confirmed" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming daily 6pm report", t: 1080, time: "6:00pm", freq: "Daily", st: "ok", last: "3 Nov ~6:10pm" },
  { team: "Projects", bot: "Letter From 2031", name: "Letter From 2031", t: 1170, time: "7:30pm", freq: "Weekly (Sun)", st: "ok", last: "1 Nov 7:40pm (next: Sun 8 Nov)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Mandarin Minute", t: 1205, time: "not confirmed (last seen 8:05pm)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:05pm confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Evening Grok Bot idea", t: 1214, time: "not confirmed (last seen 8:14pm)", freq: "Daily (about 7 runs a week)", st: "ok", last: "31 Oct 8:14pm confirmed; bot active 3–4 Nov" },
];

var TEAMNAME = { Markets: "Markets", Crypto: "Crypto", News: "News", Work: "Work Bilstein", Life: "Life Admin", Family: "Family", Projects: "Projects" };
var STX = { ok: "✅ Completed", fail: "❌ Failed", run: "⏳ Running", unk: "— Unknown" };
var DOT = { ok: "✅", fail: "❌", run: "⏳", unk: "—" };
var URG = ["", "Urgent", "This week", "When you can"];

var OPEN = [
  ["AAL", "C 16", "15 Jan 27", "1", 22, "72"], ["AAOI", "C 100", "18 Dec", "1", 210, "44"], ["CIFR", "C 15", "15 Jan 27", "1", 49, "72"], ["FCX", "C 85", "15 Jan 27", "1", 80, "72"], ["HIMS", "C 35", "4 Dec", "1", 110, "30"], ["HOOD", "C 105", "18 Dec", "1", 170, "44"], ["IONQ", "C 45", "18 Dec", "1", 88, "44"], ["MARA", "C 10", "4 Dec", "6", 114, "30"], ["MSTR", "C 170", "18 Dec", "2", 750, "44"], ["NOK", "C 12", "15 Jan 27", "2", 36, "72"], ["NVDA", "C 250", "18 Dec", "1", 125, "44"], ["PAAS", "C 45", "18 Dec", "2", 170, "44"], ["SKHY", "C 195", "4 Dec", "1", 221, "30"], ["SMCI", "C 50", "18 Dec", "1", 78, "44"], ["SOFI", "C 17", "19 Mar 27", "1", 251, "135"], ["SOFI", "C 20", "19 Mar 27", "4", 412, "135"], ["SPCX", "C 185", "15 Jan 27", "1", 191, "72"], ["TSLA", "C 480", "19 Feb 27", "1", 1638, "107"], ["UMAC", "C 25", "20 Nov", "2", 60, "16"], ["UMAC", "C 20", "18 Dec", "1", 165, "44"], ["WULF", "C 15", "18 Dec", "1", 100, "44"],
  ["CLSK", "P 11", "19 Mar 27", "2", 722, "135"], ["HOOD", "P 50", "21 Jan 28", "1", 435, "443"], ["IREN", "P 20", "15 Jan 27", "1", 315, "72"], ["IREN", "P 36", "19 Feb 27", "1", 1113, "107"], ["IREN", "P 35", "21 Jan 28", "1", 1682, "443"], ["IREN", "P 25", "19 Jan 29", "2", 2170, "807"], ["MRVL", "P 120", "16 Jun 28", "1", 1215, "590"], ["NVDA", "P 190", "15 Dec 28", "1", 3120, "772"], ["SKHY", "P 145", "19 Mar 27", "1", 2175, "135"], ["SMCI", "P 30", "19 Jan 29", "1", 1040, "807"], ["SPCX", "P 120", "17 Sep 27", "1", 1346, "317"], ["SPCX", "P 145", "21 Jan 28", "1", 2580, "443"], ["SPCX", "P 145", "19 Jan 29", "1", 3650, "807"],
];


var EMAIL_COUNT={threads:46,latest:"4 Nov"};
var USAGE={plan:"Pro+",weekly:"68.6% used",resets:"Sun 8 Nov 12:36pm SGT"};
var CHARTS={octNet:23721,target:5000,calls:8422,puts:15299,year1:28102,year1Target:60000};

var NOTE = {
  "Options": "Tracks options income, puts, LEAPs and the put limit. November so far: $4,381 net (calls $970, puts $3,411), 88% of the $5,000 target, up $810 since yesterday; October finished at $23,721, year 1 $28,102 of $60,000. Put room $9,200 of $120,000. Dividends (after 30% US tax): latest week $178.28, November so far $0.00.",
  "DIVIDEND BUILDER": "Dividend portfolio builder; runs the weekly IBKR dividends update (last 2 Nov, next Mon 9 Nov).",
  "Graphs": "Makes and posts the bot charts; last posting run 4 Nov 8:53am.",
  "Coinbase": "Places the daily crypto dip buys and runs the BTC grid manager on Coinbase about every 30 minutes; 4 Nov FET / XLM / INJ buys (US$49.89) filled by 8:42am. Main-portfolio USDC is down to about 26.",
  "7.00AM $20 Crypto": "Group chat where the crypto lanes pitch each morning and Chief of Staff locks the 7am US$50 buy (4 Nov: FET, XLM, INJ).",
  "BTC/SOL/ETH": "Pitches the daily bluechip lane (BTC, ETH, SOL) and chips in on the 9am value check.",
  "Crypto Trending": "Pitches a daily trending-coin pick for the crypto group (4 Nov pick INJ was bought).",
  "Crypto Drop Recomendation": "Hands off the morning top-25 dip pick for the crypto group (4 Nov pick XLM was bought).",
  "Crypto privacy": "Pitches privacy coins buyable on Coinbase SGD for the crypto group.",
  "Crypto AI": "Pitches an AI coin each morning for the crypto group (4 Nov pick FET was bought).",
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
  "E Mail": "Sends emails for you and makes work charts, slides and spreadsheets; on 4 Nov it built and emailed v5 of a 3-page China opener for your presentation (8:43am). Work deck review next up page 17 (as of 1 Nov).",
  "Email Log": "Logs every email Grok Bot sends; no routines.",
  "Alexanders Homework": "Homework help for Alexander.",
  "Candys Grock Bot": "Logs Candy's after-meal readings when she sends them; no routines.",
  "Ideas: Income / Save $": "Sends a daily side-income and saving idea.",
  "Youtube Bot": "Watches the RedlisGaming channel (fully back since 30 Oct; restore watch now paused) and sends a 6pm report; latest 3 Nov.",
  "Redbubble": "Runs the Redbubble shop; checks daily for Redbubble support's reply about the account suspension.",
  "Letter From 2031": "Sends a letter from 2031 every Sunday evening; latest 1 Nov, next Sun 8 Nov.",
  "Monopoly": "Keeps score for Penguin in the family Monopoly game.",
  "New GROK BOT Ideas": "Runs Mandarin Minute, Parts Pulse, Theme Scout, Whitespace Desk, Call School, an evening idea, and weekly Allocation Gauge, Premium Pace and Parts Bridge.",
  "Grok Bot Updates & Features": "Checks for new Grok Bot features each morning.",
};
var BOTTODO = {
  "Options": ["SOFI 19 Mar $17 call: roll to 17 Jun 2027 $18 for a credit", "FCX 15 Jan $85 call: GTC buy-back at $0.40", "Buy-backs working before results", "UMAC 20 Nov $25 x2: let it expire", "Wife's SPCX: covered call on a green day", "Put room $9,200 of $120,000", "TSLA: one free lot for a covered call"],
  "Coinbase": ["Top up the Coinbase main portfolio USDC before tomorrow's buy"],
  "Crypto Drop Recomendation": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "BTC/SOL/ETH": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "E Mail": ["Work deck review: next up page 17"],
  "Cyber Defence": ["Withdrawal alert shows as paused"],
  "Daiky News": ["Daily Singapore news brief: yes or no"],
  "Monopoly": ["Monopoly: count Penguin's cash and houses"],
};

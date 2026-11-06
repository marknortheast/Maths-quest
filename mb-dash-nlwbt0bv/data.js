// Data as of Fri 6 Nov 2026, 9:26am SGT. Daily refresh replaces this file only.
window.ASOF="Fri 6 Nov 2026, 9:26am SGT";
var B=(n,a,id,last,mg)=>({n,a,id,last,mg:!!mg});

var TEAMS = [
  { key: "Markets", label: "Markets team", a: "🐿️", dir: B("Options", "🐿️", "b1", "6 Nov"), bots: [B("DIVIDEND BUILDER", "🐝", "b2", "2 Nov"), B("Graphs", "🦚", "b3", "6 Nov", true)] },
  { key: "Crypto", label: "Crypto team", a: "🐦‍⬛", dir: B("Coinbase", "🐦‍⬛", "b4", "6 Nov"), bots: [B("7.00AM $20 Crypto", "🕊️", "b5", "6 Nov"), B("BTC/SOL/ETH", "🦜", "b6", "6 Nov", true), B("Crypto Trending", "🦩", "b7", "6 Nov", true), B("Crypto Drop Recomendation", "🐧", "b8", "6 Nov", true), B("Crypto privacy", "🦇", "b9", "4 Nov", true), B("Crypto AI", "🦤", "b10", "4 Nov", true)] },
  { key: "News", label: "News team", a: "🐕", dir: B("AI news bot", "🐕", "b11", "6 Nov"), bots: [B("FSD Data", "🐆", "b12", "1 Nov"), B("Key Financial Announcements", "🦅", "b13", "6 Nov", true), B("Daiky News", "🐩", "b14", "15 Oct", true), B("Musk", "🐺", "b15", "5 Nov", true)] },
  { key: "Work", label: "Work Bilstein", a: "🐂", dir: B("Febi", "🐂", "b16", "30 Oct"), bots: [B("Australia NZ", "🦘", "b17", "25 Oct"), B("China Presentation", "🐼", "b18", "15 Oct"), B("Translation EN→Mandarin", "🦎", "b19", "23 Oct")] },
  { key: "Life", label: "Life Admin team", a: "🦔", dir: B("Cyber Defence", "🦔", "b20", "28 Oct"), bots: [B("Shopping", "🐨", "b21", "15 Oct"), B("Health BOT", "🐬", "b22", "15 Oct"), B("Birthdays!!!", "🐣", "b23", "16 Oct"), B("Thailand Retirement", "🐘", "b24", "15 Oct"), B("E Mail", "🐌", "b25", "5 Nov", true), B("Email Log", "🐌", "b26", "19 Oct", true)] },
  { key: "Family", label: "Family team", a: "🐒", dir: B("Alexanders Homework", "🐒", "b27", "21 Oct"), bots: [B("Candys Grock Bot", "🐰", "b28", "15 Oct")] },
  { key: "Projects", label: "Projects team", a: "🦊", dir: B("Ideas: Income / Save $", "🦊", "b29", "5 Nov"), bots: [B("Youtube Bot", "🐙", "b30", "5 Nov"), B("Redbubble", "🦋", "b31", "29 Oct"), B("Letter From 2031", "🐢", "b32", "1 Nov"), B("Monopoly", "🐻", "b33", "18 Oct"), B("New GROK BOT Ideas", "🐜", "b34", "6 Nov", true), B("Grok Bot Updates & Features", "🐞", "b35", "6 Nov", true)] },
];

var TODOS = [
  { team: "Life", urg: 1, title: "Plan usage is at 100% with 2 days to the reset", detail: "Weekly included usage is 100% used; it resets Sun 8 Nov 12:36pm SGT. Extra usage is now on-demand ($36.94 of your $50 monthly limit used). Biggest users this week: Coinbase 24%, Options 22%, E Mail 13%, Grok Bot 9%, Chief of Staff 7%.", src: "Plan usage report, 6 Nov ~9:24am" },
  { team: "Markets", urg: 1, title: "Submit IBKR instructions #100 and #101", detail: "⭐ #100 BUY 1 FCX 15 Jan 2027 $85 call @ $0.20 GTC (~76% kept). ⭐ #101 Roll IREN 15 Jan 2027 $20 put → 16 Apr 2027 $19 put as one combo for a $0.60 net credit, GTC. Created ~7:10am as instructions — not live orders until you submit them.", src: "Options 7:30am update, 6 Nov" },
  { team: "Markets", urg: 1, title: "Crash day: defend first, no new puts", detail: "Thursday crash: QQQ −6.5%, SPY −4.7%; NLV ~$277.1k. ⭐ Keep the $120k put limit. Hold deep ITM puts; let UMAC Nov $25 expire; price new covered calls on the next green day. Put room only $9,200; ~$81,800 ITM.", src: "Options 7:30am update, 6 Nov" },
  { team: "Markets", urg: 2, title: "Results: VST today; HIMS / WULF / BKKT 9 Nov", detail: "VST reports 6 Nov — put only on the first red day after results, and only if you free put room first. HIMS, WULF and BKKT report 9 Nov; NVDA 18 Nov. Overnight fills 5 Nov: HL Dec $18 ×4 sold @0.31; SKHY/HIMS/MARA Dec buy-backs filled.", src: "Options 7:30am update, 6 Nov" },
  { team: "Markets", urg: 2, title: "50%+ captured: FCX, NOK, UMAC and watch list", detail: "FCX Jan $85 → submit #100. NOK Jan $12 ×2 ~70% (buy back at $0.05 or hold). UMAC Nov $25 ×2 ~98% with 14 days — ⭐ let expire. AAOI Dec $100 ~73%, SPCX Jan $185 ~52%, TSLA Feb $480 ~70%, WULF Dec $15 ~58% — watch / buy-back on a bounce.", src: "Options 7:30am update, 6 Nov" },
  { team: "Markets", urg: 2, title: "PAAS 18 Dec $45 ×2: hold and watch", detail: "About 11% below the strike with 42 days left. ⭐ Hold and watch; roll seriously from 27 Nov. Alt: roll to 19 Mar 2027 $50 for ~$0.80 credit.", src: "Options 7:30am update, 6 Nov" },
  { team: "Markets", urg: 2, title: "Wife's SPCX call: is it placed?", detail: "The approved 15 Jan 2027 $185 at $1.80 is above the post-crash mark (SPCX ~$123.62), so it likely won't fill until SPCX bounces. Her account isn't in the IBKR feed, so please confirm whether it's placed.", src: "Options 7:30am update, 6 Nov" },
  { team: "Markets", urg: 2, title: "Free lots for the next green day", detail: "IREN 360 free (⭐ Dec $30 ×3); IONQ 110 (⭐ Dec $40); SMCI 100 (⭐ Dec $40); SKHY LEAP free for a Dec/Jan call above $150; UMAC free 2 after Nov $25 expires. HIMS / WULF after 9 Nov results. TSLA 1 lot free — Dec $450/$470 on a green day.", src: "Options 7:30am update, 6 Nov" },
  { team: "Crypto", urg: 2, title: "6 Nov dip buy still open: BTC / FET / SUI", detail: "Lock is ⭐ BTC 20 / FET 15 / SUI 15 USDC (fully funded; ~126.68 USDC free). As of ~8:50am nothing filled yet (1% dip window still open). Yesterday's SOL / PUMP / RENDER all filled (~49.99 USDC). BTC grid is below its 79,750 floor — review around 9am before moving it.", src: "Coinbase morning note + Chief of Staff, 6 Nov" },
  { team: "Crypto", urg: 2, title: "23 Oct ETH / VIRTUAL / HBAR receipt still missing", detail: "ETH buys stay paused until it is booked.", src: "Chief of Staff 9am crypto check, 6 Nov 8:50am" },
  { team: "Work", urg: 2, title: "Work deck review: next up page 17", detail: "Pages 1 to 16 were reviewed and updated on 1 Nov; the latest PDF and PowerPoint were emailed to your work inbox. Tell E Mail the page number and the change.", src: "E Mail, 1 Nov 7:37pm" },
  { team: "Life", urg: 2, title: "Withdrawal alert shows as paused", detail: "The Coinbase & IBKR withdrawal alert was listed as paused in the plan usage report on 3 Nov (last alert 28 Oct 4:29am). Confirm whether that is intended.", src: "Plan usage report, 3–4 Nov" },
  { team: "Family", urg: 2, title: "Mum's family-tree search: next step", detail: "Chief of Staff's pick: order the grandparents' marriage certificate (about £12.50). Or the Army service record (£42.25, ~30 working days), or switch on Route traffic through this computer so it can search FreeBMD.", src: "Chief of Staff, 1 Nov 9:05am" },
  { team: "Markets", urg: 3, title: "SOFI 19 Mar $17 call: hold", detail: "SOFI ~$16 after the crash, OTM again under the $18 flag. ⭐ Hold under the 21-day rule.", src: "Options 7:30am update, 6 Nov" },
  { team: "Markets", urg: 3, title: "Put room $9,200 of $120,000", detail: "$110,800 is used (short-dated $22,300 + long-dated $88,500); ~$81,800 is in the money. Stress test keeps the ⭐ $120k limit. No new puts until room is freed or you raise the limit at the 1 Dec review.", src: "Options 7:30am update, 6 Nov" },
  { team: "News", urg: 3, title: "Daily Singapore news brief: yes or no", detail: "Offered after the one-off brief on 3 Oct; no option picked yet.", src: "Daiky News, 15 Oct" },
  { team: "Projects", urg: 3, title: "Monopoly: count Penguin's cash and houses", detail: "Bot's notes stop at lunch ($1,036); it asked you to recount.", src: "Monopoly, 18 Oct" },
];

var RT = [
  { team: "Chief of Staff", bot: "Grok Bot", name: "9am daily note", t: 540, time: "9:00am", freq: "Daily", st: "ok", last: "6 Nov 9:09am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Stock IV update", t: 480, time: "8:00am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:08am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Most-liquid 50 list", t: 510, time: "8:30am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:32am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Earnings watch", t: 481, time: "8:00am", freq: "Tue–Sat", st: "ok", last: "6 Nov 8:15am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Live dashboard refresh", t: 555, time: "9:15am", freq: "Daily", st: "run", last: "5 Nov 9:22am (OK); 6 Nov running now" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Crypto sleeve 9am value check", t: 541, time: "9:00am", freq: "Daily", st: "ok", last: "6 Nov 8:50am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Monthly put limit review", t: 450, time: "7:30am", freq: "Monthly (1st)", st: "ok", last: "1 Nov 7:33am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Daily holdings price digest", t: 394, time: "not confirmed (last seen 6:45am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "6 Nov 6:45am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Options positions morning check", t: 407, time: "not confirmed (last seen 6:58am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "6 Nov 6:58am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "IBKR deposit history watch", t: 1430, time: "not confirmed", freq: "about 5 runs a week", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "Options", name: "7:30am options progress update", t: 450, time: "7:30am", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "6 Nov 7:37am (charts ~7:02–7:37am)" },
  { team: "Markets", bot: "Options", name: "Daily megacap chart scan", t: 482, time: "not confirmed (last seen 8:11am)", freq: "about 5 runs a week", st: "ok", last: "6 Nov 8:11am" },
  { team: "Markets", bot: "Options", name: "Daily 3pm options lesson", t: 900, time: "3:00pm", freq: "Daily (about 7 runs a week)", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "Options", name: "4:30pm pre-market full options review", t: 990, time: "4:30pm", freq: "about 5 runs a week", st: "ok", last: "5 Nov 4:40pm" },
  { team: "Markets", bot: "Options", name: "Weekly compute price tracker", t: 1431, time: "not confirmed", freq: "Weekly (about 1 run a week)", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "DIVIDEND BUILDER", name: "Weekly IBKR dividends", t: 543, time: "not confirmed (last seen 9:03am)", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 9:03am (next: Mon 9 Nov)" },
  { team: "Markets", bot: "Graphs", name: "Post new bot charts", t: 533, time: "not confirmed (last ran 8:05am)", freq: "not confirmed (about 105 runs a week)", st: "ok", last: "6 Nov 8:05am" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "Daily BTC/ETH/SOL $50 pitch", t: 413, time: "not confirmed (last seen 6:50am)", freq: "Daily", st: "ok", last: "6 Nov 7:00am lock chip-in; 8:51am sleeve check" },
  { team: "Crypto", bot: "Crypto Drop Recomendation", name: "Morning top-25 dip handoff", t: 390, time: "not confirmed (last seen 6:31am)", freq: "Daily (about 7 runs a week)", st: "ok", last: "6 Nov ~6:32am (SUI pitched)" },
  { team: "Crypto", bot: "Crypto AI", name: "Daily crypto AI pitch", t: 405, time: "6:45am", freq: "Daily", st: "ok", last: "1 Nov 6:51am confirmed; FET AI pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto Trending", name: "Daily trending crypto pick", t: 420, time: "not confirmed (last seen 6:56am)", freq: "Daily", st: "ok", last: "1 Nov 6:56am confirmed; INJ trending pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto privacy", name: "Daily privacy coin pitch", t: 407, time: "not confirmed (last seen 6:47am)", freq: "Daily", st: "ok", last: "1 Nov 6:47am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "7:30am crypto + BTC grid update", t: 450, time: "7:30am", freq: "Daily", st: "ok", last: "1 Nov 7:38am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "9am value chip-in", t: 528, time: "not confirmed (last seen 8:48am)", freq: "Daily", st: "ok", last: "1 Nov 8:48am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "BTC grid manager", t: 730, time: "every 30 min (about 336 runs a week)", freq: "Every 30 min", st: "ok", last: "6 Nov 7:35am (BTC below 79,750 floor; no round-trip fills; review before moving grid)" },
  { team: "Crypto", bot: "Coinbase", name: "Daily crypto dip buy", t: 733, time: "from 8:00am, on a 1% dip", freq: "Daily (checks about every 30 min)", st: "run", last: "6 Nov ~8:50am: nothing filled yet; lock BTC 20 / FET 15 / SUI 15 (funded); 5 Nov SOL / PUMP / RENDER filled" },
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
  { team: "Projects", bot: "Grok Bot Updates & Features", name: "Grok Bot feature flags", t: 514, time: "not confirmed (last seen 8:34am)", freq: "about 5 runs a week", st: "ok", last: "6 Nov 8:39am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Theme Scout", t: 523, time: "not confirmed (last seen 8:43am)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:43am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "Ideas: Income / Save $", name: "Daily side-income + saving idea", t: 554, time: "not confirmed (last seen 9:14am)", freq: "Daily", st: "ok", last: "4 Nov (time not confirmed)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Whitespace Desk", t: 578, time: "not confirmed (last seen 9:38am)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 9:38am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Call School", t: 587, time: "not confirmed (last seen 9:47am)", freq: "about 3 runs a week", st: "ok", last: "30 Oct 9:47am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "Redbubble", name: "Redbubble support reply check", t: 900, time: "not confirmed", freq: "about 7 runs a week", st: "ok", last: "not confirmed" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming daily 6pm report", t: 1080, time: "6:00pm", freq: "Daily", st: "ok", last: "5 Nov ~6:25pm (182 subscribers, +2)" },
  { team: "Projects", bot: "Letter From 2031", name: "Letter From 2031", t: 1170, time: "7:30pm", freq: "Weekly (Sun)", st: "ok", last: "1 Nov 7:40pm (next: Sun 8 Nov)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Mandarin Minute", t: 1205, time: "not confirmed (last seen 8:05pm)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:05pm confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Evening Grok Bot idea", t: 1214, time: "not confirmed (last seen 8:14pm)", freq: "Daily (about 7 runs a week)", st: "ok", last: "6 Nov 8:45am (morning activity; evening run not yet due)" },
];

var TEAMNAME = { Markets: "Markets", Crypto: "Crypto", News: "News", Work: "Work Bilstein", Life: "Life Admin", Family: "Family", Projects: "Projects" };
var STX = { ok: "✅ Completed", fail: "❌ Failed", run: "⏳ Running", unk: "— Unknown" };
var DOT = { ok: "✅", fail: "❌", run: "⏳", unk: "—" };
var URG = ["", "Urgent", "This week", "When you can"];

var OPEN = [
  ["AAL", "C 16", "15 Jan 27", "1", 22, "70"], ["AAOI", "C 100", "18 Dec", "1", 210, "42"], ["FCX", "C 85", "15 Jan 27", "1", 80, "70"], ["HL", "C 18", "18 Dec", "4", 124, "42"], ["HOOD", "C 105", "18 Dec", "1", 170, "42"], ["MSTR", "C 170", "18 Dec", "2", 750, "42"], ["NOK", "C 12", "15 Jan 27", "2", 36, "70"], ["NVDA", "C 250", "18 Dec", "1", 125, "42"], ["PAAS", "C 45", "18 Dec", "2", 170, "42"], ["SOFI", "C 17", "19 Mar 27", "1", 251, "133"], ["SOFI", "C 20", "19 Mar 27", "4", 412, "133"], ["SPCX", "C 185", "15 Jan 27", "1", 191, "70"], ["TSLA", "C 480", "19 Feb 27", "1", 1638, "105"], ["UMAC", "C 25", "20 Nov", "2", 60, "14"], ["WULF", "C 15", "18 Dec", "1", 100, "42"],
  ["CLSK", "P 11", "19 Mar 27", "2", 722, "133"], ["HOOD", "P 50", "21 Jan 28", "1", 435, "441"], ["IREN", "P 20", "15 Jan 27", "1", 315, "70"], ["IREN", "P 36", "19 Feb 27", "1", 1113, "105"], ["IREN", "P 35", "21 Jan 28", "1", 1682, "441"], ["IREN", "P 25", "19 Jan 29", "2", 2170, "805"], ["MRVL", "P 120", "16 Jun 28", "1", 1215, "588"], ["NVDA", "P 190", "15 Dec 28", "1", 3120, "770"], ["SKHY", "P 145", "19 Mar 27", "1", 2175, "133"], ["SMCI", "P 30", "19 Jan 29", "1", 1040, "805"], ["SPCX", "P 120", "17 Sep 27", "1", 1346, "315"], ["SPCX", "P 145", "21 Jan 28", "1", 2580, "441"], ["SPCX", "P 145", "19 Jan 29", "1", 3650, "805"],
];


var EMAIL_COUNT={threads:49,latest:"5 Nov"};
var USAGE={plan:"Pro+",weekly:"100% used",resets:"Sun 8 Nov 12:36pm SGT"};
var CHARTS={octNet:23721,target:5000,calls:8422,puts:15299,year1:27913,year1Target:60000};

var NOTE = {
  "Options": "Tracks options income, puts, LEAPs and the put limit. November so far: $4,192 net (calls $781, puts $3,411), 84% of the $5,000 target, down $35 since yesterday (HL +$124, three buy-backs −$159); October finished at $23,721, year 1 $27,913 of $60,000. Put room $9,200 of $120,000 (~$81,800 ITM). Dividends (after 30% US tax): latest week $178.28, November so far $0.00.",
  "DIVIDEND BUILDER": "Dividend portfolio builder; runs the weekly IBKR dividends update (last 2 Nov, next Mon 9 Nov).",
  "Graphs": "Makes and posts the bot charts; latest posts about 8:05am on 6 Nov (Fear & Greed, portfolio pie, options journey/overview).",
  "Coinbase": "Places the daily crypto dip buys and runs the BTC grid manager on Coinbase about every 30 minutes. 6 Nov lock is BTC / FET / SUI (US$50), fully funded (~126.68 USDC free); nothing filled as of ~8:50am. BTC is below the grid floor (79,750) — leave unchanged until you review.",
  "7.00AM $20 Crypto": "Group chat where the crypto lanes pitch each morning and Chief of Staff locks the 7am US$50 buy (6 Nov: ⭐ BTC, FET, SUI).",
  "BTC/SOL/ETH": "Pitches the daily bluechip lane (BTC, ETH, SOL) and chips in on the 9am value check; ETH stays paused until the 23 Oct receipt is booked.",
  "Crypto Trending": "Pitches a daily trending-coin pick for the crypto group.",
  "Crypto Drop Recomendation": "Hands off the morning top-25 dip pick for the crypto group (6 Nov pick SUI).",
  "Crypto privacy": "Pitches privacy coins buyable on Coinbase SGD for the crypto group.",
  "Crypto AI": "Pitches an AI coin each morning for the crypto group (4 Nov pick FET was bought).",
  "AI news bot": "Sends the 7am AI news and stock-impact briefing; last 6 Nov ~6:55am.",
  "FSD Data": "Sends the Tesla FSD and Robotaxi miles update every Sunday around 9am (weekly since 29 Oct).",
  "Key Financial Announcements": "Sends morning investing motivation and the 7pm US market announcements; last 6 Nov 7:18am.",
  "Daiky News": "Sent a one-off Singapore news brief on 3 Oct; no routines.",
  "Musk": "Sends a daily briefing on Elon Musk's companies; last 5 Nov ~8:09pm.",
  "Febi": "Advises on febi parts and sourcing; latest topic was Isuzu-marked parts.",
  "Australia NZ": "Australia and NZ customer work.",
  "China Presentation": "Builds the China presentation research from items you send; no routines.",
  "Translation EN→Mandarin": "Translates English to Mandarin.",
  "Cyber Defence": "Alerts on Coinbase and IBKR withdrawals; the alert routine is listed as paused.",
  "Shopping": "Shopping help; no routines.",
  "Health BOT": "Health help; no routines.",
  "Birthdays!!!": "Holds Sam's yearly birthday reminder.",
  "Thailand Retirement": "Thailand retirement planning; no routines.",
  "E Mail": "Sends emails for you and makes work charts, slides and spreadsheets; on 4 Nov it emailed v5 of the China opener and the FZA Gaps South Africa analysis. Work deck review next up page 17 (as of 1 Nov).",
  "Email Log": "Logs every email Grok Bot sends; no routines.",
  "Alexanders Homework": "Homework help for Alexander.",
  "Candys Grock Bot": "Logs Candy's after-meal readings when she sends them; no routines.",
  "Ideas: Income / Save $": "Sends a daily side-income and saving idea.",
  "Youtube Bot": "Watches the RedlisGaming channel (fully back since 30 Oct; restore watch now paused) and sends a 6pm report; latest 5 Nov (182 subscribers, +2; +2,680 views).",
  "Redbubble": "Runs the Redbubble shop; checks daily for Redbubble support's reply about the account suspension.",
  "Letter From 2031": "Sends a letter from 2031 every Sunday evening; latest 1 Nov, next Sun 8 Nov.",
  "Monopoly": "Keeps score for Penguin in the family Monopoly game.",
  "New GROK BOT Ideas": "Pitches new Grok Bot ideas; active on 6 Nov morning.",
  "Grok Bot Updates & Features": "Checks for new Grok Bot features each morning; last 6 Nov 8:39am.",
};
var BOTTODO = {
  "Options": ["Submit IBKR instructions #100 and #101", "Crash day: defend first, no new puts", "Results: VST today; HIMS / WULF / BKKT 9 Nov", "50%+ captured: FCX, NOK, UMAC and watch list", "PAAS 18 Dec $45 ×2: hold and watch", "Wife's SPCX call: is it placed?", "Free lots for the next green day", "SOFI 19 Mar $17 call: hold", "Put room $9,200 of $120,000"],
  "Coinbase": ["6 Nov dip buy still open: BTC / FET / SUI"],
  "Crypto Drop Recomendation": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "BTC/SOL/ETH": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "E Mail": ["Work deck review: next up page 17"],
  "Cyber Defence": ["Withdrawal alert shows as paused"],
  "Daiky News": ["Daily Singapore news brief: yes or no"],
  "Monopoly": ["Monopoly: count Penguin's cash and houses"],
};

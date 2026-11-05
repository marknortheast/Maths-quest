// Data as of Thu 5 Nov 2026, 9:22am SGT. Daily refresh replaces this file only.
window.ASOF="Thu 5 Nov 2026, 9:22am SGT";
var B=(n,a,id,last,mg)=>({n,a,id,last,mg:!!mg});

var TEAMS = [
  { key: "Markets", label: "Markets team", a: "🐿️", dir: B("Options", "🐿️", "b1", "5 Nov"), bots: [B("DIVIDEND BUILDER", "🐝", "b2", "2 Nov"), B("Graphs", "🦚", "b3", "5 Nov", true)] },
  { key: "Crypto", label: "Crypto team", a: "🐦‍⬛", dir: B("Coinbase", "🐦‍⬛", "b4", "5 Nov"), bots: [B("7.00AM $20 Crypto", "🕊️", "b5", "5 Nov"), B("BTC/SOL/ETH", "🦜", "b6", "4 Nov", true), B("Crypto Trending", "🦩", "b7", "4 Nov", true), B("Crypto Drop Recomendation", "🐧", "b8", "4 Nov", true), B("Crypto privacy", "🦇", "b9", "4 Nov", true), B("Crypto AI", "🦤", "b10", "4 Nov", true)] },
  { key: "News", label: "News team", a: "🐕", dir: B("AI news bot", "🐕", "b11", "3 Nov"), bots: [B("FSD Data", "🐆", "b12", "1 Nov"), B("Key Financial Announcements", "🦅", "b13", "3 Nov", true), B("Daiky News", "🐩", "b14", "15 Oct", true), B("Musk", "🐺", "b15", "3 Nov", true)] },
  { key: "Work", label: "Work Bilstein", a: "🐂", dir: B("Febi", "🐂", "b16", "30 Oct"), bots: [B("Australia NZ", "🦘", "b17", "25 Oct"), B("China Presentation", "🐼", "b18", "15 Oct"), B("Translation EN→Mandarin", "🦎", "b19", "23 Oct")] },
  { key: "Life", label: "Life Admin team", a: "🦔", dir: B("Cyber Defence", "🦔", "b20", "28 Oct"), bots: [B("Shopping", "🐨", "b21", "15 Oct"), B("Health BOT", "🐬", "b22", "15 Oct"), B("Birthdays!!!", "🐣", "b23", "16 Oct"), B("Thailand Retirement", "🐘", "b24", "15 Oct"), B("E Mail", "🐌", "b25", "4 Nov", true), B("Email Log", "🐌", "b26", "19 Oct", true)] },
  { key: "Family", label: "Family team", a: "🐒", dir: B("Alexanders Homework", "🐒", "b27", "21 Oct"), bots: [B("Candys Grock Bot", "🐰", "b28", "15 Oct")] },
  { key: "Projects", label: "Projects team", a: "🦊", dir: B("Ideas: Income / Save $", "🦊", "b29", "4 Nov"), bots: [B("Youtube Bot", "🐙", "b30", "3 Nov"), B("Redbubble", "🦋", "b31", "29 Oct"), B("Letter From 2031", "🐢", "b32", "1 Nov"), B("Monopoly", "🐻", "b33", "18 Oct"), B("New GROK BOT Ideas", "🐜", "b34", "4 Nov", true), B("Grok Bot Updates & Features", "🐞", "b35", "4 Nov", true)] },
];

var TODOS = [
  { team: "Crypto", urg: 1, title: "Top up Coinbase USDC: today's US$50 buy is stuck", detail: "Only about 26.52 USDC is available (your S$350 top-up is still in SGD and can't be traded). Today's lock is SOL 20 / PUMP 15 / RENDER 15: only SOL is covered, and PUMP and RENDER stay unfunded until USDC is topped up. As of 9:15am nothing has been bought yet (SOL is waiting for its 1% dip).", src: "Coinbase daily buy log, 5 Nov 9:15am; Chief of Staff 7am lock, 5 Nov 6:57am" },
  { team: "Life", urg: 1, title: "Plan usage is at 92% with 3 days to the reset", detail: "Weekly usage is 92% used (68.6% yesterday); it resets Sun 8 Nov 12:36pm SGT. After that, extra usage is billed on demand up to your $50 monthly limit ($0 used so far). Biggest users this week: Options 22%, Coinbase 22%, E Mail 15%.", src: "Plan usage report, 5 Nov 9:19am" },
  { team: "Markets", urg: 1, title: "HL beat and it's a green day: price the calls", detail: "400 shares, no calls (cost $17.83, HL $14.95). ⭐ Sell 4 HL 18 Dec $18 calls at about $0.31 (≈$124, delta 0.21). Alt $17 ×4 ~$0.49 (inside the 15% zone) or $19 ×4 ~$0.20.", src: "Options 7:30am update, 5 Nov" },
  { team: "Markets", urg: 2, title: "Results tonight: IREN, IONQ, UMAC", detail: "They report 5 Nov after the US close (~5am SGT Fri); their calls get priced in tomorrow's update. VST reports 6 Nov; HIMS, WULF and BKKT 9 Nov; NVDA 18 Nov. Still working: HIMS 4 Dec $35 buy-back at $0.54 and MARA 4 Dec $10 ×6 at $0.09. Filled 4 Nov: IONQ, SMCI, CIFR and UMAC Dec buy-backs.", src: "Options 7:30am update, 5 Nov" },
  { team: "Markets", urg: 2, title: "50% captured: SKHY, NOK, FCX buy-backs", detail: "SKHY 4 Dec $195 is 65% kept: ⭐ GTC buy-back at $0.75, or hold. NOK 15 Jan $12 ×2 is at 50% (buy back at $0.09 or hold). FCX 15 Jan $85 is at 48% ($0.40 locks 50%).", src: "Options 7:30am update, 5 Nov" },
  { team: "Markets", urg: 2, title: "PAAS 18 Dec $45 ×2: hold and watch", detail: "PAAS reported (missed on revenue, cut gold guidance) and is 8.5% below the strike with 43 days left. ⭐ Hold and watch; roll seriously from 27 Nov or if PAAS closes above $45. Alt: roll to 19 Mar 2027 $50 for ~$0.80 credit.", src: "Options 7:30am update, 5 Nov" },
  { team: "Markets", urg: 2, title: "Wife's SPCX call: is it placed?", detail: "The approved 15 Jan 2027 $185 at $1.80 is above today's ~$1.52 mark (SPCX $135.92), so it likely won't fill until SPCX bounces. Her account isn't in the IBKR feed, so please confirm whether it's placed.", src: "Options 7:30am update, 5 Nov" },
  { team: "Markets", urg: 2, title: "UMAC 20 Nov $25 ×2: let it expire", detail: "15 days left, 83% kept (mark $0.05, UMAC $13.03). ⭐ Let it expire.", src: "Options 7:30am update, 5 Nov" },
  { team: "Markets", urg: 2, title: "SMCI and IONQ: newly free lots", detail: "SMCI 100 shares free after the buy-back: ⭐ 18 Dec $40 ~$0.60 on the next green day (alt $37 ~$0.97). IONQ 110 shares: wait for tonight's results.", src: "Options 7:30am update, 5 Nov" },
  { team: "Work", urg: 2, title: "Work deck review: next up page 17", detail: "Pages 1 to 16 were reviewed and updated on 1 Nov; the latest PDF and PowerPoint were emailed to your work inbox. Tell E Mail the page number and the change.", src: "E Mail, 1 Nov 7:37pm" },
  { team: "Crypto", urg: 2, title: "23 Oct ETH / VIRTUAL / HBAR receipt still missing", detail: "ETH buys stay paused until it is booked.", src: "Chief of Staff 9am crypto check, 5 Nov 9:05am" },
  { team: "Life", urg: 2, title: "Withdrawal alert shows as paused", detail: "The Coinbase & IBKR withdrawal alert was listed as paused in the plan usage report on 3 Nov (last alert 28 Oct 4:29am). Confirm whether that is intended.", src: "Plan usage report, 3–4 Nov" },
  { team: "Family", urg: 2, title: "Mum's family-tree search: next step", detail: "Chief of Staff's pick: order the grandparents' marriage certificate (about £12.50). Or the Army service record (£42.25, ~30 working days), or switch on Route traffic through this computer so it can search FreeBMD.", src: "Chief of Staff, 1 Nov 9:05am" },
  { team: "Markets", urg: 3, title: "SOFI 19 Mar $17 call: hold", detail: "SOFI closed $17.38, slightly in the money but under the $18 flag, 134 days left. ⭐ Hold under the 21-day rule. Alt: roll to 17 Jun 2027 $18 for ~$0.28 credit. SOFI Mar $20 ×4 is right at its 15% line.", src: "Options 7:30am update, 5 Nov" },
  { team: "Markets", urg: 3, title: "Put room $9,200 of $120,000", detail: "$110,800 is used (short-dated $22,300 + long-dated $88,500); $60,800 is now in the money (SKHY $145 and SMCI $30 crossed). The VST Jan 2029 $130 put idea ($13,000, results 6 Nov) won't fit unless puts close or the limit is raised at the 1 Dec review.", src: "Options 7:30am update, 5 Nov" },
  { team: "Markets", urg: 3, title: "TSLA: one free lot for a covered call", detail: "200 shares, 1 call, 1 lot free. Red day (−3.3%), so wait; your 18 Dec $450 vs $470 choice is still open.", src: "Options 7:30am update, 5 Nov" },
  { team: "News", urg: 3, title: "Daily Singapore news brief: yes or no", detail: "Offered after the one-off brief on 3 Oct; no option picked yet.", src: "Daiky News, 15 Oct" },
  { team: "Projects", urg: 3, title: "Monopoly: count Penguin's cash and houses", detail: "Bot's notes stop at lunch ($1,036); it asked you to recount.", src: "Monopoly, 18 Oct" },
];

var RT = [
  { team: "Chief of Staff", bot: "Grok Bot", name: "9am daily note", t: 540, time: "9:00am", freq: "Daily", st: "ok", last: "5 Nov 9:07am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Stock IV update", t: 480, time: "8:00am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:08am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Most-liquid 50 list", t: 510, time: "8:30am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:32am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Earnings watch", t: 481, time: "8:00am", freq: "Tue–Sat", st: "ok", last: "5 Nov 8:11am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Live dashboard refresh", t: 555, time: "9:15am", freq: "Daily", st: "run", last: "4 Nov 9:17am (OK); 5 Nov running now" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Crypto sleeve 9am value check", t: 541, time: "9:00am", freq: "Daily", st: "ok", last: "5 Nov 9:05am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Monthly put limit review", t: 450, time: "7:30am", freq: "Monthly (1st)", st: "ok", last: "1 Nov 7:33am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Daily holdings price digest", t: 394, time: "not confirmed (last seen 6:39am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "5 Nov 6:39am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Options positions morning check", t: 407, time: "not confirmed (last seen 6:46am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "5 Nov 6:46am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "IBKR deposit history watch", t: 1430, time: "not confirmed", freq: "about 5 runs a week", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "Options", name: "7:30am options progress update", t: 450, time: "7:30am", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "5 Nov 7:39am (charts 7:35–7:39am)" },
  { team: "Markets", bot: "Options", name: "Daily megacap chart scan", t: 482, time: "not confirmed (last seen 8:06am)", freq: "about 5 runs a week", st: "ok", last: "5 Nov 8:06am" },
  { team: "Markets", bot: "Options", name: "Daily 3pm options lesson", t: 900, time: "3:00pm", freq: "Daily (about 7 runs a week)", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "Options", name: "4:30pm pre-market full options review", t: 990, time: "4:30pm", freq: "about 5 runs a week", st: "ok", last: "4 Nov 4:40pm" },
  { team: "Markets", bot: "Options", name: "Weekly compute price tracker", t: 1431, time: "not confirmed", freq: "Weekly (about 1 run a week)", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "DIVIDEND BUILDER", name: "Weekly IBKR dividends", t: 543, time: "not confirmed (last seen 9:03am)", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 9:03am (next: Mon 9 Nov)" },
  { team: "Markets", bot: "Graphs", name: "Post new bot charts", t: 533, time: "not confirmed (last ran 9:00am)", freq: "not confirmed (about 105 runs a week)", st: "ok", last: "5 Nov 9:00am (a 7:53am run failed; the 9:00am run posted the charts it missed)" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "Daily BTC/ETH/SOL $50 pitch", t: 413, time: "not confirmed (last seen 6:50am)", freq: "Daily", st: "ok", last: "1 Nov 6:50am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Crypto Drop Recomendation", name: "Morning top-25 dip handoff", t: 390, time: "not confirmed (last seen 6:31am)", freq: "Daily (about 7 runs a week)", st: "ok", last: "1 Nov 6:31am confirmed; XLM dip pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto AI", name: "Daily crypto AI pitch", t: 405, time: "6:45am", freq: "Daily", st: "ok", last: "1 Nov 6:51am confirmed; FET AI pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto Trending", name: "Daily trending crypto pick", t: 420, time: "not confirmed (last seen 6:56am)", freq: "Daily", st: "ok", last: "1 Nov 6:56am confirmed; INJ trending pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto privacy", name: "Daily privacy coin pitch", t: 407, time: "not confirmed (last seen 6:47am)", freq: "Daily", st: "ok", last: "1 Nov 6:47am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "7:30am crypto + BTC grid update", t: 450, time: "7:30am", freq: "Daily", st: "ok", last: "1 Nov 7:38am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "9am value chip-in", t: 528, time: "not confirmed (last seen 8:48am)", freq: "Daily", st: "ok", last: "1 Nov 8:48am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "BTC grid manager", t: 730, time: "every 30 min (about 336 runs a week)", freq: "Every 30 min", st: "ok", last: "5 Nov 9:00am (no fills, BTC inside the range)" },
  { team: "Crypto", bot: "Coinbase", name: "Daily crypto dip buy", t: 733, time: "from 8:00am, on a 1% dip", freq: "Daily (checks about every 30 min)", st: "run", last: "5 Nov 9:15am check: nothing bought yet; SOL waiting for a 1% dip, PUMP and RENDER unfunded (about 26.52 USDC); 4 Nov INJ / FET / XLM filled by 8:42am" },
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
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming daily 6pm report", t: 1080, time: "6:00pm", freq: "Daily", st: "ok", last: "4 Nov ~6:03pm" },
  { team: "Projects", bot: "Letter From 2031", name: "Letter From 2031", t: 1170, time: "7:30pm", freq: "Weekly (Sun)", st: "ok", last: "1 Nov 7:40pm (next: Sun 8 Nov)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Mandarin Minute", t: 1205, time: "not confirmed (last seen 8:05pm)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:05pm confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Evening Grok Bot idea", t: 1214, time: "not confirmed (last seen 8:14pm)", freq: "Daily (about 7 runs a week)", st: "ok", last: "31 Oct 8:14pm confirmed; bot active 3–4 Nov" },
];

var TEAMNAME = { Markets: "Markets", Crypto: "Crypto", News: "News", Work: "Work Bilstein", Life: "Life Admin", Family: "Family", Projects: "Projects" };
var STX = { ok: "✅ Completed", fail: "❌ Failed", run: "⏳ Running", unk: "— Unknown" };
var DOT = { ok: "✅", fail: "❌", run: "⏳", unk: "—" };
var URG = ["", "Urgent", "This week", "When you can"];

var OPEN = [
  ["AAL", "C 16", "15 Jan 27", "1", 22, "71"], ["AAOI", "C 100", "18 Dec", "1", 210, "43"], ["FCX", "C 85", "15 Jan 27", "1", 80, "71"], ["HIMS", "C 35", "4 Dec", "1", 110, "29"], ["HOOD", "C 105", "18 Dec", "1", 170, "43"], ["MARA", "C 10", "4 Dec", "6", 114, "29"], ["MSTR", "C 170", "18 Dec", "2", 750, "43"], ["NOK", "C 12", "15 Jan 27", "2", 36, "71"], ["NVDA", "C 250", "18 Dec", "1", 125, "43"], ["PAAS", "C 45", "18 Dec", "2", 170, "43"], ["SKHY", "C 195", "4 Dec", "1", 221, "29"], ["SOFI", "C 17", "19 Mar 27", "1", 251, "134"], ["SOFI", "C 20", "19 Mar 27", "4", 412, "134"], ["SPCX", "C 185", "15 Jan 27", "1", 191, "71"], ["TSLA", "C 480", "19 Feb 27", "1", 1638, "106"], ["UMAC", "C 25", "20 Nov", "2", 60, "15"], ["WULF", "C 15", "18 Dec", "1", 100, "43"],
  ["CLSK", "P 11", "19 Mar 27", "2", 722, "134"], ["HOOD", "P 50", "21 Jan 28", "1", 435, "442"], ["IREN", "P 20", "15 Jan 27", "1", 315, "71"], ["IREN", "P 36", "19 Feb 27", "1", 1113, "106"], ["IREN", "P 35", "21 Jan 28", "1", 1682, "442"], ["IREN", "P 25", "19 Jan 29", "2", 2170, "806"], ["MRVL", "P 120", "16 Jun 28", "1", 1215, "589"], ["NVDA", "P 190", "15 Dec 28", "1", 3120, "771"], ["SKHY", "P 145", "19 Mar 27", "1", 2175, "134"], ["SMCI", "P 30", "19 Jan 29", "1", 1040, "806"], ["SPCX", "P 120", "17 Sep 27", "1", 1346, "316"], ["SPCX", "P 145", "21 Jan 28", "1", 2580, "442"], ["SPCX", "P 145", "19 Jan 29", "1", 3650, "806"],
];


var EMAIL_COUNT={threads:48,latest:"4 Nov"};
var USAGE={plan:"Pro+",weekly:"92% used",resets:"Sun 8 Nov 12:36pm SGT"};
var CHARTS={octNet:23721,target:5000,calls:8422,puts:15299,year1:27948,year1Target:60000};

var NOTE = {
  "Options": "Tracks options income, puts, LEAPs and the put limit. November so far: $4,227 net (calls $816, puts $3,411), 85% of the $5,000 target, down $154 since yesterday (buy-backs only); October finished at $23,721, year 1 $27,948 of $60,000. Put room $9,200 of $120,000. Dividends (after 30% US tax): latest week $178.28, November so far $0.00.",
  "DIVIDEND BUILDER": "Dividend portfolio builder; runs the weekly IBKR dividends update (last 2 Nov, next Mon 9 Nov).",
  "Graphs": "Makes and posts the bot charts; a 7:53am run on 5 Nov failed, and the 9:00am run posted the six charts it missed.",
  "Coinbase": "Places the daily crypto dip buys and runs the BTC grid manager on Coinbase about every 30 minutes. 5 Nov lock is SOL / PUMP / RENDER (US$50), but only about 26.52 USDC is available, so only SOL is covered; nothing bought as of 9:15am.",
  "7.00AM $20 Crypto": "Group chat where the crypto lanes pitch each morning and Chief of Staff locks the 7am US$50 buy (5 Nov: SOL, PUMP, RENDER).",
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
  "E Mail": "Sends emails for you and makes work charts, slides and spreadsheets; on 4 Nov it emailed v5 of the China opener (8:43am) and the FZA Gaps South Africa analysis (9:49am). Work deck review next up page 17 (as of 1 Nov).",
  "Email Log": "Logs every email Grok Bot sends; no routines.",
  "Alexanders Homework": "Homework help for Alexander.",
  "Candys Grock Bot": "Logs Candy's after-meal readings when she sends them; no routines.",
  "Ideas: Income / Save $": "Sends a daily side-income and saving idea.",
  "Youtube Bot": "Watches the RedlisGaming channel (fully back since 30 Oct; restore watch now paused) and sends a 6pm report; latest 4 Nov (180 subscribers, +4).",
  "Redbubble": "Runs the Redbubble shop; checks daily for Redbubble support's reply about the account suspension.",
  "Letter From 2031": "Sends a letter from 2031 every Sunday evening; latest 1 Nov, next Sun 8 Nov.",
  "Monopoly": "Keeps score for Penguin in the family Monopoly game.",
  "New GROK BOT Ideas": "Runs Mandarin Minute, Parts Pulse, Theme Scout, Whitespace Desk, Call School, an evening idea, and weekly Allocation Gauge, Premium Pace and Parts Bridge.",
  "Grok Bot Updates & Features": "Checks for new Grok Bot features each morning.",
};
var BOTTODO = {
  "Options": ["HL beat and it's a green day: price the calls", "Results tonight: IREN, IONQ, UMAC", "50% captured: SKHY, NOK, FCX buy-backs", "PAAS 18 Dec $45 ×2: hold and watch", "Wife's SPCX call: is it placed?", "UMAC 20 Nov $25 ×2: let it expire", "SMCI and IONQ: newly free lots", "SOFI 19 Mar $17 call: hold", "Put room $9,200 of $120,000", "TSLA: one free lot for a covered call"],
  "Coinbase": ["Top up Coinbase USDC: today's US$50 buy is stuck"],
  "Crypto Drop Recomendation": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "BTC/SOL/ETH": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "E Mail": ["Work deck review: next up page 17"],
  "Cyber Defence": ["Withdrawal alert shows as paused"],
  "Daiky News": ["Daily Singapore news brief: yes or no"],
  "Monopoly": ["Monopoly: count Penguin's cash and houses"],
};

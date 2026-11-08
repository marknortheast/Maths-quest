// Data as of Sun 8 Nov 2026, 9:22am SGT. Daily refresh replaces this file only.
window.ASOF="Sun 8 Nov 2026, 9:22am SGT";
var B=(n,a,id,last,mg)=>({n,a,id,last,mg:!!mg});

var TEAMS = [
  { key: "Markets", label: "Markets team", a: "🐿️", dir: B("Options", "🐿️", "b1", "7 Nov"), bots: [B("DIVIDEND BUILDER", "🐝", "b2", "2 Nov"), B("Graphs", "🦚", "b3", "8 Nov", true)] },
  { key: "Crypto", label: "Crypto team", a: "🐦‍⬛", dir: B("Coinbase", "🐦‍⬛", "b4", "8 Nov"), bots: [B("7.00AM $20 Crypto", "🕊️", "b5", "8 Nov"), B("BTC/SOL/ETH", "🦜", "b6", "8 Nov", true), B("Crypto Trending", "🦩", "b7", "6 Nov", true), B("Crypto Drop Recomendation", "🐧", "b8", "8 Nov", true), B("Crypto privacy", "🦇", "b9", "4 Nov", true), B("Crypto AI", "🦤", "b10", "8 Nov", true)] },
  { key: "News", label: "News team", a: "🐕", dir: B("AI news bot", "🐕", "b11", "6 Nov"), bots: [B("FSD Data", "🐆", "b12", "8 Nov"), B("Key Financial Announcements", "🦅", "b13", "6 Nov", true), B("Daiky News", "🐩", "b14", "15 Oct", true), B("Musk", "🐺", "b15", "5 Nov", true)] },
  { key: "Work", label: "Work Bilstein", a: "🐂", dir: B("Febi", "🐂", "b16", "30 Oct"), bots: [B("Australia NZ", "🦘", "b17", "25 Oct"), B("China Presentation", "🐼", "b18", "15 Oct"), B("Translation EN→Mandarin", "🦎", "b19", "23 Oct")] },
  { key: "Life", label: "Life Admin team", a: "🦔", dir: B("Cyber Defence", "🦔", "b20", "28 Oct"), bots: [B("Shopping", "🐨", "b21", "15 Oct"), B("Health BOT", "🐬", "b22", "15 Oct"), B("Birthdays!!!", "🐣", "b23", "16 Oct"), B("Thailand Retirement", "🐘", "b24", "15 Oct"), B("E Mail", "🐌", "b25", "6 Nov", true), B("Email Log", "🐌", "b26", "19 Oct", true)] },
  { key: "Family", label: "Family team", a: "🐒", dir: B("Alexanders Homework", "🐒", "b27", "21 Oct"), bots: [B("Candys Grock Bot", "🐰", "b28", "15 Oct")] },
  { key: "Projects", label: "Projects team", a: "🦊", dir: B("Ideas: Income / Save $", "🦊", "b29", "5 Nov"), bots: [B("Youtube Bot", "🐙", "b30", "7 Nov"), B("Redbubble", "🦋", "b31", "29 Oct"), B("Letter From 2031", "🐢", "b32", "1 Nov"), B("Monopoly", "🐻", "b33", "18 Oct"), B("New GROK BOT Ideas", "🐜", "b34", "6 Nov", true), B("Grok Bot Updates & Features", "🐞", "b35", "6 Nov", true)] },
];

var TODOS = [
  { team: "Markets", urg: 1, title: "Resubmit FCX Jan $85 buy-back @ $0.20 GTC", detail: "⭐ BUY 1 FCX 15 Jan 2027 $85 call @ $0.20 GTC (~69% kept; mark ~$0.25). Prior GTC shows REPLACED and is not in the working book. No other live working orders. Unchanged over the weekend — still needs a manual resubmit.", src: "Grok Bot 9am note, 8 Nov" },
  { team: "Markets", urg: 2, title: "Results Mon 9 Nov: HIMS / WULF / BKKT", detail: "No new calls on HIMS or WULF until after Monday results (tomorrow). NVDA ~18 Nov. VST reported 6 Nov — put idea parked (you skipped the Jan 2029 $130). Fear & Greed 22 · Extreme Fear after Friday's bounce (no new weekend reading).", src: "Options 7:30am update, 7 Nov; confirmed 9am note, 8 Nov" },
  { team: "Markets", urg: 2, title: "50%+ captured: FCX, UMAC, NVDA; hold TSLA / WULF", detail: "⭐ FCX Jan $85 → resubmit @0.20. UMAC Nov $25 ×2 ~97% with 12 days — ⭐ let expire. NVDA Dec $250 ~54% (optional lock ~$0.62). TSLA Feb $480 ~62% — you chose to hold. WULF Dec $15 ~43% — hold through 9 Nov results.", src: "Grok Bot 9am note, 8 Nov" },
  { team: "Markets", urg: 2, title: "PAAS 18 Dec $45 ×2: hold and watch", detail: "Still the roll watch; roll seriously from 27 Nov. MSTR also in the 15% heads-up window from 27 Nov. AAL Jan $16 and SOFI Mar $17 inside 15% heads-up (flag if SOFI closes above $18).", src: "Grok Bot 9am note, 8 Nov" },
  { team: "Markets", urg: 2, title: "Wife's SPCX Jan $185: still held?", detail: "Jan $185 still held in her account (not in the IBKR feed). The 8 Nov 9am note still lists it as held there separately from Mark's book. Post-crash SPCX bounced to ~$135 but the $185 strike remains far OTM.", src: "Grok Bot 9am note, 8 Nov" },
  { team: "Markets", urg: 2, title: "Free lots after Friday's fills", detail: "Most free lots were covered Fri (IREN/IONQ/SMCI/UMAC/SKHY/CIFR/TSLA/MARA/SPCX). Still free: HIMS 2 lots and WULF 4 lots after 9 Nov results; MARA ~300 still free if you want more Dec income. Free LEAP: AAOI Jan 2028 $75 (Dec $100 was bought back).", src: "Options 7:30am update, 7 Nov; 9am note, 8 Nov" },
  { team: "Crypto", urg: 2, title: "8 Nov dip buy still open: BTC / FET / XLM", detail: "Lock is ⭐ BTC 20 / FET 15 / XLM 15 USDC (funded; ~100.19 USDC free; week remaining ~50.42). As of 9:17am nothing filled yet (waiting for a 1% pullback). 7 Nov SOL / LINK / RENDER all filled and booked. Buy-grid stopped 6 Nov; sell ladder 5×0.01 BTC still open, 0 fills.", src: "Coinbase dip log + grid, 8 Nov" },
  { team: "Crypto", urg: 2, title: "23 Oct ETH / VIRTUAL / HBAR receipt still missing", detail: "ETH buys stay paused until it is booked. Still missing as of the 8 Nov 9am note and sleeve check.", src: "Grok Bot 9am note, 8 Nov" },
  { team: "Work", urg: 2, title: "Work deck review: next up page 17", detail: "Pages 1 to 16 were reviewed and updated on 1 Nov; the latest PDF and PowerPoint were emailed to your work inbox. Tell E Mail the page number and the change.", src: "E Mail, 1 Nov 7:37pm" },
  { team: "Life", urg: 2, title: "Withdrawal alert shows as paused", detail: "The Coinbase & IBKR withdrawal alert was listed as paused in the plan usage report on 3 Nov (last alert 28 Oct 4:29am). Today's usage listing did not mention it; no confirmation yet whether the pause is intended.", src: "Plan usage report, 3–4 Nov; still listed as paused" },
  { team: "Family", urg: 2, title: "Mum's family-tree search: next step", detail: "Chief of Staff's pick: order the grandparents' marriage certificate (about £12.50). Or the Army service record (£42.25, ~30 working days), or switch on Route traffic through this computer so it can search FreeBMD.", src: "Chief of Staff, 1 Nov 9:05am" },
  { team: "Markets", urg: 3, title: "SOFI 19 Mar $17 call: hold", detail: "SOFI ~$16.19 Friday (weekend, last close). Still under the $18 flag. ⭐ Hold under the 21-day rule; flag if it closes above $18.", src: "Grok Bot 9am note, 8 Nov" },
  { team: "Markets", urg: 3, title: "Put room $11,500 of $120,000", detail: "$108,500 is used (short-dated $20,000 + long-dated $88,500); ~$77,600 is in the money. Unchanged over the weekend. ⭐ Keep the $120k limit. No new puts until room is freed or you raise the limit at the 1 Dec review.", src: "Grok Bot 9am note, 8 Nov" },
  { team: "Life", urg: 3, title: "Plan usage healthy (Ultra, 22% used)", detail: "Weekly included usage is 22.3% used on Ultra; resets Fri 13 Nov 11:23am SGT. On-demand $0 of $50. Biggest users this week so far: Coinbase 34%, Options 24%, Grok Bot 8%, Graphs 8%, Chief of Staff 6%.", src: "Plan usage report, 8 Nov ~9:15am" },
  { team: "News", urg: 3, title: "Daily Singapore news brief: yes or no", detail: "Offered after the one-off brief on 3 Oct; no option picked yet.", src: "Daiky News, 15 Oct" },
  { team: "Projects", urg: 3, title: "Monopoly: count Penguin's cash and houses", detail: "Bot's notes stop at lunch ($1,036); it asked you to recount.", src: "Monopoly, 18 Oct" },
];

var RT = [
  { team: "Chief of Staff", bot: "Grok Bot", name: "9am daily note", t: 540, time: "9:00am", freq: "Daily", st: "ok", last: "8 Nov 9:01am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Stock IV update", t: 480, time: "8:00am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:08am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Most-liquid 50 list", t: 510, time: "8:30am", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 8:32am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Earnings watch", t: 481, time: "8:00am", freq: "Tue–Sat", st: "ok", last: "7 Nov 8:09am" },
  { team: "Chief of Staff", bot: "Grok Bot", name: "Live dashboard refresh", t: 555, time: "9:15am", freq: "Daily", st: "run", last: "7 Nov 9:19am (OK); 8 Nov running now" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Crypto sleeve 9am value check", t: 541, time: "9:00am", freq: "Daily", st: "ok", last: "8 Nov 9:03am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Monthly put limit review", t: 450, time: "7:30am", freq: "Monthly (1st)", st: "ok", last: "1 Nov 7:33am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Daily holdings price digest", t: 394, time: "not confirmed (last seen 6:45am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "7 Nov 6:45am (Saturday weekly map)" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "Options positions morning check", t: 407, time: "not confirmed (last seen 6:50am)", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "7 Nov ~6:50am" },
  { team: "Chief of Staff", bot: "Chief of Staff", name: "IBKR deposit history watch", t: 1430, time: "not confirmed", freq: "about 5 runs a week", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "Options", name: "7:30am options progress update", t: 450, time: "7:30am", freq: "Weekdays (about 5 runs a week)", st: "ok", last: "7 Nov 7:40am (charts ~7:30–7:40am); Sunday 8 Nov skipped" },
  { team: "Markets", bot: "Options", name: "Daily megacap chart scan", t: 482, time: "not confirmed (last seen 8:09am)", freq: "about 5 runs a week", st: "ok", last: "7 Nov 8:09am" },
  { team: "Markets", bot: "Options", name: "Daily 3pm options lesson", t: 900, time: "3:00pm", freq: "Daily (about 7 runs a week)", st: "unk", last: "not confirmed" },
  { team: "Markets", bot: "Options", name: "4:30pm pre-market full options review", t: 990, time: "4:30pm", freq: "about 5 runs a week", st: "ok", last: "6 Nov ~4:40pm (refresh ~6:25pm)" },
  { team: "Markets", bot: "Options", name: "Weekly compute price tracker", t: 1431, time: "not confirmed (last seen 8:47am)", freq: "Weekly (about 1 run a week)", st: "ok", last: "7 Nov 8:47am" },
  { team: "Markets", bot: "DIVIDEND BUILDER", name: "Weekly IBKR dividends", t: 543, time: "not confirmed (last seen 9:03am)", freq: "Weekly (Mon)", st: "ok", last: "2 Nov 9:03am (next: Mon 9 Nov)" },
  { team: "Markets", bot: "Graphs", name: "Post new bot charts", t: 533, time: "not confirmed (last ran 8:55am)", freq: "not confirmed (about 105 runs a week)", st: "ok", last: "8 Nov 8:02am & 8:55am (nothing new to post); last new posts 7 Nov" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "Daily BTC/ETH/SOL $50 pitch", t: 413, time: "not confirmed (last seen 6:50am)", freq: "Daily", st: "ok", last: "8 Nov lock chip-in (BTC); 9:03am sleeve check" },
  { team: "Crypto", bot: "Crypto Drop Recomendation", name: "Morning top-25 dip handoff", t: 390, time: "not confirmed (last seen 6:31am)", freq: "Daily (about 7 runs a week)", st: "ok", last: "8 Nov lock pick XLM (Dip lane)" },
  { team: "Crypto", bot: "Crypto AI", name: "Daily crypto AI pitch", t: 405, time: "6:45am", freq: "Daily", st: "ok", last: "8 Nov lock pick FET (AI lane); prior confirmed 1 Nov 6:51am" },
  { team: "Crypto", bot: "Crypto Trending", name: "Daily trending crypto pick", t: 420, time: "not confirmed (last seen 6:56am)", freq: "Daily", st: "ok", last: "1 Nov 6:56am confirmed; INJ trending pick bought 4 Nov" },
  { team: "Crypto", bot: "Crypto privacy", name: "Daily privacy coin pitch", t: 407, time: "not confirmed (last seen 6:47am)", freq: "Daily", st: "ok", last: "1 Nov 6:47am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "7:30am crypto + BTC grid update", t: 450, time: "7:30am", freq: "Daily", st: "ok", last: "1 Nov 7:38am confirmed; bot active 7–8 Nov (7:30am run time not confirmed)" },
  { team: "Crypto", bot: "BTC/SOL/ETH", name: "9am value chip-in", t: 528, time: "not confirmed (last seen 8:48am)", freq: "Daily", st: "ok", last: "1 Nov 8:48am confirmed; bot active 3–4 Nov (run times not confirmed)" },
  { team: "Crypto", bot: "Coinbase", name: "BTC grid manager", t: 730, time: "every 30 min (about 336 runs a week)", freq: "Every 30 min", st: "ok", last: "8 Nov 9:08am (buy-grid stopped 6 Nov; sell ladder 5×0.01 BTC open, 0 fills)" },
  { team: "Crypto", bot: "Coinbase", name: "Daily crypto dip buy", t: 733, time: "from 8:00am, on a 1% dip", freq: "Daily (checks about every 30 min)", st: "run", last: "8 Nov 9:17am: nothing filled yet; lock BTC 20 / FET 15 / XLM 15 (funded); 7 Nov SOL / LINK / RENDER filled" },
  { team: "News", bot: "AI news bot", name: "AI news + stock impact", t: 420, time: "7:00am", freq: "Daily", st: "ok", last: "1 Nov 6:53am confirmed; bot active 3 Nov (run times not confirmed)" },
  { team: "News", bot: "Key Financial Announcements", name: "Morning investing motivation", t: 436, time: "not confirmed (last seen 7:15am)", freq: "Daily (about 7 runs a week)", st: "ok", last: "1 Nov 7:15am confirmed; bot active 3 Nov" },
  { team: "News", bot: "FSD Data", name: "Weekly FSD miles update", t: 541, time: "9:00am", freq: "Weekly (Sun)", st: "ok", last: "8 Nov 9:08am (next: Sun 15 Nov)" },
  { team: "News", bot: "Key Financial Announcements", name: "7pm US market announcements", t: 1140, time: "7:00pm", freq: "about 5 runs a week", st: "ok", last: "30 Oct 7:07pm confirmed; bot active 3 Nov" },
  { team: "News", bot: "Musk", name: "Daily Elon Musk company briefing", t: 1211, time: "not confirmed (last seen 8:11pm)", freq: "Daily", st: "ok", last: "bot active 3 Nov (time not confirmed)" },
  { team: "Life Admin", bot: "Cyber Defence", name: "Coinbase & IBKR withdrawal alert", t: 269, time: "on trigger", freq: "Event-triggered (listed as paused)", st: "unk", last: "28 Oct 4:29am" },
  { team: "Life Admin", bot: "Birthdays!!!", name: "Sam's birthday reminder", t: 600, time: "10:00am", freq: "Yearly (16 Oct)", st: "unk", last: "not confirmed" },
  { team: "Life Admin", bot: "E Mail", name: "Singpass reminder 4pm email", t: 960, time: "4:00pm", freq: "not confirmed", st: "ok", last: "26 Oct 4:09pm" },
  { team: "Life Admin", bot: "E Mail", name: "Show new emails as they arrive", t: 1432, time: "on trigger", freq: "Event-triggered", st: "unk", last: "not confirmed" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming channel restore watch", t: 0, time: "every 30 min", freq: "Paused (channel back 30 Oct)", st: "unk", last: "30 Oct 7:02am" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Parts Pulse", t: 497, time: "not confirmed (last seen 8:17am)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:17am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "Grok Bot Updates & Features", name: "Grok Bot feature flags", t: 514, time: "not confirmed (last seen 8:34am)", freq: "about 5 runs a week", st: "ok", last: "6 Nov 8:39am confirmed; 7–8 Nov not confirmed" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Theme Scout", t: 523, time: "not confirmed (last seen 8:43am)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:43am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "Ideas: Income / Save $", name: "Daily side-income + saving idea", t: 554, time: "not confirmed (last seen 9:14am)", freq: "Daily", st: "ok", last: "4 Nov (time not confirmed)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Whitespace Desk", t: 578, time: "not confirmed (last seen 9:38am)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 9:38am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Call School", t: 587, time: "not confirmed (last seen 9:47am)", freq: "about 3 runs a week", st: "ok", last: "30 Oct 9:47am confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "Redbubble", name: "Redbubble support reply check", t: 900, time: "not confirmed", freq: "about 7 runs a week", st: "ok", last: "not confirmed" },
  { team: "Projects", bot: "Youtube Bot", name: "RedlisGaming daily 6pm report", t: 1080, time: "6:00pm", freq: "Daily", st: "ok", last: "7 Nov ~6:08pm (187 subscribers, +1; +2,206 views)" },
  { team: "Projects", bot: "Letter From 2031", name: "Letter From 2031", t: 1170, time: "7:30pm", freq: "Weekly (Sun)", st: "ok", last: "1 Nov 7:40pm (next: Sun 8 Nov)" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Mandarin Minute", t: 1205, time: "not confirmed (last seen 8:05pm)", freq: "about 5 runs a week", st: "ok", last: "30 Oct 8:05pm confirmed; bot active 3–4 Nov" },
  { team: "Projects", bot: "New GROK BOT Ideas", name: "Evening Grok Bot idea", t: 1214, time: "not confirmed (last seen 8:14pm)", freq: "Daily (about 7 runs a week)", st: "ok", last: "6 Nov morning activity; 7–8 Nov not confirmed" },
];

var TEAMNAME = { Markets: "Markets", Crypto: "Crypto", News: "News", Work: "Work Bilstein", Life: "Life Admin", Family: "Family", Projects: "Projects" };
var STX = { ok: "✅ Completed", fail: "❌ Failed", run: "⏳ Running", unk: "— Unknown" };
var DOT = { ok: "✅", fail: "❌", run: "⏳", unk: "—" };
var URG = ["", "Urgent", "This week", "When you can"];

var OPEN = [
  ["AAL", "C 16", "15 Jan 27", "1", 22, "68"], ["CIFR", "C 10", "18 Dec", "1", 28, "40"], ["FCX", "C 85", "15 Jan 27", "1", 80, "68"], ["HL", "C 18", "18 Dec", "4", 124, "40"], ["IONQ", "C 40", "18 Dec", "1", 70, "40"], ["IREN", "C 30", "18 Dec", "3", 300, "40"], ["IREN", "C 32", "18 Dec", "2", 150, "40"], ["MARA", "C 8", "18 Dec", "3", 96, "40"], ["MSTR", "C 170", "18 Dec", "2", 750, "40"], ["NVDA", "C 250", "18 Dec", "1", 125, "40"], ["PAAS", "C 45", "18 Dec", "2", 170, "40"], ["SKHY", "C 160", "18 Dec", "1", 400, "40"], ["SMCI", "C 35", "18 Dec", "1", 105, "40"], ["SOFI", "C 17", "19 Mar 27", "1", 251, "131"], ["SOFI", "C 20", "19 Mar 27", "4", 412, "131"], ["SPCX", "C 185", "15 Jan 27", "1", 191, "68"], ["SPCX", "C 190", "15 Jan 27", "1", 95, "68"], ["TSLA", "C 420", "18 Dec", "1", 380, "40"], ["TSLA", "C 480", "19 Feb 27", "1", 1638, "103"], ["UMAC", "C 25", "20 Nov", "2", 60, "12"], ["UMAC", "C 15", "18 Dec", "2", 146, "40"], ["WULF", "C 15", "18 Dec", "1", 100, "40"],
  ["HOOD", "P 50", "21 Jan 28", "1", 435, "439"], ["IREN", "P 36", "19 Feb 27", "1", 1113, "103"], ["IREN", "P 19", "16 Apr 27", "1", 395, "159"], ["IREN", "P 35", "21 Jan 28", "1", 1682, "439"], ["IREN", "P 25", "19 Jan 29", "2", 2170, "803"], ["MRVL", "P 120", "16 Jun 28", "1", 1215, "586"], ["NVDA", "P 190", "15 Dec 28", "1", 3120, "768"], ["SKHY", "P 145", "19 Mar 27", "1", 2175, "131"], ["SMCI", "P 30", "19 Jan 29", "1", 1040, "803"], ["SPCX", "P 120", "17 Sep 27", "1", 1346, "313"], ["SPCX", "P 145", "21 Jan 28", "1", 2580, "439"], ["SPCX", "P 145", "19 Jan 29", "1", 3650, "803"],
];


var EMAIL_COUNT={threads:52,latest:"7 Nov"};
var USAGE={plan:"Ultra",weekly:"22.3% used",resets:"Fri 13 Nov 11:23am SGT"};
var CHARTS={octNet:23721,target:5000,calls:8422,puts:15299,year1:28517,year1Target:60000};

var NOTE = {
  "Options": "Tracks options income, puts, LEAPs and the put limit. November is unchanged at $4,796 net (calls $2,395, puts $2,401), 96% of the $5,000 target — no new fills over the weekend. October finished at $23,721, year 1 $28,517 of $60,000. Put room $11,500 of $120,000 (~$77,600 ITM). FCX Jan $85 GTC buy-back @ $0.20 still needs resubmit. Dividends (after 30% US tax): latest week $178.28, November so far $0.00.",
  "DIVIDEND BUILDER": "Dividend portfolio builder; runs the weekly IBKR dividends update (last 2 Nov, next Mon 9 Nov).",
  "Graphs": "Makes and posts the bot charts; ran 8 Nov at 8:02am and 8:55am with nothing new to post. Latest new posts were on 7 Nov (options journey/overview/income, Fear & Greed, compute tracker, plus later 7 Nov leap/stress charts).",
  "Coinbase": "Places the daily crypto dip buys and runs the BTC grid manager on Coinbase about every 30 minutes. 8 Nov lock is BTC / FET / XLM (US$50), funded (~100.19 USDC free; week remaining ~50.42); nothing filled as of 9:17am. 7 Nov SOL / LINK / RENDER all filled and booked. Buy-grid stopped 6 Nov per your review; sell ladder 5×0.01 BTC still open (0 fills).",
  "7.00AM $20 Crypto": "Group chat where the crypto lanes pitch each morning and Chief of Staff locks the 7am US$50 buy (8 Nov: ⭐ BTC, FET, XLM).",
  "BTC/SOL/ETH": "Pitches the daily bluechip lane (BTC, ETH, SOL) and chips in on the 9am value check; BTC was today's lock pick. ETH stays paused until the 23 Oct receipt is booked.",
  "Crypto Trending": "Pitches a daily trending-coin pick for the crypto group.",
  "Crypto Drop Recomendation": "Hands off the morning top-25 dip pick for the crypto group (8 Nov lock pick XLM).",
  "Crypto privacy": "Pitches privacy coins buyable on Coinbase SGD for the crypto group.",
  "Crypto AI": "Pitches an AI coin each morning for the crypto group (8 Nov lock pick FET).",
  "AI news bot": "Sends the 7am AI news and stock-impact briefing; last confirmed 6 Nov ~6:55am.",
  "FSD Data": "Sends the Tesla FSD and Robotaxi miles update every Sunday around 9am (weekly since 29 Oct). Latest 8 Nov 9:08am: about 17.24 billion supervised miles and 4.69 million unsupervised miles. Next Sun 15 Nov.",
  "Key Financial Announcements": "Sends morning investing motivation and the 7pm US market announcements; last confirmed 6 Nov 7:18am.",
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
  "E Mail": "Sends emails for you and makes work charts, slides and spreadsheets; on 6 Nov it emailed the FCN drop-shipment overview (as of 31 Oct). Work deck review next up page 17 (as of 1 Nov).",
  "Email Log": "Logs every email Grok Bot sends; no routines.",
  "Alexanders Homework": "Homework help for Alexander.",
  "Candys Grock Bot": "Logs Candy's after-meal readings when she sends them; no routines.",
  "Ideas: Income / Save $": "Sends a daily side-income and saving idea.",
  "Youtube Bot": "Watches the RedlisGaming channel (fully back since 30 Oct; restore watch now paused) and sends a 6pm report; latest 7 Nov (187 subscribers, +1; +2,206 views; 1 new Short).",
  "Redbubble": "Runs the Redbubble shop; checks daily for Redbubble support's reply about the account suspension.",
  "Letter From 2031": "Sends a letter from 2031 every Sunday evening; latest 1 Nov, next Sun 8 Nov (this evening).",
  "Monopoly": "Keeps score for Penguin in the family Monopoly game.",
  "New GROK BOT Ideas": "Pitches new Grok Bot ideas; last confirmed activity 6 Nov morning; 7–8 Nov not confirmed.",
  "Grok Bot Updates & Features": "Checks for new Grok Bot features each morning; last confirmed 6 Nov 8:39am; 7–8 Nov not confirmed.",
};
var BOTTODO = {
  "Options": ["Resubmit FCX Jan $85 buy-back @ $0.20 GTC", "Results Mon 9 Nov: HIMS / WULF / BKKT", "50%+ captured: FCX, UMAC, NVDA; hold TSLA / WULF", "PAAS 18 Dec $45 ×2: hold and watch", "Wife's SPCX Jan $185: still held?", "Free lots after Friday's fills", "SOFI 19 Mar $17 call: hold", "Put room $11,500 of $120,000"],
  "Coinbase": ["8 Nov dip buy still open: BTC / FET / XLM"],
  "Crypto Drop Recomendation": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "BTC/SOL/ETH": ["23 Oct ETH / VIRTUAL / HBAR receipt still missing"],
  "E Mail": ["Work deck review: next up page 17"],
  "Cyber Defence": ["Withdrawal alert shows as paused"],
  "Daiky News": ["Daily Singapore news brief: yes or no"],
  "Monopoly": ["Monopoly: count Penguin's cash and houses"],
};

// Onglets "Backlink Detail - <mois>" : liste complète des liens placés par mois.
// Format pipe : sr|postUrl|anchor|target|status
const parse = (month, label, raw) => ({
  month,
  label,
  links: raw
    .trim()
    .split("\n")
    .map((line) => {
      const [sr, postUrl, anchor, target, status] = line.split("|");
      return {
        sr: Number(sr),
        postUrl: postUrl.trim(),
        anchor: anchor.trim(),
        target: target.trim(),
        status: status.trim(),
      };
    }),
});

const november = `
1|https://casinopokerroyale.com/asias-online-gambling-boom-why-bk8-leads-the-region-in-2025/|bk8|bk8smart.com|Live
2|https://rouletteslotcasino.com/how-bk8-became-asias-most-trusted-casino-platform-in-2025/|bk8|bk8smart.com|Live
3|https://eliteroulettegames.com/why-millions-of-asian-players-prefer-bk8-thai-for-online-gaming/|bk8 thai|bk8smart.com|Live
4|https://pokerroulettecasino.com/bk8-thai-the-rising-star-in-asias-expanding-gambling-market/|bk8 thai|bk8smart.com|Live
5|https://slotsroulettejackpot.com/exploring-asias-top-casino-trends-bk8-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2-as-the-players-gateway/|bk8 ทางเข้า|bk8smart.com|Live
6|https://megapokerjackpot.com/bk8-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2-your-trusted-entry-to-asias-leading-gambling-hub/|bk8 ทางเข้า|bk8smart.com|Live
7|https://pokerslotjackpot.com/asias-casino-evolution-in-2025-how-bk8-login-enhances-user-experience/|bk8 login|bk8smart.com|Live
8|https://slotspokerwins.com/seamless-access-to-asias-best-casino-features-through-bk8-login/|bk8 login|bk8smart.com|Live
9|https://casinoeliteroulette.com/bk8-casino-the-online-platform-dominating-asias-gambling-industry/|bk8 casino|bk8smart.com|Live
10|https://livepokerroulette.com/why-bk8-casino-continues-to-attract-new-players-across-asia/|bk8 casino|bk8smart.com|Live
11|https://casinojackpotroyale.com/asias-love-for-online-gambling-how-bk8-sports-betting-stands-out/|bk8 sports betting|bk8smart.com|Live
12|https://jackpotslotroyale.com/the-growth-of-bk8-sports-betting-in-asias-online-casino-landscape/|bk8 sports betting|bk8smart.com|Live
13|https://elitecasinoroulette.com/%e0%b9%80%e0%b8%a7%e0%b9%87%e0%b8%9a%e0%b8%9e%e0%b8%99%e0%b8%b1%e0%b8%99-bk8-a-trusted-destination-for-asian-online-gamers/|เว็บพนัน bk8|bk8smart.com|Live
14|https://jackpotpokerlegends.com/why-%e0%b9%80%e0%b8%a7%e0%b9%87%e0%b8%9a%e0%b8%9e%e0%b8%99%e0%b8%b1%e0%b8%99-bk8-is-the-top-choice-for-asian-casino-players-in-2025/|เว็บพนัน bk8|bk8smart.com|Live
15|https://slotjackpotmasters.com/asias-online-gambling-surge-why-players-choose-bk8-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3/|bk8 สมัคร|bk8smart.com|Live
16|https://pokerjackpotroyale.com/a-deep-dive-into-asias-casino-trends-with-bk8-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3/|bk8 สมัคร|bk8smart.com|Live
17|https://jackpotrouletteelite.com/how-bk8-is-transforming-asias-online-gambling-experience/|bk8smart.com|bk8smart.com|Live
18|https://winningroulettejackpot.com/asias-fastest-growing-casino-hub-the-rise-of-bk8/|bk8smart.com|bk8smart.com|Live
19|https://blackjackcasinolegends.com/why-bk8-continues-to-gain-trust-among-asian-gamblers/|bk8smart.com|bk8smart.com|Live
20|https://slotsandpokerwins.com/asias-1-gaming-hub-why-bk8-leads-the-online-casino-market/|BK8|bk8smart.com|Live
21|https://casinojackpotempire.com/exploring-asias-online-casino-growth-with-bk8-at-the-center/|BK8|bk8smart.com|Live
22|https://casinorouletteempire.com/why-asian-players-trust-bk8-as-the-best-online-casino-in-2025/|BK8|bk8smart.com|Live
23|https://slotstreasurejackpot.com/bk8-the-most-reliable-online-gambling-platform-across-asia/|BK8 Smart|bk8smart.com|Live
24|https://highstakespokerslots.com/how-bk8-became-the-top-choice-for-asias-casino-enthusiasts/|BK8 Smart|bk8smart.com|Live
25|https://winningblackjackcasino.com/asias-online-gambling-revolution-bk8-at-the-forefront/|BK8 Smart|bk8smart.com|Live
26|https://slotsjackpotadventures.com/why-millions-of-asian-gamers-choose-bk8-for-daily-entertainment/|click here|bk8smart.com|Live
27|https://pokercasinomasters.com/bk8-the-online-casino-powerhouse-dominating-asia-in-2025/|click here|bk8smart.com|Live
28|https://ultimateroulettewins.com/what-makes-bk8-the-most-popular-gambling-brand-in-asia/|click here|bk8smart.com|Live
29|https://winningpokerjackpots.com/asias-digital-casino-scene-thrives-with-bk8-leading-the-way/|visit website|bk8smart.com|Live
30|https://slotsroulettecasino.com/the-future-of-asian-online-gambling-shaped-by-bk8/|visit website|bk8smart.com|Live
31|https://slotsjackpotmasters.com/bk8-setting-new-online-gambling-standards-across-asia/|visit website|bk8smart.com|Live
32|https://roulettepokerwins.com/why-w88-is-the-top-choice-for-online-casino-fans-in-malaysia/|w88|w88cas.com|Live
33|https://pokerjackpotcasino.com/discover-exclusive-bonuses-and-fast-withdrawals-at-w88/|w88|w88cas.com|Live
34|https://blackjackroulettemasters.com/play-slots-live-casino-and-sportsbook-safely-on-w88/|w88|w88cas.com|Live
35|https://jackpotslotsempire.com/unlock-seamless-gaming-in-malaysia-with-w88-login/|w88 login|w88cas.com|Live
36|https://liveblackjackmasters.com/how-to-use-w88-login-for-secure-and-fast-access/|w88 login|w88cas.com|Live
37|https://megajackpotpoker.com/w88-login-your-gateway-to-malaysias-best-online-casino/|w88 login|w88cas.com|Live
38|https://pokerjackpotzone.com/explore-malaysias-most-trusted-betting-platform-via-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2/|w88 ทางเข้า|w88cas.com|Live
39|https://casinomastersblackjack.com/why-players-prefer-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2-for-easy-and-safe-gaming/|w88 ทางเข้า|w88cas.com|Live
40|https://roulettejackpotmasters.com/w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2-the-most-reliable-access-to-casino-sports-betting/|w88 ทางเข้า|w88cas.com|Live
41|https://blackjackwinningjackpots.com/experience-world-class-betting-action-with-w88-sports/|w88 sports|w88cas.com|Live
42|https://pokerwinsjackpot.com/w88-sports-your-home-for-trusted-football-sports-betting/|w88 sports|w88cas.com|Live
43|https://ultimatecasinoroulette.com/explore-live-betting-and-big-wins-daily-at-w88-sports/|w88 sports|w88cas.com|Live
44|https://eliteslotjackpots.com/%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-w88-today-and-claim-a-welcome-bonus-up-to-rm1088/|สมัคร w88|w88cas.com|Live
45|https://blackjacktreasurecasino.com/how-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-w88-helps-you-start-playing-instantly-and-safely/|สมัคร w88|w88cas.com|Live
46|https://pokerslotsmasters.com/2025/11/25/play-anytime-anywhere-with-w88-%e0%b8%a1%e0%b8%b7%e0%b8%ad%e0%b8%96%e0%b8%b7%e0%b8%ad-mobile-casino/|w88 มือถือ|w88cas.com|Live
47|https://casinolegendsroulette.com/w88-%e0%b8%a1%e0%b8%b7%e0%b8%ad%e0%b8%96%e0%b8%b7%e0%b8%ad-malaysias-most-convenient-mobile-betting-platform/|w88 มือถือ|w88cas.com|Live
48|https://slotsjackpotmasters.com/why-malaysian-players-trust-w88cas-com-for-safe-online-gaming/|w88cas.com|w88cas.com|Live
49|https://megaroulettejackpot.com/get-fast-deposits-and-live-dealer-fun-at-w88cas-com/|w88cas.com|w88cas.com|Live
50|https://slotstormcasino.com/explore-exciting-slot-games-and-football-betting-on-w88cas-com/|w88cas.com|w88cas.com|Live
51|https://casinoelitex.com/w88cas-com-your-complete-hub-for-casino-games-promotions/|w88cas.com|w88cas.com|Live
52|https://luckyblackjackers.com/w88-malaysia-your-trusted-destination-for-online-casino-games-sports-betting/|W88|w88cas.com|Live
53|https://sportbetpulse.com/enjoy-fast-deposits-quick-withdrawals-and-24-7-support-at-w88/|W88|w88cas.com|Live
54|https://betrush365.com/discover-exciting-slots-and-live-dealer-action-at-w88-online-casino-malaysia/|W88|w88cas.com|Live
55|https://jackacecasino.com/w88-malaysia-the-ultimate-platform-for-slots-live-casino-and-sports-bets/|W88|w88cas.com|Live
56|https://betwarriorsarena.com/why-w88-is-malaysias-top-choice-for-safe-and-easy-online-betting/|click here|w88cas.com|Live
57|https://betmaxempire.com/unlock-weekly-cashback-and-special-rewards-at-w88-malaysia-casino/|click here|w88cas.com|Live
58|https://blackjackempiregame.com/claim-up-to-rm1088-welcome-bonus-when-you-join-w88-malaysia/|click here|w88cas.com|Live
59|https://gamesportsbetwin.com/play-smart-and-win-big-with-exclusive-promotions-at-w88-online-casino/|click here|w88cas.com|Live
60|https://pokerlegendslounge.com/w88-sportsbook-bet-on-your-favourite-football-matches-with-confidence/|register now|w88cas.com|Live
61|https://megaspinslotz.com/experience-secure-and-rewarding-gaming-at-w88-malaysia-today/|register now|w88cas.com|Live
62|https://casinovortexzone.com/w88-malaysia-a-complete-online-betting-hub-for-new-and-regular-players/|register now|w88cas.com|Live
63|https://pokerquestonline.com/discover-premium-gaming-at-fun88-with-trusted-online-casino-features/|fun88|ft881.com|Live
64|https://slotwizardsclub.com/why-players-choose-fun88-for-safe-and-exciting-online-betting/|fun88|ft881.com|Live
65|https://casinowinnersvault.com/start-winning-today-with-easy-access-through-fun88-login/|fun88 login|ft881.com|Live
66|https://pokerroyalarena.com/unlock-exclusive-promotions-instantly-using-fun88-login/|fun88 login|ft881.com|Live
67|https://turbosportsbets.com/explore-top-casino-games-through-fun88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2-for-fast-access/|fun88 ทางเข้า|ft881.com|Live
68|https://prospincasino.com/fun88-malaysia-trusted-platform-for-casino-slots-live-dealers/|fun88 ทางเข้า|ft881.com|Live
69|http://betstormnation.com/experience-real-rewards-and-live-play-at-fun88-casino/|fun88 casino|ft881.com|Live
70|http://blackjacktreasure.com/why-fun88-casino-remains-a-top-choice-for-malaysian-players/|fun88 casino|ft881.com|Live
71|http://betongamegame.com/bet-smarter-and-win-bigger-with-fun88-sports-online/|fun88 sports|ft881.com|Live
72|https://betgalaxyhq.com/fun88-sports-offers-football-esports-and-more-for-every-player/|fun88 sports|ft881.com|Live
73|https://jackpotwavecasino.com/how-to-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-fun88-and-claim-your-rm1088-welcome-bonus/|สมัคร fun88|ft881.com|Live
74|https://betfastcasinogame.com/%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-fun88-today-for-weekly-cashback-and-special-rewards/|สมัคร fun88|ft881.com|Live
75|https://pokerpowernation.com/fast-signup-fast-wins-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-fun88-for-a-premium-experience/|สมัคร fun88|ft881.com|Live
76|https://sportbetfever.com/play-anytime-anywhere-with-fun88-%e0%b8%a1%e0%b8%b7%e0%b8%ad%e0%b8%96%e0%b8%b7%e0%b8%ad-for-ultimate-convenience/|fun88 มือถือ|ft881.com|Live
77|http://betrushlegends.com/why-fun88-%e0%b8%a1%e0%b8%b7%e0%b8%ad%e0%b8%96%e0%b8%b7%e0%b8%ad-is-the-best-mobile-casino-for-malaysian-users/|fun88 มือถือ|ft881.com|Live
78|http://blackjackarenax.com/enjoy-smooth-and-secure-gaming-on-fun88-%e0%b8%a1%e0%b8%b7%e0%b8%ad%e0%b8%96%e0%b8%b7%e0%b8%ad-anytime/|fun88 มือถือ|ft881.com|Live
79|https://blackjackacevault.com/instant-access-to-trusted-betting-starts-at-ft881-com/|ft881.com|ft881.com|Live
80|http://sportsbetxtreme.com/ft881-com-offers-quick-deposits-withdrawals-and-24-7-support/|ft881.com|ft881.com|Live
81|https://betvictoryzone.com/why-thousands-of-malaysian-players-trust-ft881-com-for-online-gaming/|ft881.com|ft881.com|Live
82|https://betarenanation.com/ft881-com-the-official-gateway-to-secure-fun88-betting-and-casino-play/|ft881.com|ft881.com|Live
83|https://blackjackgamesarena.com/fun88-brings-you-premium-live-dealer-tables-and-sports-betting/|Fun88|ft881.com|Live
84|https://blackjackspingame.com/new-players-love-fun88-for-its-generous-rm1088-welcome-bonus/|Fun88|ft881.com|Live
85|https://casinofortuneedge.com/fun88-continues-to-lead-with-safe-fast-and-rewarding-gaming-solutions/|Fun88|ft881.com|Live
86|https://blackjackmegaarena.com/elevate-your-betting-experience-with-trusted-features-at-fun88/|Fun88|ft881.com|Live
87|https://spincasinojackpotarena.com/fun88-casino-delivers-exciting-slots-and-live-dealer-tables-daily/|click here|ft881.com|Live
88|https://blackcasinolegends.com/weekly-bonuses-and-safe-betting-make-fun88-casino-a-top-pick/|click here|ft881.com|Live
89|https://casinoslotxgame.com/why-fun88-casino-is-the-best-platform-for-football-betting-fans/|click here|ft881.com|Live
90|https://sportsbettcasinos.com/fun88-casino-offers-fast-withdrawals-and-high-quality-live-gaming/|click here|ft881.com|Live
91|https://betoncasinolegends.com/explore-new-promotions-and-cashback-deals-only-at-fun88-casino/|visit website|ft881.com|Live
92|https://sportscasinovaults.com/trusted-secure-and-rewarding-play-awaits-you-at-fun88-casino/|visit website|ft881.com|Live
93|https://casinospinsworld.com/fun88-casino-your-one-stop-platform-for-slots-sports-betting-and-live-dealers/|visit website|ft881.com|Live
`;

const december = `
1|https://betfiestagame.com/why-bk8-is-becoming-asias-most-trusted-online-casino-in-2025/|bk8|bk8smart.com|Live
2|https://pokerquestonline.com/how-bk8-continues-to-attract-millions-of-players-across-asia/|bk8|bk8smart.com|Live
3|https://blackjackrushhq.com/what-makes-bk8-stand-out-among-top-online-gambling-platforms/|bk8|bk8smart.com|Live
4|https://slotwizardsclub.com/why-bk8-thai-is-the-preferred-choice-for-thai-online-gamblers/|bk8 thai|bk8smart.com|Live
5|https://betontop365.com/the-rising-popularity-of-bk8-thai-among-new-casino-players/|bk8 thai|bk8smart.com|Live
6|https://casinoxtremevault.com/how-bk8-thai-delivers-a-secure-and-exciting-gaming-experience/|bk8 thai|bk8smart.com|Live
7|https://casinowinnersvault.com/a-complete-guide-to-bk8-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2-for-new-and-experienced-players/|bk8 ทางเข้า|bk8smart.com|Live
8|https://betpulsemax.com/easy-access-explained-how-to-use-bk8-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2-safely/|bk8 ทางเข้า|bk8smart.com|Live
9|https://pokerroyalarena.com/why-players-prefer-the-smooth-navigation-of-bk8-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2/|bk8 ทางเข้า|bk8smart.com|Live
10|https://luckyblackjackking.com/step-by-step-guide-to-secure-bk8-login-in-2025/|bk8 login|bk8smart.com|Live
11|https://blackjackgamesarena.com/common-issues-and-solutions-for-bk8-login-access/|bk8 login|bk8smart.com|Live
12|https://slotlegendsvault.com/how-bk8-login-enhances-player-safety-and-convenience/|bk8 login|bk8smart.com|Live
13|https://turbosportsbets.com/why-bk8-sports-betting-is-gaining-massive-popularity-in-asia/|bk8 sports betting|bk8smart.com|Live
14|https://casinoxtremevault.com/how-bk8-thai-delivers-a-secure-and-exciting-gaming-experience/|bk8 sports betting|bk8smart.com|Live
15|https://betstormnation.com/top-reasons-players-choose-bk8-sports-betting-platforms/|bk8 sports betting|bk8smart.com|Live
16|https://pokeracearena.com/how-bk8-sports-betting-combines-entertainment-and-reliability/|เว็บพนัน bk8|bk8smart.com|Live
17|https://blackjacktreasure.com/why-%e0%b9%80%e0%b8%a7%e0%b9%87%e0%b8%9a%e0%b8%9e%e0%b8%99%e0%b8%b1%e0%b8%99-bk8-is-trusted-by-millions-of-asian-players/|เว็บพนัน bk8|bk8smart.com|Live
18|https://betongamegame.com/the-key-features-that-make-%e0%b9%80%e0%b8%a7%e0%b9%87%e0%b8%9a%e0%b8%9e%e0%b8%99%e0%b8%b1%e0%b8%99-bk8-a-top-casino-site/|เว็บพนัน bk8|bk8smart.com|Live
19|https://casinowagerzone.com/how-%e0%b9%80%e0%b8%a7%e0%b9%87%e0%b8%9a%e0%b8%9e%e0%b8%99%e0%b8%b1%e0%b8%99-bk8-delivers-fair-play-and-secure-transactions/|bk8 casino|bk8smart.com|Live
20|https://betgalaxyhq.com/what-makes-bk8-casino-one-of-asias-best-online-casinos/|bk8 casino|bk8smart.com|Live
21|https://pokerstormnation.com/exploring-game-variety-and-bonuses-at-bk8-casino/|bk8 casino|bk8smart.com|Live
22|https://jackpotwavecasino.com/why-bk8-casino-appeals-to-both-beginners-and-experts/|bk8 สมัคร|bk8smart.com|Live
23|https://slotepicspin.com/a-beginners-guide-to-easy-registration-with-bk8-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3/|bk8 สมัคร|bk8smart.com|Live
24|https://betfastcasinogame.com/why-the-bk8-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-process-is-fast-and-player-friendly/|bk8 สมัคร|bk8smart.com|Live
25|https://casinomegavault.com/how-bk8-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-opens-the-door-to-premium-casino-games/|bk8 สมัคร|bk8smart.com|Live
26|https://pokerpowernation.com/benefits-you-get-after-completing-bk8-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-successfully/|bk8smart.com|bk8smart.com|Live
27|https://blackjackmastersclub.com/how-bk8-maintains-trust-and-transparency-across-asia/|bk8smart.com|bk8smart.com|Live
28|https://sportbetfever.com/the-secret-behind-bk8s-rapid-growth-in-online-gambling/|bk8smart.com|bk8smart.com|Live
29|https://casinoultraedge.com/why-bk8-is-the-first-choice-for-modern-casino-players/|bk8smart.com|bk8smart.com|Live
30|https://betrushlegends.com/exploring-the-game-innovation-that-sets-bk8-apart/|bk8smart.com|bk8smart.com|Live
31|https://pokertitanclub.com/how-bk8-attracts-millions-of-new-players-every-year/|BK8|bk8smart.com|Live
32|https://blackjackarenax.com/the-role-of-security-and-technology-at-bk8/|BK8|bk8smart.com|Live
33|https://casinogalaxyedge.com/why-bk8-continues-to-lead-asias-online-casino-market/|BK8|bk8smart.com|Live
34|https://betarenanation.com/what-makes-bk8-a-reliable-platform-for-long-term-players/|BK8|bk8smart.com|Live
35|https://pokerlegendsgame.com/how-bk8-balances-entertainment-and-responsible-gaming/|BK8|bk8smart.com|Live
36|https://blackjackacevault.com/why-bk8-is-ideal-for-both-casual-and-professional-gamblers/|BK8 Smart|bk8smart.com|Live
37|https://slotstormnation.com/the-complete-online-gambling-experience-offered-by-bk8/|BK8 Smart|bk8smart.com|Live
38|https://sportsbetxtreme.com/how-bk8-builds-player-loyalty-through-quality-service/|BK8 Smart|bk8smart.com|Live
39|https://casinorushnation.com/why-bk8-is-synonymous-with-trust-in-asian-online-casinos/|BK8 Smart|bk8smart.com|Live
40|https://betvictoryzone.com/what-new-players-should-know-before-joining-bk8/|click here|bk8smart.com|Live
41|https://pokerempirehq.com/the-competitive-advantages-that-keep-bk8-ahead/|click here|bk8smart.com|Live
42|https://blackjackspingame.com/why-bk8-is-setting-new-standards-in-online-gaming/|click here|bk8smart.com|Live
43|https://slotfiestavault.com/how-bk8-continues-to-redefine-casino-entertainment/|visit website|bk8smart.com|Live
44|https://casinofortuneedge.com/why-bk8-remains-the-ultimate-online-casino-choice-in-asia/|visit website|bk8smart.com|Live
45|https://pokervaultnation.com/exploring-the-growth-of-bk8-as-asias-leading-casino-brand/|visit website|bk8smart.com|Live
46|https://blackjackmegaarena.com/discover-safe-and-rewarding-online-gaming-with-w88-in-malaysia/|w88|w88cas.com|Live
47|https://slotwagerworld.com/why-w88-is-a-top-choice-for-casino-games-and-sports-betting/|w88|w88cas.com|Live
48|https://spincasinojackpotarena.com/enjoy-slots-live-casino-and-football-betting-on-w88/|w88|w88cas.com|Live
49|https://casinobetmastersclub.com/a-complete-guide-to-playing-and-winning-on-w88-malaysia/|w88|w88cas.com|Live
50|https://blackcasinolegends.com/trusted-online-casino-experience-made-easy-with-w88/|w88|w88cas.com|Live
51|https://casinobetarenagame.com/how-to-access-games-and-bonuses-easily-with-w88-login/|w88 login|w88cas.com|Live
52|https://casinoslotxgame.com/step-by-step-guide-for-fast-and-secure-w88-login/|w88 login|w88cas.com|Live
53|https://spintoslotsmaster.com/everything-you-need-to-know-before-your-first-w88-login/|w88 login|w88cas.com|Live
54|https://sportsbettcasinos.com/smooth-access-to-casino-and-sports-betting-via-w88-login/|w88 login|w88cas.com|Live
55|https://casinobetboosthq.com/play-casino-games-and-bet-on-football-all-in-one-place-with-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2/|w88 ทางเข้า|w88cas.com|Live
56|https://betoncasinolegends.com/how-to-access-websites-safely-with-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2/|w88 ทางเข้า|w88cas.com|Live
57|https://slotcasinozone.com/enjoy-slots-and-live-casino-easily-with-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2/|w88 ทางเข้า|w88cas.com|Live
58|https://sportscasinovaults.com/stable-and-fast-betting-experience-with-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2/|w88 ทางเข้า|w88cas.com|Live
59|https://casinobetwavex.com/football-betting-and-more-made-simple-with-w88-sports/|w88 sports|w88cas.com|Live
60|https://casinospinsworld.com/explore-competitive-odds-and-live-action-on-w88-sports/|w88 sports|w88cas.com|Live
61|https://casinobetkingx.com/why-football-fans-prefer-betting-online-with-w88-sports/|w88 sports|w88cas.com|Live
62|https://prospincasino.com/a-complete-sports-betting-experience-starts-with-w88-sports/|w88 sports|w88cas.com|Live
63|https://slotblastvault.com/how-to-register-a-new-account-and-easily-receive-bonuses-with-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-w88/|สมัคร w88|w88cas.com|Live
64|https://casinoxcelgame.com/beginners-guide-for-new-players-with-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-w88/|สมัคร w88|w88cas.com|Live
65|https://betprimearena.com/register-today-to-receive-special-privileges-and-bonuses-with-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-w88/|สมัคร w88|w88cas.com|Live
66|https://blackjackgoldnation.com/enjoy-online-casino-and-sports-instantly-when-you-%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3-w88/|สมัคร w88|w88cas.com|Live
67|https://slotquestzone.com/enjoy-casino-and-sports-betting-anywhere-anytime-with-w88-%e0%b8%a1%e0%b8%b7%e0%b8%ad%e0%b8%96%e0%b8%b7%e0%b8%ad/|w88 มือถือ|w88cas.com|Live
68|https://pokerroyalgame.com/a-seamless-mobile-betting-experience-with-w88-mobile/|w88 มือถือ|w88cas.com|Live
69|https://blackjacklegendsx.com/easy-to-use-mobile-online-casino-experience-with-w88-%e0%b8%a1%e0%b8%b7%e0%b8%ad%e0%b8%96%e0%b8%b7%e0%b8%ad/|w88 มือถือ|w88cas.com|Live
70|https://slotthunderhq.com/maximum-convenience-for-players-through-w88-mobile/|w88 มือถือ|w88cas.com|Live
71|https://casinostrikex.com/why-w88-malaysia-is-trusted-by-online-players/|w88cas.com|w88cas.com|Live
72|https://pokerfortuneden.com/enjoy-slots-live-dealers-and-sports-betting-with-w88/|w88cas.com|w88cas.com|Live
73|https://jackpoteliteslots.com/a-secure-and-user-friendly-online-casino-experience-at-w88/|w88cas.com|w88cas.com|Live
74|https://toppokerroulette.com/how-w88-delivers-fast-withdrawals-and-reliable-support/|w88cas.com|w88cas.com|Live
75|https://highstakescasinoslots.com/the-ultimate-online-casino-and-sports-platform-powered-by-w88/|w88cas.com|w88cas.com|Live
76|https://premiumblackjackwins.com/play-and-win-confidently-on-the-trusted-site-w88/|W88|w88cas.com|Live
77|https://jackpotelitecasino.com/exclusive-bonuses-and-promotions-await-you-at-w88/|W88|w88cas.com|Live
78|https://slotpokerjackpot.com/experience-smooth-gaming-and-betting-all-in-one-place-with-w88/|W88|w88cas.com|Live
79|https://blackjackjackpotcasino.com/what-makes-w88-a-preferred-choice-for-malaysian-players/|W88|w88cas.com|Live
80|https://megablackjackwins.com/from-casino-games-to-football-bets-w88-has-it-all/|W88|w88cas.com|Live
81|https://winningtables.com/enjoy-a-secure-and-rewarding-journey-with-w88-online-casino/|click here|w88cas.com|Live
82|https://slotsjackpotelite.com/new-player-benefits-and-weekly-rewards-available-on-w88/|click here|w88cas.com|Live
83|https://jackpotadventures.com/easy-deposits-and-quick-payouts-make-w88-stand-out/|click here|w88cas.com|Live
84|https://premiumroulettejackpot.com/trusted-entertainment-and-betting-solutions-offered-by-w88/|click here|w88cas.com|Live
85|https://blackjackroulettecasino.com/a-complete-guide-to-online-casino-fun-with-w88/|click here|w88cas.com|Live
86|https://winningcasinoblackjack.com/reliable-customer-support-and-smooth-gameplay-at-w88/|register now|w88cas.com|Live
87|https://highstakesroulettecasino.com/why-more-players-are-choosing-w88-for-online-betting/|register now|w88cas.com|Live
88|https://pokerslotsempire.com/safe-simple-and-exciting-online-play-starts-with-w88/|register now|w88cas.com|Live
89|https://ultimatecasinojackpots.com/discover-a-better-way-to-play-and-bet-online-with-w88/|register now|w88cas.com|Live
90|https://highrollercasinowins.com/play-smarter-and-safer-with-the-all-in-one-platform-w88/|register now|w88cas.com|Live
`;

const january = `
1|https://beamspin.com/%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99-bk8-%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%9e%e0%b8%99%e0%b8%99%e0%b8%97/|bk8|https://www.bk8smart.com/|Live
2|https://betvibex.com/%e0%b9%80%e0%b8%84%e0%b8%a5%e0%b8%94%e0%b8%a5%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99-bk8-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3/|bk8|https://www.bk8smart.com/|Live
3|https://blissspin.com/%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99-bk8-%e0%b8%97%e0%b8%84%e0%b8%93%e0%b9%84%e0%b8%a1%e0%b8%84%e0%b8%a7%e0%b8%a3%e0%b8%9e%e0%b8%a5%e0%b8%b2%e0%b8%94%e0%b9%83%e0%b8%99%e0%b8%9b%e0%b8%99/|bk8|https://www.bk8smart.com/|Live
4|https://branchcasino.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99-bk8-thai-%e0%b8%a7%e0%b8%98%e0%b9%80%e0%b8%9e%e0%b8%a1%e0%b9%82%e0%b8%ad%e0%b8%81%e0%b8%b2%e0%b8%aa/|bk8 thai|https://www.bk8smart.com/|Live
5|https://brasscasino.com/%e0%b9%80%e0%b8%a7%e0%b8%a5%e0%b8%b2%e0%b8%aa%e0%b8%99%e0%b8%81%e0%b8%aa%e0%b8%99%e0%b8%b2%e0%b8%99%e0%b8%81%e0%b8%9a-bk8-thai-%e0%b8%97%e0%b9%82%e0%b8%95%e0%b8%b0%e0%b9%82%e0%b8%9b%e0%b8%81%e0%b9%80/|bk8 thai|https://www.bk8smart.com/|Live
6|https://casinomaxpro.com/%e0%b9%82%e0%b8%a5%e0%b8%81%e0%b8%82%e0%b8%ad%e0%b8%87-bk8-thai-%e0%b9%83%e0%b8%99%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99/|bk8 thai|https://www.bk8smart.com/|Live
7|https://casinovibex.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%83%e0%b8%8a-bk8-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b9%80%e0%b8%9e%e0%b8%a1%e0%b9%82%e0%b8%ad%e0%b8%81%e0%b8%b2/|bk8 ทางเข้า|https://www.bk8smart.com/|Live
8|https://cindercasino.com/%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b9%83%e0%b8%8a%e0%b8%87%e0%b8%b2%e0%b8%99-bk8-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%9a%e0%b8%9c%e0%b9%80/|bk8 ทางเข้า|https://www.bk8smart.com/|Live
9|https://citrinecasino.com/%e0%b8%9e%e0%b8%9a%e0%b8%81%e0%b8%9a-bk8-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-%e0%b9%81%e0%b8%ab%e0%b8%a5%e0%b8%87%e0%b8%a3%e0%b8%a7%e0%b8%a1%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1/|bk8 ทางเข้า|https://www.bk8smart.com/|Live
10|https://coilcasino.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%aa-bk8-login-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93/|bk8 login|https://www.bk8smart.com/|Live
11|https://coilspin.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%a5%e0%b8%ad%e0%b8%81%e0%b8%ad%e0%b8%99-bk8-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%9a%e0%b8%9c%e0%b9%83%e0%b8%8a%e0%b8%84%e0%b8%b2%e0%b8%aa/|bk8 login|https://www.bk8smart.com/|Live
12|https://cometspin.com/%e0%b8%a7%e0%b8%98%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%aa%e0%b8%a3%e0%b8%b0%e0%b8%9a%e0%b8%9a-bk8-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%9a%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81/|bk8 login|https://www.bk8smart.com/|Live
13|https://commonwin.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%aa%e0%b8%a3%e0%b8%b2%e0%b8%87%e0%b8%a3%e0%b8%b2%e0%b8%a2%e0%b9%84%e0%b8%94%e0%b8%88%e0%b8%b2%e0%b8%81-bk8-sports-betting-%e0%b9%83%e0%b8%99%e0%b8%84/|bk8 sports betting|https://www.bk8smart.com/|Live
14|https://cordcasino.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%9e%e0%b8%99%e0%b8%99%e0%b8%81%e0%b8%ac%e0%b8%b2-bk8-sports-betting-%e0%b9%80%e0%b8%84%e0%b8%a5%e0%b8%94%e0%b8%a5%e0%b8%9a%e0%b9%81%e0%b8%a5%e0%b8%b0%e0%b8%81%e0%b8%a5/|bk8 sports betting|https://www.bk8smart.com/|Live
15|https://cosmosspin.com/%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%99%e0%b8%b2%e0%b9%80%e0%b8%8a%e0%b8%ad%e0%b8%96%e0%b8%ad%e0%b8%82%e0%b8%ad%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99/|bk8 sports betting|https://www.bk8smart.com/|Live
16|https://creaturewin.com/%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%97-%e0%b9%80%e0%b8%a7%e0%b8%9a%e0%b8%9e%e0%b8%99%e0%b8%99-bk8/|เว็บพนัน bk8|https://www.bk8smart.com/|Live
17|https://cropcasino.com/%e0%b9%80%e0%b8%81%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%97%e0%b8%99%e0%b8%b2%e0%b8%aa%e0%b8%99%e0%b9%83%e0%b8%88%e0%b9%83%e0%b8%99%e0%b9%80%e0%b8%a7%e0%b8%9a%e0%b8%9e%e0%b8%99/|เว็บพนัน bk8|https://www.bk8smart.com/|Live
18|https://crownedesport.com/%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3-%e0%b9%80%e0%b8%a7%e0%b8%9a%e0%b8%9e%e0%b8%99%e0%b8%99-bk8-%e0%b8%aa%e0%b9%82%e0%b8%a5%e0%b8%81%e0%b8%82%e0%b8%ad%e0%b8%87%e0%b9%80%e0%b8%81%e0%b8%a1/|เว็บพนัน bk8|https://www.bk8smart.com/|Live
19|https://cyborgwin.com/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99-bk8-casino/|bk8 casino|https://www.bk8smart.com/|Live
20|https://cyclonecasino.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%97-bk8-casino-%e0%b8%84%e0%b8%b3%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3/|bk8 casino|https://www.bk8smart.com/|Live
21|https://dappercasino.com/%e0%b8%aa%e0%b8%87%e0%b8%97%e0%b8%84%e0%b8%93%e0%b8%84%e0%b8%a7%e0%b8%a3%e0%b8%a3%e0%b9%80%e0%b8%81%e0%b8%a2%e0%b8%a7%e0%b8%81%e0%b8%9a-bk8-casino-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%9a/|bk8 casino|https://www.bk8smart.com/|Live
22|https://daringcasino.com/%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-bk8-%e0%b8%a7%e0%b8%98%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%aa%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99/|bk8 สมัคร|https://www.bk8smart.com/|Live
23|https://dashspin.com/%e0%b8%a7%e0%b8%98%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-bk8-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%a5%e0%b8%81%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99/|bk8 สมัคร|https://www.bk8smart.com/|Live
24|https://dawnspin.com/%e0%b8%82%e0%b8%99%e0%b8%95%e0%b8%ad%e0%b8%99%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-bk8-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%9a%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82/|bk8 สมัคร|https://www.bk8smart.com/|Live
25|https://dazzlespin.com/%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-bk8-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%a3%e0%b8%a7%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99/|bk8 สมัคร|https://www.bk8smart.com/|Live
26|https://diceelite.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%83%e0%b8%8a-bk8smart-com-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%84/|bk8smart.com|https://www.bk8smart.com/|Live
27|https://duchessbet.com/%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%97-bk8smart-com-%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3/|bk8smart.com|https://www.bk8smart.com/|Live
28|https://duchessspin.com/%e0%b8%a7%e0%b8%98%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%9a%e0%b8%99-bk8smart-com-%e0%b8%ad%e0%b8%a2/|bk8smart.com|https://www.bk8smart.com/|Live
29|https://dukespin.com/%e0%b9%80%e0%b8%a7%e0%b8%9a%e0%b9%84%e0%b8%8b%e0%b8%95%e0%b8%9e%e0%b8%99%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%97%e0%b8%94%e0%b8%97%e0%b8%aa%e0%b8%94-bk8smart-com/|bk8smart.com|https://www.bk8smart.com/|Live
30|https://elitegamerwin.com/%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%97-bk8smart-com/|bk8smart.com|https://www.bk8smart.com/|Live
31|https://elitexcasino.com/%e0%b8%aa%e0%b8%a1%e0%b8%9c%e0%b8%aa%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93-bk8-%e0%b9%83%e0%b8%99%e0%b9%82%e0%b8%a5%e0%b8%81%e0%b8%82%e0%b8%ad%e0%b8%87/|BK8|https://www.bk8smart.com/|Live
32|https://emberspin.com/bk8-%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%97%e0%b9%84%e0%b8%a1%e0%b9%80%e0%b8%ab%e0%b8%a1%e0%b8%ad%e0%b8%99%e0%b9%83%e0%b8%84/|BK8|https://www.bk8smart.com/|Live
33|https://equalcasino.com/bk8-%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad/|BK8|https://www.bk8smart.com/|Live
34|https://equalwin.com/%e0%b9%80%e0%b8%aa%e0%b8%a2%e0%b8%87%e0%b9%82%e0%b8%8a%e0%b8%84-bk8-%e0%b8%81%e0%b8%9a%e0%b9%80%e0%b8%81%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84/|BK8|https://www.bk8smart.com/|Live
35|https://esportaces.com/bk8-%e0%b8%95%e0%b8%ad%e0%b8%87%e0%b8%97%e0%b8%b3%e0%b8%ad%e0%b8%a2%e0%b8%b2%e0%b8%87%e0%b9%84%e0%b8%a3%e0%b9%83%e0%b8%99%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%9e%e0%b8%a1%e0%b9%82%e0%b8%ad/|BK8|https://www.bk8smart.com/|Live
36|https://esportapex.com/bk8-smart-%e0%b8%aa%e0%b8%94%e0%b8%a2%e0%b8%ad%e0%b8%94%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad/|BK8 Smart|https://www.bk8smart.com/|Live
37|https://esportblaze.com/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b9%83%e0%b8%99%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99-b/|BK8 Smart|https://www.bk8smart.com/|Live
38|https://esportbolt.com/%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%87%e0%b8%b2%e0%b8%a2%e0%b9%86-%e0%b8%81%e0%b8%9a-bk8-smart-%e0%b9%83%e0%b8%99%e0%b8%84/|BK8 Smart|https://www.bk8smart.com/|Live
39|https://esportflash.com/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%97%e0%b8%a2%e0%b8%ad%e0%b8%94%e0%b9%80%e0%b8%a2%e0%b8%a2%e0%b8%a1/|BK8 Smart|https://www.bk8smart.com/|Live
40|https://esportglow.com/%e0%b9%80%e0%b8%9b%e0%b8%94%e0%b9%82%e0%b8%a5%e0%b8%81%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%94%e0%b8%a7%e0%b8%a2-bk8-smart-%e0%b8%97%e0%b9%83%e0%b8%ab%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa/|click here|https://www.bk8smart.com/|Live
41|https://esportorbit.com/%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99-bk8-smart-%e0%b8%97%e0%b9%80%e0%b8%9b%e0%b8%94%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81/|click here|https://www.bk8smart.com/|Live
42|https://esportpeak.com/%e0%b8%97%e0%b8%b3%e0%b9%84%e0%b8%a1-bk8-smart-%e0%b9%80%e0%b8%9b%e0%b8%99%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%a5%e0%b8%ad%e0%b8%81%e0%b8%97%e0%b8%94%e0%b8%97%e0%b8%aa%e0%b8%94%e0%b8%aa%e0%b8%b3/|click here|https://www.bk8smart.com/|Live
43|https://esportwave.com/%e0%b8%a3%e0%b8%a7%e0%b8%a7-bk8-smart-%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%97%e0%b8%94%e0%b8%97%e0%b8%aa%e0%b8%94%e0%b9%83%e0%b8%99%e0%b9%84%e0%b8%97%e0%b8%a2/|visit website|https://www.bk8smart.com/|Live
44|https://extentcasino.com/bk8-smart-%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3%e0%b9%80%e0%b8%81%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%a2%e0%b8%ad%e0%b8%94%e0%b8%99%e0%b8%a2%e0%b8%a1%e0%b9%81%e0%b8%a5/|visit website|https://www.bk8smart.com/|Live
45|https://facetcasino.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%81%e0%b8%9a-bk8-smart-%e0%b8%ad%e0%b8%a2%e0%b8%b2%e0%b8%87%e0%b8%a1%e0%b8%9b%e0%b8%a3%e0%b8%b0/|visit website|https://www.bk8smart.com/|Live
46|https://fiercecasino.com/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%97%e0%b8%94%e0%b8%97%e0%b8%aa%e0%b8%94%e0%b8%81%e0%b8%9a-w88/|w88|https://www.w88cas.com/|Live
47|https://flairesport.com/%e0%b8%81%e0%b8%a5%e0%b8%a2%e0%b8%97%e0%b8%98%e0%b9%80%e0%b8%a5%e0%b8%99-w88-%e0%b9%83%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b9%80%e0%b8%9e%e0%b8%a1/|w88|https://www.w88cas.com/|Live
48|https://flarespin.com/%e0%b9%80%e0%b8%84%e0%b8%a5%e0%b8%94%e0%b8%a5%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99-w88-%e0%b8%ad%e0%b8%a2%e0%b8%b2%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%8d%e0%b8%89%e0%b8%a5/|w88|https://www.w88cas.com/|Live
49|https://floodcasino.com/%e0%b8%81%e0%b8%a5%e0%b8%a2%e0%b8%97%e0%b8%98%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%81%e0%b8%9a%e0%b8%9a%e0%b9%84%e0%b8%a1%e0%b8%95/|w88|https://www.w88cas.com/|Live
50|https://floralcasino.com/%e0%b8%a7%e0%b8%98%e0%b9%80%e0%b8%9e%e0%b8%a1%e0%b9%82%e0%b8%ad%e0%b8%81%e0%b8%b2%e0%b8%aa%e0%b8%8a%e0%b8%99%e0%b8%b0%e0%b9%83%e0%b8%99%e0%b9%80%e0%b8%81%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82/|w88|https://www.w88cas.com/|Live
51|https://focalcasino.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%a788-%e0%b8%a5%e0%b8%ad%e0%b8%81%e0%b8%ad%e0%b8%99-%e0%b9%81%e0%b8%a5%e0%b8%b0%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%96/|w88 login|https://www.w88cas.com/|Live
52|https://framecasino.com/%e0%b8%84%e0%b8%a1%e0%b8%ad%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%aa%e0%b8%a3%e0%b8%b0%e0%b8%9a%e0%b8%9a-w88-%e0%b8%97%e0%b8%aa%e0%b8%a1%e0%b8%9a%e0%b8%a3%e0%b8%93%e0%b9%81/|w88 login|https://www.w88cas.com/|Live
53|https://frostwin.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%aa%e0%b8%a3%e0%b8%b0%e0%b8%9a%e0%b8%9a-w88-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3/|w88 login|https://www.w88cas.com/|Live
54|https://fusespin.com/%e0%b8%a7%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b9%81%e0%b8%a5%e0%b8%b0%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%aa%e0%b8%a3%e0%b8%b0%e0%b8%9a%e0%b8%9a-w88-%e0%b8%81%e0%b8%9a/|w88 login|https://www.w88cas.com/|Live
55|https://galecasino.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%83%e0%b8%8a-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a/|w88 ทางเข้า|https://www.w88cas.com/|Live
56|https://galeplay.com/%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3%e0%b8%a7%e0%b8%98%e0%b9%83%e0%b8%8a-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-%e0%b9%83%e0%b8%99%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa/|w88 ทางเข้า|https://www.w88cas.com/|Live
57|https://galespin.com/%e0%b8%a3%e0%b8%88%e0%b8%81%e0%b8%81%e0%b8%9a-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-%e0%b9%81%e0%b8%a5%e0%b8%b0%e0%b8%81%e0%b8%a5%e0%b8%a2%e0%b8%97%e0%b8%98%e0%b8%81%e0%b8%b2/|w88 ทางเข้า|https://www.w88cas.com/|Live
58|https://garnetcasino.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%96%e0%b8%87-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa/|w88 ทางเข้า|https://www.w88cas.com/|Live
59|https://giltcasino.com/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%97%e0%b8%99%e0%b8%b2%e0%b8%95%e0%b8%99%e0%b9%80%e0%b8%95%e0%b8%99%e0%b8%81%e0%b8%9a-w88-sports-%e0%b9%83/|w88 sports|https://www.w88cas.com/|Live
60|https://gleamcasino.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%81%e0%b8%ac%e0%b8%b2-w88-sports-%e0%b9%83%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99-%e0%b8%a7%e0%b8%98/|w88 sports|https://www.w88cas.com/|Live
61|https://glidecasino.com/%e0%b8%84%e0%b8%93%e0%b8%aa%e0%b8%a1%e0%b8%9a%e0%b8%95%e0%b9%81%e0%b8%a5%e0%b8%b0%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b9%82%e0%b8%a2%e0%b8%8a%e0%b8%99%e0%b8%82%e0%b8%ad%e0%b8%87-w88-sports-%e0%b9%83/|w88 sports|https://www.w88cas.com/|Live
62|https://glintesports.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%81%e0%b8%ac%e0%b8%b2-w88-sports-%e0%b8%97%e0%b8%aa%e0%b8%a3%e0%b8%b2%e0%b8%87%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%84/|w88 sports|https://www.w88cas.com/|Live
63|https://glitterspin.com/%e0%b8%a7%e0%b8%98%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%a3%e0%b8%a7%e0%b8%a1%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81/|สมัคร w88|https://www.w88cas.com/|Live
64|https://gorgecasino.com/%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b8%84/|สมัคร w88|https://www.w88cas.com/|Live
65|https://grandmasterwin.com/%e0%b8%97%e0%b8%b3%e0%b9%84%e0%b8%a1%e0%b8%84%e0%b8%a7%e0%b8%a3%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b8%aa%e0%b8%99%e0%b8%81%e0%b8%81%e0%b8%9a%e0%b9%82%e0%b8%a5/|สมัคร w88|https://www.w88cas.com/|Live
66|https://grovecasino.com/%e0%b8%a7%e0%b8%98%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b9%80%e0%b8%82%e0%b8%b2%e0%b8%a3%e0%b8%a7%e0%b8%a1%e0%b8%aa%e0%b8%99%e0%b8%81%e0%b8%9b%e0%b8%a3%e0%b8%b0/|สมัคร w88|https://www.w88cas.com/|Live
67|https://hastecasino.com/%e0%b8%84%e0%b8%99%e0%b8%9e%e0%b8%9a%e0%b8%82%e0%b8%ad%e0%b8%94%e0%b8%82%e0%b8%ad%e0%b8%87-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa/|w88 มือถือ|https://www.w88cas.com/|Live
68|https://heightsgaming.com/%e0%b8%a3%e0%b8%88%e0%b8%81%e0%b8%81%e0%b8%9a-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b9%81%e0%b8%9e%e0%b8%a5%e0%b8%95%e0%b8%9f%e0%b8%ad%e0%b8%a3%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82/|w88 มือถือ|https://www.w88cas.com/|Live
69|https://helixwin.com/%e0%b9%80%e0%b8%84%e0%b8%a5%e0%b8%94%e0%b8%a5%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b9%80%e0%b8%81%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%9c%e0%b8%b2/|w88 มือถือ|https://www.w88cas.com/|Live
70|https://heroiccasino.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%83%e0%b8%8a%e0%b8%87%e0%b8%b2%e0%b8%99-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b9%80%e0%b8%9e%e0%b8%ad%e0%b9%80%e0%b8%9e%e0%b8%a1%e0%b9%82/|w88 มือถือ|https://www.w88cas.com/|Live
71|https://honoresport.com/%e0%b8%aa%e0%b8%99%e0%b8%81%e0%b8%81%e0%b8%9a%e0%b9%80%e0%b8%81%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%97-w88cas-com-%e0%b9%81%e0%b8%a5%e0%b8%b0%e0%b9%80%e0%b8%97%e0%b8%84/|w88cas.com|https://www.w88cas.com/|Live
72|https://honorspin.com/%e0%b9%80%e0%b8%81%e0%b8%a1%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%8a%e0%b8%99%e0%b8%99%e0%b8%b3%e0%b8%97-w88cas-com-%e0%b8%a3/|w88cas.com|https://www.w88cas.com/|Live
73|https://huzecasino.com/%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%97-w88cas-com-%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%95%e0%b8%99%e0%b9%80%e0%b8%95/|w88cas.com|https://www.w88cas.com/|Live
74|https://hyperesport.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%9e%e0%b8%a1%e0%b9%82%e0%b8%ad%e0%b8%81%e0%b8%b2%e0%b8%aa%e0%b8%8a%e0%b8%99%e0%b8%b0%e0%b8%97%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99/|w88cas.com|https://www.w88cas.com/|Live
75|https://impulsewin.com/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%97%e0%b9%80%e0%b8%ab%e0%b8%99%e0%b8%ad/|w88cas.com|https://www.w88cas.com/|Live
76|https://inletcasino.com/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%97%e0%b8%94/|W88|https://www.w88cas.com/|Live
77|https://instantesport.com/%e0%b8%9e%e0%b8%9a%e0%b8%81%e0%b8%9a%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%aa%e0%b8%99%e0%b8%81%e0%b8%97-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b9%83%e0%b8%99%e0%b9%82%e0%b8%a5%e0%b8%81/|W88|https://www.w88cas.com/|Live
78|https://jewelgaming.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%9c%e0%b8%b2%e0%b8%99-w|W88|https://www.w88cas.com/|Live
79|https://joltesports.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%97-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b8%aa%e0%b8%a1%e0%b8%9c%e0%b8%aa%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa/|W88|https://www.w88cas.com/|Live
80|https://joltwin.com/%e0%b8%82%e0%b8%ad%e0%b8%94%e0%b8%82%e0%b8%ad%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5/|W88|https://www.w88cas.com/|Live
81|https://jubileespin.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%83%e0%b8%8a-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b9%83%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5/|click here|https://www.w88cas.com/|Live
82|https://karmaesport.com/%e0%b8%a7%e0%b8%98%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b8%ad%e0%b8%a2%e0%b8%b2%e0%b8%87%e0%b8%a1%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa/|click here|https://www.w88cas.com/|Live
83|https://kineticcasino.com/%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3%e0%b8%a7%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%97-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b8%aa%e0%b8%b3%e0%b8%ab/|click here|https://www.w88cas.com/|Live
84|https://kinetowin.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94%e0%b8%a1%e0%b8%9e%e0%b8%99%e0%b8%97-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%aa%e0%b8%a3%e0%b8%b2%e0%b8%87%e0%b8%84/|click here|https://www.w88cas.com/|Live
85|https://kingdomspin.com/%e0%b8%aa%e0%b8%99%e0%b8%81%e0%b8%81%e0%b8%9a%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%95%e0%b8%99%e0%b9%80%e0%b8%95%e0%b8%99%e0%b8%82%e0%b8%ad%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%94/|click here|https://www.w88cas.com/|Live
86|https://levelspin.com/%e0%b8%a2%e0%b8%81%e0%b8%a3%e0%b8%b0%e0%b8%94%e0%b8%9a%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%9a%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%93%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b9%80/|register now|https://www.w88cas.com/|Live
87|https://lucidspin.com/%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%87%e0%b8%b2%e0%b8%a2%e0%b9%86-%e0%b8%9a%e0%b8%99%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad%e0%b8%81%e0%b8%9a-w88-%e0%b8%a1/|register now|https://www.w88cas.com/|Live
88|https://majestyplay.com/%e0%b8%a7%e0%b8%98%e0%b9%80%e0%b8%a5%e0%b8%99-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-%e0%b9%83%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5/|register now|https://www.w88cas.com/|Live
89|https://majestyspin.com/%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99-%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%9c%e0%b8%b2%e0%b8%99-w88-%e0%b8%a1/|register now|https://www.w88cas.com/|Live
90|https://mechcasino.com/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%80%e0%b8%a5%e0%b8%99%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%82%e0%b8%99%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b8%97%e0%b8%99%e0%b8%b2%e0%b8%95%e0%b8%99/|register now|https://www.w88cas.com/|Live
`;

const february = `
1|https://branchcasino.com/unlocking-the-thrill-of-gaming-at/|Nova88|https://www.nova88cas.com/|Live
2|https://brasscasino.com/how-nova88-transforms-your-casino-experience/|Nova88|https://www.nova88cas.com/|Live
3|https://crownedesport.com/winning-strategies-at-nova88-malaysia-for/|Nova88 Malaysia|https://www.nova88cas.com/|Live
4|https://cyborgwin.com/experience-the-excitement-and-opportunities-at/|Nova88 Malaysia|https://www.nova88cas.com/|Live
5|https://elitegamerwin.com/experience-the-thrill-of-gaming-at/|Nova88 online casino|https://www.nova88cas.com/|Live
6|https://esportaces.com/unleashing-the-thrills-your-guide-to/|Nova88 online casino|https://www.nova88cas.com/|Live
7|https://extentcasino.com/experience-thrilling-betting-opportunities-with-nova88/|Nova88 sportsbook|https://www.nova88cas.com/|Live
8|https://coilspin.com/experience-thrills-and-wins-at-nova88/|Nova88 sportsbook|https://www.nova88cas.com/|Live
9|https://creaturewin.com/why-choose-nova88-live-casino-for/|Nova88 live casino|https://www.nova88cas.com/|Live
10|https://diceelite.com/experience-the-thrill-of-nova88-live/|Nova88 live casino|https://www.nova88cas.com/|Live
11|https://duchessbet.com/maximize-your-fun-with-nova88-slots/|Nova88 slots|https://www.nova88cas.com/|Live
12|https://duchessspin.com/enhancing-your-game-with-nova88-slots/|Nova88 slots|https://www.nova88cas.com/|Live
13|https://equalcasino.com/elevate-your-game-with-nova88-esports/|Nova88 esports|https://www.nova88cas.com/|Live
14|https://esportflash.com/unlocking-the-future-of-nova88-esports/|Nova88 esports|https://www.nova88cas.com/|Live
15|https://esportglow.com/winning-strategies-for-nova88-4d-elevate/|Nova88 4D|https://www.nova88cas.com/|Live
16|https://esportorbit.com/engaging-strategies-for-maximizing-your-nova88/|Nova88 4D|https://www.nova88cas.com/|Live
17|https://fiercecasino.com/maximizing-your-experience-with-nova88-4d/|Nova88 4D|https://www.nova88cas.com/|Live
18|https://flairesport.com/experience-the-thrill-of-nova88-fishing/|Nova88 fishing games|https://www.nova88cas.com/|Live
19|https://betvibex.com/engaging-strategies-for-mastering-nova88-fishing/|Nova88 fishing games|https://www.nova88cas.com/|Live
20|https://blissspin.com/winning-strategies-and-tips-for-the/|Nova88 lottery|https://www.nova88cas.com/|Live
21|https://casinovibex.com/maximizing-your-chances-with-the-nova88/|Nova88 lottery|https://www.nova88cas.com/|Live
22|https://cometspin.com/new-dimensions-of-entertainment-with-online/|online casino Malaysia|https://www.nova88cas.com/|Live
23|https://cordcasino.com/winning-strategies-for-your-online-casino/|online casino Malaysia|https://www.nova88cas.com/|Live
24|https://cosmosspin.com/maximizing-your-success-in-sports-betting/|sports betting Malaysia|https://www.nova88cas.com/|Live
25|https://elitexcasino.com/mastering-sports-betting-malaysia-strategies-for/|sports betting Malaysia|https://www.nova88cas.com/|Live
26|https://esportbolt.com/engaging-strategies-for-online-gambling-malaysia/|online gambling Malaysia|https://www.nova88cas.com/|Live
27|https://floodcasino.com/mastering-online-gambling-malaysia-strategies-for/|online gambling Malaysia|https://www.nova88cas.com/|Live
28|https://floralcasino.com/unveiling-the-thrilling-experience-of-live/|live casino Malaysia|https://www.nova88cas.com/|Live
29|https://dawnspin.com/engage-and-win-the-thrill-of/|live casino Malaysia|https://www.nova88cas.com/|Live
30|https://emberspin.com/engage-with-online-slots-malaysia-the/|online slots Malaysia|https://www.nova88cas.com/|Live
31|https://focalcasino.com/engaging-online-slots-malaysia-the-ultimate/|online slots Malaysia|https://www.nova88cas.com/|Live
32|https://framecasino.com/mastering-esports-betting-malaysia-strategies-for/|esports betting Malaysia|https://www.nova88cas.com/|Live
33|https://fusespin.com/elevate-your-experience-with-esports-betting/|esports betting Malaysia|https://www.nova88cas.com/|Live
34|https://galecasino.com/mastering-the-4d-online-malaysia-casino/|4D online Malaysia|https://www.nova88cas.com/|Live
35|https://galespin.com/mastering-4d-online-malaysia-essential-strategies/|4D online Malaysia|https://www.nova88cas.com/|Live
36|https://gleamcasino.com/top-strategies-to-win-at-the/|best online casino Malaysia|https://www.nova88cas.com/|Live
37|https://gorgecasino.com/navigate-your-way-to-the-best/|best online casino Malaysia|https://www.nova88cas.com/|Live
38|https://heroiccasino.com/win-big-at-a-trusted-online/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
39|https://honoresport.com/engage-in-the-thrills-of-a/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
40|https://majestyspin.com/the-best-winning-strategies-at-trusted/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
41|https://neatrbet.com/experience-the-thrill-of-a-licensed/|licensed online casino Malaysia|https://www.nova88cas.com/|Live
42|https://nimbuswin.com/join-the-thrill-of-the-licensed/|licensed online casino Malaysia|https://www.nova88cas.com/|Live
43|https://nirvanaplay.com/stepbystep-guide-to-nova88-malaysia-register/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
44|https://rotatespin.com/stepbystep-guide-to-nova88-malaysia-register/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
45|https://tectoncasino.com/register-for-an-exciting-journey-nova88/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
46|https://scepterbet.com/maximizing-your-w88-casino-experience-tips/|w88|https://www.w88cas.com/|Live
47|https://sectorcasino.com/elevate-your-gaming-experience-at-w88/|w88|https://www.w88cas.com/|Live
48|https://spherespin.com/exciting-strategies-to-maximize-your-experience/|w88|https://www.w88cas.com/|Live
49|https://spinchamps.com/strategies-for-maximizing-your-experience-at/|w88|https://www.w88cas.com/|Live
50|https://spinhubx.com/accessing-exclusive-gaming-features-at-w88/|w88 login|https://www.w88cas.com/|Live
51|https://upperwin.com/master-your-gaming-experience-at-w88/|w88 login|https://www.w88cas.com/|Live
52|https://urbexbet.com/secure-ways-to-access-w88-casino/|w88 login|https://www.w88cas.com/|Live
53|https://yachtgaming.com/winning-strategies-for-navigating-w88-casino/|w88 ทางเข้า|https://www.w88cas.com/|Live
54|https://yieldspin.com/unlocking-the-full-potential-of-your/|w88 ทางเข้า|https://www.w88cas.com/|Live
55|https://yondercasino.com/master-the-thrilling-world-of-online/|w88 ทางเข้า|https://www.w88cas.com/|Live
56|https://yonderwin.com/maximizing-your-experience-at-w88-casino/|w88 sports|https://www.w88cas.com/|Live
57|https://wrathcasino.com/winning-strategies-for-betting-at-w88/|w88 sports|https://www.w88cas.com/|Live
58|https://larchcasino.com/betting-strategies-maximizing-your-success-at/|w88 sports|https://www.w88cas.com/|Live
59|https://lawncasino.com/maximizing-your-experience-at-w88-casino/|w88 sports|https://www.w88cas.com/|Live
60|https://ledgecasino.com/a-comprehensive-guide-to-getting-started/|สมัคร w88|https://www.w88cas.com/|Live
61|https://daringcasino.com/unlocking-thrills-the-dynamic-world-of/|สมัคร w88|https://www.w88cas.com/|Live
62|https://garnetcasino.com/unraveling-the-thrill-of-online-gaming/|สมัคร w88|https://www.w88cas.com/|Live
63|https://giltcasino.com/mastering-the-art-of-online-casino/|สมัคร w88|https://www.w88cas.com/|Live
64|https://glidecasino.com/enhancing-your-mobile-gaming-experience-at/|w88 มือถือ|https://www.w88cas.com/|Live
65|https://glintesports.com/the-rise-of-mobile-gaming-transforming/|w88 มือถือ|https://www.w88cas.com/|Live
66|https://glitterspin.com/the-evolution-of-mobile-gaming-at/|w88 มือถือ|https://www.w88cas.com/|Live
67|https://hastecasino.com/maximize-your-online-gambling-experience-with/|w88 มือถือ|https://www.w88cas.com/|Live
68|https://heightsgaming.com/the-exciting-world-of-w88-casino/|w88|https://www.w88cas.com/|Live
69|https://helixwin.com/the-thrill-of-online-gaming-your/|w88|https://www.w88cas.com/|Live
70|https://impulsewin.com/step-into-the-excitement-of-w88/|w88|https://www.w88cas.com/|Live
71|https://jewelgaming.com/mastering-the-excitement-of-online-casino/|w88|https://www.w88cas.com/|Live
72|https://joltesports.com/winning-strategies-for-players-at-w88/|w88|https://www.w88cas.com/|Live
73|https://levelspin.com/top-strategies-for-maximizing-your-w88/|w88cas.com|https://www.w88cas.com/|Live
74|https://lucidspin.com/mastering-the-art-of-online-casino/|w88cas.com|https://www.w88cas.com/|Live
75|https://nirvanaspin.com/mastering-your-w88-casino-experience-tips/|w88cas.com|https://www.w88cas.com/|Live
76|https://nitroesport.com/the-allure-of-online-casino-gaming/|w88cas.com|https://www.w88cas.com/|Live
77|https://reefwin.com/experience-the-thrill-of-gaming-at/|w88cas.com|https://www.w88cas.com/|Live
78|https://pyrowin.com/winning-strategies-maximizing-your-experience-at/|w88cas.com|https://www.w88cas.com/|Live
79|https://quickesport.com/crafting-the-perfect-strategy-for-your/|w88cas.com|https://www.w88cas.com/|Live
80|https://magnitudecasino.com/explore-the-thrilling-world-of-casino/|w88cas.com|https://www.w88cas.com/|Live
81|https://raidspin.com/experience-the-thrill-of-online-gaming/|w88cas.com|https://www.w88cas.com/|Live
82|https://hikecasino.com/unlock-the-excitement-of-online-gaming/|click here|https://www.w88cas.com/|Live
83|https://realmspin.com/the-thrill-of-online-gambling-at/|click here|https://www.w88cas.com/|Live
84|https://casinobetmastersclub.com/maximizing-enjoyment-at-w88-casino-insider/|click here|https://www.w88cas.com/|Live
85|https://toppokerroulette.com/winning-strategies-for-maximizing-your-experience-2/|click here|https://www.w88cas.com/|Live
86|https://casinobetarenagame.com/maximizing-your-fun-at-w88-casino/|click here|https://www.w88cas.com/|Live
87|https://sportsbettcasinos.com/join-the-thrill-of-casino-gaming/|register now|https://www.w88cas.com/|Live
88|https://casinospinsworld.com/unraveling-the-excitement-of-live-casino/|register now|https://www.w88cas.com/|Live
89|https://jackpotelitecasino.com/unlocking-the-thrills-of-w88-casino/|register now|https://www.w88cas.com/|Live
90|https://slotpokerjackpot.com/winning-strategies-for-playing-at-w88/|register now|https://www.w88cas.com/|Live
`;

const march = `
1|https://eliteblackjacktables.com/experience-the-thrill-of-gaming-at/|Nova88|https://www.nova88cas.com/|Live
2|https://ultimateroulettewins.com/nova88-casino-your-comprehensive-guide-to/|Nova88|https://www.nova88cas.com/|Live
3|https://casinojackpotadventures.com/experience-the-thrill-of-gaming-at/|Nova88 Malaysia|https://www.nova88cas.com/|Live
4|https://rouletteslotcasino.com/winning-strategies-for-nova88-online-casino/|Nova88 online casino|https://www.nova88cas.com/|Live
5|https://jackpoteliteslots.com/winning-strategies-at-nova88-online-casino/|Nova88 online casino|https://www.nova88cas.com/|Live
6|https://eliteroulettegames.com/your-guide-to-nova88-sportsbook-winning/|Nova88 sportsbook|https://www.nova88cas.com/|Live
7|https://highstakescasinoslots.com/winning-strategies-for-betting-at-nova88/|Nova88 sportsbook|https://www.nova88cas.com/|Live
8|https://pokerroulettecasino.com/experience-the-thrills-of-nova88-live/|Nova88 live casino|https://www.nova88cas.com/|Live
9|https://slotsroulettejackpot.com/mastering-strategies-in-nova88-live-casino/|Nova88 live casino|https://www.nova88cas.com/|Live
10|https://elitecasinoroulette.com/winning-strategies-for-nova88-slots-how/|Nova88 slots|https://www.nova88cas.com/|Live
11|https://blackjackroulettecasino.com/elevate-your-game-discover-the-excitement/|Nova88 slots|https://www.nova88cas.com/|Live
12|https://casinojackpotempire.com/master-the-thrills-of-nova88-esports/|Nova88 esports|https://www.nova88cas.com/|Live
13|https://topslotroulette.com/navigating-nova88-esports-strategies-for-engaging/|Nova88 esports|https://www.nova88cas.com/|Live
14|https://pokerjackpotadventures.com/experience-the-thrills-of-nova88-4d/|Nova88 4D|https://www.nova88cas.com/|Live
15|https://jackpotpokermasters.com/mastering-nova88-4d-strategies-for-casino/|Nova88 4D|https://www.nova88cas.com/|Live
16|https://casinorouletteempire.com/enhancing-your-casino-experience-with-nova88/|Nova88 4D|https://www.nova88cas.com/|Live
17|https://blackjackwinningtables.com/enhance-your-casino-experience-with-nova88/|Nova88 fishing games|https://www.nova88cas.com/|Live
18|https://slotstreasurejackpot.com/immersive-experiences-with-nova88-fishing-games/|Nova88 fishing games|https://www.nova88cas.com/|Live
19|https://roulettejackpotelite.com/maximize-your-winning-experience-with-nova88/|Nova88 lottery|https://www.nova88cas.com/|Live
20|https://highstakespokerslots.com/unpacking-the-excitement-of-the-nova88/|Nova88 lottery|https://www.nova88cas.com/|Live
21|https://winningblackjackcasino.com/winning-strategies-for-online-casino-malaysia/|online casino Malaysia|https://www.nova88cas.com/|Live
22|https://livecasinojackpotwins.com/engaging-experiences-at-online-casino-malaysia/|online casino Malaysia|https://www.nova88cas.com/|Live
23|https://slotsjackpotadventures.com/winning-strategies-for-sports-betting-malaysia/|sports betting Malaysia|https://www.nova88cas.com/|Live
24|https://pokercasinomasters.com/maximize-your-experience-with-sports-betting/|sports betting Malaysia|https://www.nova88cas.com/|Live
25|https://winningpokerjackpots.com/understanding-online-gambling-malaysia-a-comprehensive/|online gambling Malaysia|https://www.nova88cas.com/|Live
26|https://blackjackjackpotzone.com/mastering-strategies-for-success-in-online/|online gambling Malaysia|https://www.nova88cas.com/|Live
27|https://jackpotslotsempire.com/determinants-of-success-in-live-casino/|live casino Malaysia|https://www.nova88cas.com/|Live
28|https://casinowinningpoker.com/experience-the-thrill-of-live-casino/|live casino Malaysia|https://www.nova88cas.com/|Live
29|https://liveblackjackmasters.com/maximize-your-fun-with-top-online/|online slots Malaysia|https://www.nova88cas.com/|Live
30|https://megajackpotpoker.com/engaging-in-online-slots-malaysia-tips/|online slots Malaysia|https://www.nova88cas.com/|Live
31|https://ultimateslotscasino.com/guide-to-esports-betting-malaysia-thrills/|esports betting Malaysia|https://www.nova88cas.com/|Live
32|https://pokerjackpotzone.com/mastering-esports-betting-malaysia-a-professionals/|esports betting Malaysia|https://www.nova88cas.com/|Live
33|https://highjackpotroulette.com/join-the-excitement-of-4d-online/|4D online Malaysia|https://www.nova88cas.com/|Live
34|https://casinomastersblackjack.com/exploring-thrilling-4d-online-malaysia-casino/|4D online Malaysia|https://www.nova88cas.com/|Live
35|https://pokerroulettejackpot.com/bet-smart-your-guide-to-the/|best online casino Malaysia|https://www.nova88cas.com/|Live
36|https://megaroulettejackpot.com/top-strategies-for-winning-big-at/|best online casino Malaysia|https://www.nova88cas.com/|Live
37|https://megapokerjackpot.com/experience-the-thrill-at-a-trusted/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
38|https://megaslotcasinogames.com/your-goto-guide-for-trusted-online/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
39|https://megaroulettejackpots.com/a-safe-haven-trusted-online-casino/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
40|https://roulettepokerwins.com/top-strategies-for-winning-at-licensed/|licensed online casino Malaysia|https://www.nova88cas.com/|Live
41|https://casinojackpotmasters.com/elevating-your-experience-at-a-licensed/|licensed online casino Malaysia|https://www.nova88cas.com/|Live
42|https://winningroulettejackpot.com/nova88-malaysia-register-your-gateway-to/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
43|https://pokerslotsempire.com/how-to-nova88-malaysia-register-for/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
44|https://blackjackcasinolegends.com/stepbystep-guide-to-nova88-malaysia-register/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
45|https://elitejackpotslots.com/join-the-excitement-of-w88-your/|w88|https://www.w88cas.com/|Live
46|https://blackjackroulettemasters.com/maximizing-your-experience-with-w88-a/|w88|https://www.w88cas.com/|Live
47|https://pokertreasurecasino.com/why-w88-is-your-goto-destination/|w88|https://www.w88cas.com/|Live
48|https://elitecasinojackpots.com/elevating-your-strategy-with-w88-mastering/|w88|https://www.w88cas.com/|Live
49|https://blackjackwinningjackpots.com/secure-access-to-w88-login-your/|w88 login|https://www.w88cas.com/|Live
50|https://megacasinoroulette.com/master-your-w88-login-a-guide/|w88 login|https://www.w88cas.com/|Live
51|https://jackpotroulettelegends.com/unlocking-the-benefits-of-w88-for/|w88 ทางเข้า|https://www.w88cas.com/|Live
52|https://ultimatecasinoroulette.com/unlocking-w88-a-pathway-to-premier/|w88 ทางเข้า|https://www.w88cas.com/|Live
53|https://jackpotpokerlegends.com/how-to-navigate-w88-for-a/|w88 ทางเข้า|https://www.w88cas.com/|Live
54|https://winningcasinoblackjack.com/maximize-your-w88-sports-experience-a/|w88 sports|https://www.w88cas.com/|Live
55|https://slotjackpotmasters.com/mastering-the-art-of-w88-sports/|w88 sports|https://www.w88cas.com/|Live
56|https://highstakesroulettecasino.com/elevate-your-experience-mastering-w88-sports/|w88 sports|https://www.w88cas.com/|Live
57|https://casinoelitex.com/maximize-your-wins-effective-strategies-for/|w88 sports|https://www.w88cas.com/|Live
58|https://jackpotwavecasino.com/boost-your-game-how-w88-can/|สมัคร w88|https://www.w88cas.com/|Live
59|https://pokerlegendsgame.com/join-the-thrill-of-casino-gaming/|สมัคร w88|https://www.w88cas.com/|Live
60|https://blackjackacevault.com/your-guide-to-w88-easiest-steps/|สมัคร w88|https://www.w88cas.com/|Live
61|https://slotstormnation.com/join-the-excitement-w88-for-a/|สมัคร w88|https://www.w88cas.com/|Live
62|https://casinobetkingx.com/how-to-maximize-your-experience-with/|w88 มือถือ|https://www.w88cas.com/|Live
63|https://prospincasino.com/enhancing-your-experience-with-w88-in/|w88 มือถือ|https://www.w88cas.com/|Live
64|https://zenithcbdnaturals.com/elevate-your-game-navigating-the-exciting/|w88|https://www.w88cas.com/|Live
65|https://betpulsemax.com/winning-strategies-for-playing-w88-casino/|w88|https://www.w88cas.com/|Live
66|https://pokerroyalarena.com/mastering-the-art-of-w88-insights/|w88|https://www.w88cas.com/|Live
67|https://luckyblackjackking.com/enhancing-your-game-with-w88-insights/|w88|https://www.w88cas.com/|Live
68|https://casinostrikex.com/how-w88-casino-brings-excitement-to/|w88|https://www.w88cas.com/|Live
69|https://pokertitanclub.com/winning-strategies-for-gamers-at-w88cascom/|w88cas.com|https://www.w88cas.com/|Live
70|https://slotfiestavault.com/winning-strategies-at-w88cascom-a-comprehensive/|w88cas.com|https://www.w88cas.com/|Live
71|https://casinofortuneedge.com/experience-the-thrills-of-online-gaming/|w88cas.com|https://www.w88cas.com/|Live
72|https://pokervaultnation.com/maximize-your-wins-strategies-for-success/|w88cas.com|https://www.w88cas.com/|Live
73|https://blackjackmegaarena.com/experience-the-thrill-of-casino-games/|w88cas.com|https://www.w88cas.com/|Live
74|https://slotwagerworld.com/experience-thrilling-casino-games-on-w88cascom/|w88cas.com|https://www.w88cas.com/|Live
75|https://spincasinojackpotarena.com/maximize-your-wins-at-w88cascom-strategies/|w88cas.com|https://www.w88cas.com/|Live
76|https://blackcasinolegends.com/unlocking-excitement-at-w88cascom-your-ultimate/|w88cas.com|https://www.w88cas.com/|Live
77|https://casinojackpotroyale.com/engage-and-win-strategies-for-online/|w88cas.com|https://www.w88cas.com/|Live
78|https://casinowinnersvault.com/experience-the-excitement-of-gambling-at/|w88cas.com|https://www.w88cas.com/|Live
79|https://pokerfortuneden.com/big-wins-and-strategies-at-w88cascom/|w88cas.com|https://www.w88cas.com/|Live
80|https://slotlegendsvault.com/w88cascom-your-gateway-to-exciting-casino/|w88cas.com|https://www.w88cas.com/|Live
81|https://turbosportsbets.com/click-here-to-win-big-with/|click here|https://www.w88cas.com/|Live
82|https://betstormnation.com/experience-casino-thrills-and-win-click/|click here|https://www.w88cas.com/|Live
83|https://pokeracearena.com/why-click-here-for-exciting-casino/|click here|https://www.w88cas.com/|Live
84|https://blackjacktreasure.com/click-here-for-your-ultimate-casino/|click here|https://www.w88cas.com/|Live
85|https://pokerstormnation.com/click-here-to-master-the-exciting/|click here|https://www.w88cas.com/|Live
86|https://slotepicspin.com/join-the-fun-register-now-and/|register now|https://www.w88cas.com/|Live
87|https://betfastcasinogame.com/register-now-to-experience-thrilling-casino/|register now|https://www.w88cas.com/|Live
88|https://blackjackgoldnation.com/join-the-action-register-now-for/|register now|https://www.w88cas.com/|Live
89|https://slotquestzone.com/quick-steps-to-register-now-and/|register now|https://www.w88cas.com/|Live
90|https://pokerroyalgame.com/join-the-thrill-register-now-for/|register now|https://www.w88cas.com/|Live
`;

const april = `
1|https://barongaming.com/which-is-better-nova88-or-other-online/|Nova88|https://www.nova88cas.com/|Live
2|https://baronspin.com/nova88-gambling-industry-standards-you-should-follow/|Nova88|https://www.nova88cas.com/|Live
3|https://basaltcasino.com/nova88-malaysia-which-sports-betting-strategies-should/|Nova88 Malaysia|https://www.nova88cas.com/|Live
4|https://berylcasino.com/winning-with-nova88-online-casino-strategies-that/|Nova88 online casino|https://www.nova88cas.com/|Live
5|https://blazeesport.com/what-if-nova88-online-casino-could-elevate/|Nova88 online casino|https://www.nova88cas.com/|Live
6|https://blazoncasino.com/how-to-scale-your-nova88-sportsbook-betting/|Nova88 sportsbook|https://www.nova88cas.com/|Live
7|https://blitzesport.com/the-2026-nova88-sportsbook-handbook-for-gamblers/|Nova88 sportsbook|https://www.nova88cas.com/|Live
8|https://boltesport.com/how-to-profit-from-nova88-live-casino/|Nova88 live casino|https://www.nova88cas.com/|Live
9|https://boostesport.com/the-essential-nova88-live-casino-handbook-for/|Nova88 live casino|https://www.nova88cas.com/|Live
10|https://bracecasino.com/the-essential-nova88-slots-handbook-for-smart/|Nova88 slots|https://www.nova88cas.com/|Live
11|https://braveesport.com/nova88-slots-in-2026-still-worth-your/|Nova88 slots|https://www.nova88cas.com/|Live
12|https://breachcasino.com/emerging-nova88-esports-strategies-taking-over-in/|Nova88 esports|https://www.nova88cas.com/|Live
13|https://burstesport.com/nova88-esports-compared-the-most-strategic-options/|Nova88 esports|https://www.nova88cas.com/|Live
14|https://burstslot.com/nova88-4d-quick-reference-facts-stats-and/|Nova88 4D|https://www.nova88cas.com/|Live
15|https://canyonslot.com/how-to-maximize-every-nova88-4d-lottery/|Nova88 4D|https://www.nova88cas.com/|Live
16|https://cellarcasino.com/masterful-nova88-4d-techniques-for-advanced-lottery/|Nova88 4D|https://www.nova88cas.com/|Live
17|https://chakracasino.com/how-to-start-with-nova88-fishing-games/|Nova88 fishing games|https://www.nova88cas.com/|Live
18|https://chasmcasino.com/how-to-integrate-nova88-fishing-games-into/|Nova88 fishing games|https://www.nova88cas.com/|Live
19|https://chromespin.com/nova88-lottery-crash-course-master-the-basics/|Nova88 lottery|https://www.nova88cas.com/|Live
20|https://clashslot.com/the-nova88-lottery-roadmap-essential-strategies-for/|Nova88 lottery|https://www.nova88cas.com/|Live
21|https://clustercasino.com/3-levels-of-online-casino-malaysia-mastery/|online casino Malaysia|https://www.nova88cas.com/|Live
22|https://cobaltwin.com/what-makes-online-casino-malaysia-stand-out/|online casino Malaysia|https://www.nova88cas.com/|Live
23|https://cobblecasino.com/8-steps-to-mastering-sports-betting-malaysia/|sports betting Malaysia|https://www.nova88cas.com/|Live
24|https://coltslot.com/how-to-profit-from-sports-betting-malaysia/|sports betting Malaysia|https://www.nova88cas.com/|Live
25|https://commandcasino.com/online-gambling-malaysia-before-and-after-winning/|online gambling Malaysia|https://www.nova88cas.com/|Live
26|https://convexcasino.com/online-gambling-malaysia-trends-that-will-define/|online gambling Malaysia|https://www.nova88cas.com/|Live
27|https://copperslot.com/4-proven-methods-to-maximize-live-casino/|live casino Malaysia|https://www.nova88cas.com/|Live
28|https://cragcasino.com/live-casino-malaysia-deep-dive-winning-strategies/|live casino Malaysia|https://www.nova88cas.com/|Live
29|https://crankcasino.com/online-slots-malaysia-head-to-head-game/|online slots Malaysia|https://www.nova88cas.com/|Live
30|https://daggercasino.com/online-slots-malaysia-decoded-making-sense-of/|online slots Malaysia|https://www.nova88cas.com/|Live
31|https://depthwin.com/key-benefits-of-esports-betting-malaysia-that/|esports betting Malaysia|https://www.nova88cas.com/|Live
32|https://detourcasino.com/the-strategic-esports-betting-malaysia-movement-shaping/|esports betting Malaysia|https://www.nova88cas.com/|Live
33|https://bouncespin.com/pro-4d-online-malaysia-tips-from-industry/|4D online Malaysia|https://www.nova88cas.com/|Live
34|https://dynamoslot.com/how-to-optimize-your-4d-online-malaysia/|4D online Malaysia|https://www.nova88cas.com/|Live
35|https://fableslot.com/what-pros-know-about-the-best-online/|best online casino Malaysia|https://www.nova88cas.com/|Live
36|https://falconslot.com/what-pros-know-about-the-best-online/|best online casino Malaysia|https://www.nova88cas.com/|Live
37|https://fallcasino.com/6-critical-metrics-for-trusted-online-casino/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
38|https://fangcasino.com/20-best-trusted-online-casino-malaysia-picks/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
39|https://faultcasino.com/trusted-online-casino-malaysia-shortcuts-proven-strategies/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
40|https://feralcasino.com/your-2026-licensed-online-casino-malaysia-action/|licensed online casino Malaysia|https://www.nova88cas.com/|Live
41|https://fluxslot.com/key-benefits-of-licensed-online-casino-malaysia/|licensed online casino Malaysia|https://www.nova88cas.com/|Live
42|https://forgeslot.com/nova88-malaysia-register-pros-and-cons-an/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
43|https://frostslot.com/the-nova88-malaysia-register-roadmap-strategic-steps/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
44|https://gambitslot.com/battle-tested-nova88-malaysia-register-strategies-for-2026/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
45|https://geodecasino.com/how-to-fix-your-w88-betting-strategy/|w88|https://www.w88cas.com/|Live
46|https://gladiusspin.com/the-state-of-w88-in-2026-a/|w88|https://www.w88cas.com/|Live
47|https://gladiuswin.com/10-w88-trends-shaping-online-casino-gaming/|w88|https://www.w88cas.com/|Live
48|https://gloomcasino.com/w88-lessons-learned-the-hard-way-essential/|w88|https://www.w88cas.com/|Live
49|https://glowesport.com/how-to-simplify-w88-login-for-better/|w88 login|https://www.w88cas.com/|Live
50|https://granitcasino.com/w88-login-in-2026-still-worth-your/|w88 login|https://www.w88cas.com/|Live
51|https://graspcasino.com/your-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-starter-kit-for-winning/|w88 ทางเข้า|https://www.w88cas.com/|Live
52|https://grimcasino.com/6-critical-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-metrics-you-should/|w88 ทางเข้า|https://www.w88cas.com/|Live
53|https://grimslot.com/w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-compared-the-best-casino-options/|w88 ทางเข้า|https://www.w88cas.com/|Live
54|https://harborslot.com/how-to-get-better-w88-sports-betting/|w88 sports|https://www.w88cas.com/|Live
55|https://hollowcasino.com/worst-w88-sports-practices-that-cost-you/|w88 sports|https://www.w88cas.com/|Live
56|https://houndslot.com/overlooked-w88-sports-risks-every-bettor-should/|w88 sports|https://www.w88cas.com/|Live
57|https://ivoryslot.com/how-to-get-the-most-out-of/|w88 sports|https://www.w88cas.com/|Live
58|https://jaguarspin.com/%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-reviewed-a-comprehensive-2026-breakdown/|สมัคร w88|https://www.w88cas.com/|Live
59|https://javelinspin.com/whats-coming-next-for-%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-in/|สมัคร w88|https://www.w88cas.com/|Live
60|https://kernelcasino.com/top-7-ways-%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-enhances-your/|สมัคร w88|https://www.w88cas.com/|Live
61|https://kernelspin.com/a-%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-snapshot-quick-2026-status/|สมัคร w88|https://www.w88cas.com/|Live
62|https://luminspin.com/data-driven-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-insights-for-2026-expert/|w88 มือถือ|https://www.w88cas.com/|Live
63|https://lynxslot.com/w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-scored-our-rating-system-reveals/|w88 มือถือ|https://www.w88cas.com/|Live
64|https://machslot.com/how-to-adapt-w88-casino-strategies-for/|w88|https://www.w88cas.com/|Live
65|https://mantlecasino.com/the-power-of-w88-why-gamblers-swear/|w88|https://www.w88cas.com/|Live
66|https://manxcasino.com/unpopular-w88-opinion-why-gamblers-deserve-better/|w88|https://www.w88cas.com/|Live
67|https://mastcasino.com/how-to-fix-your-w88-betting-strategy/|w88|https://www.w88cas.com/|Live
68|https://mithracasino.com/is-there-a-better-alternative-to-w88/|w88|https://www.w88cas.com/|Live
69|https://moatcasino.com/how-to-combine-w88cas-with-sports-betting/|w88cas.com|https://www.w88cas.com/|Live
70|https://morphcasino.com/w88cas-according-to-top-casino-analysts-essential/|w88cas.com|https://www.w88cas.com/|Live
71|https://mysticslot.com/emerging-w88cas-betting-strategies-taking-over-in/|w88cas.com|https://www.w88cas.com/|Live
72|https://needlecasino.com/5-hard-won-w88cas-lessons-from-industry-veterans/|w88cas.com|https://www.w88cas.com/|Live
73|https://nomadslot.com/switching-to-w88cas-what-to-expect-and/|w88cas.com|https://www.w88cas.com/|Live
74|https://notchcasino.com/quick-start-w88cas-guide-up-and-running-in/|w88cas.com|https://www.w88cas.com/|Live
75|https://emberslot.us/how-to-evaluate-w88cas-casino-strategies-like/|w88cas.com|https://www.w88cas.com/|Live
76|https://ozonecasino.com/w88cas-decoded-making-sense-of-online-casino/|w88cas.com|https://www.w88cas.com/|Live
77|https://patrolcasino.com/w88cas-casino-standards-players-should-follow-for/|w88cas.com|https://www.w88cas.com/|Live
78|https://pillarcasino.com/the-w88cas-roadmap-the-essential-guide-for/|w88cas.com|https://www.w88cas.com/|Live
79|https://plankcasino.com/w88cas-head-to-head-casino-promotions-comparison/|w88cas.com|https://www.w88cas.com/|Live
80|https://platecasino.com/the-w88cas-multiplier-effect-on-winning-strategies/|w88cas.com|https://www.w88cas.com/|Live
81|https://prowlcasino.com/click-here-how-to-unlock-better-betting/|click here|https://www.w88cas.com/|Live
82|https://ravenspin.com/stop-using-click-here-for-gambling-links/|click here|https://www.w88cas.com/|Live
83|https://reedcasino.com/top-7-ways-click-here-impacts-online/|click here|https://www.w88cas.com/|Live
84|https://reliccasino.com/the-truth-about-click-here-in-gambling/|click here|https://www.w88cas.com/|Live
85|https://ruincasino.com/click-here-warning-signs-essential-tips-for/|click here|https://www.w88cas.com/|Live
86|https://scorchcasino.com/the-4-stages-of-register-now-mastery/|register now|https://www.w88cas.com/|Live
87|https://sentrycasino.com/the-complete-register-now-guide-for-malaysian/|register now|https://www.w88cas.com/|Live
88|https://skelecasino.com/register-now-what-actually-works-in-2026/|register now|https://www.w88cas.com/|Live
89|https://slicecasino.com/certified-register-now-strategies-for-professional-gamblers/|register now|https://www.w88cas.com/|Live
90|https://soldiercasino.com/your-register-now-starter-kit-for-w88/|register now|https://www.w88cas.com/|Live
`;

const may = `
1|https://barongaming.com/nova88-the-secret-weapon-gamblers-are-using/|Nova88|https://www.nova88cas.com/|Live
2|https://baronspin.com/how-nova88-transformed-online-gaming-for-players/|Nova88|https://www.nova88cas.com/|Live
3|https://basaltcasino.com/nova88-malaysia-real-talk-about-winning-strategies/|Nova88 Malaysia|https://www.nova88cas.com/|Live
4|https://berylcasino.com/nova88-malaysia-success-stories-how-bettors-mastered/|Nova88 Malaysia|https://www.nova88cas.com/|Live
5|https://blazeesport.com/3-levels-of-nova88-online-casino-mastery/|Nova88 online casino|https://www.nova88cas.com/|Live
6|https://blazoncasino.com/the-definitive-nova88-online-casino-resource-for/|Nova88 online casino|https://www.nova88cas.com/|Live
7|https://blitzesport.com/nova88-sportsbook-pros-and-cons-an-honest/|Nova88 sportsbook|https://www.nova88cas.com/|Live
8|https://boltesport.com/how-safe-is-nova88-sportsbook-a-security/|Nova88 sportsbook|https://www.nova88cas.com/|Live
9|https://boostesport.com/nova88-live-casino-head-to-head-game/|Nova88 live casino|https://www.nova88cas.com/|Live
10|https://bracecasino.com/nova88-live-casino-roi-is-the-investment/|Nova88 live casino|https://www.nova88cas.com/|Live
11|https://braveesport.com/what-are-the-essential-nova88-slots-features/|Nova88 slots|https://www.nova88cas.com/|Live
12|https://breachcasino.com/how-nova88-slots-protect-players-from-inadequate/|Nova88 slots|https://www.nova88cas.com/|Live
13|https://burstesport.com/nova88-esports-regrets-what-gamblers-wish-they/|Nova88 esports|https://www.nova88cas.com/|Live
14|https://burstslot.com/the-essential-nova88-esports-handbook-for-smart/|Nova88 esports|https://www.nova88cas.com/|Live
15|https://canyonslot.com/nova88-4d-lessons-learned-the-hard-way/|Nova88 4D|https://www.nova88cas.com/|Live
16|https://cellarcasino.com/is-there-a-better-alternative-to-nova88/|Nova88 4D|https://www.nova88cas.com/|Live
17|https://chakracasino.com/the-insiders-guide-to-nova88-fishing-games/|Nova88 fishing games|https://www.nova88cas.com/|Live
18|https://chasmcasino.com/nova88-fishing-games-performance-boost-essential-winning/|Nova88 fishing games|https://www.nova88cas.com/|Live
19|https://chromespin.com/nova88-lottery-reality-check-expectations-vs-actual/|Nova88 lottery|https://www.nova88cas.com/|Live
20|https://clashslot.com/the-complete-nova88-lottery-guide-for-players/|Nova88 lottery|https://www.nova88cas.com/|Live
21|https://clustercasino.com/how-to-recover-from-online-casino-malaysia/|online casino Malaysia|https://www.nova88cas.com/|Live
22|https://cobaltwin.com/online-casino-malaysia-compared-the-best-options/|online casino Malaysia|https://www.nova88cas.com/|Live
23|https://cobblecasino.com/sports-betting-malaysia-problems-here-are-the/|sports betting Malaysia|https://www.nova88cas.com/|Live
24|https://coltslot.com/10-proven-sports-betting-malaysia-techniques-for/|sports betting Malaysia|https://www.nova88cas.com/|Live
25|https://commandcasino.com/how-long-does-it-take-to-see-4/|online gambling Malaysia|https://www.nova88cas.com/|Live
26|https://convexcasino.com/15-best-online-gambling-malaysia-options-ranked/|online gambling Malaysia|https://www.nova88cas.com/|Live
27|https://copperslot.com/in-depth-live-casino-malaysia-analysis-numbers-dont/|live casino Malaysia|https://www.nova88cas.com/|Live
28|https://cragcasino.com/how-to-save-time-and-money-with/|live casino Malaysia|https://www.nova88cas.com/|Live
29|https://crankcasino.com/a-fresh-look-at-online-slots-malaysia/|online slots Malaysia|https://www.nova88cas.com/|Live
30|https://daggercasino.com/the-final-verdict-on-online-slots-malaysia/|online slots Malaysia|https://www.nova88cas.com/|Live
31|https://depthwin.com/esports-betting-malaysia-and-the-freedom-to/|esports betting Malaysia|https://www.nova88cas.com/|Live
32|https://detourcasino.com/which-esports-betting-malaysia-option-is-right/|esports betting Malaysia|https://www.nova88cas.com/|Live
33|https://bouncespin.com/the-2026-4d-online-malaysia-handbook-for/|4D online Malaysia|https://www.nova88cas.com/|Live
34|https://dynamoslot.com/4d-online-malaysia-myths-debunked-whats-true/|4D online Malaysia|https://www.nova88cas.com/|Live
35|https://fableslot.com/will-the-best-online-casino-malaysia-continue/|best online casino Malaysia|https://www.nova88cas.com/|Live
36|https://falconslot.com/the-best-online-casino-malaysia-cheat-sheet/|best online casino Malaysia|https://www.nova88cas.com/|Live
37|https://fallcasino.com/trusted-online-casino-malaysia-what-actually-works/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
38|https://fangcasino.com/how-to-upgrade-your-trusted-online-casino/|trusted online casino Malaysia|https://www.nova88cas.com/|Live
39|https://faultcasino.com/the-science-behind-licensed-online-casino-malaysia/|licensed online casino Malaysia|https://www.nova88cas.com/|Live
40|https://feralcasino.com/how-to-evaluate-licensed-online-casino-malaysia/|licensed online casino Malaysia|https://www.nova88cas.com/|Live
41|https://fluxslot.com/what-pros-know-about-nova88-malaysia-register/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
42|https://forgeslot.com/why-nova88-malaysia-register-is-the-best/|Nova88 Malaysia register|https://www.nova88cas.com/|Live
43|https://frostslot.com/emerging-w88-betting-strategies-taking-over-in/|w88|https://www.w88cas.com/|Live
44|https://gambitslot.com/w88-face-off-which-casino-delivers-more-winning/|w88|https://www.w88cas.com/|Live
45|https://geodecasino.com/11-key-w88-login-factors-that-matter/|w88 login|https://www.w88cas.com/|Live
46|https://gladiusspin.com/9-essential-w88-login-tools-for-gamblers/|w88 login|https://www.w88cas.com/|Live
47|https://gladiuswin.com/costly-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-mistakes-gamblers-keep-making/|w88 ทางเข้า|https://www.w88cas.com/|Live
48|https://gloomcasino.com/switching-to-w88-%e0%b8%97%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%82%e0%b8%b2-what-to-expect/|w88 ทางเข้า|https://www.w88cas.com/|Live
49|https://glowesport.com/8-steps-to-mastering-w88-sports-betting/|w88 sports|https://www.w88cas.com/|Live
50|https://granitcasino.com/how-to-evaluate-w88-sports-betting-like/|w88 sports|https://www.w88cas.com/|Live
51|https://graspcasino.com/how-to-adapt-w88-sports-betting-strategies/|w88 sports|https://www.w88cas.com/|Live
52|https://grimcasino.com/how-to-leverage-%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-for-winning/|สมัคร w88|https://www.w88cas.com/|Live
53|https://grimslot.com/a-practical-%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-framework-for-winning/|สมัคร w88|https://www.w88cas.com/|Live
54|https://harborslot.com/how-to-fix-your-%e0%b8%aa%e0%b8%a1%e0%b8%84%e0%b8%a3-w88-strategy/|สมัคร w88|https://www.w88cas.com/|Live
55|https://hollowcasino.com/11-key-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-factors-that-matter/|w88 มือถือ|https://www.w88cas.com/|Live
56|https://houndslot.com/how-to-evaluate-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-like-an/|w88 มือถือ|https://www.w88cas.com/|Live
57|https://ivoryslot.com/the-w88-%e0%b8%a1%e0%b8%ad%e0%b8%96%e0%b8%ad-roadmap-essential-strategies-for/|w88 มือถือ|https://www.w88cas.com/|Live
58|https://jaguarspin.com/is-there-a-better-alternative-to-w88/|w88|https://www.w88cas.com/|Live
59|https://javelinspin.com/a-sustainable-w88-approach-for-gamblers-winning/|w88|https://www.w88cas.com/|Live
60|https://kernelcasino.com/data-driven-w88-insights-for-2026-winning-strategies/|w88|https://www.w88cas.com/|Live
61|https://kernelspin.com/how-to-automate-your-w88cas-betting-workflow/|w88cas.com|https://www.w88cas.com/|Live
62|https://luminspin.com/7-reasons-w88cas-dominates-online-slots-in/|w88cas.com|https://www.w88cas.com/|Live
63|https://lynxslot.com/the-authoritative-w88cas-guide-for-2026-advanced/|w88cas.com|https://www.w88cas.com/|Live
64|https://machslot.com/why-most-people-get-w88cas-wrong-and/|w88cas.com|https://www.w88cas.com/|Live
65|https://mantlecasino.com/how-to-evaluate-w88cas-like-an-expert/|w88cas.com|https://www.w88cas.com/|Live
66|https://manxcasino.com/pocket-guide-to-w88cas-quick-tips-for/|w88cas.com|https://www.w88cas.com/|Live
67|https://mastcasino.com/a-fresh-look-at-w88cas-in-2026/|w88cas.com|https://www.w88cas.com/|Live
68|https://mithracasino.com/how-to-get-better-casino-click-here/|click here|https://www.w88cas.com/|Live
69|https://moatcasino.com/a-field-guide-to-click-here-strategies/|click here|https://www.w88cas.com/|Live
70|https://morphcasino.com/the-true-value-of-click-here-for/|click here|https://www.w88cas.com/|Live
71|https://mysticslot.com/13-smart-ways-to-click-here-for/|click here|https://www.w88cas.com/|Live
72|https://needlecasino.com/register-now-for-winning-strategies-w88-malaysia/|register now|https://www.w88cas.com/|Live
73|https://nomadslot.com/5-hard-won-register-now-lessons-from-casino/|register now|https://www.w88cas.com/|Live
74|https://notchcasino.com/how-to-adapt-register-now-strategies-for/|register now|https://www.w88cas.com/|Live
75|https://oxidecasino.com/a-comprehensive-online-betting-vietnam-primer-for/|online betting vietnam|https://e28betz.com/vn/en/|Live
76|https://ozonecasino.com/how-to-take-your-online-betting-vietnam/|online betting vietnam|https://e28betz.com/vn/en/|Live
77|https://patrolcasino.com/tested-online-betting-vietnam-methods-what-actually/|online betting vietnam|https://e28betz.com/vn/en/|Live
78|https://pillarcasino.com/real-vietnam-betting-site-results-what-to/|vietnam betting site|https://e28betz.com/vn/en/|Live
79|https://plankcasino.com/vietnam-betting-site-as-a-catalyst-for/|vietnam betting site|https://e28betz.com/vn/en/|Live
80|https://platecasino.com/8-steps-to-mastering-the-vietnam-betting/|vietnam betting site|https://e28betz.com/vn/en/|Live
81|https://prowlcasino.com/worst-online-casino-vietnam-practices-that-cost/|online casino vietnam|https://e28betz.com/vn/en/|Live
82|https://ravenspin.com/your-2026-online-casino-vietnam-action-plan/|online casino vietnam|https://e28betz.com/vn/en/|Live
83|https://reedcasino.com/3-questions-to-ask-before-choosing-online/|online casino vietnam|https://e28betz.com/vn/en/|Live
84|https://reliccasino.com/vietnam-football-betting-and-the-freedom-to/|vietnam football betting|https://e28betz.com/vn/en/|Live
85|https://ruincasino.com/the-essential-vietnam-football-betting-handbook-for/|vietnam football betting|https://e28betz.com/vn/en/|Live
86|https://scorchcasino.com/a-comprehensive-vietnam-football-betting-primer-for/|vietnam football betting|https://e28betz.com/vn/en/|Live
87|https://sentrycasino.com/how-to-automate-your-world-cup-2026/|world cup 2026 betting vietnam|https://e28betz.com/vn/en/|Live
88|https://skelecasino.com/a-sustainable-world-cup-2026-betting-vietnam/|world cup 2026 betting vietnam|https://e28betz.com/vn/en/|Live
89|https://slicecasino.com/how-to-build-a-winning-world-cup/|world cup 2026 betting vietnam|https://e28betz.com/vn/en/|Live
90|https://soldiercasino.com/pro-e2bet-tips-from-industry-insiders-for/|e2bet|https://e28betz.com/|Live
91|https://squallcasino.com/boosting-sports-betting-efficiency-with-e2bet-in/|e2bet|https://e28betz.com/|Live
92|https://stoutcasino.com/how-to-upgrade-your-e2bet-betting-experience/|e2bet|https://e28betz.com/|Live
93|https://talonspin.com/e28betz-red-flags-signs-you-should-walk/|e28betz|https://e28betz.com/|Live
94|https://theracasino.com/3-levels-of-e28betz-mastery-beginner-to/|e28betz|https://e28betz.com/|Live
95|https://triggerwin.com/why-e28betz-is-better-than-competitors-for/|e28betz|https://e28betz.com/|Live
96|https://trimcasino.com/long-term-e28betz-strategy-building-lasting-winning-strategies/|e28betz.com|https://e28betz.com/|Live
97|https://tundacasino.com/how-to-set-up-e28betz-sports-betting/|e28betz.com|https://e28betz.com/|Live
98|https://veincasino.com/breaking-down-the-latest-e28betz-casino-developments/|e28betz.com|https://e28betz.com/|Live
99|https://volumecasino.com/how-to-win-more-with-e2bet-online/|e2bet online casino|https://e28betz.com/|Live
100|https://wintcasino.com/the-e2bet-online-casino-blueprint-your-path/|e2bet online casino|https://e28betz.com/|Live
101|https://cometspin.com/the-state-of-e2bet-online-casino-in/|e2bet online casino|https://e28betz.com/|Live
102|https://commonwin.com/how-e2bet-sports-betting-transformed-betting-strategies/|e2bet sports betting|https://e28betz.com/|Live
103|https://daringcasino.com/how-to-scale-your-e2bet-sports-betting/|e2bet sports betting|https://e28betz.com/|Live
104|https://dazzlespin.com/a-e2bet-sports-betting-snapshot-winning-strategies/|e2bet sports betting|https://e28betz.com/|Live
105|https://duchessspin.com/the-e2bet-login-blueprint-your-path-to/|e2bet login|https://e28betz.com/|Live
106|https://esportbolt.com/what-is-e2bet-login-and-why-does/|e2bet login|https://e28betz.com/|Live
107|https://esportwave.com/e2bet-login-what-actually-works-in-2026/|e2bet login|https://e28betz.com/|Live
108|https://frostwin.com/5-hard-won-e2bet-register-lessons-from-industry/|e2bet register|https://e28betz.com/|Live
109|https://galeplay.com/research-backed-e2bet-register-strategies-that-deliver-winning/|e2bet register|https://e28betz.com/|Live
110|https://glidecasino.com/research-backed-e2bet-register-strategies-that-deliver-winning/|e2bet register|https://e28betz.com/|Live
`;

export const details = [
  parse("November 2025", "93 backlinks - 31 bk8smart.com + 31 w88cas.com + 31 ft881.com", november),
  parse("December 2025", "90 backlinks - 45 bk8smart.com + 45 w88cas.com", december),
  parse("January 2026", "90 backlinks - 45 bk8smart.com (Thai) + 45 w88cas.com (Thai)", january),
  parse("February 2026", "90 backlinks - 45 nova88cas.com + 45 w88cas.com", february),
  parse("March 2026", "90 backlinks - 44 nova88cas.com + 46 w88cas.com", march),
  parse("April 2026", "90 backlinks - 44 nova88cas.com + 46 w88cas.com", april),
  parse("May 2026", "110 backlinks - 42 nova88cas.com + 32 w88cas.com + 36 e28betz.com", may),
];

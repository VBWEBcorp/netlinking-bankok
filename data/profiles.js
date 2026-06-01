// "Backlink Profiles #1" tab - source of truth (hand-editable).
// Format : sr#|website|domainRating|domainAuthority|nicheRelevance|geographicFocus|trafficEstimate|spamScore|linkQuality|anchorType
const raw = `
1|casinopokerroyale.com|55|33|High|Southeast Asia|2.1K-3.2K/month|2%|Premium|Brand
2|rouletteslotcasino.com|55|31|High|Southeast Asia|1.8K-2.9K/month|1%|Premium|Mixed
3|jackpoteliteslots.com|55|28|High|Global|1.5K-2.4K/month|2%|Premium|Natural
4|toppokerroulette.com|76|31|High|APAC|4.2K-6.5K/month|1%|Premium|Brand
5|eliteroulettegames.com|55|32|High|Southeast Asia|2.0K-3.1K/month|2%|Premium|Mixed
6|highstakescasinoslots.com|55|31|High|Global|1.7K-2.8K/month|1%|Premium|Natural
7|pokerroulettecasino.com|55|28|High|Southeast Asia|1.4K-2.5K/month|2%|Premium|Brand
8|premiumblackjackwins.com|55|31|High|APAC|1.9K-3.0K/month|1%|Premium|Mixed
9|slotsroulettejackpot.com|55|30|High|Southeast Asia|1.6K-2.7K/month|2%|Premium|Natural
10|jackpotelitecasino.com|55|33|High|Global|2.2K-3.3K/month|1%|Premium|Brand
11|megapokerjackpot.com|55|27|High|Southeast Asia|1.3K-2.3K/month|2%|Premium|Mixed
12|slotpokerjackpot.com|55|26|High|APAC|1.2K-2.1K/month|2%|Premium|Natural
13|pokerslotjackpot.com|48|31|Medium|Southeast Asia|900-1.4K/month|3%|Standard|Brand
14|blackjackjackpotcasino.com|48|33|High|Global|1.1K-1.8K/month|2%|Standard|Mixed
15|slotspokerwins.com|48|31|Medium|Southeast Asia|850-1.5K/month|3%|Standard|Natural
16|megablackjackwins.com|48|31|High|APAC|950-1.6K/month|2%|Standard|Brand
17|casinoeliteroulette.com|49|30|High|Southeast Asia|1.0K-1.7K/month|2%|Standard|Mixed
18|winningtables.com|49|30|High|Global|1.1K-1.8K/month|2%|Standard|Natural
19|livepokerroulette.com|49|28|High|Southeast Asia|800-1.4K/month|3%|Standard|Brand
20|slotsjackpotelite.com|49|27|Medium|APAC|750-1.3K/month|3%|Standard|Mixed
21|casinojackpotroyale.com|53|33|High|Southeast Asia|1.6K-2.5K/month|2%|Premium|Natural
22|jackpotadventures.com|53|32|High|Global|1.5K-2.4K/month|2%|Premium|Brand
23|jackpotslotroyale.com|53|32|High|Southeast Asia|1.4K-2.3K/month|2%|Premium|Mixed
24|premiumroulettejackpot.com|53|31|High|APAC|1.3K-2.2K/month|2%|Premium|Natural
25|elitecasinoroulette.com|55|32|High|Southeast Asia|2.0K-3.1K/month|1%|Premium|Brand
26|blackjackroulettecasino.com|55|33|High|Global|2.2K-3.3K/month|1%|Premium|Mixed
27|jackpotpokerlegends.com|55|32|High|Southeast Asia|1.9K-3.0K/month|2%|Premium|Natural
28|winningcasinoblackjack.com|55|27|High|APAC|1.4K-2.4K/month|2%|Premium|Brand
29|slotjackpotmasters.com|55|31|High|Southeast Asia|1.8K-2.9K/month|1%|Premium|Mixed
30|highstakesroulettecasino.com|55|32|High|Global|2.1K-3.2K/month|2%|Premium|Natural
31|pokerjackpotroyale.com|55|31|High|Southeast Asia|1.7K-2.8K/month|1%|Premium|Brand
32|megacasinoblackjack.com|55|32|High|APAC|2.0K-3.1K/month|2%|Premium|Mixed
33|jackpotrouletteelite.com|55|32|High|Southeast Asia|1.9K-3.0K/month|1%|Premium|Natural
34|casinojackpotmasters.com|55|33|High|Global|2.3K-3.4K/month|1%|Premium|Brand
35|winningroulettejackpot.com|55|26|High|Southeast Asia|1.2K-2.2K/month|2%|Premium|Mixed
36|pokerslotsempire.com|55|28|High|APAC|1.5K-2.5K/month|2%|Premium|Natural
37|blackjackcasinolegends.com|55|30|High|Southeast Asia|1.7K-2.8K/month|1%|Premium|Brand
38|ultimatecasinojackpots.com|55|26|High|Global|1.3K-2.3K/month|2%|Premium|Mixed
39|slotsandpokerwins.com|55|31|High|Southeast Asia|1.8K-2.9K/month|1%|Premium|Natural
40|highrollercasinowins.com|55|28|High|APAC|1.5K-2.6K/month|2%|Premium|Brand
41|casinojackpotempire.com|55|30|High|Southeast Asia|1.6K-2.7K/month|2%|Premium|Mixed
42|topslotroulette.com|55|27|High|Global|1.4K-2.4K/month|2%|Premium|Natural
43|pokerjackpotadventures.com|55|31|High|Southeast Asia|1.8K-2.9K/month|1%|Premium|Brand
44|jackpotpokermasters.com|55|32|High|APAC|2.0K-3.1K/month|2%|Premium|Mixed
45|casinorouletteempire.com|55|33|High|Southeast Asia|2.2K-3.3K/month|1%|Premium|Natural
46|blackjackwinningtables.com|55|33|High|Global|2.3K-3.4K/month|1%|Premium|Brand
47|slotstreasurejackpot.com|55|31|High|Southeast Asia|1.7K-2.8K/month|2%|Premium|Mixed
48|roulettejackpotelite.com|55|27|High|APAC|1.4K-2.4K/month|2%|Premium|Natural
49|highstakespokerslots.com|55|29|High|Southeast Asia|1.6K-2.7K/month|1%|Premium|Brand
50|megaroulettejackpots.com|55|29|High|Global|1.5K-2.6K/month|2%|Premium|Mixed
51|winningblackjackcasino.com|55|26|High|Southeast Asia|1.2K-2.2K/month|2%|Premium|Natural
52|livecasinojackpotwins.com|55|31|High|APAC|1.8K-2.9K/month|1%|Premium|Brand
53|slotsjackpotadventures.com|55|27|High|Southeast Asia|1.4K-2.4K/month|2%|Premium|Mixed
54|eliteblackjacktables.com|55|33|High|Global|2.2K-3.3K/month|1%|Premium|Natural
55|pokercasinomasters.com|55|28|High|Southeast Asia|1.5K-2.5K/month|2%|Premium|Brand
56|megaslotcasinogames.com|55|28|High|APAC|1.4K-2.5K/month|2%|Premium|Mixed
57|ultimateroulettewins.com|55|28|High|Southeast Asia|1.5K-2.6K/month|1%|Premium|Natural
58|casinojackpotadventures.com|55|29|High|Global|1.6K-2.7K/month|2%|Premium|Brand
59|winningpokerjackpots.com|55|28|High|Southeast Asia|1.4K-2.5K/month|2%|Premium|Mixed
60|blackjackjackpotzone.com|55|30|High|APAC|1.7K-2.8K/month|1%|Premium|Natural
61|slotsroulettecasino.com|55|25|High|Southeast Asia|1.1K-2.0K/month|2%|Premium|Brand
62|casinotreasurejackpots.com|55|32|High|Global|2.0K-3.1K/month|1%|Premium|Mixed
63|roulettepokerwins.com|55|31|High|Southeast Asia|1.8K-2.9K/month|2%|Premium|Natural
64|elitejackpotslots.com|55|32|High|APAC|1.9K-3.0K/month|1%|Premium|Brand
65|pokerjackpotcasino.com|55|27|High|Southeast Asia|1.4K-2.4K/month|2%|Premium|Mixed
66|highrollerroulettewins.com|55|32|High|Global|2.1K-3.2K/month|1%|Premium|Natural
67|blackjackroulettemasters.com|55|30|High|Southeast Asia|1.6K-2.7K/month|2%|Premium|Brand
68|pokertreasurecasino.com|55|31|High|APAC|1.8K-2.9K/month|1%|Premium|Mixed
69|jackpotslotsempire.com|55|32|High|Southeast Asia|2.0K-3.1K/month|2%|Premium|Natural
70|casinowinningpoker.com|55|33|High|Global|2.2K-3.3K/month|1%|Premium|Brand
71|liveblackjackmasters.com|55|28|High|Southeast Asia|1.5K-2.5K/month|2%|Premium|Mixed
72|slotsrouletteempire.com|55|30|High|APAC|1.7K-2.8K/month|1%|Premium|Natural
73|megajackpotpoker.com|55|32|High|Southeast Asia|1.9K-3.0K/month|2%|Premium|Brand
74|ultimateslotscasino.com|55|31|High|Global|1.8K-2.9K/month|1%|Premium|Mixed
75|pokerjackpotzone.com|55|32|High|Southeast Asia|2.0K-3.1K/month|2%|Premium|Natural
76|highjackpotroulette.com|55|32|High|APAC|1.9K-3.0K/month|1%|Premium|Brand
77|casinomastersblackjack.com|55|30|High|Southeast Asia|1.7K-2.8K/month|2%|Premium|Mixed
78|slotsjackpotlegends.com|55|27|High|Global|1.4K-2.4K/month|2%|Premium|Natural
79|roulettejackpotmasters.com|55|31|High|Southeast Asia|1.8K-2.9K/month|1%|Premium|Brand
80|elitecasinojackpots.com|55|32|High|APAC|2.0K-3.1K/month|2%|Premium|Mixed
81|blackjackwinningjackpots.com|55|33|High|Southeast Asia|2.3K-3.4K/month|1%|Premium|Natural
82|megacasinoroulette.com|55|28|High|Global|1.5K-2.5K/month|2%|Premium|Brand
83|pokerwinsjackpot.com|55|27|High|Southeast Asia|1.4K-2.4K/month|2%|Premium|Mixed
84|jackpotroulettelegends.com|55|28|High|APAC|1.5K-2.5K/month|1%|Premium|Natural
85|ultimatecasinoroulette.com|55|26|High|Southeast Asia|1.2K-2.2K/month|2%|Premium|Brand
86|slotsandroulettejackpot.com|55|27|High|Global|1.3K-2.3K/month|2%|Premium|Mixed
87|eliteslotjackpots.com|55|32|High|Southeast Asia|2.0K-3.1K/month|1%|Premium|Natural
88|megajackpotcasinogames.com|55|29|High|APAC|1.6K-2.7K/month|2%|Premium|Brand
89|blackjacktreasurecasino.com|55|33|High|Southeast Asia|2.2K-3.3K/month|1%|Premium|Mixed
90|roulettewinningjackpots.com|55|28|High|Global|1.5K-2.6K/month|2%|Premium|Natural
91|pokerslotsmasters.com|55|27|High|Southeast Asia|1.3K-2.3K/month|2%|Premium|Brand
92|jackpotblackjackwins.com|55|32|High|APAC|2.0K-3.1K/month|1%|Premium|Mixed
93|casinolegendsroulette.com|55|33|High|Southeast Asia|2.1K-3.2K/month|1%|Premium|Natural
94|topjackpotpoker.com|55|25|High|Global|1.1K-2.0K/month|2%|Premium|Brand
95|slotsjackpotmasters.com|55|30|High|Southeast Asia|1.7K-2.8K/month|1%|Premium|Mixed
96|pokerroulettejackpot.com|55|31|High|APAC|1.8K-2.9K/month|2%|Premium|Natural
97|megaroulettejackpot.com|55|28|High|Southeast Asia|1.5K-2.6K/month|2%|Premium|Brand
98|pokerroyaltyhub.com|54|31|High|Global|1.5K-2.4K/month|2%|Premium|Mixed
99|slotstormcasino.com|54|31|High|Southeast Asia|1.4K-2.3K/month|2%|Premium|Natural
100|sportswagerzone.com|54|27|Medium|APAC|1.1K-1.9K/month|2%|Premium|Brand
101|casinoelitex.com|54|29|High|Southeast Asia|1.3K-2.2K/month|2%|Premium|Mixed
102|pokervaultonline.com|52|27|High|Global|1.0K-1.8K/month|2%|Standard|Natural
103|luckyblackjackers.com|52|31|High|Southeast Asia|1.2K-2.0K/month|3%|Standard|Brand
104|spinfrenzyslots.com|52|31|High|APAC|1.1K-1.9K/month|2%|Standard|Mixed
105|sportbetpulse.com|52|26|Medium|Southeast Asia|850-1.5K/month|3%|Standard|Natural
106|casinokingdomhq.com|52|32|High|Global|1.3K-2.1K/month|2%|Standard|Brand
107|betrush365.com|52|30|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Mixed
108|pokerchampionhall.com|52|27|High|APAC|950-1.7K/month|3%|Standard|Natural
109|jackacecasino.com|52|28|High|Southeast Asia|1.0K-1.8K/month|2%|Standard|Brand
110|slottitanic.com|52|25|High|Global|800-1.4K/month|3%|Standard|Mixed
111|betwarriorsarena.com|52|28|Medium|Southeast Asia|950-1.6K/month|2%|Standard|Natural
112|casinojackpothive.com|52|31|High|APAC|1.2K-2.0K/month|2%|Standard|Brand
113|betmaxempire.com|52|29|High|Southeast Asia|1.0K-1.8K/month|3%|Standard|Mixed
114|pokervaultarena.com|52|25|High|Global|850-1.5K/month|3%|Standard|Natural
115|blackjackempiregame.com|52|29|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Brand
116|spinslotgalaxy.com|52|30|High|APAC|1.2K-2.0K/month|2%|Standard|Mixed
117|gamesportsbetwin.com|52|27|Medium|Southeast Asia|900-1.6K/month|3%|Standard|Natural
118|betrusharena.com|52|30|High|Global|1.1K-1.9K/month|2%|Standard|Brand
119|pokerlegendslounge.com|52|24|High|Southeast Asia|800-1.4K/month|3%|Standard|Mixed
120|blackjacknationhq.com|52|32|High|APAC|1.3K-2.1K/month|2%|Standard|Natural
121|megaspinslotz.com|52|30|High|Southeast Asia|1.2K-2.0K/month|2%|Standard|Brand
122|sportsbetturbo.com|52|27|Medium|Global|900-1.7K/month|3%|Standard|Mixed
123|casinovortexzone.com|52|28|High|Southeast Asia|1.0K-1.8K/month|2%|Standard|Natural
124|betfiestagame.com|52|32|High|APAC|1.4K-2.2K/month|2%|Standard|Brand
125|pokerquestonline.com|52|26|High|Southeast Asia|850-1.6K/month|3%|Standard|Mixed
126|blackjackrushhq.com|52|32|High|Global|1.3K-2.1K/month|2%|Standard|Natural
127|slotwizardsclub.com|52|26|High|Southeast Asia|900-1.6K/month|3%|Standard|Brand
128|betontop365.com|52|28|Medium|APAC|1.0K-1.8K/month|2%|Standard|Mixed
129|casinowinnersvault.com|52|31|High|Southeast Asia|1.2K-2.0K/month|2%|Standard|Natural
130|betpulsemax.com|52|32|High|Global|1.3K-2.1K/month|2%|Standard|Brand
131|pokerroyalarena.com|52|29|High|Southeast Asia|1.1K-1.9K/month|3%|Standard|Mixed
132|luckyblackjackking.com|52|26|High|APAC|900-1.6K/month|3%|Standard|Natural
133|blackjackgamesarena.com|52|28|High|Southeast Asia|1.0K-1.8K/month|2%|Standard|Brand
134|slotlegendsvault.com|52|24|High|Global|750-1.3K/month|3%|Standard|Mixed
135|turbosportsbets.com|52|23|Medium|Southeast Asia|700-1.2K/month|3%|Standard|Natural
136|casinoxtremevault.com|52|32|High|APAC|1.4K-2.2K/month|2%|Standard|Brand
137|betstormnation.com|52|29|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Mixed
138|pokeracearena.com|52|26|High|Global|900-1.6K/month|3%|Standard|Natural
139|blackjacktreasure.com|52|29|High|Southeast Asia|1.0K-1.8K/month|2%|Standard|Brand
140|slotfrenzyvault.com|52|24|High|APAC|800-1.4K/month|3%|Standard|Mixed
141|betongamegame.com|52|28|Medium|Southeast Asia|950-1.7K/month|2%|Standard|Natural
142|casinowagerzone.com|52|28|High|Global|1.0K-1.8K/month|2%|Standard|Brand
143|betgalaxyhq.com|52|29|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Mixed
144|pokerstormnation.com|52|23|High|APAC|700-1.3K/month|3%|Standard|Natural
145|jackpotwavecasino.com|55|28|High|Southeast Asia|1.5K-2.5K/month|2%|Premium|Brand
146|slotepicspin.com|52|27|High|Global|950-1.7K/month|2%|Standard|Mixed
147|betfastcasinogame.com|52|29|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Natural
148|casinomegavault.com|52|28|High|APAC|1.0K-1.8K/month|2%|Standard|Brand
149|pokerpowernation.com|52|30|High|Southeast Asia|1.2K-2.0K/month|2%|Standard|Mixed
150|blackjackmastersclub.com|52|28|High|Global|1.0K-1.8K/month|3%|Standard|Natural
151|sportbetfever.com|52|24|Medium|Southeast Asia|800-1.4K/month|3%|Standard|Brand
152|casinoultraedge.com|52|29|High|APAC|1.1K-1.9K/month|2%|Standard|Mixed
153|betrushlegends.com|52|29|High|Southeast Asia|1.0K-1.8K/month|2%|Standard|Natural
154|pokertitanclub.com|52|30|High|Global|1.2K-2.0K/month|2%|Standard|Brand
155|blackjackarenax.com|52|32|High|Southeast Asia|1.3K-2.1K/month|2%|Standard|Mixed
156|casinogalaxyedge.com|52|28|High|APAC|1.0K-1.8K/month|2%|Standard|Natural
157|betarenanation.com|52|32|High|Southeast Asia|1.4K-2.2K/month|2%|Standard|Brand
158|pokerlegendsgame.com|52|27|High|Global|950-1.7K/month|3%|Standard|Mixed
159|blackjackacevault.com|52|29|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Natural
160|slotstormnation.com|52|24|High|APAC|750-1.4K/month|3%|Standard|Brand
161|sportsbetxtreme.com|52|24|Medium|Southeast Asia|800-1.4K/month|3%|Standard|Mixed
162|casinorushnation.com|52|29|High|Global|1.1K-1.9K/month|2%|Standard|Natural
163|betvictoryzone.com|52|32|High|Southeast Asia|1.3K-2.1K/month|2%|Standard|Brand
164|pokerempirehq.com|52|30|High|APAC|1.2K-2.0K/month|2%|Standard|Mixed
165|blackjackspingame.com|52|32|High|Southeast Asia|1.4K-2.2K/month|2%|Standard|Natural
166|slotfiestavault.com|52|29|High|Global|1.0K-1.8K/month|2%|Standard|Brand
167|casinofortuneedge.com|52|27|High|Southeast Asia|950-1.7K/month|3%|Standard|Mixed
168|pokervaultnation.com|52|28|High|APAC|1.0K-1.8K/month|2%|Standard|Natural
169|blackjackmegaarena.com|52|29|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Brand
170|slotwagerworld.com|52|29|High|Global|1.0K-1.8K/month|2%|Standard|Mixed
171|spincasinojackpotarena.com|52|26|High|Southeast Asia|900-1.6K/month|3%|Standard|Natural
172|casinobetmastersclub.com|76|30|High|APAC|4.5K-6.8K/month|1%|Premium|Brand
173|blackcasinolegends.com|52|29|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Mixed
174|casinobetarenagame.com|76|2|High|Global|3.8K-5.5K/month|1%|Premium|Natural
175|casinoslotxgame.com|52|32|High|Southeast Asia|1.3K-2.1K/month|2%|Standard|Brand
176|spintoslotsmaster.com|52|29|High|APAC|1.1K-1.9K/month|2%|Standard|Mixed
177|sportsbettcasinos.com|76|27|Medium|Southeast Asia|4.0K-6.0K/month|1%|Premium|Natural
178|casinobetboosthq.com|52|28|High|Global|1.0K-1.8K/month|2%|Standard|Brand
179|betoncasinolegends.com|52|32|High|Southeast Asia|1.3K-2.1K/month|2%|Standard|Mixed
180|slotcasinozone.com|52|26|High|APAC|900-1.6K/month|3%|Standard|Natural
181|sportscasinovaults.com|52|29|High|Southeast Asia|1.1K-1.9K/month|2%|Standard|Brand
182|casinobetwavex.com|53|29|High|Global|1.3K-2.2K/month|2%|Premium|Mixed
183|casinospinsworld.com|76|30|High|Southeast Asia|4.3K-6.5K/month|1%|Premium|Natural
184|casinobetkingx.com|53|29|High|APAC|1.4K-2.3K/month|2%|Premium|Brand
185|prospincasino.com|53|26|High|Southeast Asia|1.2K-2.1K/month|2%|Premium|Mixed
`;

export const profiles = raw
  .trim()
  .split("\n")
  .map((line) => {
    const [sr, website, dr, da, niche, geo, traffic, spam, quality, anchor] =
      line.split("|");
    return {
      sr: Number(sr),
      website: website.trim(),
      domainRating: Number(dr),
      domainAuthority: Number(da),
      nicheRelevance: niche.trim(),
      geographicFocus: geo.trim(),
      trafficEstimate: traffic.trim(),
      spamScore: spam.trim(),
      linkQuality: quality.trim(),
      anchorType: anchor.trim(),
    };
  });

# Friday 27 November 2026 — the world in one image

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/jonecode01-rgb/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/jonecode01-rgb/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Built for make.fun's [Sum up 27 November's world news in one image](https://make.fun/bounty/news-image-20261127) bounty. Referral code: 2btztaza.

A code-rendered dense broadsheet summing up the world's news of
Friday 27 November 2026: **36 stories across 8 regions**, each one
verified against Reuters, AP, AFP, BBC, Al Jazeera, Guardian, The
Times, Japan Times, CNBC, Nikkei Asia, Bloomberg, Ukrinform, Nation,
Sowetan, Straits Times, Daily Tribune, CNN or Cricinfo reporting.

## What is in the image

- **3 hero stories**, each with a flat vector illustration: China
  staging a Taiwan landing drill with an ~800m floating bridge off
  Fujian; the EU summit ending with no deal on a €45bn Ukraine loan
  or the 2028–2034 budget; Tokyo core inflation hitting 2.9%, its
  fastest since July 2025.
- **10 secondary stories** with icons: Trump urging Putin to pull
  back; Russia launching 155 drones overnight; South Korea
  repatriating six rescued North Koreans; China's industrial profits
  rising 20.1%; India saying a US trade deal is near completion; the
  UN warning of famine risk in 16 hotspots; England flu admissions
  jumping almost 80%; Australia sanctioning two people over
  Iran-linked attacks; Erdogan ratifying the Mecca defence pact; and
  Argentina barring the central bank from printing money.
- **23 more stories** in the "ALSO ON" list, a dotted world map with
  numbered pins, a "THE DAY IN NUMBERS" stat strip, a UTC timeline,
  certainty tags on every story (CONFIRMED / OFFICIAL / REPORTED /
  CLAIM / ONGOING) with a legend, and a footer source list.
- A **DATE CHECK** strip naming the near-miss stories from other days
  that were deliberately left out: the FCC clearing SpaceX's 1m
  satellites (Tue 25 Nov), S&P putting Nvidia on downgrade watch
  (Tue 25 Nov), the Egypt fuel tanker crash (Tue 25 Nov), the US
  proposing tariffs on India (Tue 25 Nov), Huawei teasing a custom
  HBM chip (Thu 26 Nov), UK net migration falling to 77,000
  (Thu 26 Nov), Zelensky calling Trump–Putin ties "strange"
  (Thu 26 Nov), and Nvidia halting server shipments to South-East
  Asia (Thu 26 Nov).

## How it was made

`render.py` draws the whole broadsheet with PIL (no image model, no
photographs): the layout, the three flat hero illustrations, the small
story icons and the dotted world map (from public-domain Natural Earth
country outlines) are all code. `main.ts` copies the rendered
`entry.png` to the output directory; two runs write identical bytes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is 1024x1024, 212,760 bytes, sha256
`72e57107bfc30f037152f0c61f4ac54fb1bbbb7ddbf1d07d96fc55a881c7afb8`.

## Licence

MIT — see LICENSE.

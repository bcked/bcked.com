# Methodology

bcked records three things for every tracked token: its price, its supply and its backing. All data is
collected by the open-source adapters in [bcked-adapters](https://github.com/bcked/bcked-adapters)
and published through the [bcked API](https://api.bcked.com/docs/).

## Terms

- **Backing** is what an issuer holds so that a token can be redeemed for a fixed amount of something
  else. Backing reduces risk but is no guarantee: every token has its own risks.
- **Reserve asset** is an asset at the end of a backing chain, like US dollars, Treasury bills, gold
  or bitcoin.
- **Backing chain** is the path from a token through the tokens and reserves behind it, for example
  a token backed by WBTC, which is backed by bitcoin.
- **Composition** is the mix of reserve assets behind a token, as shares of the total or in US dollars.
- **Backing ratio** is the value of the backing divided by the market cap, see below.

## Backing

Backing is what an issuer holds for a token: cash, government debt, gold, other tokens. It is recorded
in units of the underlying asset (US dollars, troy ounces, BTC), not in US dollars, so it can be valued
with the price at any time.

- **On-chain backing** is read from the contracts that hold it, for example the ETH held by the WETH
  contract.
- **Reported backing** comes from the issuers' attestation reports or reserve pages. Each report date is
  stored with the time the report states, converted to UTC. Reserve categories are mapped to assets as
  closely as the report allows. Commercial paper, money market funds, secured loans, equities and
  similar categories are their own reserve assets, counted at the US dollar value the report states.
  Reserves whose composition the issuer does not report are shown as
  "Composition not reported": Tether's "other investments", sums of several kinds of assets in one
  line, and periods where a report only states the total.
- **Reserves for several chains.** Some issuers report one reserve for a token on all chains (Tether,
  Circle, Paxos). The token on one chain gets the share of the reserve that matches its share of the
  tokens outstanding at the report date: its supply on that chain over the total the issuer reports.

Every backing value is shown with the date it refers to. Reports appear monthly or quarterly, so the
backing of some tokens is weeks or months older than their price. The asset page says so when the
backing is more than 30 days older than the market cap.

## Backing ratio

The backing ratio is the US dollar value of the backing divided by the token's market cap at the same
time. A ratio of 100% means the reported reserves are worth exactly the tokens in circulation.

The market cap uses the circulating supply where it is known. Tokens held in the issuer's own treasury
are not circulating and not backed, so including them would understate the ratio.

"UNK" means the backing is unknown, not zero. bcked does not rate tokens or issuers, and a ratio is no
statement about the safety of a token.

## Gaps and corrections

From November 30, 2025 to October 27, 2026 the crawler did not run. Prices, supplies and on-chain
backing for that period were filled with daily values from the sources below. WBTC backing was
rebuilt from the bitcoin transactions of its custodian addresses, and matches the recorded holdings
on both ends of the gap.

Tether published no reserve reports from November 2018 to January 2021. For that time bcked shows
the monthly total assets from Tether's own transparency page, as archived by the
[Wayback Machine](https://web.archive.org/web/2020/https://wallet.tether.to/transparency), as
"Composition not reported". These totals are unaudited.

If a value is wrong, please report it with the
[correction form](https://github.com/bcked/bcked-adapters/issues/new?template=correction.yml).

## Sources

- Prices: [Chainlink Data Feeds](https://docs.chain.link/data-feeds), read on-chain on Ethereum
- Supply: the token contracts on each chain, read on-chain through [Alchemy](https://www.alchemy.com/) and
  the chains' public RPCs. USDT per chain from [Tether's figures](https://tether.to/en/transparency/).
  ETH supply from [ultrasound.money](https://ultrasound.money/)
- Bitcoin: [mempool.space](https://mempool.space/) (price), [Blockstream](https://blockstream.info/) (block height)
- WBTC custody: [Chainlink WBTC Proof of Reserves](https://data.chain.link/feeds/ethereum/mainnet/wbtc-por)
- Reserves: [Tether](https://tether.to/en/transparency/), [Circle](https://www.circle.com/transparency),
  [Paxos](https://paxos.com/), and on-chain for DAI, USDS, stETH and wstETH
- US dollar supply: [Federal Reserve H.6](https://www.federalreserve.gov/releases/h6/). Treasury
  securities: [TreasuryDirect](https://www.treasurydirect.gov/)
- Gold supply: [USGS](https://www.usgs.gov/) until 2018
- Gold price: [Chainlink XAU/USD](https://data.chain.link/feeds/ethereum/mainnet/xau-usd),
  [currency-api](https://github.com/fawazahmed0/exchange-api) for the history

# Methodology

bcked records three things for every tracked token: its price, its supply and its backing. All data is
collected by the open-source adapters in [bcked-adapters](https://github.com/bcked/bcked-adapters),
stored as plain CSV files on its [`records` branch](https://github.com/bcked/bcked-adapters/tree/records)
and published through the [bcked API](https://api.bcked.com/docs/).

## Backing

Backing is what an issuer holds for a token: cash, government debt, gold, other tokens. It is recorded
in units of the underlying asset (US dollars, troy ounces, BTC), not in US dollars, so it can be valued
with the price at any time.

- **On-chain backing** is read from the contracts that hold it, for example the ETH held by the WETH
  contract.
- **Reported backing** comes from the issuers' attestation reports or reserve pages. Each report date is
  stored with the time the report states, converted to UTC. Reserve categories are mapped to assets as
  closely as the report allows. Categories that do not name a specific asset are shown as "Undefined
  USD denominated asset".
- **Reserves for several chains.** Some issuers report one reserve for a token on all chains (Tether,
  Circle). The token on one chain gets the share of the reserve that matches its share of the
  circulating supply on that day, based on [DefiLlama](https://defillama.com/stablecoins).

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
backing for that period were filled with daily values from the sources below. WBTC backing has no
historical source and is missing for that period.

If a value is wrong, please report it with the
[correction form](https://github.com/bcked/bcked-adapters/issues/new?template=correction.yml).

## Sources

- Prices and stablecoin supply: [DefiLlama](https://defillama.com/), [DexScreener](https://dexscreener.com/)
- Ethereum data: Powered by [Etherscan.io APIs](https://etherscan.io/apis), [Alchemy](https://www.alchemy.com/)
- Bitcoin: [BitGo](https://www.bitgo.com/) (price), [Blockstream](https://blockstream.info/) (block height)
- WBTC custody: [wbtc.network](https://wbtc.network/)
- Reserves: [Tether](https://tether.to/en/transparency/), [Circle](https://www.circle.com/transparency),
  [Paxos](https://paxos.com/), [BlackRock Circle Reserve Fund](https://www.blackrock.com/cash/en-us/products/329365/)
- US dollar supply: [Federal Reserve H.6](https://www.federalreserve.gov/releases/h6/). Treasury
  securities: [TreasuryDirect](https://www.treasurydirect.gov/). Gold supply: [USGS](https://www.usgs.gov/)
- Gold price: [Swissquote](https://www.swissquote.com/)
- Backfill of the crawler gap: [mempool.space](https://mempool.space/), [ultrasound.money](https://ultrasound.money/),
  [dRPC](https://drpc.org/), [currency-api](https://github.com/fawazahmed0/exchange-api)

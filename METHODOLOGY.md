# Methodology

bcked records three things for every tracked token: its price, its supply and its backing. All data is
collected by the open-source adapters in [bcked-adapters](https://github.com/bcked/bcked-adapters)
and published through the [bcked API](https://api.bcked.com/docs/).

## Terms

- **Backing** is what an issuer holds so that a token can be redeemed for a fixed amount of something
  else. Backing reduces risk but is no guarantee: every token has its own risks.
- **Reserve asset** is an asset at the end of a backing chain, like US dollars, Treasury bills, gold
  or bitcoin. The backing assets page adds them up for all tracked tokens.
- **Not backed** marks an asset that is not backed by other assets, like bitcoin, ether or a
  governance token. Its value rests on supply and demand alone, the sense in which the
  [IMF](https://www.imf.org/en/publications/fintech-notes/issues/2022/09/26/regulating-the-crypto-ecosystem-the-case-of-unbacked-crypto-assets-523715)
  uses "unbacked crypto assets". It can still back other tokens, like bitcoin behind WBTC.
- **Not tracked** marks a token that is backed, but whose backing bcked does not record yet. On the
  backing assets page its value counts as "Not traced yet", not as a reserve asset.
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
- **Loans.** Some tokens are minted as loans against collateral, like DAI, USDS and GHO. Where each
  loan type keeps its collateral in its own contract (the vaults of DAI and USDS), that collateral is
  counted in full, also above the debt. Where the collateral is pooled with other lending, as on Aave
  for GHO, or held off-chain, the loans are counted at their debt as "Loans".
- **Reported backing** comes from the issuers' attestation reports or reserve pages. Each report date is
  stored with the time the report states, converted to UTC. Reserve categories are mapped to assets as
  closely as the report allows. Commercial paper, money market funds, secured loans, equities and
  similar categories are their own reserve assets, counted at the US dollar value the report states.
  Reserves whose composition the issuer does not report are shown as "Composition not reported":
  items like "other investments", sums of several kinds of assets in one line, and periods where a
  report only states the total.
- **Reserves for several chains.** Some issuers report one reserve for a token on all its chains. The
  token on one chain gets the share of the reserve that matches its share of the tokens outstanding at
  the report date: its supply on that chain over the total the issuer reports. The supply per chain
  comes from the report where it lists one, otherwise from the chain at the report time, otherwise
  from the issuer's own published figures for that date.

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

## Prices and supply

Prices come from [Chainlink Data Feeds](https://docs.chain.link/data-feeds), read on-chain. For dates
before a token's feed existed, the price is read on-chain from the decentralized exchange pool with
the most liquidity at that time, if it held at least $1M, and converted to US dollars with a Chainlink
feed at the same time. Supply is read from the token contract on each chain.

## Missing data and corrections

A value bcked cannot take from a source it may use stays empty. It is never estimated or carried
over from another date. Where a token's history has such a gap, or rests on figures the issuer did not
audit, its page says so.

If a value is wrong, please report it with the
[correction form](https://github.com/bcked/bcked-adapters/issues/new?template=correction.yml).

## Sources

- Prices: [Chainlink Data Feeds](https://docs.chain.link/data-feeds) and, before a feed existed,
  on-chain exchange pools such as [Uniswap](https://uniswap.org/)
- Supply: the token contracts on each chain, read through [Alchemy](https://www.alchemy.com/) and the
  chains' public RPCs, and the issuers' own figures per chain
- Reserves: the attestation reports of [Tether](https://tether.to/en/transparency/),
  [Circle](https://www.circle.com/transparency) and [Paxos](https://paxos.com/), the contracts that hold
  on-chain backing, and [Chainlink Proof of Reserves](https://data.chain.link/feeds/ethereum/mainnet/wbtc-por)
- Bitcoin: [mempool.space](https://mempool.space/) and [Blockstream](https://blockstream.info/)
- US dollar and Treasury supply: [Federal Reserve H.6](https://www.federalreserve.gov/releases/h6/),
  [TreasuryDirect](https://www.treasurydirect.gov/). Gold supply: [USGS](https://www.usgs.gov/)

Every source, with what it is used for, is listed in
[SOURCES.md](https://github.com/bcked/bcked-adapters/blob/main/SOURCES.md).

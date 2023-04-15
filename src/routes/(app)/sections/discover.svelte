<script lang="ts">
	import { browser } from '$app/environment';
	import AssetList from '$components/asset-list.svelte';
	import Glow from '$components/glow.svelte';
	import Card from '$components/layout/card/main.svelte';
	import SectionHeader from '$components/layout/section/header.svelte';
	import Section from '$components/layout/section/main.svelte';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
	import { ClockIcon, HashtagIcon } from '@rgossiaux/svelte-heroicons/outline';
	import CurrencyDollar from '@rgossiaux/svelte-heroicons/outline/CurrencyDollar';
	import TrendingDown from '@rgossiaux/svelte-heroicons/solid/TrendingDown';
	import TrendingUp from '@rgossiaux/svelte-heroicons/solid/TrendingUp';
	import fromJson from 'ngraph.fromjson';
	import Carousel from 'svelte-carousel';
	import type { PageData } from '../$types';

	export let data: PageData;

	$: ({ graphData, globalStats } = data);

	$: latest = globalStats.history.at(-1)!;

	$: graph = fromJson(graphData);

	export let theme: ui.Theme;
</script>

<Section id="discover" label="Discover backed cryptocurrencies">
	<SectionHeader
		title="Discover"
		description="Of the {latest.count} assets recorded in bcked, {latest.underlying.total
			.count} are backed with a total backing of {formatCurrency(
			latest.underlying.total.usd
		)} and an average backing of {formatCurrency(latest.underlying.avg.usd)}."
		theme={{ title: theme.text }}
	/>
	<div class="mt-10 w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
		{#if graph}
			<Glow {theme} class="-inset-x-4 sm:-inset-x-0">
				<div class="grid grid-cols-1 gap-[0.1rem] sm:gap-4 md:grid-cols-3 shadow sm:shadow-none">
					<Card class="">
						<AssetList
							{data}
							headerIcon={ClockIcon}
							title="Newest Listings"
							filter={(asset) =>
								(graph.getLinks(asset.id) ?? []).filter((link) => link.toId != asset.id).length > 0}
							compare={(a, b) => {
								const aTime = new Date(a.git.created.date).getTime();
								const bTime = new Date(b.git.created.date).getTime();
								return bTime - aTime;
							}}
							size={3}
							select={(asset) => new Date(asset.git.created.date).toLocaleDateString()}
						/>
					</Card>
					<Card class="">
						{#if browser}
							<Carousel autoplay autoplayDuration={3000} arrows={false} pauseOnFocus>
								<AssetList
									{data}
									headerIcon={HashtagIcon}
									title="Number of Underlying"
									map={(asset) => ({
										...asset,
										underlyingCount: graph.getNode(asset.id)?.data.history.at(-1)?.underlying?.count
									})}
									filter={(asset) =>
										asset.underlyingCount != undefined && asset.underlyingCount > 0}
									compare={(a, b) => b.underlyingCount - a.underlyingCount}
									size={3}
									select={(asset) => asset.underlyingCount.toString()}
								/>
								<AssetList
									{data}
									headerIcon={HashtagIcon}
									title="Number of Derivatives"
									map={(asset) => ({
										...asset,
										derivativesCount: graph.getNode(asset.id)?.data.history.at(-1)?.derivative
											?.count
									})}
									filter={(asset) =>
										asset.derivativesCount != undefined && asset.derivativesCount > 0}
									compare={(a, b) => b.derivativesCount - a.derivativesCount}
									size={3}
									select={(asset) => asset.derivativesCount.toString()}
								/>
								<AssetList
									{data}
									headerIcon={CurrencyDollar}
									title="Value of Underlying"
									map={(asset) => ({
										...asset,
										underlyingUsd: graph.getNode(asset.id)?.data.history.at(-1)?.underlying?.usd
									})}
									filter={(asset) => asset.underlyingUsd != undefined && asset.underlyingUsd > 0}
									compare={(a, b) => b.underlyingUsd - a.underlyingUsd}
									size={3}
									select={(asset) => formatCurrency(asset.underlyingUsd)}
								/>
								<AssetList
									{data}
									headerIcon={CurrencyDollar}
									title="Value of Derivatives"
									map={(asset) => ({
										...asset,
										derivativesUsd: graph.getNode(asset.id)?.data.history.at(-1)?.derivative?.usd
									})}
									filter={(asset) => asset.derivativesUsd != undefined && asset.derivativesUsd > 0}
									compare={(a, b) => b.derivativesUsd - a.derivativesUsd}
									size={3}
									select={(asset) => formatCurrency(asset.derivativesUsd)}
								/>
							</Carousel>
						{/if}
					</Card>
					<Card class="">
						{#if browser}
							<Carousel autoplay autoplayDuration={3000} arrows={false} pauseOnFocus>
								<AssetList
									{data}
									headerIcon={TrendingUp}
									title="Biggest 7d Gainers"
									map={(asset) => ({
										...asset,
										rate: graph.getNode(asset.id)?.data.history.at(-1)?.underlying?.ratio?.rate7d
									})}
									filter={(asset) => asset.rate != undefined && asset.rate > 0}
									compare={(a, b) => b.rate - a.rate}
									size={3}
									select={(asset) => formatPercentage(asset.rate)}
								/>
								<AssetList
									{data}
									headerIcon={TrendingDown}
									title="Biggest 7d Losers"
									map={(asset) => ({
										...asset,
										rate: graph.getNode(asset.id)?.data.history.at(-1)?.underlying?.ratio?.rate7d
									})}
									filter={(asset) => asset.rate != undefined && asset.rate < 0}
									compare={(a, b) => a.rate - b.rate}
									size={3}
									select={(asset) => formatPercentage(asset.rate)}
								/>
								<AssetList
									{data}
									headerIcon={TrendingUp}
									title="Biggest 30d Gainers"
									map={(asset) => ({
										...asset,
										rate: graph.getNode(asset.id)?.data.history.at(-1)?.underlying?.ratio?.rate30d
									})}
									filter={(asset) => asset.rate != undefined && asset.rate > 0}
									compare={(a, b) => b.rate - a.rate}
									size={3}
									select={(asset) => formatPercentage(asset.rate)}
								/>
								<AssetList
									{data}
									headerIcon={TrendingDown}
									title="Biggest 30d Losers"
									map={(asset) => ({
										...asset,
										rate: graph.getNode(asset.id)?.data.history.at(-1)?.underlying?.ratio?.rate30d
									})}
									filter={(asset) => asset.rate != undefined && asset.rate < 0}
									compare={(a, b) => a.rate - b.rate}
									size={3}
									select={(asset) => formatPercentage(asset.rate)}
								/>
							</Carousel>
						{/if}
					</Card>
				</div>
			</Glow>
		{/if}
	</div>
</Section>

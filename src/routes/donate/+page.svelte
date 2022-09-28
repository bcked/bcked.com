<script>
	import {
		createClient,
		configureChains,
		defaultChains,
		connect,
		disconnect,
		watchAccount,
		watchNetwork
	} from '@wagmi/core';
	import { publicProvider } from '@wagmi/core/providers/public';
	import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';

	const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
		publicProvider()
	]);

	const client = createClient({
		autoConnect: true,
		connectors: [
			// TODO: Add support for WalletConnect and CoinbaseWallet
			// TODO: Add BSC chain
			// TODO: Add Moonbeam chain
			new MetaMaskConnector({ chains })
		],
		provider,
		webSocketProvider
	});

	console.log(client.data);

	/** @type {import("@wagmi/core").GetAccountResult} */
	let account = {
		address: undefined,
		connector: undefined,
		isConnected: false,
		isConnecting: false,
		isDisconnected: true,
		isReconnecting: false,
		status: 'disconnected'
	};
	$: watchAccount((data) => (account = data));

	$: console.log(account);

	/** @type {import("@wagmi/core").Chain | undefined} */
	let chain;
	/** @type {import("@wagmi/core").Chain[]} */
	let availableChains = [];
	$: watchNetwork((data) => ({ chain, chains: availableChains } = data));

	$: console.log(chain, availableChains);
</script>

<div class="py-10">
	<header>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight text-gray-900">Donate</h1>
		</div>
	</header>
	<main>
		<div
			class="mt-6 prose prose-pink prose-lg text-gray-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
		>
			<!-- 
				Feature 1: Seamless donation
				Option to directly choose donation amount via buttons or text field.
				On pressing a button "donate" it will try to connect and directly make the tx in the background.
			-->
			<!-- 
				Feature 2: Provider detection
				Try to automatically detect which wallet provider the user has and choose that without asking to choose.
			-->
			<!-- 
				Currency option?
			-->
			<!-- 
				Warn on unsupported chain
			-->
			<!-- 
				How to handle if no provider is installed / available?
			-->
			{#if account.isConnected}
				<div>Connected account: {account.address}</div>
				{#if chain}
					<div>Connected chain: {chain.name}</div>
				{/if}
				<button
					class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-neon-gray-dark text-gray-50  hover:bg-neon-yellow hover:text-gray-900"
					on:click={async () => await disconnect()}>Disconnect</button
				>
			{:else}
				<button
					class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-neon-gray-dark text-gray-50  hover:bg-neon-yellow hover:text-gray-900"
					on:click={async () => await connect({ connector: client.connectors[0] })}
					>Connect Wallet</button
				>
			{/if}
		</div>
	</main>
</div>

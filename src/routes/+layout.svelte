<script lang="ts">
	import '../styles/global.scss';
	import Navbar from '@components/ui/Navbar.svelte';
	import { initializeStores, AppShell } from '@skeletonlabs/skeleton';

	initializeStores();

	let title: string = 'Home';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<slot />
</AppShell>

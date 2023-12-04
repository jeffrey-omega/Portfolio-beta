<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	padding="p-1"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-2">
			<img class="w-8 h-8" src="/omega.svg" alt="Logo" />
			<!--<span class="text-xl font-bold">OMEGA</span>-->
		</div>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<LightSwitch track="bg-red-800" />
	</svelte:fragment>
</AppBar>

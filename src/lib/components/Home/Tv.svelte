<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	onMount(async () => {});

	onDestroy(async () => {});
</script>

<div class="tv">
	<div class="tv__front face" />
	<div class="tv__back face" />
	<div id="video" class="tv__right face">
		<img src="/videoplayback.webp" alt="videoplayback" />
	</div>
	<div class="tv__left face" />
	<div class="tv__top face" />
	<div class="tv__bottom face" />
</div>

<style lang="scss">
	img {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden; /* Optional: To hide any content that overflows the parent */
		object-fit: cover; /* This property scales the video to cover the entire container, cropping if necessary */
		background-repeat: no-repeat;
		background-position: bottom;
		background-color: black;
	}
</style>

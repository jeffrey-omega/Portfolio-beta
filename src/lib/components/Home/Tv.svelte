<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	onMount(async () => {});

	onDestroy(async () => {});
</script>

<div class="tv">
	<div class="tv__front face" />
	<div class="tv__back face" />
	<div id="video" class="tv__right face">
		<video autoplay loop muted>
			<source src="videoplayback.webm" type="video/webm" />
			<source src="videoplayback.mp4" type="video/mp4" />
		</video>
	</div>
	<div class="tv__left face" />
	<div class="tv__top face" />
	<div class="tv__bottom face" />
</div>

<style lang="scss">
	video {
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

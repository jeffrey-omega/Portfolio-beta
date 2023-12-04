<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	//const posterL: HTMLElement | null = document.querySelector('.poster-l');
	//const posterR: HTMLElement | null = document.querySelector('.poster-r');
	//const posterLFront: HTMLElement | null = document.querySelector('.poster-l__front');
	//const posterRFront: HTMLElement | null = document.querySelector('.poster-r__front');

	let posters = [
		{
			alt: 'Halo 3',
			src: '/posters/halo3.jpg'
		},
		{
			alt: 'Stardew Valley',
			src: '/posters/stardewvalley.jpg'
		},
		{
			alt: 'Diablo 3',
			src: '/posters/diablo3.jpg'
		},
		{
			alt: 'Diablo 4',
			src: '/posters/diablo4.jpg'
		}
	];

	let currentIndexL = 0;
	let currentIndexR = 0;

	/**
	 * TODO: Add a way to change the poster image
	 */
	onMount(async () => {
		/*
		const posterLimage: HTMLImageElement | null = document.querySelector('.poster-l__front img');
		const posterRimage: HTMLImageElement | null = document.querySelector('.poster-r__front img');

		function getRandomIndex(indexL: number, indexR: number) {
			let newIndex;
			do {
				newIndex = Math.floor(Math.random() * posters.length);
			} while (newIndex === indexL || newIndex === indexR);
			return newIndex;
		}

		// Poster 1
		posterLimage?.addEventListener('click', () => {
			currentIndexL = getRandomIndex(currentIndexL, currentIndexR);
			posterLimage.src = posters[currentIndexL].src;
		});

		// Poster 2
		posterRimage?.addEventListener('click', () => {
			currentIndexR = getRandomIndex(currentIndexR, currentIndexL);
			posterRimage.src = posters[currentIndexR].src;
		});
		*/
	});

	onDestroy(async () => {});
</script>

<div class="poster-l">
	<div class="poster-l__front face">
		<img src="/posters/halo3.jpg" alt="poster" />
	</div>
	<div class="poster-l__back face" />
	<div class="poster-l__right face" />
	<div class="poster-l__left face" />
	<div class="poster-l__top face" />
	<div class="poster-l__bottom face" />
</div>
<div class="poster-r">
	<div class="poster-r__front face">
		<img src="/posters/stardewvalley.jpg" alt="poster" />
	</div>
	<div class="poster-r__back face" />
	<div class="poster-r__right face" />
	<div class="poster-r__left face" />
	<div class="poster-r__top face" />
	<div class="poster-r__bottom face" />
</div>

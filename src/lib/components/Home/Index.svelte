<script lang="ts">
	import { onMount } from 'svelte';

	import Tv from './Tv.svelte';
	import Boxes from './Boxes.svelte';
	import Books from './Books.svelte';
	import Photos from './Photos.svelte';
	import Posters from './Posters.svelte';
	import Speakers from './Speakers.svelte';
	import Door from './Door.svelte';
	import BoxShelf from './BoxShelf.svelte';
	import PhotoShelf from './PhotoShelf.svelte';
	import BookShelf from './BookShelf.svelte';
	import Sofa from './Sofa.svelte';
	import Table from './Table.svelte';
	import Tablet from './Tablet.svelte';
	import Floor from './Floor.svelte';
	import TvWall from './TVWall.svelte';
	//import gsap from 'gsap';

	onMount(async () => {
		const h: HTMLElement | null = document.querySelector('#h');
		const main: HTMLElement | null = document.querySelector('main');

		const base = (e: PointerEvent): void => {
			if (h && main) {
				const x: number = e.pageX / window.innerWidth - 0.5;
				const y: number = e.pageY / window.innerHeight - 0.5;
				if (h.style) {
					h.style.transform = `
						perspective(90vw)
						rotateX(${y * 4 + 75}deg)
						rotateZ(${-x * 12 + 45}deg)
						translateZ(-9vw)
					`;
				}
			}
		};

		if (main) {
			main.addEventListener('pointermove', base);
		}
	});

	//onDestroy(async () => {});
</script>

<main>
	<!--
	<div class="illustration">
		<div class="i-large" />
		<div class="i-medium" />
		<div class="i-small" />
	-->
	<div class="house" id="h">
		<div class="h-lights">
			<div class="h-light" />
			<div class="h-light" />
			<div class="h-light" />
			<div class="h-light" />
			<div class="h-light" />
			<div class="h-light" />
		</div>
		<div class="h-shadow" />
		<Floor />
		<div class="alb">
			<div class="alb__front face" />
			<div class="alb__back face" />
			<div class="alb__right face" />
			<div class="alb__left face" />
			<div class="alb__top face" />
			<div class="alb__bottom face" />
		</div>
		<div class="arb">
			<div class="arb__front face" />
			<div class="arb__back face" />
			<div class="arb__right face" />
			<div class="arb__left face" />
			<div class="arb__top face" />
			<div class="arb__bottom face" />
		</div>
		<div class="blt">
			<div class="blt__front face" />
			<div class="blt__back face" />
			<div class="blt__right face" />
			<div class="blt__left face" />
			<div class="blt__top face" />
			<div class="blt__bottom face" />
		</div>
		<div class="blt2">
			<div class="blt2__front face" />
			<div class="blt2__back face" />
			<div class="blt2__right face" />
			<div class="blt2__left face" />
			<div class="blt2__top face" />
			<div class="blt2__bottom face" />
		</div>
		<div class="blb">
			<div class="blb__front face" />
			<div class="blb__back face" />
			<div class="blb__right face" />
			<div class="blb__left face" />
			<div class="blb__top face" />
			<div class="blb__bottom face" />
		</div>
		<div class="blb2">
			<div class="blb2__front face" />
			<div class="blb2__back face" />
			<div class="blb2__right face" />
			<div class="blb2__left face" />
			<div class="blb2__top face" />
			<div class="blb2__bottom face" />
		</div>
		<Door />
		<Posters />
		<BookShelf />
		<Books />
		<Photos />
		<Boxes />
		<Tv />
		<BoxShelf />
		<PhotoShelf />
		<Speakers />
		<TvWall />
		<Sofa />
		<Table />
		<Tablet />
	</div>
</main>

<style lang="scss">
	/**
	.house {
		width: 36vw;
		height: 28vw;
		transform: perspective(90vw) rotateX(50deg) rotateZ(115deg) translateZ(-9vw);
	}

	.alb__top,
	.alb__front,
	.alb {
		width: 36vw;
	}

	:global(.floor__top) {
		width: 36vw;
	}

	:global(.blb__front) {
		background-color: black;
		width: 34vw;
	}

	:global(.blb__back) {
		background-color: red;
		transform: rotateX(-90deg) rotateY(180deg) translateX(-34vw) translateY(-20vw);
	}
	*/
</style>

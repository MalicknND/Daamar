<script lang="ts">
	import { onMount } from 'svelte';
	let cars: any[] = [];

	onMount(async () => {
		const res = await fetch('https://directus.ckx.app/items/Cars?fields=*,image.*');
		const data = await res.json();
		cars = data.data;
		console.log(cars[0].image);
	});
</script>

<section class="py-20">
	<h1 class="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Nos partenaires automobiles</h1>
	<div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
		{#each cars as car}
			<article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
				<a href="/">
					<div class="relative flex items-end overflow-hidden rounded-xl">
						{#if car.image}
							<img src={`https://directus.ckx.app/assets/${car.image.id}`} alt={car.marque} />
						{:else}
							<img
								src="https://cdn.pixabay.com/photo/2023/02/04/20/32/man-7768120_1280.jpg"
								alt="Default placeholder"
							/>
						{/if}

						<div
							class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-yellow-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<span class="ml-1 text-sm text-slate-400">4.9</span>
						</div>
					</div>

					<div class="mt-1 p-2">
						<h2 class="text-slate-700">{car.marque}</h2>
						<p class="mt-1 text-sm text-slate-400">{car.pays_origine}</p>

						<div class="mt-3 flex items-end justify-between">
							<p>
								<span class="text-lg font-bold text-[var(--color-primary)]"
									>{car.annee_creation}</span
								>
							</p>

							<div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 text-[var(--color-bg)] group-hover:text-[var(--color-bg)]"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
								</svg>
							</div>
						</div>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>

<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/nav.svelte';
	import { page } from '$app/stores';

	const hideNavbarPaths = ['/auth/login', '/auth/register'];
	const currentPath = $derived($page.url.pathname);

	let { children } = $props();
</script>
{#if !hideNavbarPaths.includes(currentPath)}
  <Navbar />
{/if}
{@render children()}

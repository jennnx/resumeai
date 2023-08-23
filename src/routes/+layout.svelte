<script>
	import '../globals.css';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
	<header class="navbar">
		<Navbar />
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<Footer />
	</footer>
</div>

<style>
	.container {
		max-width: 980px;
		margin: 0 auto;
		padding: 20px;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex-grow: 1;
	}

	.navbar {
		margin-bottom: var(--spacing-2xl);
	}
</style>

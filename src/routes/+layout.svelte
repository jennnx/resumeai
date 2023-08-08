<script lang="ts">
	import '../app.scss';
	import '@picocss/pico';
</script>

<header class="container">
	<nav>
		<ul class="title">ResumeAI</ul>
		<ul>
			<li><a href="/">Upload</a></li>
			<li><a href="/roles">Roles</a></li>
		</ul>
	</nav>
</header>
<div class="container">
	<main>
		<slot />
	</main>
</div>

<style>
	.title {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>

<script lang="ts">
	import Sparkle from '$lib/assets/sparkle.png';
</script>

<div class="base">
	<div class="hero">
		<img src={Sparkle} alt="Sparkling star" />
		<h1>Screen resumes on <span class="highlight">auto-pilot</span> with GPT-4</h1>
		<p class="description">
			Let your AI interns work around the clock. Save time in finding the perfect match for your job
			postings.
		</p>
		<a class="get-started" href="/jobs/new">Get started</a>
	</div>
	<div class="logo-section">
		<h2>Powering the World's most Innovative Companies</h2>
		<div class="logos">
			<div class="logo-item">
				<i class="fab fa-apple fa-3x" />
			</div>
			<div class="logo-item">
				<i class="fab fa-google fa-3x" />
			</div>
			<div class="logo-item">
				<i class="fab fa-amazon fa-3x" />
			</div>
			<div class="logo-item">
				<i class="fab fa-facebook fa-3x" />
			</div>
			<div class="logo-item">
				<i class="fab fa-microsoft fa-3x" />
			</div>
		</div>
	</div>
</div>

<style>
	.base {
		text-align: center;
	}

	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		max-width: 60%;
		line-height: 1.35;
	}

	.description {
		color: var(--text-light);
		line-height: 1.5;
		margin-top: 0;
	}

	.highlight {
		background: linear-gradient(
			90deg,
			var(--primary),
			var(--primary-gradient-end)
		); /* Blue/white gradient background */
		color: white; /* White text */
		padding: 0.1rem 0.3rem;
	}

	.get-started {
		margin-top: var(--spacing);
		background: var(--primary);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-size: var(--text-lg);
		font-weight: bold;
	}

	.get-started:hover {
		background: var(--primary-hover);
	}

	.logo-section {
		margin-top: calc(2 * var(--spacing-2xl));
	}

	.logo-section h2 {
		color: var(--text-light);
		font-size: var(--text-lg);
	}

	.logos {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--spacing-2xl);
		margin-top: var(--spacing-xl);
		padding: var(--spacing-2xl);
		background-color: #f4f4f4;
		border-radius: 10px;
	}

	.logo-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.logo-item i {
		color: var(--text-light);
	}
</style>

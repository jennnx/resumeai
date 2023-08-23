<nav>
	<div class="logo"><a class="title" href="/">ResumeAI</a></div>
	<ul>
		<li><a href="/jobs">Jobs</a></li>
		<li><a class="button" href="/upload">Upload</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
	}

	.title {
		font-size: var(--text-lg);
		font-weight: 700;
	}

	.title:hover {
		text-decoration: none;
	}

	ul {
		display: flex;
		list-style: none;
		column-gap: 2rem;
	}

	.button {
		padding: 0.5rem 1rem;
		border-radius: 3rem;
		background-color: var(--secondary);
		color: white;
		text-decoration: none;
	}

	.button:hover {
		background-color: var(--secondary-hover);
	}
</style>

<script lang="ts">
	import '../app.scss';
	import '@picocss/pico';
</script>

<!-- Navbar Component -->
<div class="app">
	<header class="container">
		<nav>
			<div class="logo"><a class="title" href="/">ResumeAI</a></div>
			<ul>
				<li><a class="navLink" href="/upload">Upload</a></li>
				<li><a class="navLink" href="/jobs">Jobs</a></li>
			</ul>
		</nav>
	</header>
	<!-- Main Body -->
	<div class="container">
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	.logo {
		display: flex;
		align-items: center;
	}

	.title {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 700;
		background: linear-gradient(
			132deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(68, 0, 255, 1) 0%,
			rgba(172, 26, 255, 0.9) 98%
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.navLink {
		color: var(--secondary);

		&:hover {
			color: var(--primary);
		}
	}

	.app {
		--primary: rgba(149, 30, 217, 1);
		--primary-light: rgb(160, 75, 209);
		--primary-hover: rgba(155, 59, 211, 1);
		--primary-focus: rgba(216, 27, 96, 0.125);
		--primary-inverse: #fff;
		--danger: #e22424;
		--danger-hover: #ff3e3e;
	}
</style>

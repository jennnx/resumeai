<script lang="ts">
	import type { Job } from '$lib/types';

	export let job: Job;

	let showDetails = false;
</script>

<div class="card">
	<div class="title-container">
		<div>
			<h1 class="job-title">{job.title}</h1>
			<p><em>{job.location}</em></p>
		</div>
	</div>
	<details class="accordion">
		<summary
			class="toggle-button"
			aria-expanded={showDetails}
			on:click={() => (showDetails = !showDetails)}
			on:keydown={(e) => {
				if (e.key === 'Enter') {
					showDetails = !showDetails;
				}
			}}>{showDetails ? 'Hide' : 'Show'} Details</summary
		>
		<div class="details-content">
			<div>
				<strong>Job Description</strong>
				<br />
				{job.description}
			</div>
			<div class="grid">
				<div>
					<strong>Qualifications (Required)</strong>
					<p>{job.requiredqualifications}</p>
				</div>
				<div>
					<strong>Qualifications (Preferred)</strong>
					<p>{job.optionalqualifications}</p>
				</div>
			</div>
			<div>
				<strong>Responsibilities</strong>
				<p>{job.responsibilities}</p>
			</div>
		</div>
	</details>
</div>

<!-- svelte-ignore css-unused-selector -->
<style>
	.card {
		padding: var(--spacing-lg);
		background-color: var(--contrast);
		margin-bottom: var(--spacing);
		border-radius: 8px;
	}

	.title-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.job-title {
		margin-bottom: 0;
	}

	.danger {
		color: var(--danger);
		border-color: var(--danger);

		&:hover {
			border-color: var(--danger-hover);
			color: var(--danger-hover);
		}
	}

	.accordion {
		text-align: end;
		border-bottom: none;
		padding-bottom: 0;
	}

	.toggle-button {
		display: inline-block;
		position: relative;
		text-align: center;
		padding: 0.75rem;
		border-radius: 8px;
		border: 1px solid var(--primary);
	}

	.toggle-button:hover {
		cursor: pointer;
		color: white;
		background-color: var(--primary);
	}

	.details-content {
		padding-top: var(--spacing);
		display: flex;
		flex-direction: column;
		text-align: left;
		row-gap: var(--spacing);
	}
</style>

<script lang="ts">
	import type { Job } from '$lib/types';

	export let job: Job;

	let showDetails = false;
</script>

<article>
	<div class="title-container">
		<div>
			<h1 class="job-title">{job.title}</h1>
			<p><em>{job.location}</em></p>
		</div>
		<div class="button-row">
			<button class="outline">Edit</button>
			<button class="danger outline">Delete</button>
		</div>
	</div>
	<details class="accordion">
		<summary
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
			<div>
				<strong>Additional Notes</strong>
				<p>{job.additionalnotes ?? 'None'}</p>
			</div>
		</div>
	</details>
</article>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.title-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.job-title {
		margin-bottom: 0;
	}

	.button-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;

		& > button {
			padding: 0.5rem 1rem;
		}
	}

	.danger {
		color: var(--danger);
		border-color: var(--danger);

		&:hover {
			border-color: var(--danger-hover);
			color: var(--danger-hover);
		}
	}

	article {
		padding-bottom: 4px;
	}

	.accordion {
		text-align: end;
		border-bottom: none;
		padding-bottom: 0;
	}

	summary {
		display: inline-block;
		position: relative;
		text-align: center;
		padding: 0.75rem;
		border-radius: 8px;

		::after {
			position: absolute;
			display: inline-block;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
		}

		&:hover {
			background-color: #f0f0f0;
		}
	}

	.details-content {
		padding-top: var(--spacing);
		display: flex;
		flex-direction: column;
		text-align: left;
		row-gap: var(--spacing);
	}
</style>

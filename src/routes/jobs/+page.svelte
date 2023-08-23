<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;
</script>

<div class="header-row">
	<h1>All Job Postings</h1>
	<div>
		<a href="/jobs/new" class="new-job-button">New Job</a>
	</div>
</div>
<table>
	<thead>
		<tr>
			<th scope="col">ID</th>
			<th scope="col">Job Title</th>
			<th scope="col">Location</th>
			<th scope="col">Applications</th>
		</tr>
	</thead>
	<tbody>
		{#each data?.jobs as job (job?.id)}
			<tr class="entry" on:click={() => goto(`/jobs/${job.id}`)}>
				<td>{job?.id}</td>
				<td>{job?.title}</td>
				<td>{job?.location}</td>
				<td>{job?.applicationcount}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.new-job-button {
		padding: 0.5rem 1rem;
		background-color: var(--primary);
		color: white;
		text-decoration: none;
	}

	.new-job-button:hover {
		background-color: var(--primary-hover);
	}

	.header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
		text-align: left;
	}

	thead {
		background-color: var(--secondary-hover);
	}

	th {
		padding: var(--spacing-lg);
		font-weight: bold;
	}

	tr {
		padding: var(--spacing-lg);
	}

	tr:nth-child(even) {
		background-color: #f9f9f9; /* Light background for alternating rows */
	}

	.entry {
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.entry:hover {
		background-color: var(--contrast);
	}

	td {
		padding: var(--spacing-lg);
		border-bottom: 1px solid #e0e0e0; /* Subtle lines between rows */
	}
</style>

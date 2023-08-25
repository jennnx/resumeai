<script lang="ts">
	import type { PageData } from './$types';
	import JobCard from '$lib/components/JobCard.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
</script>

<JobCard job={data.job} />
<table>
	<thead>
		<tr>
			<th>Applicant</th>
			<th>Status</th>
			<th>AI Score</th>
		</tr>
	</thead>
	<tbody>
		{#each data.applications as applicant}
			<tr class="entry" on:click={() => goto(`/applications/${applicant.id}`)}>
				<td>{applicant.name}</td>
				<td>{applicant.status?.toUpperCase()}</td>
				<td>{applicant.score ?? '-'}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
		text-align: left;
		margin-top: var(--spacing-2xl);
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

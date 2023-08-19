<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;
</script>

<div class="header-row">
	<h1>All Job Postings</h1>
	<div>
		<a href="/jobs/new" role="button" class="outline">New Job</a>
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

<style style="scss">
	table {
		width: 100%;
		border-collapse: collapse;
	}

	.entry {
		cursor: pointer;
		padding: 1rem;

		&:hover {
			background-color: var(--secondary-hover);
		}
	}

	td {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}
	.header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
</style>

<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;
</script>

<h1>All Job Postings</h1>
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
				<td>4</td>
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
			background-color: #f5f5f5;
		}
	}

	td {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}
</style>

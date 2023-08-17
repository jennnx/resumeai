<script lang="ts">
	import type { PageData } from './$types';
	import JobCard from '$lib/components/JobCard.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	let showDetails = false;
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
			<tr class="data-row" on:click={() => goto(`/applications/${applicant.id}`)}>
				<td>{applicant.name}</td>
				<td>{applicant.status?.toUpperCase()}</td>
				<td class="score">{applicant.score ?? '-'}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	.data-row:hover {
		cursor: pointer;
		background-color: var(--secondary-hover);
	}

	td {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.score {
		::after {
			content: '→';
			position: absolute;
			display: inline-block;
			right: 0;
		}
	}
</style>

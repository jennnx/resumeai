<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	let submitting: boolean = false;
</script>

<h1>Process a new resume</h1>
<form
	method="POST"
	use:enhance={() => {
		submitting = true;

		return async ({ result }) => {
			submitting = false;
		};
	}}
>
	<!-- Grid -->
	<label for="name">
		Applicant Name
		<input type="text" id="name" name="name" placeholder="Name" required value={form?.name ?? ''} />
	</label>

	<!-- Select -->
	<label for="job">Job Posting</label>
	<select id="job" name="job" required>
		<option value="" disabled selected={!form?.job}>Select a job posting</option>
		{#each data.jobs as job}
			<option value={job.id} selected={form?.job === job.id}
				>{`[${job.id}] ${job.title} (${job.location})`}</option
			>
		{/each}
	</select>

	<label for="resume">
		Resume <small>(Accepted formats: .pdf)</small>
		<input type="file" id="resume" name="resume" accept=".pdf" />
	</label>

	<!-- Button -->
	<button type="submit" aria-busy={submitting}>{submitting ? 'Processing...' : 'Submit'}</button>
</form>
{#if form?.message}
	<small class="error">{form.message}</small>
	{console.log(form)}
{/if}

<style>
	.error {
		color: #d65d5d;
	}
	small {
		font-size: 0.75rem;
	}
</style>

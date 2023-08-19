<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Checkmark from '$lib/assets/Checkmark.svelte';

	export let data: PageData;
	export let form: ActionData;

	let submitting: boolean = false;
</script>

<h1 class:hidden={submitting || form?.success}>Process a new resume</h1>

<!-- Loading state to show user while the AI processes the resume -->
{#if submitting && !form?.success}
	<div class="loading-section">
		<h2>The AI minions are processing your data...</h2>
		<p>Hang tight. This can take up to 2 minutes.</p>
	</div>
{/if}
{#if form?.success}
	<div class="success-section">
		<Checkmark />
		<h2>Your AI analysis is ready.</h2>
		<a href={`/applications/${form?.applicationId}`}>View Results</a>
	</div>
{/if}

<form
	method="POST"
	use:enhance={() => {
		submitting = true;

		return async ({ result, update }) => {
			submitting = false;
			update();
		};
	}}
>
	{#if !submitting && !form?.success}
		<div transition:slide={{ easing: cubicOut, duration: 1000 }}>
			<label for="name">
				Applicant Name
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Name"
					required
					value={form?.name ?? ''}
				/>
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
		</div>
	{/if}
	<!-- Hide button when successfully processed app -->
	{#if !form?.success}
		<button class:submitting class="submit-button" type="submit" aria-busy={submitting}
			>{submitting ? 'Processing...' : 'Submit'}</button
		>
	{/if}
</form>
{#if form?.message}
	<small class="error">{form.message}</small>
	{console.log(form)}
{/if}

<style lang="scss">
	.error {
		color: #d65d5d;
	}
	small {
		font-size: 0.75rem;
	}
	.hidden {
		display: none;
	}
	.loading-section {
		text-align: center;

		h2 {
			font-size: 1.5rem;
			margin-bottom: 0.5rem;
		}
	}
	.submit-button {
		transition: background-color 0.2s ease-in-out;
		transition: width 1s ease-in-out;
		margin: 0 auto;
	}
	@keyframes shimmer {
		0% {
			background-position: -200% 0;
		}
		100% {
			background-position: 200% 0;
		}
	}
	.submitting {
		width: 50%;
		/* Adjust the color to match your button's background color */
		background: linear-gradient(
			90deg,
			var(--primary) 25%,
			var(--primary-light) 50%,
			var(--primary) 75%
		);
		background-size: 200% 100%;
		animation: shimmer 3s infinite linear;
		position: relative;
	}

	.success-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		h2 {
			font-size: 1.5rem;
			margin: 0.5rem 0;
		}
	}
</style>

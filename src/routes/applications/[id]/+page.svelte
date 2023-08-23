<script lang="ts">
	import type { PageData } from './$types';
	import PlusIcon from '$lib/assets/plus.png';
	import MinusIcon from '$lib/assets/minus.png';

	export let data: PageData;

	const getEvaluationString = (score?: number) => {
		if (score === 5) return 'Top Choice';
		if (score === 4) return 'Strong Candidate';
		if (score === 3) return 'Meets Requirements';
		if (score === 2) return 'Partial Match';
		if (score === 1) return 'Unqualified';
		return 'No Evaluation';
	};

	const getDetailString = (score?: number) => {
		if (score === 3) return 'Strong';
		if (score === 2) return 'Satisfactory';
		if (score === 1) return 'Needs Improvement';
	};
</script>

<div class="header">
	<h1>{data?.application?.name}</h1>
	<div class="jobinfo">
		<h3>{data?.application?.title}</h3>
		<p>{data?.application?.location}</p>
		{#if data?.application?.status === 'pending'}
			<div class="button-row">
				<form method="POST" action="?/accept"><button class="accept">Accept</button></form>
				<form method="POST" action="?/reject"><button class="reject">Reject</button></form>
			</div>
		{:else}
			<p>[Application {data?.application?.status}]</p>
		{/if}
	</div>
</div>
<div class="score">
	<h3>Evaluation</h3>
	<p>{getEvaluationString(data.application.score)}</p>
	<progress value={data.application.score ?? 0} max="5" />
</div>
<h3>Summary</h3>
<p class="summary">{data.application.evaluation?.summary}</p>
<hr />
<div>
	{#if data.application.evaluation}
		{#each data.application.evaluation.details as detail}
			<div class="detail">
				<h4 class="category-name">{detail.category}</h4>
				<p class="category-score">{getDetailString(detail.score)}</p>
				<div class="grid">
					<ul>
						{#each detail.notableAccomplishments as note}
							<li>
								<img class="icon" src={PlusIcon} width={24} height={24} alt="A plus icon" />{note}
							</li>
						{/each}
					</ul>
					<ul>
						{#each detail.notableShortcomings as note}
							<li>
								<img class="icon" src={MinusIcon} width={24} height={24} alt="A minus icon" />{note}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<hr />
		{/each}
	{/if}
</div>

<style>
	.button-row {
		display: flex;
		gap: 0.5rem;
		margin-top: var(--spacing);
	}

	button {
		padding: 0.5rem 1rem;
		text-decoration: none;
		border-radius: 5px;
		background-color: transparent;
		width: 100%;
		font-size: var(--text-lg);
		outline: none;
		cursor: pointer;
	}

	.accept {
		color: var(--primary);
		border: 1px solid var(--primary);
	}

	.accept:hover {
		background-color: var(--primary);
		color: white;
	}

	.reject {
		color: var(--danger);
		border: 1px solid var(--danger);
	}

	.reject:hover {
		background-color: var(--danger);
		color: white;
	}

	.header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.jobinfo {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		row-gap: var(--spacing-sm);
	}

	h1,
	.jobinfo p,
	.jobinfo h3 {
		margin: 0;
	}

	.score {
		text-align: center;
		max-width: 75%;
		margin: var(--spacing-2xl) auto;
		border: 1px solid var(--primary);
		border-radius: 15px;
		padding: var(--spacing-2xl);
	}

	.score h3 {
		font-size: var(--text-lg);
	}

	.score p {
		font-size: var(--text-xl);
		margin: var(--spacing-lg) 0;
	}

	progress {
		width: 100%;
		height: 10px;
		border: none;
		border-radius: 5px;
		appearance: none;
		background-color: #f0f0f0;
	}

	progress::-webkit-progress-bar {
		background-color: #f0f0f0;
		border-radius: 5px;
	}

	progress::-webkit-progress-value {
		background-color: #3498db;
		border-radius: 5px;
	}

	.summary {
		margin-top: var(--spacing-xl);
		line-height: 1.5;
	}

	hr {
		border: none;
		border-top: 1px solid var(--contrast);
		margin: var(--spacing-xl) 0;
	}

	.category-name {
		text-transform: capitalize;
		margin-bottom: var(--spacing-sm);
	}

	.category-score {
		margin-top: 0;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-2xl);
	}

	ul {
		padding-left: 0;
	}

	ul li {
		position: relative;
		list-style-type: none;
		padding-left: var(--spacing-lg);
		margin-bottom: var(--spacing);
		color: var(--text-light);
	}

	.icon {
		position: absolute;
		left: -0.5rem;
		top: 50%;
		transform: translateY(-50%);
	}
</style>

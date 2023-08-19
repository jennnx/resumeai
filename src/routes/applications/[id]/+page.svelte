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
				<form method="POST" action="?/accept"><button class="outline">Accept</button></form>
				<form method="POST" action="?/reject"><button class="outline reject">Reject</button></form>
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
				<p>{getDetailString(detail.score)}</p>
				<div class="grid">
					<ul class="plus">
						{#each detail.notableAccomplishments as note}
							<li>
								<img class="icon" src={PlusIcon} width={24} height={24} alt="A plus icon" />{note}
							</li>
						{/each}
					</ul>
					<ul class="minus">
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

<style lang="scss">
	.button-row {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;

		button {
			width: 100%;
		}

		.reject {
			color: var(--danger);
			border-color: var(--danger);

			&:hover {
				background-color: var(--danger);
				color: white;
			}
		}
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
	.jobinfo {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		h3 {
			margin: 0;
		}

		p {
			margin: 0;
		}
	}
	.score {
		text-align: center;
		max-width: 50%;
		margin: 3rem auto;
		border: 1px solid #8f8f8f;
		border-radius: 15px;
		padding: 2rem;
		h3 {
			margin: 0;
		}
		p {
			font-size: 1.25rem;
		}
	}
	.summary {
		margin-top: 2rem;
	}
	.category-name {
		text-transform: capitalize;
		margin-top: 1rem;
		margin-bottom: 0.1rem;
	}
	ul {
		padding-left: 0;
		font-size: 0.9rem;

		li {
			position: relative;
			list-style-type: none;
			padding-left: 20px;
			margin-bottom: 0.5rem;
		}
	}
	.icon {
		position: absolute;
		left: -0.5rem;
		top: 50%;
		transform: translateY(-50%);
	}
</style>

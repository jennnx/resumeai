import { OPENAI_API_KEY } from '$env/static/private';
import { getMessages } from './prompt';
import { db } from '../db';
import { format } from '$lib/utils/job';
import { responseFormat, responseFunctionName } from './prompt';
import { isValidEvaluation, type Job } from '$lib/types';
import OpenAI from 'openai';
import { error } from '@sveltejs/kit';

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const config: OpenAI.Chat.CompletionCreateParamsNonStreaming = {
	messages: [],
	model: 'gpt-4-0613', // Use the variant with function calling,
	functions: [responseFormat],
	function_call: { name: responseFunctionName },
	temperature: 0.1
};

export const evaluate = async (jobId: number, resume: string) => {
	const jobPosting = (await db(`SELECT * FROM jobs WHERE id = $1`, [jobId])) as Job[];
	const job = format(jobPosting?.[0]);

	config.messages = getMessages(job, resume);
	config.functions;
	const completion = await openai.chat.completions.create(config);

	const evaluation = completion.choices?.[0]?.message?.function_call?.arguments;
	if (!evaluation) {
		console.error(`Did not receive a function call from OpenAI's response. Instead, got: `);
		console.error(completion);
		throw error(
			500,
			'Sorry, something went wrong generating the evaluation. Please refresh the page and try again.'
		);
	}
	const evlauationJSON = JSON.parse(evaluation);

	if (!isValidEvaluation(evlauationJSON)) {
		console.error(`OpenAI's evaluation was not in a valid shape. Instead, got: `);
		console.error(evlauationJSON);
		throw error(
			500,
			'Sorry, something went wrong generating the evaluation. Please refresh the page and try again.'
		);
	}

	return evlauationJSON;
};

import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import type { Job } from '$lib/types';
import { fail } from '@sveltejs/kit';
import { extractText } from '$lib/utils/pdf';
import { evaluate } from '$lib/server/llm/openai';

export const load: PageServerLoad = async () => {
	const jobs = (await db(`SELECT id, title, location FROM jobs ORDER BY title ASC;`)) as Job[];

	return { jobs };
};

import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const job = Number(formData.get('job')) as number;
		const resume = formData.get('resume') as File;
		const resumeBuffer = Buffer.from(await resume.arrayBuffer());
		const pdfText = await extractText(resumeBuffer);

		const evaluation = await evaluate(job, pdfText);
		const score = evaluation.finalScore;
		let id: number;
		// Insert into DB
		try {
			const result = await db(
				`INSERT INTO applications (jobId, name, resume, score, evaluation) VALUES ($1, $2, $3, $4, $5) RETURNING id;`,
				[job, name, pdfText, score, evaluation]
			);
			id = result[0]?.id;
		} catch (e) {
			console.error('Error while inserting application into DB:');
			console.error(e);
			return fail(500, {
				message: 'Sorry, something went wrong. Please try again.',
				name,
				job
			});
		}
		return {
			success: true,
			applicationId: id
		};
	}
};

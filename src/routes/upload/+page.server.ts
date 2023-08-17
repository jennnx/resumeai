import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import type { Job } from '$lib/types';
import { fail } from '@sveltejs/kit';
import { process } from '$lib/server/llm/process';

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

		process(job, resumeBuffer);

		// // Insert into DB
		// try {
		// 	await db(`INSERT INTO applications (jobId, name, resume) VALUES ($1, $2, $3);`, [
		// 		job,
		// 		name,
		// 		resumeBuffer
		// 	]);
		// } catch (e) {
		// 	console.error(e);
		// 	return fail(400, {
		// 		message: 'Sorry, something went wrong. Please try again.',
		// 		name,
		// 		job,
		// 		resume
		// 	});
		// }

		return {
			success: true
		};
	}
};

export const ssr = false;

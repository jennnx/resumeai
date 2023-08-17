import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import type { Application, Job } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	// Retrieve job from DB.
	const job = (await db('SELECT * FROM jobs WHERE id = $1;', [params.id])) as Job[];

	// ...and make sure it exists.
	if (!job || job.length === 0) throw error(404, 'Job posting not found.');

	const applications = (await db(
		'SELECT id, name, score, status FROM applications WHERE jobId = $1;',
		[params.id]
	)) as Pick<Application, 'id' | 'name' | 'score' | 'status'>[];

	return { job: job[0], applications: applications };
};

import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import type { Job } from '$lib/types';

export const load: PageServerLoad = async () => {
	// Select all jobs, as well as the # of applications on each job.
	const jobs = (await db(`
	SELECT j.*, COUNT(a.id) AS applicationcount
	FROM jobs j
	LEFT JOIN applications a ON j.id = a.jobId
	GROUP BY j.id;
	`)) as (Job & { applicationcount: number })[];

	return { jobs };
};

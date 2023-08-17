import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';

export type Job = {
	id: number;
	title: string;
	location: string;
	description: string;
	qualifications: string;
	responsibilities: string;
	additionalNotes?: string;
};

export const load: PageServerLoad = async () => {
	const jobs = (await db(`SELECT * FROM jobs;`)) as Job[];

	return { jobs };
};

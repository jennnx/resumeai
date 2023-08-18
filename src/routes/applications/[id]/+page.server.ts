import { db } from '$lib/server/db';
import { error, json } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Application } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;

	const application = (await db(
		`SELECT a.*, j.title, j.location FROM applications a
		JOIN jobs j ON a.jobId = j.id
		WHERE a.id = $1;`,
		[id]
	)) as (Application & { title: string; location: string })[];

	return { application: application[0] };
};

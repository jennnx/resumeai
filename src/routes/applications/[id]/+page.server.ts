import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';
import type { Application } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;

	// Retrieve application (and some metadata about the job posting) from DB.
	const application = (await db(
		`SELECT a.*, j.title, j.location FROM applications a
		JOIN jobs j ON a.jobId = j.id
		WHERE a.id = $1;`,
		[id]
	)) as (Application & { title: string; location: string })[];

	return { application: application[0] };
};

import type { Actions } from './$types';

export const actions: Actions = {
	accept: async ({ params }) => {
		const id = params.id;
		await db(`UPDATE applications SET status = 'accepted' WHERE id = $1;`, [id]);

		return { success: true };
	},
	reject: async ({ params }) => {
		const id = params.id;
		await db(`UPDATE applications SET status = 'rejected' WHERE id = $1;`, [id]);

		return { success: true };
	}
};

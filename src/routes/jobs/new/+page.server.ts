import type { Actions } from './$types';
import { db } from '$lib/server/db';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const title = formData.get('title');
		const location = formData.get('location');
		const description = formData.get('description');
		const requiredQualifications = formData.get('requiredQualifications');
		const optionalQualifications = formData.get('optionalQualifications');
		const responsibilities = formData.get('responsibilities');

		// Insert into Roles Table.
		await db(
			'INSERT INTO jobs (title, location, description, requiredQualifications, optionalQualifications, responsibilities) VALUES ($1, $2, $3, $4, $5, $6)',
			[
				title,
				location,
				description,
				requiredQualifications,
				optionalQualifications,
				responsibilities
			]
		);

		return { success: true };
	}
};

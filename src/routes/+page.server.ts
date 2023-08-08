import type { Actions } from './$types';
import { db } from '$lib/server/db';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		// Retrieve title, description, qualifications, responsibilities, additionalNotes from formdata
		const title = formData.get('title');
		const description = formData.get('description');
		const qualifications = formData.get('qualifications');
		const responsibilities = formData.get('responsibilities');
		const additionalNotes = formData.get('additionalNotes');

		// Insert into DB.
		// Create Roles Table if it doesn't exist.
		await db(
			`CREATE TABLE IF NOT EXISTS roles (
				id SERIAL PRIMARY KEY,
				title TEXT,
				description TEXT,
				qualifications TEXT,
				responsibilities TEXT,
				additionalNotes TEXT
			  );`
		);

		// Insert into Roles Table.
		await db(
			'INSERT INTO roles (title, description, qualifications, responsibilities, additionalNotes) VALUES ($1, $2, $3, $4, $5);',
			[title, description, qualifications, responsibilities, additionalNotes]
		);

		return { success: true };
	}
};

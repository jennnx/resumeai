import { db } from '$lib/server/db';
import { error, json } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import fs from 'fs';

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;
	const pdf = await db(`SELECT resume FROM applications WHERE id = $1`, [id]);

	if (!pdf || pdf[0]?.resume == null) {
		throw error(404, 'Application resume not found');
	}

	console.log(pdf[0].resume);
	const file = pdf[0].resume as Buffer;
	const filePDF = Buffer.from(file);
	console.log(filePDF);
	fs.writeFileSync('resume.pdf', filePDF);

	return {
		pdf: file
	};
};

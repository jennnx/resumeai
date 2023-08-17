import { PDFExtract } from 'pdf.js-extract';
import type { Job } from '$lib/types';

export const process = async (jobId: number, resumeBuffer: Buffer) => {
	const parser = new PDFExtract();
	const data = await parser.extractBuffer(resumeBuffer, {});

	let text = '';
	for (const page of data.pages) {
		const lines = PDFExtract.utils.pageToLines(page, 2);
		const rows = PDFExtract.utils.extractTextRows(lines);
		text += `(Page ${page.pageInfo.num})\n`;
		text += rows.map((row) => row.join('')).join('\n');
		text += '\n\n';
	}
	console.dir(text, { depth: null });
	return null;
};

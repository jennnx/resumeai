import { PDFExtract } from 'pdf.js-extract';

// Utility function to extract text from a PDF file as a single string.
export const extractText = async (resumeBuffer: Buffer) => {
	const parser = new PDFExtract();
	const data = await parser.extractBuffer(resumeBuffer, {});

	let text = '';
	for (const page of data.pages) {
		// @ts-expect-error The utils method is not documented in .d.ts
		const lines = PDFExtract.utils.pageToLines(page, 2);
		// @ts-expect-error The utils method is not documented in .d.ts
		const rows = PDFExtract.utils.extractTextRows(lines) as string[][];
		text += `(Page ${page.pageInfo.num})\n`;
		text += rows.map((row) => row.join('')).join('\n');
		text += '\n\n';
	}

	return text;
};

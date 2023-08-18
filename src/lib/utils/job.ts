import type { Job } from '$lib/types';

export const format = (job: Job): string => {
	let ret = '';
	ret += `Job Title: ${job.title}\n`;
	ret += `Job Description: ${job.description}\n`;
	ret += `Responsibilities: ${job.responsibilities}\n`;
	ret += `Required Qualifications: ${job.requiredqualifications}\n`;
	ret += `Optional Qualifications: ${job.optionalqualifications}\n`;
	ret += `Additional Notes: ${job.additionalnotes}\n`;

	return ret;
};

export type Application = {
	id: number;
	jobId: number;
	resume: string;
	name: string;
	score?: number;
	status: 'pending' | 'accepted' | 'rejected';
};

export type Job = {
	id: number;
	title: string;
	location: string;
	description: string;
	requiredQualifications: string;
	optionalQualifiactions?: string;
	responsibilities: string;
	additionalNotes?: string;
};

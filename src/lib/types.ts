export type Application = {
	id: number;
	jobId: number;
	resume: string;
	name: string;
	score?: number;
	status: 'pending' | 'accepted' | 'rejected';
	evaluation?: Evaluation;
};

// all lower-case fields for SQL compatibility
export type Job = {
	id: number;
	title: string;
	location: string;
	description: string;
	requiredqualifications: string;
	optionalqualifications?: string;
	responsibilities: string;
};

type EvaluationDetail = {
	category: 'qualifications' | 'experience' | 'skills' | 'resume quality';
	score: number; // Should be in the range 1-3
	notableAccomplishments: string[];
	notableShortcomings: string[];
};

export type Evaluation = {
	details: EvaluationDetail[]; // Should be of length 5.
	finalScore: number; // Should be in the range 1-5
	summary: string; // Should be a brief summary (max 4 sentences, max length 512)
};

// Checks to see if the evaluation is in the same type as the Evaluation type we see above.
export function isValidEvaluation(evaluation: unknown): evaluation is Evaluation {
	if (typeof evaluation !== 'object' || evaluation == null) {
		return false;
	}

	if (!('details' in evaluation) || !('finalScore' in evaluation) || !('summary' in evaluation)) {
		return false;
	}

	if (typeof evaluation.finalScore !== 'number' || typeof evaluation.summary !== 'string') {
		return false;
	}

	if (!Array.isArray(evaluation.details) || evaluation.details.length !== 5) {
		return false;
	}

	for (const detail of evaluation.details) {
		if (
			!['qualifications', 'experience', 'skills', 'relevance', 'resume quality'].includes(
				detail.category
			) ||
			typeof detail.score !== 'number' ||
			detail.score < 1 ||
			detail.score > 3 ||
			!Array.isArray(detail.notableAccomplishments) ||
			!Array.isArray(detail.notableShortcomings)
		) {
			return false;
		}

		for (const accomplishment of detail.notableAccomplishments) {
			if (typeof accomplishment !== 'string') return false;
		}

		for (const shortcoming of detail.notableShortcomings) {
			if (typeof shortcoming !== 'string') return false;
		}
	}

	return true;
}

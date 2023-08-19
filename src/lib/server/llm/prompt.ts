import type { OpenAI } from 'openai';

export const responseFunctionName = 'saveEvaluation';

const systemPrompt = `You are a job application screening assistant. Given a job description and a resume, you evaluate the candidate according to our company guidelines and output a recommendation. Make sure to evaluate the candidate against the specific job posting they're applying to. You should return your recommendation by calling the '${responseFunctionName}' function that is given to you.`;

const userPromptOne = `I'm going to give you a job description, followed by a Candidate's resume. 

[Task 1]
Your core task: evaluate the candidate on these five pillars:
1. Qualifications (e.g. education, certifications, awards.)
2. Experience (e.g. past jobs, internships, projects)
3. Skills (e.g. programming languages, soft skills)
4. Relevancy (e.g. relevant industry experience, programming experience that fit the job description)
5. Resume Quality (e.g. specificity of resume with real examples, spelling, grammar, etc.)

You must evaluate each of these pillars on a scale from 1 to 3. For each pillar you have the option to leave notes. Only leave them if there are particular standout strengths or weakenss. If things are average or just satisfactory, please leave it blank. If you do leave any notes, make sure to be specific. Instead of "Led a team of engineers", you should instead write "John led a team of 5 engineers at Robinhood."

[Task 2]
After you have evaluated the candidate, give them a final score from 1 to 5, where 1 is a Poor Fit and 5 is a Top Choice. 

[Task 3]
Lastly, write a BRIEF summary of why the candidate received the score.

For example, here is a great summary, assuming the score was 4 (with a made up resume and job description): "John is a strong candidate for this position. His industry knowledge in the fintech sector and his experience with Kubernetes and Docker from his time at Robinhood makes him a great fit. His main weakness, however, is that he has no experience with React (which is a key requirement for this position). Still, overall, he is a strong candidate and I would recommend him for this position."

IMPORTANT note on the summary & Notes: Do not simply summarize the candidate's resume. Instead, highlight only the most notable points - those that heavily affected the final decision.

Understood?`;

const aiPrompt = `Understood. I will evaluate each pillar as noted, according to what the job description requires and the candidate's resume. I will make sure to only include the most notable points in the summary, and leave out anything that isn't outstanding or severely lacking. Please give me the data, and I will go ahead and input the evaluation into the system.`;

const userPromptTwo = (jobPosting: string, resume: string): string => `
Great.
I will enclose the Job Posting below in <JOB POSTING></JOBPOSTING> tags, and the Candidate's resume in <RESUME></RESUME> tags. Go ahead.

========Break========
<JOB POSTING>
${jobPosting}
</JOB POSTING>
========Break========
<RESUME>
${resume}
</RESUME>`;

export const responseFormat: OpenAI.Chat.CompletionCreateParams.Function = {
	name: responseFunctionName,
	description:
		"Given an evaluation of a candidate's resume to a Job Posting, this function will save the necessary fields our DB needs to process their application.",
	parameters: {
		type: 'object',
		properties: {
			details: {
				type: 'array',
				description:
					"An array containing details about the candidate's qualifications, experience, skills, and resume quality. It must cover all five pillars (e.g. length of 5)",
				items: {
					type: 'object',
					properties: {
						category: {
							type: 'string',
							enum: ['qualifications', 'experience', 'skills', 'relevance', 'resume quality'],
							description: 'The category or pillar of application evaluation.'
						},
						score: {
							type: 'integer',
							minimum: 1,
							maximum: 3,
							description:
								"The rating of the candidate's performance in a specific pillar. 1 is Poor, 2 is Satisfactory, and 3 is Outstanding."
						},
						notableAccomplishments: {
							type: 'array',
							items: { type: 'string' },
							description:
								'Specific examples of what the candidate did outstandingly well in this pillar. Only include notes if there are exemplary items that go above and beyond.'
						},
						notableShortcomings: {
							type: 'array',
							items: { type: 'string' },
							description:
								'Specific examples of what the candidate did exceptionally poorly in this pillar. Only include notes if there are severe shortcomings that show limitations.'
						}
					},
					required: ['category', 'score', 'notableAccomplishments', 'notableShortcomings']
				}
			},
			finalScore: {
				type: 'integer',
				description: 'A final score from 1 to 5, where 1 is a Poor Fit and 5 is a Top Choice.',
				minimum: 1,
				maximum: 5
			},
			summary: {
				type: 'string',
				description:
					'A very BRIEF summary (4 sentences MAX) of why the candidate received the score, summarizing any notable details in the pillars and mentioning significant standout points.',
				maxLength: 512
			}
		},
		required: ['details', 'finalScore', 'summary']
	}
};

export const getMessages: (
	jobPosting: string,
	resume: string
) => OpenAI.Chat.CreateChatCompletionRequestMessage[] = (jobPosting, resume) => {
	return [
		{ role: 'system', content: systemPrompt },
		{ role: 'user', content: userPromptOne },
		{ role: 'assistant', content: aiPrompt },
		{ role: 'user', content: userPromptTwo(jobPosting, resume) }
	];
};

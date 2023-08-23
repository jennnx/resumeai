<h1>Create new Job Posting</h1>
<form method="POST">
	<label for="title">
		<span>Job Title</span>
		<input type="text" id="title" name="title" placeholder="Senior Software Engineer" required />
	</label>
	<label for="location">
		<span>Location</span>
		<input type="text" id="location" name="location" placeholder="Menlo Park, CA" required />
	</label>
	<label for="description">
		<span>Job Description</span>
		<textarea
			id="description"
			name="description"
			placeholder="Short summary of role, projects, and responsibilities."
			required
		/>
	</label>
	<label for="responsibilities">
		<span>Responsibilities</span>
		<textarea
			id="responsibilities"
			name="responsibilities"
			placeholder="Key tasks and responsibilities this position is expected to perform"
			required
		/>
	</label>
	<label for="requiredQualifications">
		<span>Required Qualifications</span>
		<textarea
			id="requiredQualifications"
			name="requiredQualifications"
			placeholder="Education, Certifications, Years of Experience, etc."
			required
		/>
	</label>
	<label for="optionalQualifications">
		<span>Optional Qualifications</span>
		<textarea
			id="optionalQualifications"
			name="optionalQualifications"
			placeholder="Education, Certifications, Years of Experience, Programming Languages etc."
			required
		/>
	</label>

	<button>Submit</button>
</form>

<style>
	h1 {
		color: #333;
	}

	form {
		border-radius: 5px;
		padding: var(--spacing-lg);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		max-width: 720px;
		margin: var(--spacing-2xl) auto;
	}

	label {
		display: block;
		margin-bottom: var(--spacing);
	}

	span {
		display: block;
		font-weight: bold;
		margin-bottom: var(--spacing-sm);
	}

	input[type='text'],
	textarea {
		width: 100%;
		padding: var(--spacing-sm);
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		resize: vertical;
	}

	textarea {
		min-height: 100px;
	}

	input[type='text']:focus,
	textarea:focus {
		outline: 2px solid var(--primary);
	}

	button {
		display: block;
		width: 100%;
		padding: 10px;
		background-color: var(--primary);
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 16px;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: var(--primary-hover);
	}
</style>

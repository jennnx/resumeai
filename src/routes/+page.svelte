<script lang="ts">
	const a = 123;
</script>

<h2>Create new Job Posting</h2>
<form method="POST">
	<label for="title">
		<span>Job Title</span>
		<input type="text" id="title" name="title" placeholder="Senior Software Engineer" required />
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
	<label for="qualifications">
		<span>Qualifications</span>
		<textarea
			id="qualifications"
			name="qualifications"
			placeholder="Education, Certifications, Years of Experience, etc."
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
	<label for="additionalNotes">
		<span>Additional Notes</span>
		<textarea
			id="additionalNotes"
			name="additionalNotes"
			placeholder="Any additional context to pass to the AI (Optional)"
		/>
	</label>

	<button>Submit</button>
</form>

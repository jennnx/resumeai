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

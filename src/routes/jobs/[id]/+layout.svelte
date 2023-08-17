<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav aria-label="breadcrumb">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/jobs">Jobs</a></li>
		<li>{$page?.data.job?.title || 'Listing'}</li>
	</ul>
</nav>
<slot />

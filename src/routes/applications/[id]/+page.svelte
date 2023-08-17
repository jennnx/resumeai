<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<iframe src={data.pdf} height="100%" width="100%" />

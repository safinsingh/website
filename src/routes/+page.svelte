<script lang="ts">
	import Project from "$lib/components/Project.svelte";
	import Link from "$lib/components/Link.svelte";
	import { socials, recents } from "$lib/data";

	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<section>
	<object data="/name.svg" title="Safin Singh" />
	<p>
		hi, i'm safin. i'm a high school student and programmer interested in cybersecurity. i've built
		low-level *nix apps, security training tools, and way too many websites.
	</p>
</section>

<h2>here is some of my selected work:</h2>
<section id="work">
	{#each data.projects as project}
		<Project {project} />
	{/each}
</section>

<h2>and my socials:</h2>
<section>
	{#each socials as { text, link }}
		<Link {text} {link} />
	{/each}
</section>

<h2>
	i like documenting cool stuff i find or read. here's some of the stuff that has caught my
	attention recently:
</h2>
<section>
	{#each recents as { text, link }}
		<Link {text} {link} />
	{/each}
</section>

<p id="copyright">Copyright © 2022 Safin Singh</p>

<style>
	#copyright {
		padding-bottom: 2rem;
	}
</style>

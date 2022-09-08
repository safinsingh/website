<script lang="ts">
	import Project from "$lib/components/Project.svelte";
	import Link from "$lib/components/Link.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	const socials = [
		{ text: "github", link: "https://github.com/safinsingh" },
		{ text: "linkedin", link: "https://www.linkedin.com/in/safinsingh/" }
	];

	const recents = [
		{
			text: "the verge - cloudflare & kiwi farms",
			link: "https://www.theverge.com/2022/9/6/23339889/cloudflare-kiwi-farms-content-moderation-ddos"
		},
		{
			text: "alphalist - language agnostic hiring",
			link: "https://alphalist.com/blog/the-case-for-language-agnostic-hiring"
		},
		{
			text: 'levelup - we\'re past "look at my github"',
			link: "https://levelup.gitconnected.com/im-sorry-but-we-re-past-the-look-at-my-github-phase-17f796fa6db1"
		}
	];
</script>

<section>
	<h1>Safin Singh</h1>
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
<div class="section">
	{#each recents as { text, link }}
		<Link {text} {link} />
	{/each}
</div>

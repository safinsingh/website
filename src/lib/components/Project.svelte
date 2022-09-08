<script lang="ts">
	import { strip } from "$lib/util";
	import type { Project } from "../../routes/+page.server";

	export let project: Project;

	let open = false;
	const toggle = () => (open = !open);
</script>

<div class="project">
	<button class="projectName" on:click={toggle}>{project.name}</button>
	{#if open}
		<p class="projectDescription">{strip(project.description) + " • "}</p>
		<a class="projectLink" href={project.url} target="_blank">source</a>
	{/if}
</div>

<style>
	.projectName {
		border: none;
		background: none;
		display: block;
		color: inherit;
		cursor: pointer;
		margin: 0;
		padding: 0;
		display: block;
	}

	.projectName:hover {
		cursor: pointer;
		font-weight: bold;
	}

	.projectName::before {
		content: "> ";
	}

	.projectDescription,
	.projectLink {
		color: rgb(100, 100, 100);
		font-weight: normal;
		display: inline;
	}

	.projectLink:hover {
		font-weight: bold;
	}
</style>

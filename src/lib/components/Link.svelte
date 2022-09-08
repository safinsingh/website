<script lang="ts">
	export let text: string;
	export let link: string;
</script>

<a href={link} target="_blank">{text}</a>

<style>
	a {
		color: #000;
		text-decoration: none;
		display: block;
	}

	a:hover {
		cursor: pointer;
		font-weight: bold;
	}

	a::before {
		content: "> ";
	}
</style>

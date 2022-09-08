import { TOKEN } from "$env/static/private";

const QUERY = `
query {
    repositoryOwner(login: "safinsingh") {
        ... on ProfileOwner {
            itemShowcase {
                items(first: 4) {
                    edges {
                        node {
                            ... on Repository {
                                name
                                description
                                url
                            }
                        }
                    }
                }
            }
        }
    }
}`;

export type Project = {
	name: string;
	description: string;
	url: string;
};

/** @type {import('./$types').PageLoad} */
export async function load() {
	const { data } = await fetch("https://api.github.com/graphql", {
		body: JSON.stringify({ query: QUERY }),
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${TOKEN}`,
			"Content-Type": "application/json"
		},
		method: "POST"
	}).then((r) => r.json());

	const projects = data.repositoryOwner.itemShowcase.items.edges.map(
		(edge: any) => edge.node
	) as Project[];

	return { projects };
}

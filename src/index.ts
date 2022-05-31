import fetchRootPosts from "./fetch-root-posts";

async function main() {
	console.log('starting...');
	const posts = await fetchRootPosts();
}

main();
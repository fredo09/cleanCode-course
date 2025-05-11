import { PostService } from './05-dependency-b';
import { JsonDataBaseService } from './05-dependency-c';

// Main
(async () => {
	const providerJsonDb = new JsonDataBaseService();

    const postService = new PostService(
		providerJsonDb
	);

    const posts = await postService.getPosts();

    console.log({ posts })
})();
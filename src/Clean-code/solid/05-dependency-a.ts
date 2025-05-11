import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiService } from './05-dependency-c';

// Main
(async () => {
	// const providerJsonDb = new LocalDataBaseService();
	// const providerJsonDb = new JsonDataBaseService();
	const providerJsonDb = new WebApiService();

    const postService = new PostService(
		providerJsonDb
	);

    const posts = await postService.getPosts();

    console.log({ posts });
})();
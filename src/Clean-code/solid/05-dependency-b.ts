import { LocalDataBaseService, JsonDataBaseService, PostProvider } from "./05-dependency-c";
export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

	// !Esto es ejemplo de injeccion de dependencias con una clase en concreto
    // constructor(
	// 	private postProvider: JsonDataBaseService
	// ) {}

	// * Y este es un ejemplo de inversion de dependencias usando una clase abstracta
	constructor(
		private postProvider: PostProvider
	) {}

    async getPosts() {
		// !Esto es usando el ejemplode injecion de dependencias pero le falta algo mas
        // const jsonDB = new LocalDataBaseService();
		// const jsonDB = new JsonDataBaseService();
        // this.posts = await jsonDB.getPosts();
        this.posts = await this.postProvider.getPosts();
        return this.posts;
    }
}
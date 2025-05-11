import { LocalDataBaseService } from "./05-dependency-c";
import { JsonDataBaseService } from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(
		private psotProvider: JsonDataBaseService
	) {}

    async getPosts() {
		// !Esto es usando el ejemplode injecion de dependencias pero le falta algo mas
        // const jsonDB = new LocalDataBaseService();
		// const jsonDB = new JsonDataBaseService();
        // this.posts = await jsonDB.getPosts();
        this.posts = await this.psotProvider.getPosts();
        return this.posts;
    }
}
import localPost from './../../dataBase/local-database.json';
import { Post } from './05-dependency-b';

/**
 * Usamos injeccion de dependencias pero algo le falta y se trata de la inversion de dependencias ya que el principio de la inverison de dependencias dice que las clases de alto nivel no deben depender de las clases de bajo nivel, ambas deben depender de abstracciones.
 * Y Solo es implmentacion mas no abstraccion.
 */

//usando el pincipio de la inverison de dependencias
export abstract class PostProvider {
	abstract getPosts(): Promise<Post[]>;
}

export class LocalDataBaseService implements PostProvider {

    constructor() {}

    async getPosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }
}

export class JsonDataBaseService implements PostProvider{
	async getPosts () {
		return localPost;
	}
}

// * Tarea aplicar el principio de la inverison de dependencias 
export class WebApiService implements PostProvider {
	async getPosts(): Promise<Post[]> {
		// return fetch('https://jsonplaceholder.typicode.com/posts')
		// 	.then(response => response.json())
		// 	.catch(error => {throw new Error(`Ocurrio un errror al obtener los posts ${error}`)});

		const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
		return await responsePosts.json();
	}
}

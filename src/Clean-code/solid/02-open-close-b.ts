// Hay que agregar la dependencia de axios ```yarn add axios```
/**
 * !! Aqui tenemos otro ejemplo de el principio de abierto/cerrado con dependencias de terceros osea es codigo que no controlamos y que si hay una fuerte depenencia a esta libreria
 */
// import axios from 'axios';

import { HttpClient } from "./02-open-close-c";

/**
 * ! "El principio de abierto/cerrado" establece que una clase debe estar abierta para su extensión, pero cerrada para su modificación.
 */

export class TodoService {
	constructor(private httpClient: HttpClient) {}

    async getTodoItems() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {
	constructor(private httpClient: HttpClient) {}

    async getPosts() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {
	constructor(private httpClient: HttpClient) {}

    async getPhotos() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}
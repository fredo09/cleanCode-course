import localPost from './../../dataBase/local-database.json'

/**
 * Usamos injeccion de dependencias pero algo le falta y se trata de la inversion de dependencias ya que el principio de la inverison de dependencias dice que las clases de alto nivel no deben depender de las clases de bajo nivel, ambas deben depender de abstracciones.
 * Y Solo es implmentacion mas no abstraccion.
 */

export class LocalDataBaseService {

    constructor() {}

    async getFakePosts() {
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


export class JsonDataBaseService {
	async getPosts () {
		return localPost;
	}
}
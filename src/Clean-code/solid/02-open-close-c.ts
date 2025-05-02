// import axios from 'axios';

/**
 * The Open/Closed Principle (OCP) states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
 */

/**
 * ! usar siempre un adaptador para uso de librerias de terceros "Patron adapter"
 * ! Esto implica solo modificar una parte del codigo existente del software y no al resto
 */

export class HttpClient {
	// async get(url: string) {
	// 	const { data, status } = await axios.get(url);
	// 	console.log("🚀 ~ HttpClient ~ get ~ {data, status}:", {
	// 		data,
	// 		status
	// 	});
	// 	return {data, status}
	// }

	async get(url: string) {
		const resp = await fetch(url);
		const data = await resp.json()
		return {data, status: resp.status};
	}
}
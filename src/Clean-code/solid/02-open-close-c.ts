import axios from 'axios';

/**
 * The Open/Closed Principle (OCP) states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
 */

export class HttpClient {
	async get(url: string) {
		const { data, status } = await axios.get(url);
		console.log("🚀 ~ HttpClient ~ get ~ {data, status}:", {
			data,
			status
		});
		return {data, status}
	}
}
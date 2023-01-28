import type { AxiosInstance } from 'axios';
import Axios from 'axios';

export class JsonApi {
	private api: AxiosInstance;
	constructor(public baseURL: string) {
		this.api = Axios.create({ baseURL });
	}

	public async fetchJson<T>(route: string): Promise<T> {
		return (
			await this.api.get(route, {
				headers: { accept: 'application/json' }
			})
		).data;
	}
}

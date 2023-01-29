export class InstanceProxy<T extends object> {
	protected _instances: { [name: string]: T } = {};

	constructor(protected classes: { [name: string]: new () => T }) {}

	protected get instances(): T[] {
		return Object.keys(this.classes).map((name) => this.getInstance(name));
	}

	protected getInstance(selector: string): T {
		const ProxyClass = this.classes[selector];
		if (!ProxyClass) {
			throw new Error(`No proxy implementation for: ${selector}.`);
		}

		if (ProxyClass.name in this._instances) return this._instances[ProxyClass.name]!;

		const instance = new ProxyClass();
		this._instances[ProxyClass.name] = instance;
		return instance;
	}
}

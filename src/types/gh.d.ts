declare namespace gh {
	type Iteration = {
		title: string;
		startDate: string;
		duration: number;
	};

	type Label = {
		name: string;
	};

	type Issue = {
		title: string;
		url: string;
		updatedAt: string;
		body: string;
		iteration: Iteration;
		labels: Label[];
	};

	type Issues = Issue[];
}

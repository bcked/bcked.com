declare namespace gh {
	type Milestone = {
		title: string;
	};

	type Label = {
		name: string;
	};

	type Issue = {
		title: string;
		html_url: string;
		updated_at: string;
		body: string;
		milestone: Milestone;
		labels: Label[];
	};

	type Issues = Issue[];
}

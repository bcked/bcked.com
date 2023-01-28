declare namespace query {
	type Timestamp = { timestamp: number };
	type Price = files.Price & Timestamp;
	type Supply = files.Supply & Timestamp;
	type Backing = files.Backing & Timestamp;
}

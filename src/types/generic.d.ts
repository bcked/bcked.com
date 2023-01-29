type ValueOf<T> = T[keyof T];
type ValueOfKey<T, K extends keyof T> = T[keyof Pick<T, K>];

export interface Pagination<T> {
	recipes: T;
	total: number;
	skip: number;
	limit: number;
}

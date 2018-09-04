export interface Paginate<T> {
  nextPage: number;
  totalPages: number;
  totalItems: number;
  items: Array<T>;
}
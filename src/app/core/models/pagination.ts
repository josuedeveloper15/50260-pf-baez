export interface Pagination<T> {
  first: number;
  prev: null | number;
  next: null | number;
  last: number;
  pages: number;
  items: number;
  data: T[];
}

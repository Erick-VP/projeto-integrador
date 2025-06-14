
export interface Queue<T> {
  add(t: T): void;
  remove(): T;
  isEmpty(): boolean;
  size(): number;
  list(): T[];
}

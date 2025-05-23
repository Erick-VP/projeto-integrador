
export interface Fila<T> {
  adicionar(t: T): void;
  remover(): T;
  estaVazia(): boolean;
  tamanho(): number;
  listar(): T[];
}

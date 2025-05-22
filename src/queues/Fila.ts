import { Triagem } from "../entities/triage";

export interface Fila {
    adicionar(t : Triagem) : void;
    remover() : Triagem;
    estaVazia() : boolean;
}
// export interface Fila <T> {
//     adicionar(t: T): void;
//     remover(): T | undefined;
//     estaVazia(): boolean;
// }


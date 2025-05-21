import { Triagem } from "../entities/triage";

export interface Fila {
    adicionar(t : Triagem) : void;
    remover() : Triagem;
    estaVazia() : boolean;
}

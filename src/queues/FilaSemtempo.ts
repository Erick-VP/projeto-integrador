import { Triagem } from "../entities/triage";
import { Fila } from "./Fila";

export class FilaSemTempo implements Fila {
    fila: Triagem[] = [];
    adicionar(t: Triagem): void {
        this.fila.push(t);
    }
    remover(): Triagem {
        if (this.estaVazia()) {
            throw new Error("Fila vazia");
        }
        return this.fila.shift()!;
    }
    estaVazia(): boolean {
        return this.fila.length === 0;
    }
    tamanho(): number {
        return this.fila.length;
    }
    listar(): Triagem[] {
        return this.fila;
    }
}
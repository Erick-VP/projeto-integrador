import { Fila } from "./Fila";
import { Paciente } from "../entities/patient";

export class FilaComTempo implements Fila {
    fila: Paciente[] = [];
    adicionar(p: Paciente): void {
        this.fila.push(p);
    }
    remover(): Paciente {
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
    listar(): Paciente[] {
        return this.fila;
    }
}
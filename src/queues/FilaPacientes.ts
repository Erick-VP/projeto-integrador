import { Paciente } from "../entities/patient";
import { Fila } from "./Fila";

export class FilaPaciente implements Fila<Paciente> {
    fila: Paciente[] = [];

    adicionar(p: Paciente): void {
        this.fila.push(p); // Sem prioridade numérica, ordem de chegada
    }

    remover(): Paciente {
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

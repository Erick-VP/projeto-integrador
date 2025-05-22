import { Triagem } from "../entities/triage";
import { Fila } from "./Fila";

export class FilaSemTempo implements Fila {
    fila: Triagem[] = [];
    adicionar(t: Triagem): void {
        if (this.fila.length == 0) {
            this.fila.push(t)
            return
        }
        let pos = 0
        for(let pacient of this.fila){
            if(t.prioridade <= pacient.prioridade){
            pos+=1
        }
        }
        this.fila.splice(pos,0,t)
    }
    remover(): Triagem {
        const elemRetirado = this.fila[0]
        this.fila.splice(0,1)
        return elemRetirado
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
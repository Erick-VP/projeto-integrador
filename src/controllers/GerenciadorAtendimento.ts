import { Triagem } from "../entities/triage";

export class GerenciadorAtendimento {
    filaComTempo: Triagem[] = [];
    filaSemTempo: Triagem[] = [];
    limiteMinimo: number = 30; // em minutos

    public adicionarTriagem(t: Triagem): void {
        this.filaComTempo.push(t);
    }

    public verificarETrocarFila(): void {
    const agora = Date.now();
    }

    public chamarProximaTriagem(): Triagem | null {
        this.verificarETrocarFila();
        if (this.filaSemTempo.length > 0) {
            return this.filaSemTempo.shift() || null;
        } else if (this.filaComTempo.length > 0) {
            return this.filaComTempo.shift() || null;
        }
        return null;
    }
}
import { Triagem } from "../entities/triage";
import { Prioridade } from "../priorities/priority";
import { FilaComTempo } from "../queues/FilaComTempo";
import { FilaSemTempo } from "../queues/FilaSemtempo";

export class GerenciadorAtendimento {
    filaComTempo: new FilaComTempo();
    filaSemTempo: new FilaSemTempo();
    limites: Map<Prioridade, number> = new Map([
        [Prioridade.Vermelho, 0],
        [Prioridade.Laranja, 10],
        [Prioridade.Amarelo, 60],
        [Prioridade.Verde, 120],
        [Prioridade.Azul, 240],
    ]);
    
    public adicionarTriagem(t: Triagem): void {
        // if (t.prioridade === Prioridade.Vermelho) {
        //     this.filaSemTempo.push(t);
        // }else {
        // this.filaComTempo.push(t);
        // }
    }

    public verificarETrocarFila(): void {
    const agora = Date.now();

    }


    public chamarProximaTriagem(): Triagem | null {
        // this.verificarETrocarFila();
    //     if (this.filaSemTempo.length > 0) {
    //         return this.filaSemTempo.shift() || null;
    //     } else if (this.filaComTempo.length > 0) {
    //         return this.filaComTempo.shift() || null;
    //     }
    //     return null;
    // }
}
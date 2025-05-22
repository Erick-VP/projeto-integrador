import { Triagem } from "../entities/triage";
import { Prioridade } from "../priorities/priority";
import { FilaComTempo } from "../queues/FilaComTempo";
import { FilaSemTempo } from "../queues/FilaSemtempo";

export class GerenciadorAtendimento {
    filaComTempo = new FilaComTempo();
    filaSemTempo = new FilaSemTempo();
    limites: Map<Prioridade, number> = new Map([
        [Prioridade.Vermelho, 0],
        [Prioridade.Laranja, 10],
        [Prioridade.Amarelo, 60],
        [Prioridade.Verde, 120],
        [Prioridade.Azul, 240],
    ])
;
    
    public adicionarTriagem(t: Triagem): void {
        if(t.prioridade == Prioridade.Vermelho){
            this.filaSemTempo.adicionar(t)
        }
        else{
            this.filaComTempo.adicionar(t)
        }
            
    }
    

    public verificarETrocarFila(): void {
        const agora = Date.now();
        for (let i = this.filaComTempo.fila.length - 1; i >= 0; i--){
            if(agora >= this.filaComTempo.fila[i].dataHora + this.limites.get(this.filaComTempo.fila[i].prioridade)!){
                this.filaSemTempo.adicionar(this.filaComTempo.fila[i])
                const index = this.filaComTempo.fila.indexOf(this.filaComTempo.fila[i])
                this.filaComTempo.fila.splice(index,1)
        }
    }
    

    }


    public chamarProximaTriagem(): Triagem | null {
    this.verificarETrocarFila()
    if (this.filaSemTempo.estaVazia()){
        return this.filaComTempo.remover()
    }
    else{
        return this.filaSemTempo.remover()
    }
}
}
import { Triage } from "../entities/triage";
import { Priority } from "../priorities/priority";
import { TimedQueue } from "../queues/FilaComTempo";
import { UntimedQueue } from "../queues/FilaSemtempo";

export class ServiceManager {
    private timedQueue = new TimedQueue();
    private untimedQueue = new UntimedQueue();
    private limites: Map<Priority, number> = new Map([
        [Priority.Vermelho, 0],
        [Priority.Laranja, 10],
        [Priority.Amarelo, 60],
        [Priority.Verde, 120],
        [Priority.Azul, 240],
    ])
;
    
    public addTriage(t: Triage): void {
        if(t.priority == Priority.Vermelho){
            this.untimedQueue.add(t)
        }
        else{
            this.timedQueue.add(t)
        }
            
    }
    

    public verifyAndSwitch(): void {
        const agora = Date.now();
        for (let i = this.timedQueue.queue.length - 1; i >= 0; i--){
            if(agora >= this.timedQueue.queue[i].dataHora + this.limites.get(this.timedQueue.queue[i].priority)!){
                this.untimedQueue.add(this.timedQueue.queue[i])
                const index = this.timedQueue.queue.indexOf(this.timedQueue.queue[i])
                this.timedQueue.queue.splice(index,1)
            }
        }
    }



    public callNextTriage(): Triage | null {
    this.verifyAndSwitch()
    if (this.untimedQueue.isEmpty()){
        return this.timedQueue.remove()
    }
    else{
        return this.untimedQueue.remove()
    }
}
    public listTriages(): void {
        console.log("=== Fila Sem Tempo ===");
        console.table(this.untimedQueue.list().map((triagem) => ({
            nome: triagem.patient.name,
            prioridade: triagem.priority,
            dataHora: triagem.dataHora,
            pressao: triagem.pressure,
            saturacao: triagem.saturation,
            peso: triagem.weight,
            temperatura: triagem.temperature,
            sintomas: triagem.symptoms,
        })));
        
        console.log("=== Fila Com Tempo ===");
        console.table(this.timedQueue.list().map((triagem) => ({
            nome: triagem.patient.name,
            prioridade: triagem.priority,
            dataHora: triagem.dataHora,
            pressao: triagem.pressure,
            saturacao: triagem.saturation,
            peso: triagem.weight,
            temperatura: triagem.temperature,
            sintomas: triagem.symptoms,
        })));
    }
}
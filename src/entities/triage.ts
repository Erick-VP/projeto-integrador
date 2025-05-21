import { Prioridade } from "../priorities/priority";
import { Paciente } from "./patient";

export class Triagem {
    pressao: number;
    temperatura: number;
    saturacao: number;
    sintomas: string[];
    dataHora: Date;
    paciente: Paciente;
    prioridade: Prioridade;
    constructor(pressao: number, temperatura: number, saturacao: number, sintomas: string[], dataHora: Date, paciente: Paciente) {  
        this.pressao = pressao;
        this.temperatura = temperatura;
        this.saturacao = saturacao;
        this.sintomas = sintomas;
        this.dataHora = dataHora;
        this.paciente = paciente;
        this.prioridade = Prioridade.Verde;
    }
    public definirClassificacao(novaPrioridade: Prioridade): void {
        this.prioridade = novaPrioridade;
    }
}
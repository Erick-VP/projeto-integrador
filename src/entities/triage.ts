import { Prioridade } from "../priorities/priority";
import { Paciente } from "./patient";

export class Triagem {
    paciente: Paciente;
    prioridade: Prioridade;
    pressao: number;
    saturacao: number;
    sintomas: String[];
    temperatura: number;
    dataHora: Date = new Date()
    constructor(paciente: Paciente, prioridade: Prioridade, pressao: number, saturacao: number, sintomas: String[], temperatura: number) {
        this.paciente = paciente;
        this.prioridade = prioridade;
        this.pressao = pressao;
        this.saturacao = saturacao;
        this.sintomas = sintomas;
        this.temperatura = temperatura;
    }
}
import { Prioridade } from "../priorities/priority";
import { Paciente } from "./patient";

export class Triagem {
    public readonly dataHora = Date.now()
    constructor(
        public readonly paciente: Paciente,
        public readonly prioridade: Prioridade,
        public readonly detalhes: {
        pressao: number;
        saturacao: number;
        sintomas: string[];
        temperatura: number;
        },
    ) {
    }
}

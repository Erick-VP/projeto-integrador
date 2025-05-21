import { Prioridade } from "../priorities/priority";
import { Funcionario } from "./functionary";
import { Triagem } from "./triage";
import { Paciente } from "./patient";

export class Enfermeiro extends Funcionario {
    coren: string;
    constructor(id: number, nome: string, coren: string) {
        super(id, nome);
        this.coren = coren;
    }

    public realizarTriagem(p: Paciente, prioridade: Prioridade): Triagem {
        return new Triagem(p, prioridade, 0, 0, [], 0);
    }
}
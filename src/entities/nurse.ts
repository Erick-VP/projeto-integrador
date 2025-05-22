import { Prioridade } from "../priorities/priority";
import { Funcionario } from "./functionary";
import { Triagem } from "./triage";
import { Paciente } from "./patient";
import { GerenciadorTriagem } from "../controllers/GerenciadorTriagem";

export class Enfermeiro extends Funcionario {
    coren: string;
    constructor(id: number, nome: string, coren: string) {
        super(id, nome);
        this.coren = coren;
    }

    public realizarTriagem(p: Paciente, prioridade: Prioridade): Triagem {
        return new Triagem(p, prioridade, 0, 0, [], 0); //modificar
    }

    public chamarProximoPaciente(gt: GerenciadorTriagem): Paciente | null {
        const paciente = gt.chamarProximoPaciente();
        if (paciente) {
            console.log(`Chamando paciente: ${paciente.nome}`);
            return paciente;
        } else {
            console.log("Nenhum paciente na fila.");
            return null;
        }
    }
}
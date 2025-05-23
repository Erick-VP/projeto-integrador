import { Prioridade } from "../priorities/priority";
import { Funcionario } from "./functionary";
import { Triagem } from "./triage";
import { Paciente } from "./patient";
import { GerenciadorTriagem } from "../controllers/GerenciadorTriagem";
import { GerenciadorAtendimento } from "../controllers/GerenciadorAtendimento";

export class Enfermeiro extends Funcionario {
    readonly coren: string;
    constructor(id: number, nome: string, coren: string) {
        super(id, nome);
        this.coren = coren;
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

    public realizarTriagem(paciente: Paciente, prioridade: Prioridade, pressao: number, saturacao: number, peso: number, temperatura: number): Triagem {
        console.log(`Enfermeiro: Realizando triagem de ${paciente.nome}`);
        return new Triagem(paciente, prioridade, {pressao, saturacao, peso, temperatura});
    }

    public encaminharParaAtendimento(triagem: Triagem, ga: GerenciadorAtendimento): void {
    ga.adicionarTriagem(triagem);
    console.log(`Enfermeiro: Triagem de ${triagem.paciente.nome} enviada para atendimento.`);
    }


}
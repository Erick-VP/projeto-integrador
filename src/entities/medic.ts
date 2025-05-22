import { GerenciadorAtendimento } from '../controllers/GerenciadorAtendimento';
import { Funcionario } from './functionary';

export class Medico extends Funcionario {
    crm: string;
    constructor(id: number, nome: string, crm: string) {
        super(id, nome);
        this.crm = crm;
    }

    public chamarProximaTriagem(ga: GerenciadorAtendimento): void {
        const triagem = ga.chamarProximaTriagem();
        if (triagem) {
            console.log(`Médico ${this.nome} está chamando o paciente ${triagem.paciente.nome} para atendimento.`);
        } else {
            console.log(`Não há triagens disponíveis para chamar.`);
        }
    }
}
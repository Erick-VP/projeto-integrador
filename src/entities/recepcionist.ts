import { GerenciadorTriagem } from '../controllers/GerenciadorTriagem';
import { Funcionario } from './functionary';
import { Paciente } from './patient';

export class recepcionista extends Funcionario {
    matricula: string;
    constructor(id: number, nome: string, matricula: string) {
        super(id, nome);
        this.matricula = matricula;
    }
    public cadastrarPaciente(nome: string, idade: number, sexo: string, cpf: string): void {
        // Lógica para cadastrar paciente
        console.log(`Paciente ${nome} cadastrado com sucesso!`);
    }
    
    public encaminharParaTriagem(p: Paciente, gt: GerenciadorTriagem): void {
        gt.adicionarPaciente(p);
        console.log(`Paciente ${p.nome} encaminhado para triagem.`);
    }
}
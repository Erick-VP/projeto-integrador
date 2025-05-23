import { GerenciadorAtendimento } from '../controllers/GerenciadorAtendimento';
import { GerenciadorTriagem } from '../controllers/GerenciadorTriagem';
import { Prioridade } from '../priorities/priority';
import { Funcionario } from './functionary';
import { Paciente } from './patient';
import { Triagem } from './triage';

export class Recepcionista extends Funcionario {
    public readonly matricula: string;
    constructor(id: number, nome: string, matricula: string) {
        super(id, nome);
        this.matricula = matricula;
    }
    public cadastrarPaciente(paciente: Paciente): void {
        // Lógica para cadastrar paciente
        console.log(`Paciente ${paciente.nome} cadastrado com sucesso!`);
    }
    
    public encaminhar(p: Paciente, gt: GerenciadorTriagem, ga: GerenciadorAtendimento): void {
        if (p.casoEmergencial) {
            const tri = new Triagem(p, Prioridade.Vermelho, {
                pressao: 0,
                saturacao: 0,
                peso: 0,
                temperatura: 0
            });
            ga.adicionarTriagem(tri); //adiciona para atendimento
            console.log(`Paciente ${p.nome} encaminhado para atendimento emergencial.`);
        }else {
        gt.adicionarPaciente(p); //adicioana para triagem
        console.log(`Paciente ${p.nome} encaminhado para triagem.`);
        }
    }
}
import { Funcionario } from './functionary';

export class recepcionista extends Funcionario {
    matricula: string;
    constructor(id: number, nome: string, matricula: string) {
        super(id, nome);
        this.matricula = matricula;
    }
}
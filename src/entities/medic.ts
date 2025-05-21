import { Funcionario } from './functionary';

export class Medico extends Funcionario {
    crm: string;
    constructor(id: number, nome: string, crm: string) {
        super(id, nome);
        this.crm = crm;
    }
}
export class Paciente {
    id: number;
    nome: string;
    cpf: string;
    prioridadeLegal: false;
    casoEmergencial: false;
    constructor(id: number, nome: string, cpf: string, prioridadeLegal: false, casoEmergencial: false) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.prioridadeLegal = prioridadeLegal;
        this.casoEmergencial = casoEmergencial;
    }
    public temPrioridadeLegal(): boolean {
        return this.prioridadeLegal;
    }
}
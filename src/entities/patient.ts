export class Paciente {
    public readonly id: number;
    public readonly nome: string;
    public readonly cpf: string;
    public readonly prioridadeLegal: boolean;
    public readonly casoEmergencial: boolean;
    constructor(id: number, nome: string, cpf: string, prioridadeLegal: boolean, casoEmergencial: boolean) {
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
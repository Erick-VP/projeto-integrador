export class Patient {
    public readonly id: number;
    public readonly name: string;
    public readonly cpf: string;
    public readonly legalPriority: boolean;
    public readonly emergencyCase: boolean;
    constructor(id: number, name: string, cpf: string, legalPriority: boolean, emergencyCase: boolean) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.legalPriority = legalPriority;
        this.emergencyCase = emergencyCase;
    }
    public hasLegalPriority(): boolean {
        return this.legalPriority;
    }
}
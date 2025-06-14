import { ServiceManager } from '../controllers/ServiceManager';
import { Functionary } from './functionary';

export class Doctor extends Functionary {
    readonly crm: string;
    constructor(id: number, nome: string, crm: string) {
        super(id, nome);
        this.crm = crm;
    }

    public callNextTriage(ga: ServiceManager): void {
        const triage = ga.callNextTriage();
        if (triage) {
            console.log(`Médico ${this.name} está chamando o paciente ${triage.patient.name} para atendimento.`);
        } else {
            console.log(`Não há triagens disponíveis para chamar.`);
        }
    }
}
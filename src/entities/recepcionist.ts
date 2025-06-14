import { ServiceManager } from '../controllers/ServiceManager';
import { TriageManager } from '../controllers/TriageManager';
import { Priority } from '../priorities/priority';
import { Functionary } from './functionary';
import { Patient } from './patient';
import { Triage } from './triage';

export class Receptionist extends Functionary {
    public readonly registration: string;
    constructor(id: number, name: string, registration: string) {
        super(id, name);
        this.registration = registration;
    }
    public registerPatient(patient: Patient): void {
        // Lógica para cadastrar paciente
        console.log(`Paciente ${patient.name} cadastrado com sucesso!`);
    }

    public forwardToTriage(p: Patient, gt: TriageManager, ga: ServiceManager): void {
        if (p.emergencyCase) {
            const tri = new Triage(p, Priority.Vermelho, 0, 0, 0, 0, []); // Cria uma triagem de emergência
            ga.addTriage(tri); //adiciona para atendimento
            console.log(`Paciente ${p.name} encaminhado para atendimento emergencial.`);
        }else {
        gt.addPatient(p); //adicioana para triagem
        console.log(`Paciente ${p.name} encaminhado para triagem.`);
        }
    }
}
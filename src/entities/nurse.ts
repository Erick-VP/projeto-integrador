import { Priority } from "../priorities/priority";
import { Functionary } from "./functionary";
import { Triage } from "./triage";
import { Patient } from "./patient";
import { TriageManager } from "../controllers/TriageManager";
import { ServiceManager } from "../controllers/ServiceManager";

export class Nurse extends Functionary {
    readonly coren: string;
    constructor(id: number, name: string, coren: string) {
        super(id, name);
        this.coren = coren;
    }

    public callNextPatient(gt: TriageManager): Patient | null {
        const patient = gt.callNextPatient();
        if (patient) {
            console.log(`Chamando paciente: ${patient.name}`);
            return patient;
        } else {
            console.log("Nenhum paciente na fila.");
            return null;
        }
    }

    public realizeTriage(patient: Patient, priority: Priority, pressure: number, saturation: number, weight: number, temperature: number, symptoms: string[]): Triage {
        console.log(`Enfermeiro: Realizando triagem de ${patient.name}`);
        return new Triage(patient, priority, pressure, saturation, weight, temperature, symptoms);
    }

    public forwardToService(triagem: Triage, ga: ServiceManager): void {
    ga.addTriage(triagem);
    console.log(`Enfermeiro: Triagem de ${triagem.patient.name} enviada para atendimento.`);
    }


}
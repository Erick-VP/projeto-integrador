import { Patient } from "../entities/patient";
import { PatientQueue } from "../queues/PatientsQueue";

export class TriageManager {
    private normalQueue = new PatientQueue();
    private priorityQueue = new PatientQueue();

    public addPatient(p: Patient): void {
        if (p.hasLegalPriority()) {
            this.priorityQueue.add(p);
        } else {
        this.normalQueue.add(p);
        }
    }

    public callNextPatient(): Patient | null {
        if (!this.priorityQueue.isEmpty()) {
            return this.priorityQueue.remove();
        } else if (!this.normalQueue.isEmpty()) {
            return this.normalQueue.remove();
        }
        return null;
    }


public listQueues(): void {
    console.log("=== Fila Prioritária ===");
    console.table(this.priorityQueue.list());

    console.log("=== Fila Normal ===");
    console.table(this.normalQueue.list());
    }
}

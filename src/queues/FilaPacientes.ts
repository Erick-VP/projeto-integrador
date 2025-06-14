import { Patient } from "../entities/patient";
import { Queue } from "./Fila";

export class PatientQueue implements Queue<Patient> {
    queue: Patient[] = [];

    add(p: Patient): void {
        this.queue.push(p); // Sem prioridade numérica, ordem de chegada
    }

    remove(): Patient {
        return this.queue.shift()!;
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    size(): number {
        return this.queue.length;
    }

    list(): Patient[] {
        return this.queue;
    }
}

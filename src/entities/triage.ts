import { Priority } from "../priorities/priority";
import { Patient } from "./patient";

export class Triage {
    public readonly dataHora = Date.now()
    constructor(
        public readonly patient: Patient,
        public readonly priority: Priority,
        public readonly pressure: number,
        public readonly saturation: number,
        public readonly weight: number,
        public readonly temperature: number,
        public readonly symptoms: string[],
    ) {
    }
}

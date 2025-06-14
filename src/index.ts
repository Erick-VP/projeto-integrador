import { Patient } from "./entities/patient";
import { TriageManager } from "./controllers/TriageManager";
import { ServiceManager } from "./controllers/ServiceManager";
import { Receptionist } from "./entities/recepcionist";
import { Nurse } from "./entities/nurse";
import { Doctor } from "./entities/medic";
import { Triage } from "./entities/triage";
import { Priority } from "./priorities/priority";

const gt = new TriageManager();
const ga = new ServiceManager();

const p1 = new Patient(1, "Ana", "12345678900", true, false);
const p2 = new Patient(2, "Pedro", "98765432100", false, true);
const p3 = new Patient(3, "Maria", "12312312300", false, false);

const r = new Receptionist(1, "João", "12345");
const e = new Nurse(2, "Maria", "67890");
const m = new Doctor(3, "Carlos", "54321");



r.registerPatient(p1);
r.registerPatient(p2);
r.registerPatient(p3);
r.forwardToTriage(p1, gt, ga);
r.forwardToTriage(p2, gt, ga);
r.forwardToTriage(p3, gt, ga);

gt.listQueues();

const calling1 = e.callNextPatient(gt);
if (calling1) {
    const triage = e.realizeTriage(calling1, Priority.Amarelo, 120, 98, 50, 37.5, ["Dor de cabeça", "Tosse"]);
    e.forwardToService(triage, ga);
}
const calling3 = e.callNextPatient(gt);
if (calling3) {
    const triage = e.realizeTriage(calling3, Priority.Verde, 130, 90, 70, 38.0, ["Dor de estômago"]);
    e.forwardToService(triage, ga);
}

ga.listTriages();
m.callNextTriage(ga);

ga.listTriages();

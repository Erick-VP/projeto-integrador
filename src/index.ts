import { Paciente } from "./entities/patient";
import { GerenciadorTriagem } from "./controllers/GerenciadorTriagem";
import { GerenciadorAtendimento } from "./controllers/GerenciadorAtendimento";
import { Recepcionista } from "./entities/recepcionist";
import { Enfermeiro } from "./entities/nurse";
import { Medico } from "./entities/medic";
import { Triagem } from "./entities/triage";
import { Prioridade } from "./priorities/priority";

const gt = new GerenciadorTriagem();
const ga = new GerenciadorAtendimento();

const p1 = new Paciente(1, "Ana", "12345678900", true, false);
const p2 = new Paciente(2, "Pedro", "98765432100", false, true);
const p3 = new Paciente(3, "Maria", "12312312300", false, false);

const r = new Recepcionista(1, "João", "12345");
const e = new Enfermeiro(2, "Maria", "67890");
const m = new Medico(3, "Carlos", "54321");



r.cadastrarPaciente(p1);
r.cadastrarPaciente(p2);
r.cadastrarPaciente(p3);
r.encaminhar(p1, gt, ga);
r.encaminhar(p2, gt, ga);
r.encaminhar(p3, gt, ga);

gt.listarFilas();

const chamando1 = e.chamarProximoPaciente(gt);
if (chamando1) {
    const triagem = e.realizarTriagem(chamando1, Prioridade.Amarelo, 120, 98, 50, 37.5);
    e.encaminharParaAtendimento(triagem, ga);
}

const chamando3 = e.chamarProximoPaciente(gt);
if (chamando3) {
    const triagem = e.realizarTriagem(chamando3, Prioridade.Verde, 130, 90, 70, 38.0);
    e.encaminharParaAtendimento(triagem, ga);
}

ga.listarTriagens();

m.chamarProximaTriagem(ga);
m.chamarProximaTriagem(ga);

ga.listarTriagens();

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
const r = new Recepcionista(1, "João", "12345");
const e = new Enfermeiro(2, "Maria", "67890");
const m = new Medico(3, "Carlos", "54321");

const p1 = new Paciente(1, "Ana", "12345678900", false, false);

r.cadastrarPaciente(p1);
r.encaminhar(p1, gt, ga);

const chamando = e.chamarProximoPaciente(gt);
if (chamando) {
    const triagem = e.realizarTriagem(chamando, Prioridade.Amarelo, 120, 98, ["dor de cabeça"], 37.5);
    e.encaminharParaAtendimento(triagem, ga);
}
m.chamarProximaTriagem(ga);

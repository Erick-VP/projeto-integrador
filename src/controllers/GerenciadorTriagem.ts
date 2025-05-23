import { Paciente } from "../entities/patient";
import { FilaPaciente } from "../queues/FilaPacientes";

export class GerenciadorTriagem {
    private filaNormal = new FilaPaciente();
    private filaPrioritaria = new FilaPaciente();

    public adicionarPaciente(p: Paciente): void {
        if (p.prioridadeLegal) {
        this.filaPrioritaria.adicionar(p);
        } else {
        this.filaNormal.adicionar(p);
        }
    }

    public chamarProximoPaciente(): Paciente | null {
        if (!this.filaPrioritaria.estaVazia()) {
            return this.filaPrioritaria.remover();
        } else if (!this.filaNormal.estaVazia()) {
            return this.filaNormal.remover();
        }
        return null;
    }


public listarFilas(): void {
    console.log("=== Fila Prioritária ===");
    console.table(this.filaPrioritaria.listar());

    console.log("=== Fila Normal ===");
    console.table(this.filaNormal.listar());
    }
}

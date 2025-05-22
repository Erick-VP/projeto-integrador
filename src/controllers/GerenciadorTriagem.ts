import { Paciente } from "../entities/patient";

export class GerenciadorTriagem {
    filaNormal: Paciente[] = [];
    filaPrioritaria: Paciente[] = [];
    filaAuxiliar: Paciente[] = [];
    tentativasChamada = new Map<number, number>();
    
    public adicionarPaciente(paciente: Paciente): void {
        if (paciente.temPrioridadeLegal()) {
            this.filaPrioritaria.push(paciente);
        } else {
            this.filaNormal.push(paciente);
        }
    }

    public chamarProximoPaciente(): Paciente | null {
        if (this.filaPrioritaria.length > 0) {
            return this.filaPrioritaria.shift() || null;

        } else if (this.filaAuxiliar.length > 0) {
            return this.filaAuxiliar.shift() || null;

        } else if (this.filaNormal.length > 0) {
            return this.filaNormal.shift() || null;
        }
        return null;
        // pode ser melhorado e precisa colocar contador
    }

    public confirmarPresenca(paciente: Paciente): void {


    // 
    public registrarAusencia(paciente: Paciente): void {

    }


    //listagem de pacientes
    public listarFilaPrioritaria(): String[] {
        return this.filaPrioritaria.map(p => `Paciente: ${p.nome}, CPF: ${p.cpf}`);
    }

    public listarFilaNormal(): String[] {
        return this.filaNormal.map(p => `Paciente: ${p.nome}, CPF: ${p.cpf}`);
    }

    public listarFilaAuxiliar(): String[] {
        return this.filaAuxiliar.map(p => `Paciente: ${p.nome}, CPF: ${p.cpf}`);
    }
}
import { Paciente } from "../entities/patient";
export interface Fila {
    adicionar(p : Paciente) : void;
    remover() : Paciente;
    estaVazia() : boolean;
}

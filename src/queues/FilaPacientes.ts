import { Paciente } from "../entities/patient";
import { Fila } from "./Fila";

// export class FilaPacientes implements Fila<Paciente> {
//     lista: Paciente[] = [];
    
//     adicionar(p: Paciente): void {
//         this.lista.push(p); 
//     }
//     remover(): Paciente | undefined {
//         return this.lista.shift();
//     }
//     estaVazia(): boolean {
//         return this.lista.length === 0;
//     }
//     }
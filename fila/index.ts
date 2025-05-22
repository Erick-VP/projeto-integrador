// tudo está sujeito a melhoras
// tentar fazer um array com base nas funções de type script
import { geradorI, geradorId, restartId } from './gerador'
import { prioridades } from './uitls'

class Pacient {
  id: Number
  tempo = Date.now()
  tempoPrioridade : number
  prioridade: number
  constructor(prioridade: number, tempoPrioridade: number) {
    this.id = geradorI()
    this.tempoPrioridade = tempoPrioridade
    this.prioridade = prioridade
    
  }
}
class listaNormal {
  public readonly Pacients: Pacient[] = []
  
  chamada_atendimento(): Pacient {
    const elementoCopia = this.Pacients[0]
    this.Pacients.splice(0,1)
    console.log()
    return elementoCopia
    //precisa melhorar
  }
  adicionar_item(pacient: Pacient): void {
    if (this.Pacients.length == 0) {
      this.Pacients.push(pacient)
      return
    }
    let pos = 0
    for(let pac of this.Pacients){
      if(pacient.prioridade <= pac.prioridade){
        pos+=1
      }
    }
    // while (pacient.prioridade <= this.Pacients[pos].prioridade && pos < this.tam) {
    //   pos += 1
    // }
    this.Pacients.splice(pos,0,pacient)
    //não é bem assim
  }
  esoturoTempo(lista: listaEstouro) {
    //melhorar(não sei como fazer)
    //remover o item da lista normal
    //conseguir colocar o tempo de acordo com a prioridade
    const oneMinute = 1*60*1000
    const now = Date.now()
    for (let i = this.Pacients.length - 1; i >= 0; i--){
      if(now >= this.Pacients[i].tempo + this.Pacients[i].tempoPrioridade){
        lista.adicionar_item(this.Pacients[i])
        const index = this.Pacients.indexOf(this.Pacients[i])
        this.Pacients.splice(index,1)
        console.log('++++++++++++++++++lista estouro+++++++++++++++++++++++++++++')
        console.log(lista)
        console.log('++++++++++++++++++lista normal+++++++++++++++++++++++++++++')
        console.log(this.Pacients)
      }
    }
  }
}
//   imprimir() {
//     for (let x = 0; x < this.tam; x++) {
//       console.log(this.Pacients[x])
//     }
//     console.log(this.tam)
//   }
// }
class listaEstouro {
  public readonly Pacients: Pacient[] = []

  adicionar_item(pacient: Pacient): void {
    if (this.Pacients.length == 0) {
      this.Pacients.push(pacient)
      return
    }
    let pos = 0
    for(let pac of this.Pacients){
      if(pacient.prioridade <= pac.prioridade){
        pos+=1
      }
    }
    this.Pacients.splice(pos,0,pacient)
  }
  chamada_atendimento(): Pacient {
    const elementoCopia = this.Pacients[0]
    this.Pacients.splice(0,1)
    console.log()
    return elementoCopia
    //precisa melhorar
  }
}

const l1 = new listaNormal()
const p1 = new Pacient(prioridades.azul.prioridade,prioridades.azul.tempo)
const p2 = new Pacient(prioridades.verde.prioridade,prioridades.verde.tempo)
const p3 = new Pacient(prioridades.laranja.prioridade,prioridades.laranja.tempo)
const p4 = new Pacient(prioridades.verde.prioridade,prioridades.verde.tempo)
const p5 = new Pacient(prioridades.amarelo.prioridade,prioridades.amarelo.tempo)
const p6 = new Pacient(prioridades.laranja.prioridade,prioridades.laranja.tempo)
const p7 = new Pacient(prioridades.azul.prioridade,prioridades.azul.tempo)
const p8 = new Pacient(prioridades.laranja.prioridade,prioridades.laranja.tempo)
const p9 = new Pacient(prioridades.verde.prioridade,prioridades.verde.tempo)
const p10 = new Pacient(prioridades.amarelo.prioridade,prioridades.amarelo.tempo)
const p11 = new Pacient(prioridades.laranja.prioridade,prioridades.laranja.tempo)
console.log('=====================OBJETOS=========================')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)
console.log(p6)
console.log(p7)
console.log(p8)
console.log(p9)
console.log(p10)
console.log(p11)
console.log('=====================ADIÇÕES NA LISTA================')
l1.adicionar_item(p1)
console.log(l1)
l1.adicionar_item(p2)
console.log(l1)
l1.adicionar_item(p3)
console.log(l1)
l1.adicionar_item(p4)
console.log(l1)
l1.adicionar_item(p5)
console.log(l1)
l1.adicionar_item(p6)
l1.adicionar_item(p7)
l1.adicionar_item(p8)
l1.adicionar_item(p9)
l1.adicionar_item(p10)
l1.adicionar_item(p11)
console.log('=====================LISTA NORMAL=====================')
console.log(l1)
console.log('===================REMOÇÃO DE ELEMENTO================')
console.log('ELEMENTO RETIRADO :')
console.log(l1.chamada_atendimento())
console.log('LISTA AGORA:')
console.log(l1)
console.log()

const l2 = new listaEstouro()
function est(){
    l1.esoturoTempo(l2)
    return l2
}
console.log('===============começando os estouros==================')
//tentar fazer um call
setInterval(est, 1000)

// setInterval(l1.esoturoTempo.call, 100, null, l2)
// setInterval(() => {
//     console.log("\n--- Running periodic overflow check ---");
//     l1.esoturoTempo(lEstouro, 10000); // Check for patients older than 10 seconds
//     l1.imprimir();
//     lEstouro.imprimir();
// }, 5000);




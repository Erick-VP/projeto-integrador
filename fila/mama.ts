// tudo está sujeito a melhoras
// tentar fazer um array com base nas funções de type script
import { geradorI, geradorId, restartId } from './gerador'

class Pacient {
  id: Number
  tempo = Date.now()
  prioridade: Number
  constructor(prioridade: number) {
    this.id = geradorI()
    this.prioridade = prioridade
  }
}
class listaNormal {
  public readonly Pacients: Pacient[] = new Array(50).fill(0)
  tam: number
  constructor() {
    this.tam = 0
  }
  chamada_atendimento(): Pacient {
    const elementoCopia = this.Pacients[0]
    for (let i = 0; i < this.tam; i++) {
      this.Pacients[i] = this.Pacients[i + 1]
    }
    this.tam--
    return elementoCopia
    //precisa melhorar
  }
  removerItem(index: number){
    this.Pacients.slice(index)
    this.tam--
  }
  adicionar_item(pacient: Pacient): void {
    if (this.tam == 0) {
      this.Pacients[0] = pacient
    }
    let pos = 0
    while (pacient.prioridade <= this.Pacients[pos].prioridade && pos < this.tam) {
      pos += 1
    }
    for (let i = this.tam; i >= pos; i--) {
      this.Pacients[i + 1] = this.Pacients[i]
    }
    this.Pacients[pos] = pacient
    this.tam++
    //não é bem assim
  }
  esoturoTempo(lista: listaEstouro) {
    //melhorar(não sei como fazer)
    //remover o item da lista normal
    //conseguir colocar o tempo de acordo com a prioridade
    const oneSecond = 1*60*1000
    const now = Date.now()
    for (let x = 0; x < this.tam; x++) {
      //teste
      if (now >= this.Pacients[x].tempo + 1*60*1000) {
        lista.adicionar_item(this.Pacients[x])
        const index = this.Pacients.indexOf(this.Pacients[x])
        this.removerItem(index)
        lista.imprimir()
      }
    }
  }

  imprimir() {
    for (let x = 0; x < this.tam; x++) {
      console.log(this.Pacients[x])
    }
    console.log(this.tam)
  }
}
class listaEstouro {
  Pacients: Pacient[] = new Array(50).fill(0)
  tam: number
  constructor(){
    this.tam = 0
  }

  adicionar_item(pacient: Pacient): void {
    if (this.tam == 0) {
      this.Pacients[0] = pacient
    }
    let pos = 0
    while (pacient.prioridade <= this.Pacients[pos].prioridade && pos < this.tam) {
      pos += 1
    }
    for (let i = this.tam; i >= pos; i--) {
      this.Pacients[i + 1] = this.Pacients[i]
    }
    this.Pacients[pos] = pacient
    this.tam++
    //não é bem assim
  }
   imprimir() {
    for (let x = 0; x < this.tam; x++) {
      console.log(this.Pacients[x])
    }
    console.log(this.tam)
  }
}

const l1 = new listaNormal()
const p1 = new Pacient(1)
const p2 = new Pacient(2)
const p3 = new Pacient(4)
const p4 = new Pacient(2)
const p5 = new Pacient(3)
const p6 = new Pacient(4)
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)
console.log(p6)
l1.imprimir
console.log()
l1.adicionar_item(p1)
l1.imprimir()
console.log()
l1.adicionar_item(p2)
l1.imprimir()
console.log()
l1.adicionar_item(p3)
l1.imprimir()
console.log()
l1.adicionar_item(p4)
l1.imprimir()
console.log()
l1.adicionar_item(p5)
l1.imprimir()
console.log()
l1.adicionar_item(p6)
l1.imprimir()
console.log()
l1.imprimir()
console.log('retorno:')
console.log(l1.chamada_atendimento())
console.log('continuando lista')
l1.imprimir()
const l2 = new listaEstouro()
function est(){
    l1.esoturoTempo(l2)
    return l2
}

// setInterval(l1.esoturoTempo.call, 100, null, l2)
setInterval(est, 1000)

// setInterval(() => {
//     console.log("\n--- Running periodic overflow check ---");
//     l1.esoturoTempo(lEstouro, 10000); // Check for patients older than 10 seconds
//     l1.imprimir();
//     lEstouro.imprimir();
// }, 5000);

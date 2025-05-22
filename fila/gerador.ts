export class geradorId{
    private id: number;
    constructor(){
        this.id = 0
    }
    generateId(): number{
        this.id = this.id + 1
        const num = this.id
        return num
    }
    public set Id(id: number){
        this.id = id
    }
    public get showId(){
        return this.id
    }
    
}

const i1 = new geradorId()
export function geradorI(): number{
    if( i1.showId == 50){
        //melhorar
        throw new Error('Senha excedeu a quantidade máxima')
    }
    return i1.generateId()
}
export function restartId(){
    i1.Id = 0
}
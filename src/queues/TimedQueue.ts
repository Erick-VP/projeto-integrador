import { Queue } from "./Queue";
import { Triage } from "../entities/triage";

export class TimedQueue implements Queue<Triage> {
    queue: Triage[] = [];
    add(t: Triage): void {
        if (this.queue.length == 0) {
            this.queue.push(t)
            return
        }
        let pos = 0
        for(let patient of this.queue){
            if(t.priority <= patient.priority){
            pos+=1
        }
        }
        this.queue.splice(pos,0,t)
    }
    remove(): Triage {
        const elementoCopia = this.queue[0]
        this.queue.splice(0,1)
        return elementoCopia
    }
    isEmpty(): boolean {
        return this.queue.length === 0;
    }
    size(): number {
        return this.queue.length;
    }
    list(): Triage[] {
        return this.queue;
    }
}
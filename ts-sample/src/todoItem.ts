// See ch01-list1.11 branch for revises the TodoItem class to use TypeScript features that allow classes
// to be defined concisely - no explicit members in TotoItem class and no statements inside the 
// constructor 
export class TodoItem {
    public id: number;
    public task: string;
    public complete: boolean = false;

    public constructor(id: number, task: string, complete: boolean = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    public printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)": ""}`)
    }
}
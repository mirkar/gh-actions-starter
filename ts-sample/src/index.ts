import { TodoItem} from "./todoItem";
console.clear();
console.log("Dmitriy's To Do List");

let mytodo1 = new TodoItem(1, "Buy Flowers", true);
let mytodo2 = new TodoItem(2, "Get Shoes");
mytodo1.printDetails();
mytodo2.printDetails();



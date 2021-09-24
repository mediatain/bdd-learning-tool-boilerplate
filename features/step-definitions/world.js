import { setWorldConstructor } from "cucumber";
import TaskManager from '../../src/core/TaskManager';

// this adds context 
class World {
    constructor() {
        // This is a new instance of the TaskManager Class
        this.taskManager = new TaskManager();
    }
}

setWorldConstructor(World);
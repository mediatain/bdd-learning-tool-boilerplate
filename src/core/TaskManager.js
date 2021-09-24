import AbstractTaskManager from "./AbstractTaskManager";
import Task from "./Task"

class TaskManager extends AbstractTaskManager {
    constructor() {
        //The keword "extends" and the super() method allows access to the methods exported from AbstractTaskManager
        super();

        //Any instance of the TaskManager Object will contain a property "taskList", with the value of an empty array
        this.taskList = [];
    }

    //This is creating a new task which satisfies Test#2
    addTask(description) {
        // if the description is an empty string, we provide a new error message (which satisfies test#3)
        if (!description) {
            throw new Error('Please provide a task description')
        }

        //Whatever the value of the string for description is passed into the Task class
        const newTask = new Task(description);

        //This adds the new test to the current tasklist
        this.taskList.push(newTask);
    }

    // Using this function provided from the AbstractTaskManager, any new instance of TaskManager will have access to the method of toggle task
    toggleTask(taskID) {
        // Which ever task in the taskList which has the same ID as the one provided in taskID will be set from false to ttrue.
        const task = this.taskList.find(task => task.id === taskID);

        task.toggled = !task.toggled;
    }

    deleteTask(taskID) {
        // This is searching our taskList for any task which doesn't match our taskID and only keeping those (exluding the taskID which matches)
        this.taskList = this.taskList.filter(task => task.id !== taskID);
        
    }
}

export default TaskManager;
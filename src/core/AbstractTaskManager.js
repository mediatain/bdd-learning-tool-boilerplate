export default class AbstractTaskManager {
    /** 
     * Add the task to the task list
     * @param {string} description The description of the new task
     * @throws new Error('Please provide a task description.') if the function has been called with an empty description param
    **/
    addTask(description) {
        throw new Error('not implemented');
    }
    /** 
     * Toggle a task. The task is identified by its id. If the task is marked as undone, toggling makes it done. If the task is marked as done, toggling makes it undone.
     * @param {string} taskID The id of the task to be toggled
    */
    toggleTask(taskID) {
        throw new Error('Not Implemented');
    }
    /** 
     * Dekete a task. The task is identified by its id. If the task is marked as undone, toggling makes it done. If the task is marked as done, toggling makes it undone.
     * @param {string} taskID The id of the task to be removed
    */
    deleteTask(taskID) {
        throw new Error('Not Implemented');
    }
}
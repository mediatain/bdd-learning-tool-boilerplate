import { When, Then } from 'cucumber';
import assert from 'assert';

  When('Max removes the task {string}', function (string) {
    const task = this.taskManager.taskList.find(task => task.description === string);
    this.taskManager.deleteTask(task.id);
  });

  Then('the task {string} should not be in the task list', function (string) {
    const removedTask = this.taskManager.taskList.find(task => task.description === string);

    const doesContain = this.taskManager.taskList.includes(removedTask);

    assert.equal(doesContain, false)
  });
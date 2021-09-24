import { Given, When, Then } from "cucumber";
import assert from 'assert';

//-----------------scenario 2
Given('Max has added a task {string}', function (string) {
    this.taskManager.addTask(string);
});

When('Max toggles the task {string}', function (string) {
    const task = this.taskManager.taskList.find(task => task.description === string);

    this.taskManager.toggleTask(task.id);
});

Then('the task {string} should be set to done', function (string) {
    // This is checking if the status has changed
    const task = this.taskManager.taskList.find(task => task.description === string);

    assert.equal(task.toggled, true);
});


//--------------scenario 1--------------
// We don't have to add the when statement here because it's already defined in add-task.js

Then('the task {string} should be set to undone', function (string) {
    // This sets task equal to the value of of the taskList's array element where the description property equals the string provided.
    const task = this.taskManager.taskList.find(task => task.description === string);

    // In any new task added, the toggle should be set to false
    assert.equal(task.toggled, false);
});
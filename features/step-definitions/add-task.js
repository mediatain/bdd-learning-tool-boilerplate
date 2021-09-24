import { Given, When, Then } from 'cucumber';
import assert from 'assert'

Given('Max has am empty task list', function () {
   // this.taskManager refrences the TaskManager Class 
   // Below is testing that the taskList within the new instance of a TaskManager object is === an empty array
   assert.deepStrictEqual(this.taskManager.taskList, [])
});

When('Max adds the task {string}', function (string) {
   // if a description / string is null, set it to an empty string
   if (string === null) {
      string = '';
   }

   // This tests if a new task is added or not
   try {
      this.taskManager.addTask(string);
   } catch (error) {
      this.recievedError = error;
   }
});

Then('{string} should be in the task list', function (string) {
   // This is testing that whenever a new task is added to the task list, its description should be a string
   assert.deepStrictEqual(this.taskManager.taskList[0].description, string);
});

Then('He should be notified to give a description', function () {
   // This is testing that if a task is created with an invalid description, the error given will be to provide a valid one.
   assert.equal(this.recievedError.message, 'Please provide a description');
});
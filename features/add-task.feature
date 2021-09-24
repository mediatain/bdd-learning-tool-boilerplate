Feature: Add task
              In order to remember a task
              As a user
              I want to be able to add a task to our task list
              
        Scenario: Max wants to add a task
            Given Max has am empty task list
             When Max adds the task "buy oat milk"
             Then "buy oat milk" should be in the task list
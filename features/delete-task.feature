Feature: Delete task
              In order to remove a task
              As a user
              I want to be able to remove a task from our task list
              
        Scenario: Max wants to remove a task
            Given Max has added a task "buy oranges"
             When Max removes the task "buy oranges"
             Then the task "buy oranges" should not be in the task list
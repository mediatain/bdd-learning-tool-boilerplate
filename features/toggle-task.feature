Feature: Toggle task
              In order to keep track of what I did
              As a user
              I want to be able to toggle a task from undone to done
              
        Scenario: Tasks are undone by default
             When Max adds the task "buy apples"
             Then the task "buy apples" should be set to undone

        Scenario: Toggle the task to done
            Given Max has added a task "buy apples"
             When Max toggles the task "buy apples"
             Then the task "buy apples" should be set to done
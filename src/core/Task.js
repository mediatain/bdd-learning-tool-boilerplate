import uuid from 'uuid/v4';

export default class Task {
    //In this constructor we pass in our description for the new instance of the Task class ( or a new task)
    constructor(description) {
        //Each Task will have a description
        this.description = description;
        //Each Task will have a random ID
        this.id = uuid();
        //false === undone
        this.toggled = false;
    }
}
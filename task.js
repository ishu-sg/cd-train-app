export class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    taskCompleted() {
        this.completed = !this.completed;
    }
}

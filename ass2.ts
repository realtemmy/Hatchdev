class Task {
    tasks: Set<string>;
    constructor() {
        this.tasks = new Set();
    }

    createTask(task: string) {
        if (!this.tasks.has(task)) {
            this.tasks.add(task);
        }
    }
    updateTask(oldTask: string, newTask: string) {
        if (this.tasks.has(oldTask)) {
            this.tasks.delete(oldTask);
            this.tasks.add(newTask);
        }
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
import Button from './../../../src/components/Button/Button.vue'
// import { v4 as uuidv4 } from 'uuid' // If using uuid for IDs

export default {
    name: "ToDO",
    data() {
        return {
            taskInput: "",
            todos: [],

        }
    },
    methods: {
        addToDo() {
            const taskTitle = this.taskInput.trim();
            if (taskTitle) {
                this.todos.push({
                    id: Math.random().toString(36).substring(2, 6),
                    "taskTitle": taskTitle
                })
            }

            console.log(JSON.stringify(this.todos))
        },
        addDone() {

        }
    }
}

/* import ToDoItem from './components/ToDoItem.vue'
import AddToDo from './components/AddToDo.vue'
import { v4 as uuidv4 } from 'uuid' // If using uuid for IDs

export default {
  components: {
    ToDoItem,
    AddToDo
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    addTask(newTask) {
      this.tasks.push({
        id: uuidv4() || Math.random().toString(36).substring(2, 15), // Generate unique ID
        text: newTask,
        completed: false
      })
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
} */

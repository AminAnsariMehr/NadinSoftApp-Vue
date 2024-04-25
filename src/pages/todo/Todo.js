import { onMounted } from 'vue';
import Button from './../../../src/components/Button/Button.vue'

export default {
    name: "ToDO",
    data() {
        return {
            taskInput: "",
            todosItem: "",
            todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
        }
    },
    methods: {
        // test(){
        //     // this.todos != [] ? this.todos
        //     if (this.todos){
        //         this.todos = this.todos
        //     }
        // }


        addToDo() {
            const taskTitle = this.taskInput.trim();
            if (taskTitle) {
                this.todos.push({
                    id: Math.random().toString(36).substring(2, 6),
                    "taskTitle": taskTitle
                })
            }
            localStorage.setItem("todos", JSON.stringify(this.todos))
            this.taskInput = "";
            console.log(todos.value)
        },
    }
}
s<template>
    <div class="todoPage" id="todoPage">
        <section class="todoApp">
            <header class="todoApp__header">My TODO</header>

            <div class="todoApp__innerContainer">
                <form class="todoApp__taskInputWrapper" @submit.prevent="addToDo">
                    <input type="text" class="todoApp__taskInput" v-model="taskInput" placeholder="Add a new task" />
                    <!-- <Button></Button> -->
                </form>

                <div class="todoApp__listsContainer">
                    <section class="todoListWrapper" id="tasksWrapper">
                        <header class="todoListWrapper__header">
                            <p class="todoListWrapper__title">Tasks to do</p>
                            <span>-</span>
                            <span class="todoListWrapper__tasksNumber" id="toDoTaskNumber">0</span>
                        </header>
                        <ul class="todoList" id="todoList">
                            <li class="todoList__todoItems" v-for="item in todos.length">
                                <span class="todoList__todoTask"></span>
                                <i class="fa-light fa-check todoList__todoCheckIcon"></i>
                                <i class="fa-light fa-pen-to-square todoList__todoEditIcon"></i>
                                <i class="fa-light fa-trash todoList__todoDeleteIcon"></i>
                            </li>
                        </ul>
                    </section>

                    <section class="doneListWrapper">
                        <header class="doneListWrapper__header">
                            <p class="doneListWrapper__title">Done</p>
                            <span>-</span>
                            <span class="doneListWrapper__tasksNumber" id="doneTaskNumber">0</span>
                        </header>
                        <ul class="doneList" id="doneList"></ul>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<style src="./Todo.css"></style>
<script src="./Todo.js"></script>

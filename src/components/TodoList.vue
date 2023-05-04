<template>
    <div class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allCompleted">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li :class="['todo', { completed: todo.completed },
                { editing: editTodo === todo }]" v-for="todo, index in showTodos" :key="index">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="todo.completed" />
                    <label @dblclick="handleEdit(todo)">{{ todo.title }}</label>
                    <button class="destroy" @click="deleteTodo(todo)"></button>
                </div>
                <input class="edit" type="text" v-model="todo.title" v-todo-focus="editTodo === todo"
                    @blur="handleEditDone(todo)" @keyup.enter="handleEditDone(todo)" @keyup.esc="handleEditCancel(todo)" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editTodo: null,
            beforeEditCache: '',
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        },
        select() {
            return this.$store.state.select;
        },
        showTodos() {
            return this.$store.getters.showTodos;
        },
        allCompleted: {
            get: function () {
                return this.todos.every(data => data.completed);
            },
            set: function (value) {
                this.$store.commit('setAllCompleted', value);
            }
        },
    },
    methods: {
        handleEdit(todo) {
            this.editTodo = todo;
            this.beforeEditCache = todo.title;
        },
        handleEditDone(todo) {
            if (todo.title.trim()) {
                this.editTodo = null;
                this.beforeEditCache = null;
            }
        },
        handleEditCancel(todo) {
            todo.title = this.beforeEditCache;
            this.editTodo = null;
            this.beforeEditCache = null;
        },
        deleteTodo(todo) {
            this.$store.commit('deleteTodo', todo)
        },
    },
    directives: {
        'todo-focus': function (el, binding) {
            if (binding.value) {
                el.focus()
            }
        }
    }
}
</script>

<style></style>
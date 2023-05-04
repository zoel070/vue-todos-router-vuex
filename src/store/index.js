import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [{
            title: '任务 一',
            completed: false,
        }, {
            title: '任务 二',
            completed: true,
        }, {
            title: '任务 三',
            completed: false,
        },
        {
            title: '任务 四',
            completed: true,
        },
        ],
        select: 'all',
    },
    getters: {
        hasCompleted: (state) => {
            return state.todos.some(data => data.completed);
        },
        allCompleted: (state) => {
            return state.todos.every(data => data.completed);
        },
        showTodos: (state) => {
            let select = state.select;
            return state.todos.filter(data => {
                if (select === 'all') {
                    return true
                } else if (select === 'active') {
                    return !data.completed
                } else if (select === 'completed') {
                    return data.completed
                }
            })
        }
    },
    mutations: {
        changeSelect(state, select) {
            state.select = select
        },
        addTodo(state, todo) {
            state.todos.push(todo)
        },
        removeCompleted(state) {
            state.todos = state.todos.filter(data => !data.completed)
        },
        setAllCompleted(state, status) {
            state.todos.forEach(data => data.completed = status)
        },
        deleteTodo(state, todo) {
            let index = state.todos.indexOf(todo);
            state.todos.splice(index, 1)
        },
    }
});

export default store;
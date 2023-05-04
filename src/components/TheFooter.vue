<template>
    <div class="footer">
        <span class="todo-count">
            <strong>3</strong> todo
        </span>
        <ul class="filters">
            <li><router-link to="/all" :class="{ selected: select == 'all' }"
                    @click="handleChangeSelect('all')">All</router-link></li>
            <li><router-link to="/active" :class="{ selected: select == 'active' }"
                    @click="handleChangeSelect('active')">Active</router-link></li>
            <li><router-link to="/completed" :class="{ selected: select == 'completed' }"
                    @click="handleChangeSelect('completed')">Completed</router-link></li>
        </ul>
        <button class="clear-completed" v-show="hasCompleted" @click="deleteDone">Clear completed</button>
    </div>
</template>

<script>
export default {
    computed: {
        select() {
            return this.$store.state.select
        },
        hasCompleted() {
            return this.$store.getters.hasCompleted
        },
    },
    methods: {
        handleChangeSelect: function (value) {
            this.$store.commit('changeSelect', value)
        },
        deleteDone() {
            this.$store.commit('removeCompleted')
        },
    },
}
</script>

<style></style>
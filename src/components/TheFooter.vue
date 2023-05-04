<template>
    <div class="footer">
        <span class="todo-count">
            <strong>3</strong> todo
        </span>
        <ul class="filters">
            <li><router-link to="/all" :class="{ selected: select == 'all' }"
                    @click.native="handleChangeSelect('all')">All</router-link></li>
            <li><router-link to="/active" :class="{ selected: select == 'active' }"
                    @click.native="handleChangeSelect('active')">Active</router-link></li>
            <li><router-link to="/completed" :class="{ selected: select == 'completed' }"
                    @click.native="handleChangeSelect('completed')">Completed</router-link></li>
        </ul>
        <button class="clear-completed" v-show="hasCompleted" @click="deleteDone">Clear completed</button>
    </div>
</template>

<script>
export default {
    created() {
        this.handleChangeSelect();
    },
    watch: {
        '$route': 'handleChangeSelect'
    },
    computed: {
        select() {
            return this.$store.state.select
        },
        hasCompleted() {
            return this.$store.getters.hasCompleted
        },
    },
    methods: {
        handleChangeSelect(value) {
            console.log("🚀 ~ file: TheFooter.vue:30 ~ handleChangeSelect ~ value:", value)
            this.$store.commit('changeSelect', value)
        },
        deleteDone() {
            console.log(123)
            this.$store.commit('removeCompleted')
        },
    },
}
</script>

<style></style>
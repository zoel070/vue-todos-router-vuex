<template>
  <div id="app">
    <div class="todoapp">
      <the-header />
      <todo-list />
      <the-footer />
    </div>
  </div>
</template>

<script>
import "@/assets/base.css";
import "@/assets/index.css";
import TheHeader from './components/TheHeader.vue';
import TodoList from './components/TodoList.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'app',
  components: { TheHeader, TodoList, TheFooter, },
}
</script>

<style></style>

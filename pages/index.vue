<template>
  <main>
    <h1>task board</h1>
    <p>create a list of tasks</p>
    <div class="create-new">
      <input v-model="newTask" type="text" placeholder="add a task" @keypress.enter="addTask">
      <button @click="addTask">Add</button>
    </div>
    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks" 
      :key="i"
      :task="task"/>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  data:() => {
    return {
      newTask: "",
    }
  },
  methods: {
    addTask() {
      if(this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask)
        this.newTask = ""
      }
    }
  }
})
</script>

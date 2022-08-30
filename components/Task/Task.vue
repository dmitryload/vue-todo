<template>
  <div :class="`task ${ task.isDone ? 'is-complete' : ''}`">
   <div class="content">
      {{task.value}}
   
   </div>
   <div class="buttons">
      <button @click="toggleTask">{{task.isDone ? "Undo" : "Done"}}</button>
      <button @click="deleteTask" class="delete">Delete</button>
   </div>
  </div>
</template>

<script lang="ts">
import { TaskType } from "~/types/types";

export default {
   props: ["task"],
   methods: {
      deleteTask(task: TaskType){
         this.$store.commit("REMOVE_TASK", this.task)
      },
      toggleTask(task: TaskType){
         this.$store.commit("TOGGLE_TASK", this.task)
      }
   }
}
</script>

<style>

</style>
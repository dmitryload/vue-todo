import { StateType, TaskType } from "~/types/types"

//state
export const state = (): StateType => ({
   tasks: []
})

//bll
export const mutations = {
   ADD_TASK(state: StateType,
      nameTask: string) {
      state.tasks = [{ value: nameTask, isDone: false }, ...state.tasks]
   },
   REMOVE_TASK(state: StateType,
      task: TaskType){
      state.tasks.splice(state.tasks.indexOf(task), 1)
   },
   TOGGLE_TASK(state: StateType,
      task: TaskType){
      task.isDone = !task.isDone
   }
}

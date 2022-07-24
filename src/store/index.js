import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tasks: JSON.parse(localStorage.getItem('vue-tasks')) ?? []
    }
  },
  getters: {
    activeTask(state){
      return state.tasks.filter(task => task.status === 'active' ||task.status === 'work' ).length
    },
    tasks(state) {
      return state.tasks
    },
    taskById(_, getters) {
      return id => getters.tasks.find(task => task.id === id)
    }
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('vue-tasks', JSON.stringify(state.tasks))
    },
    changeTask(state, task) {
      const index = state.tasks.findIndex(taskState => taskState.id === task.id)
      state.tasks[index] = task
      localStorage.setItem('vue-tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task) {
      if(task.date < new Date()) {
        task.status = 'deny'
      }
      commit('createTask', task)
    },
    changeTask({commit}, task) {
      commit('changeTask', task)
    }
  },
  modules: {
  }
})

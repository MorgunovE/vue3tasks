<template>
  <div class="card" v-if="task">
    <h2>{{task.title}}</h2>
    <p><strong>Status</strong>:
      <AppStatus :type="task.status"/>
    </p>
    <p><strong>DeadLine</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Description</strong>: {{task.description}}</p>
    <div>
      <button class="btn mb20" @click="changeStatus('work')">in work</button>
      <button class="btn primary mb20"  @click="changeStatus('completed')">completed</button>
      <button class="btn danger mb20" @click="changeStatus('deny')">deny</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    task with id = <strong>{{idTask}}</strong> no.
  </h3>
</template>

<script>
  import AppStatus from '../components/AppStatus'
  import {useStore} from 'vuex'
  import {computed} from 'vue'
  
  export default {
    props: ['id'],
    setup(props) {
      const store = useStore()
      const idTask = props.id
      const task = computed(() => store.getters.taskById(idTask))
      
      function changeStatus(status) {
        const newStatus = {...task.value, status}
        store.dispatch('changeTask', newStatus)
      }
      
      return {
        idTask,
        task,
        changeStatus
      }
    },
    components: {AppStatus}
  }
</script>

<style scoped>

</style>

<template>
  <h1 class="text-white center" v-if="tasks.length === 0">No tasks</h1>
  <template v-else>
    <h3 class="text-white">Active tasks: {{activeTasks}}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{new Date(task.date).toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="open(task.id)">Read</button>
    </div>
  </template>
</template>

<script>
  import AppStatus from '../components/AppStatus'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'
  import {computed} from 'vue'
  
  export default {
    name: 'TasksView',
    setup() {
      const store = useStore()
      const router = useRouter()
      const tasks = computed(() => store.getters.tasks)
      const activeTasks = computed(() => store.getters.activeTask)
      
      return {
        tasks,
        activeTasks,
        open: id => router.push(`/task/${id}`)
      }
    },
    components: {AppStatus}
  }
</script>

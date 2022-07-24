<template>
  <form class="card" @submit.prevent="submit">
    <h1>Create new task</h1>
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title">
    </div>
    
    <div class="form-control">
      <label for="date">Deadline</label>
      <input type="date" id="date" v-model="date">
    </div>
    
    <div class="form-control">
      <label for="description">description</label>
      <textarea id="description" v-model="description"></textarea>
    </div>
    
    <button class="btn primary" :disabled="!isValid">Create</button>
  </form>
</template>


<script>
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'
  import {ref, computed} from 'vue'
  
  export default {
    setup() {
      const store = useStore()
      const router = useRouter()
      const title = ref('')
      const date = ref(null)
      const description = ref('')
      const isValid = computed(() => {
        return title.value !== ''
          && date.value
          && description.value !== ''
      })
      
      function submit() {
        const newTask = {
          id: Math.random().toString(),
          title: title.value,
          date: new Date(date.value),
          description: description.value,
          status: 'active'
        }
        
        store.dispatch('createTask', newTask)
        router.push('/')
      }
      
      return {
        title,
        date,
        description,
        isValid,
        submit
      }
    }
  }
</script>

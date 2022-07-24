<template>
  <span :class="['badge', className]">{{text}}</span>
</template>

<script>
  import {ref, watch} from 'vue'
  
  export default {
    props: {
      type: {
        type: String,
        validator(value) {
          return ['active', 'completed', 'work', 'deny'].includes(value)
        }
      }
    },
    setup(props) {
      const classes = {
        active: 'primary',
        deny: 'danger',
        completed: 'primary',
        work: 'warning'
      }
      const texts = {
        active: 'Active',
        deny: 'Deny',
        completed: 'Completed',
        work: 'in Work'
      }
      const className = ref(classes[props.type])
      const text = ref(texts[props.type])
      
      watch(props, value => {
        className.value = classes[value.type]
        text.value = texts[value.type]
      })
      
      return {
        className,
        text
      }
    }
  }
</script>

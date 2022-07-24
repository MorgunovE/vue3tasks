<template>
  <header class="navbar">
    <strong>Vue tasks</strong>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Main</router-link>
      </li>
      <li>
        <router-link to="/new">Create task</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "TheNavbar"
  }
</script>

<style scoped>

</style>

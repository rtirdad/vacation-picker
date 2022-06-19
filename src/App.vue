<template>

  <div class="container-fluid">
    <main-navigation></main-navigation>
    <router-view />
  </div>

</template>

<script>
import MainNavigation from "@/components/MainNavigation";
export default {
  name: 'App',
  components: {MainNavigation}
}

</script>

<style>

</style>

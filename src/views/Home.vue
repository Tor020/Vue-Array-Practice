<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Vue with Router/Sass/Pug/Webpack3"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

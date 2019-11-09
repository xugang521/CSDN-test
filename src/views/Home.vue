<template>
  <div class="home">
    <div>
      <news></news>
    </div>
    <div></div>
    
  </div>
</template>

<script>

// @ is an alias to /src
import News from '@/components/news.vue'

export default {
  name: 'home',
  components: {
    news:News
  }
}
</script>

<style scoped>
    .home{
      display:flex;
    }
</style>
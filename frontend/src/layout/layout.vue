<template>
  <div class="layout">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './component/Header/Header.vue';
export default {
  components: { Header },
};
</script>
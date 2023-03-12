<template>
  <div class="layout">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./component/header/Header.vue";
import Footer from "./component/footer/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

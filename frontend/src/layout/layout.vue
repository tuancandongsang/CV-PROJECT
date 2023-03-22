<template>
  <div class="layout">
    <Header />
    <router-view></router-view>
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import Header from "./component/header/Header.vue";
import Footer from "./component/footer/Footer.vue";
import BackToTop from "@/components/backtotop/BackToTop.vue";
export default {
  components: { Header, Footer, BackToTop },
};
</script>

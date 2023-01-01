<template>
  <v-app class="style-app">
    <Header class="style-header" />

    <router-view class="style-router-view"/>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  data: () => ({}),
};
</script>


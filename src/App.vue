<template>
  <div id="app">
    <Navigation />
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>
<style>
#app {
  font-family: poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  background-color: #d2e8fd;
  /* background-image: linear-gradient(to bottom, #e8f2fd, #ebf4fd, #eef6fd, #f2f8fe, #f5fafe, #f7fbfe, #f8fbfe, #fafcfe, #fafcfe, #fafcfe, #fafcfe, #fafcfe); */
  background-attachment: fixed;
  background-image: url("./assets/images/cheese.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

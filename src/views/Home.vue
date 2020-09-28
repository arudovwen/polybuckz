<template>
  <div class="home">
    <Banner />
    <Category />
    <About/>
    <Team />
    <Portfolio />
     <Testimonial />
    <Contact/>
    <Footer/>
   
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
import Banner from "@/components/Banner.vue";
import Category from "@/components/Category.vue";
import Testimonial from "@/components/Testimonial.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";

import Team from "@/components/Team.vue";

import Footer from "@/components/Footer.vue";


export default {
  name: "Home",
  components: {
    Banner,
    Category,
    Testimonial,
    Portfolio,
    Contact,
    About,
    Team,
    Footer
  },
};
</script>
<style scoped>

</style>

<template>
  <section>
    <h2>
      Not sure you believe us? Here's what
      <br />some of our clients have to say:
    </h2>
    <div class="testimonial">
      <div class="image-icons "><b-avatar class="shadow-sm" icon="person-circle"  :size="num1"></b-avatar></div>
      <div class="image-icons "><b-avatar class="shadow-sm" icon="person-circle" :size="num"></b-avatar></div>
      <div class="image-icons "><b-avatar class="shadow-sm" icon="person-circle" :size="num1"></b-avatar></div>
      <div class="image-icons "><b-avatar class="shadow-sm" icon="person-circle" :size="num"></b-avatar></div>
      <div class="image-icons "><b-avatar  class="shadow-sm" icon="person-circle" :size="num"></b-avatar></div>
      <div class="image-icons "><b-avatar class="shadow-sm" icon="person-circle" :size="num1"></b-avatar></div>
      <div class="mywords">
        <div class="dot-1"></div>
        <div class="dot-2"></div>
        <div class="testimony shasow-sm text-center">
          <b-icon class="icon-quote" icon="chat-quote" scale="10"></b-icon>
          <div class="text">
            <swiper :options="swiperOption">
              <swiper-slide>
                <h5>John Doe</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus obcaecati blanditiis nemo reiciendis aspernatur incidunt odio esse, nulla tempora minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, voluptatum.</p>
              </swiper-slide>
              <swiper-slide>
                <h5>Jane Doe</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus obcaecati blanditiis nemo reiciendis aspernatur incidunt odio esse, nulla tempora minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, voluptatum.</p>
              </swiper-slide>
              <swiper-slide>
                <h5>Jane Doe</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus obcaecati blanditiis nemo reiciendis aspernatur incidunt odio esse, nulla tempora minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, voluptatum.</p>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";


export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
           dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      num:'6rem',
      num1:'5rem'
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    if(window.innerWidth < 600){
      this.num = '2.5rem'
      this.num1 ='2.7rem'
    }
  },
};
</script>
<style scoped>
section {
  height: 100vh;
  background-color: #e8f2fd;
  padding-top: 50px;
  padding-bottom: 40px;
}
section h2 {
  font-weight: bold;
  padding: 10px 50px;
  text-align: center;
  color: var(--text-color);
}
.testimonial {
  width: var(--main-width);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin: 0 auto;
  position: relative;
}
.swiper-slide{
  padding: 30px;
}
.mywords {
  position: relative;
  width: 60%;
  height: 50%;
}
.testimony {
  background: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  border-radius: 8px;
}
.icon-quote {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
}
.testimonial .image-icons:nth-child(1) {
  position: absolute;
  top: 10%;
  left: 10%;
}
.testimonial .image-icons:nth-child(2) {
  position: absolute;
  top: 10%;
  right: 10%;
}
.testimonial .image-icons:nth-child(3) {
  position: absolute;
  bottom: 10%;
  left: 10%;
}
.testimonial .image-icons:nth-child(4) {
  position: absolute;
  bottom: 10%;
  right: 10%;
}
.testimonial .image-icons:nth-child(5) {
  position: absolute;
  top: 50%;
  left: 0;
}
.testimonial .image-icons:nth-child(6) {
  position: absolute;
  top: 50%;
  right: 0;
}
h5 {
  font-weight: bold;
  color: var(--text-color);
}
p {
  color: var(--text-color);
}
.dot-1 {
  width: 180px;
  height: 200px;
  position: absolute;
  top: -30px;
  right: -42px;
  background-color: transparent;
  background-image: url("../assets/images/square3.svg");
  z-index: 1;
}
.dot-2 {
  width: 180px;
  height: 200px;
  position: absolute;
  bottom: -42px;
  left: -30px;
  background-color: transparent;
  background-image: url("../assets/images/square3.svg");
  z-index: 1;
}
@media (max-width: 768px) {
 .mywords{
   width:100%;
 }
 section{
   padding-top: 100px;
   bottom:75px;
 }
 section h2{
   padding:10px 10px;
 }
 .testimonial .image-icons:nth-child(1) {
  position: absolute;
  top: 10%;
  left: 10%;
}
.testimonial .image-icons:nth-child(2) {
  position: absolute;
  top: 10%;
  right: 10%;
}
.testimonial .image-icons:nth-child(3) {
  position: absolute;
  bottom: 10%;
  left: 10%;
}
.testimonial .image-icons:nth-child(4) {
  position: absolute;
  bottom: 10%;
  right: 10%;
}
.testimonial .image-icons:nth-child(5) {
  position: absolute;
  top: 50%;
  left: -35px;
}
.testimonial .image-icons:nth-child(6) {
  position: absolute;
  top: 50%;
  right: -35px;
}
}
</style>
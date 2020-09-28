<template>
  <section >
    <b-modal id="overview" :title="item.title" size="lg" hide-footer>
       <div class="text-center">
          <b-img :src="item.source" class="mb-4" fluid-grow></b-img>

        <h5 class="mb-3">Description</h5>
        <p>{{item.description}}</p>
       </div>
    </b-modal>
    <div id="portfolio">
      <h2 class="text-center mb-4">Our Gallery</h2>
    <div class="row shadow-sm">
      <div class="column">
        <img class="img" @click="show(item)" :src="item.source" v-for="(item,idx) in first" :key="idx"/>
       
      </div>
      <div class="column">
        <img  class="img" @click="show(item)" :src="item.source" v-for="(item,idx) in second" :key="idx"/>
       
      </div>
       <div class="column">
        <img  class="img" @click="show(item)" :src="item.source" v-for="(item,idx) in third" :key="idx"/>
       
      </div>
      <div class="column">
        <img  class="img" @click="show(item)" :src="item.source" v-for="(item,idx) in fourth" :key="idx"/>
       
      </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items:[],
      item:{}
    }
  },
  created() {
    this.getImages()
  },
  computed: {
    first(){
     return this.items.filter(item=>item.col==1)
    },
     second(){
     return this.items.filter(item=>item.col==2)
    },
    third(){
     return this.items.filter(item=>item.col==3)
    },
    fourth(){
     return this.items.filter(item=>item.col==4)
    }
  },
  methods: {
    show(item){
      this.item= item
      this.$bvModal.show('overview')
    },
     getImages() {
      this.axios.get("https://polybuckz-api.herokuapp.com/gallery").then((res) => {
        if (res.status == 200) {
          this.items = res.data;
        }
      });
    },
     getImage(id) {
      this.axios.get(`https://polybuckz-api.herokuapp.com/gallery/${id}`).then((res) => {
        if (res.status == 200) {
          this.item = res.data;
        }
      });
    },
  },
}
</script>
<style scoped>
section{
 background-image: url("../assets/images/pattern1.svg");
}
#portfolio {
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 100px 0 75px;
 
}
.img:hover{
  transform: scale(1.03);
  cursor: pointer;
}
h2 {
  font-weight: bold;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  max-height: 90%;
  overflow: auto;
  background: #fcfdfd;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
<template>
  <div id="team">
    <h2 class="text-center mb-5">Our Team</h2>
    <div class="box">
      <div class="team-box shadow" v-if="team.length > 0">
        <div class="team-img">
          <b-img fluid-grow :src="team[0].profile"></b-img>
        </div>
        <div class="team-info">
          <h5>{{ team[0].title }}</h5>
          <p>{{ team[0].description }}</p>
        </div>
      </div>
      <div class="team-box shadow" v-if="team.length > 1">
        <div class="team-img">
          <b-img fluid-grow :src="team[0].profile"></b-img>
        </div>
        <div class="team-info">
          <h5>{{ team[0].title }}</h5>
          <p>{{ team[0].description }}</p>
        </div>
      </div>
      <div class="team-box shadow" v-if="team.length > 2">
        <div class="team-img">
          <b-img fluid-grow :src="team[0].profile"></b-img>
        </div>
        <div class="team-info">
          <h5>{{ team[0].title }}</h5>
          <p>{{ team[0].description }}</p>
        </div>
      </div>
      <div class="team-box shadow" v-if="team.length > 3">
        <div class="team-img">
          <b-img fluid-grow :src="team[0].profile"></b-img>
        </div>
        <div class="team-info">
          <h5>{{ team[0].title }}</h5>
          <p>{{ team[0].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [],
    };
  },
  created() {
    this.getTeams();
    this.check();
  },
  methods: {
    getTeams() {
      this.axios.get("https://polybuckz-api.herokuapp.com/team").then((res) => {
        if (res.status == 200) {
          this.team = res.data;
        }
      });
    },
    check() {
      this.axios.get("https://polybuckz-api.herokuapp.com").then((res) => {
        if (res.status == 200) {
          res;
        }
      });
    },
  },
};
</script>
<style scoped>
#team {
  padding: 100px 0 75px;
  width: 80%;
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h2 {
  font-weight: bold;
  padding: 10px 50px;
  text-align: center;
  color: var(--text-color);
}
.box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 0 auto;
  padding: 20px 0;
}
.team-box {
  height: 200px;
  background-color: #fff;
  position: relative;
  border-radius: 10px;
}
.team-img {
  position: absolute;
  width: 100px;
  height: 100px;
  top: -50px;
  left: 50%;
  margin-left: -50px;
  background-color: green;
  border-radius: 50rem;
  overflow: hidden;
}
.team-info {
  margin-top: 80px;
}
@media (max-width: 600px) {
  .box {
    grid-template-columns: 1fr;
    width: 100%;
    grid-row-gap: 80px;
    padding: 20px 0;
  }
}
</style>
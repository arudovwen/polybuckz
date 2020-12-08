<template>
  <div id="nav" :class="{ 'bg-white': changeBg }">
    <div id="mynav">
      <div id="logo">
        <router-link to="/">
          <b-icon class="icon mr-2" icon="bullseye"></b-icon>
          <span>PolybuckZ</span>
        </router-link>
      </div>
      <span
        class="d-flex justify-content-start align-items-center mobile menu"
        @click="toggleMenu"
      >
        <button
          class="hamburger hamburger--collapse mobile"
          tabindex="0"
          aria-label="Menu"
          role="button"
          aria-controls="navigation"
          :class="{ 'is-active': show }"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <!-- <strong>Menu</strong> -->
      </span>
      <div
        id="sub-nav"
        v-if="show"
        class="animated"
        :class="{ slideInDown: show }"
      >
        <a v-if="$route.path == '/'" class="mr-sm-4" href="#about">About</a>
        <a v-else class="mr-sm-4" href="/#about">About</a>
        <a class="mr-sm-4" href="#team">Team</a>

        <a v-if="$route.path == '/'" href="#portfolio" class="mr-sm-4"
          >Gallery</a
        >
        <a v-else href="/#portfolio" class="mr-sm-4">Gallery</a>
        <router-link class="mr-sm-4" to="/blog">Blog</router-link>
        <a v-if="$route.path == '#contact'" class href="#contact">
          Contact us
        </a>
        <a v-else class="mr-sm-4" href="/#contact"> Contact us </a>
       
         <b-button v-if='authenticated' v-on:click='logout' variant="mypry" size="sm" id='logout-button'> Logout </b-button>
    <b-button v-else v-on:click='login' variant="mypry" size="sm" id='login-button'> Login </b-button>
      </div>
    </div>
    <div class="scroll shadow-sm" v-if="hideScroll">
      <b-icon icon="arrow-bar-up" class="up-icon" @click="scrollUp"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      scrollPos: 0,
      changeBg: false,
      hideScroll: false,
      authenticated: false,
       claims: '',
    };
  },
  created() {
    this.isAuthenticated();
    if (window.innerWidth < 600) {
      this.show = false;
    }

    window.addEventListener("scroll", () => {
      this.scrollPos = window.scrollY;
    });
  },
  watch: {
    scrollPos: "toggleScroll",
    $route: "isAuthenticated",
  },
  methods: {
    login () {
      this.$auth.loginRedirect('/admin')
    },
     async setup () {
      this.claims = await this.$auth.getUser()
    },
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
    async logout() {
      await this.$auth.logout();
      await this.isAuthenticated();

      // Navigate back to home
      this.$router.push({ path: "/" });
    },
    scrollUp() {
      window.scrollTo(0, 0);
    },
    toggleMenu() {
      this.show = !this.show;
    },
    toggleScroll() {
      if (window.scrollY > window.innerHeight * 0.1) {
        this.changeBg = true;
      } else {
        this.changeBg = false;
      }

      if (window.scrollY > window.innerHeight * 0.6) {
        this.hideScroll = true;
      } else {
        this.hideScroll = false;
      }
    },
  },
};
</script>

<style scoped>
#nav {
  padding: 20px 0;
  position: relative;
}
.scroll {
  position: fixed;
  bottom: 50px;
  right: 20px;
  background: #2c3e50;
  opacity: 0.5;
  padding: 10px;
  border-radius: 5px;
  z-index: 999;
}
.up-icon {
  color: #fff;
}
.scroll:hover {
  opacity: 1;
}
.img-two {
  position: absolute;
  width: 50%;
  height: 70%;
  background-color: transparent;
  background-image: url("../assets/images/square3.svg");
  right: 0;
  top: 0;
  z-index: 1;
}
#mynav {
  display: flex;
  justify-content: space-between;
  width: var(--main-width);
  margin: 0 auto;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #206da6;
}
#logo a {
  font-weight: bold;
  font-size: 24px;
  color: #2c3e50;
}
#logo a span {
  color: #2c3e50;
}
.icon {
  color: #206da6;
}
.mobile {
  display: none;
}
@media (max-width: 600px) {
  #sub-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    background-color: #fff;
    top: 0;
    z-index: 2;
    padding: 20px;
  }
  #sub-nav a {
    margin-bottom: 20px;
    margin-right: 0 !important;
  }
  .mobile {
    display: block;
  }
  .menu {
    z-index: 999;
  }
  #nav {
    position: fixed;
    width: 100%;
    z-index: 2;
    padding: 20px 0;
  }
}
</style>
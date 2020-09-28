<template>
  <footer>
    <div class="footer text-left">
      <div>
        <div class="logo mb-3">
          <b-icon class="icon" icon="bullseye"></b-icon> <span> POLYBUCKZ</span>
        </div>
        <p>Email : example@email.com</p>
        <p>Phone no : 090923494949</p>
        <p>Address : 10, example street, lagos</p>
      </div>

      <div class="socials">
        <h5>Social</h5>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Whatsapp</p>
      </div>

      <div class="socials">
        <h5>Our App</h5>
        <div>Playstore</div>
        <div>Appstore</div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background: #206da6;
  padding: 75px 0 50px;
  color: #fcfdfd;
}
.footer {
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
}
.logo {
  font-weight: bold;
  font-size: 28px;
}
h5 {
  font-weight: bold;
}
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
  }
}
</style>
<template>
  <div class="b1">
    <div class="top-box text-center">
      <h2>You Can Always Count On Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quam!consectetur adipisicing elit. Voluptatum, quam!consectetur adipisicing elit. Voluptatum, quam!consectetur adipisicing elit. Voluptatum, quam!</p>
    </div>
    <div class="down-box">
      <div class="right-item">
        <div class="d-flex  align-items-start justify-content-center">
          <div class="mr-3"><img class="icon" src="../assets/images/house.svg" alt=""></div>
          <div>
            <h6>Lorem ipsum dolor sit amet</h6>
            <p>consectetur adipisicing elit. Praesentium, cupiditate!</p>
          </div>
        </div>
        <div class="d-flex">
           <div  class="mr-3"><img class="icon" src="../assets/images/paint-roller.svg" alt=""></div>
          <div>
            <h6>Lorem ipsum dolor sit amet</h6>
            <p>consectetur adipisicing elit. Praesentium, cupiditate!</p>
          </div>
        </div>
        <div class="d-flex">
           <div  class="mr-3"><img class="icon" src="../assets/images/sketch.svg" alt=""></div>
          <div>
            <h6>Lorem ipsum dolor sit amet</h6>
            <p>consectetur adipisicing elit. Praesentium, cupiditate!</p>
          </div>
        </div>
      </div>

      <div class="left-item">
        <img class="img-three" src="../assets/images/6.png" width="100%" alt />
      </div>
    </div>
  </div>
</template>

<style scoped>
.b1 {
  width: 100%;
  background: #fcfdfe;
  padding: 100px 0 75px;
}

.top-box {
  width: 65%;
  margin: 0 auto;
  margin-bottom: 60px;
}
.top-box h2 {
  color: var(--text-color);
  font-weight: bold;
}
.down-box {
  width: 65%;
  display: flex;
  margin: 0 auto;
  height: 400px;
}
.left-item {
  width: 50%;
  padding: 10px;
}
.right-item {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
p,
h6 {
  color: var(--text-color);
}
h6 {
  font-weight: bold;
}
.icon{
  width: 70px;
}
@media(max-width:600px){
  .top-box{
    width: 80%;
  }
 .down-box{
   width:80%;
   flex-direction: column-reverse;
   height: auto;
 }
 .right-item{
   width:100%;
   margin: 0 auto;
 }
 .left-item{
   width: 80%;
   margin: 0 auto 40px;
 }
}
</style>
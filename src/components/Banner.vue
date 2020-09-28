<template>
   <div class="main">
         <img class="img-three animated slideInUp slow"  src="../assets/images/7.png" alt="">
        <div class="banner-container">
         
        <div class="text-box">
            <h1>Lorem, ipsum dolor. Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id architecto earum quis deserunt! Error pa animi necessitatibus aliquid esse atque ab laborum dignissimos eos </p>
            <p>Lorem ipsum dolor sidipisicing elit. Quae, unde voluptatem aut eius soluta eum. Velit, dolore? Fugit, iure eveniet!</p>
            </div> 
        <div class="img-box"> 
            <!-- <img class="img-one" src="../assets/images/blob.svg" width="100%" alt="">
            <div class="img-two"></div> -->
        
           
        </div>
    </div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.main{
    position: relative;
     overflow: hidden;
}
.banner-container{
     width:var(--main-width);
    margin: 0 auto;
    display: flex;
    height: 70vh;
    padding: 80px 0 0;
    position: relative;
   

}
.text-box{
    width: 40%;
    position: relative;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.img-box{
    width: 60%;
    position: relative;
    text-align: left;
    display: flex;
    align-items: center;
  
}
.img-one{
    position: absolute;
transform: rotate(-140deg);
z-index: 2;
right: -70px;
}

.img-three{
    position: absolute;
    width: 100%;
    /* z-index: 3; */
    top: -15%;
    left: 40%;
}
h1{
    color:#3e455d;
    font-weight: bold;
    line-height: 1.6;
}
p{
     color:#3e455d;
}
@media(max-width:600px){
    h1{
        font-size: 32px;
    }
    .banner-container{
      flex-direction: column;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
    }
    .text-box{
        width: 100%;
    }
    .img-three{
    bottom: -15%;
    top: unset;
    }
    .banner-container{
        height: 90vh;
    }
}
</style>
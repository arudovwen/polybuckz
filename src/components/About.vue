<template>
    <div id="about">
        <img src="../assets/images/blob.svg" class="img-1" alt="">
          <img src="../assets/images/blob2.svg" class="img-2" alt="">
            <img src="../assets/images/blob1.svg" class="img-3" alt="">
              <img src="../assets/images/blob1.svg" class="img-4" alt="">
          <h2 class="mb-5">About the Ceo</h2>
        <div class="box shadow">
          <div class="img mb-3"> <b-avatar  src="" size="200px"></b-avatar></div>
          <div class="text">
            <h4>John Snow</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere dignissimos mollitia quaerat quo rem optio quisquam eum beatae fuga.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere dignissimos mollitia quaerat quo rem optio quisquam eum beatae fuga.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere dignissimos mollitia quaerat quo rem optio quisquam eum beatae fuga.</p>
          </div>
        </div>
    </div>
</template>
<style scoped>
#about{
    min-height:80vh;
     background-color: #e8f2fd;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     position: relative;
     padding-bottom:60px;
     padding-top: 60px;
}
 h2 {
  font-weight: bold;
  padding: 10px 50px;
  text-align: center;
  color: var(--text-color);
}
.box{
    width: 40%;
    height: auto;
    background:white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:40px 20px;
    border-radius: 5px;
}
.img{
    width: 200px;
    height:200px;
    border-radius: 50rem;
    top: -100px;
    left: -100px;
    overflow: hidden;
}
.img img{
    width: 100%;
    height: 100%;
}
.text{
    width: 70%;
}
.img-1{
position: absolute;
top: 40px;
left: 40px;
height: 80px;
width: 80px;
}
.img-2{
  position: absolute;
top: 40px;
right: 40px; 
height: 80px;
width: 80px; 
}
.img-3{
  position: absolute;
bottom: 40px;
left: 40px;  
height: 80px;
width: 80px;
}
.img-4{
  position: absolute;
bottom: 40px;
right: 40px;  
height: 80px;
width: 80px;
transform: rotate(45deg);
}
@media(max-width:600px){
    .box{
        width: 80%;
    }
    .text{
        width:100%
    }
    .img-1{
position: absolute;
top: 40px;
left: 0px;
height: 80px;
width: 80px;
}
.img-2{
  position: absolute;
top: 40px;
right: 0px; 
height: 80px;
width: 80px; 
}
.img-3{
  position: absolute;
bottom: 40px;
left: 0px;  
height: 80px;
width: 80px;
}
.img-4{
  position: absolute;
bottom: 40px;
right: 0px;  
height: 80px;
width: 80px;
transform: rotate(45deg);
}
}
</style>
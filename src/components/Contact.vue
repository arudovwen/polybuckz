<template>
   <section id="contact">
      <div class="text-center mb-5">
           <h2 >Get In Touch</h2>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat assumenda ratione ut nostrum, ipsum minima.</p>
      </div>
     <div class="f1">
     <div class="image shadow-sm">
         
     </div>
     <div class="contact">
         <b-form @submit.prevent="sendmail" class="w-100 p-sm-3">
            <b-form-row>
                <b-col cols="12">
                     <b-form-group>
                         <b-form-input required v-model="contact.name" placeholder="Full name"></b-form-input>
                     </b-form-group>
                </b-col>
            </b-form-row>
             <b-form-row>
                <b-col>
                     <b-form-group>
                         <b-form-input  v-model="contact.email" type="email" placeholder="Email"></b-form-input>
                     </b-form-group>
                </b-col>
            </b-form-row>
              <b-form-row>
                <b-col>
                     <b-form-group>
                         <b-form-input  v-model="contact.phone" type="number" placeholder="Phone no"></b-form-input>
                     </b-form-group>
                </b-col>
            </b-form-row>
             <b-form-row>
                
                <b-col>
                     <b-form-group>
                         <b-form-input required v-model="contact.subject" type="text" placeholder="Subject"></b-form-input>
                     </b-form-group>
                </b-col>
            </b-form-row>
             <b-form-row>
                <b-col>
                     <b-form-group>
                        <b-form-textarea required v-model="contact.message" rows="6" placeholder="Message"></b-form-textarea>
                     </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col class="text-center">
                    <b-button variant="mypry" size="sm" class="px-5 py-2" type="submit" >  Submit   <b-spinner v-if="show" class="ml-2" style="width:1rem;height:1rem" type="grow" label="Spinning"></b-spinner></b-button>
                </b-col>
            </b-form-row>
         </b-form>
     </div>
     </div>
   </section>
</template>
<script>
export default {
    data() {
        return {
            contact:{
                name:'',
                email:'',
                subject:'',
                message:'',
                phone:''

            },
            show:false
        }
    },  
    methods: {
        sendmail(){
            this.show = true
            this.axios.post('http://localhost:3000/sendmail',this.contact).then(res=>{
            if (res.status ==200) {
                this.$toasted.info('Message sent !')
                this.contact = {
                name:'',
                email:'',
                subject:'',
                phone:'',
                message:''

            }
            this.show = false
            }
 
            })
        }
    },
}
</script>
<style scoped>
section{
    padding: 100px 0 75px;
    background: #fff;
}
.f1{
    display: flex;
    width: 80%;
    margin: 0 auto;
    height: 450px;
    justify-content: space-between;
}
.image{
    width: 48%;
    background-image: url('../assets/images/3.jpg');
    background-size: cover;
    border-radius: 15px;
}
.contact{
      width:48%;
      display: flex;
      align-items: center;
}
h2{
    font-weight: bold;
}
.form-control{
    background: #e8f2fd;
    border: unset;
    border-radius: 8px;
}
.img-three{
    object-fit: cover;
}
@media (max-width: 768px) {
  .f1 {
    flex-direction: column;
    height: auto;
  }
  .image{
      width:100%;
      height: 200px;
      margin-bottom: 30px;
  }
  .contact{
        width:100%;
  }
}
</style>
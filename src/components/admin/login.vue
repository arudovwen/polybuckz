<template>
    <div id="login">
        <b-form class="text-left shadow">
            <legend class="mb-3 text-center">Login</legend>
            <b-form-group label="Email">
                <b-form-input placeholder="Enter email"></b-form-input>
            </b-form-group>
             <b-form-group label="Password">
                <b-form-input placeholder="Enter password" type="password"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-button block>Login</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#login{
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
form{
    background-color: #fff;
    padding:20px;
    width: 400px;
    border-radius: 10px;
}
</style>
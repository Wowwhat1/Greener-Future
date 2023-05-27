<template>
    <div>
        <h1>Register</h1>
        <input type="email" name ="email" v-model="email" placeholder="email">
        <br>
        <input type="password" name="password" v-model="password" placeholder="password">
        <br>
        <div class="error" v-html="error"></div>
        <button @click="register">Register</button>
    </div>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'   
    export default {
        data () {
            return {
                email: '',
                password: '',
                error: null
            }
        },
        watch: {
            email (val) {
                console.log(val)
            }
        },
        methods: {
            async register () {
                try {
                    const response = await AuthenticationService.register({
                        email: this.email,
                        password: this.password 
                    })
                    console.log(response.data)
                } catch (error) {
                    this.error = error.response.data.error  
                }   
            }
        },
        mounted() {
            setTimeout(() => {
                this.email = 'Hello world'
            }, 1000)
        },
    }
</script>

<style scoped> 
    .error {
        color: red;
    }   
</style>
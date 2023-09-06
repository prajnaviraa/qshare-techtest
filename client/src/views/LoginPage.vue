<template>
    <div class="container">
        <h1 class="pageTitle">Login</h1>
        <p style="text-align: center;">Don't have an account? <a style="text-decoration: underline;"
                @click.prevent="$router.push('/register')">Register
                here</a></p>
        <form @submit.prevent="loginHandler(user)">
            <div class="col-12 col-lg-4 offset-lg-4 my-5">
                <label for="email" class="col-sm-5 col-form-label">Email</label>
                <input type="text" class="form-control" id="email" placeholder="insert email here.." required
                    v-model="user.email"><br>
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="insert password here.." required
                    v-model="user.password">
                <br><br>
                <button type="submit" class="btn btn-primary form-btn w-100">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useOrderStore } from '../stores/counter'

export default {
    data() {
        return {
            user: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(useOrderStore, ['loginHandler', 'fetchLoggedInStatus']),
    },
    created() {
        this.fetchLoggedInStatus()
    }
}
</script>

<style scoped>
.pageTitle {
    text-align: center;
    margin: 50px;
}
</style>
<template>
    <div class="container">
        <h1 class="pageTitle">Register</h1>
        <p style="text-align: center;">If you're a registered customer, please <a style="text-decoration: underline;"
                @click.prevent="$router.push('/login')">login
                here</a></p>

        <form @submit.prevent="registerHandler(user)">
            <div class="col-12 col-lg-4 offset-lg-4 my-5">
                <label for="username" class="col-sm-2 col-form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="insert username here.." required
                    v-model="user.username"><br>
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="insert email here.." required
                    v-model="user.email"><br>
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="insert password here.." required
                    v-model="user.password"><br>
                <button type="submit" class="btn btn-primary form-btn w-100">Register</button>
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
                username: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(useOrderStore, ['registerHandler', 'fetchLoggedInStatus']),
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
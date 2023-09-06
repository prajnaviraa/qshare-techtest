<template>
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid" id="custNavBar">
            <a class="navbar-brand" @click.prevent="$router.push('/')">E-Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" @click.prevent="$router.push('/orderForm')">New
                            Order</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" @click.prevent="$router.push('/')">My
                            Orders</a>
                    </li>
                </ul>
                <button type="button" class="btn btn-outline-danger" style="margin: 5px;" v-if="isLoggedIn === true"
                    @click.prevent="logoutHandler()">Logout</button>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useOrderStore } from '../stores/counter'


export default {
    name: "NavBar",
    methods: {
        ...mapActions(useOrderStore, ['logoutHandler', 'fetchLoggedInStatus'])
    },
    computed: {
        ...mapState(useOrderStore, ['isLoggedIn'])
    },
    created() {
        this.fetchLoggedInStatus()
    }
}
</script>

<style scoped>
.navbar-brand {
    color: whitesmoke;
    font-family: monospace;
    font-weight: bold;
    font-size: xx-large;
}

.navbar {
    background-color: #001233 !important;
}
</style>
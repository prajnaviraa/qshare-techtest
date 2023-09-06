<template>
    <div class="container-fluid">
        <br>
        <h2>Welcome to E-Store</h2>
        <hr><br>
        <div class="col-12 col-lg-6 offset-lg-3 my-3">
            <div class="row">
                <div class="col-8">
                    <h3>My Orders</h3>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary" @click.prevent="$router.push('/orderForm')">Add New Order</button>
                </div>
            </div>
            <br>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <customTBody v-for="(order, i) in orders" :key="order.id" :i="i" :order="order" :isLoggedIn="isLoggedIn" />
            </table>
            <br>
            <div style="text-align: center;" v-if="orders.length == 0">
                <h7>You don't have any orders, please add new order.</h7>
            </div>
        </div>

    </div>
</template>
  
<script >
import { mapActions, mapState } from 'pinia'
import { useOrderStore } from '../stores/counter'
import customTBody from '../components/TBody.vue'

export default {
    components: {
        customTBody,
    },
    methods: {
        ...mapActions(useOrderStore, ['fetchLoggedInStatus', 'fetchOrders']),
    },
    computed: {
        ...mapState(useOrderStore, ['isLoggedIn', 'orders'])
    },
    created() {
        this.fetchLoggedInStatus()
        this.fetchOrders()
    }
}
</script>
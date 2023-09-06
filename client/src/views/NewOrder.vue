<template>
    <div class="container">
        <div>
            <h1 class="pageTitle">Order Form</h1>
            <form @submit.prevent="addOrder(product)">
                <div class="col-12 col-lg-4 offset-lg-4 my-5">
                    <label for="name" class="col-sm-4 col-form-label">Product Name</label>
                    <input type="text" class="form-control" id="name" placeholder="insert product name.."
                        v-model="product.name">
                    <label for="quantity" class="col-sm-3 col-form-label">Quantity</label>
                    <input type="number" class="form-control" id="quantity" placeholder="insert quantity.."
                        v-model="product.quantity">
                    <label for="price" class="col-sm-2 col-form-label">Price</label>
                    <input type="number" class="form-control" id="price" placeholder="insert total price"
                        v-model="product.price">
                    <br>
                    <button type="submit" class="btn btn-primary form-btn w-100">Order Now</button>
                    <br><br>
                    <button class="btn btn-danger form-btn w-100" @click.prevent="$router.push('/')">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useOrderStore } from '../stores/counter'
export default {
    data() {
        return {
            product: {
                name: "",
                quantity: "",
                price: ""
            }
        }
    },
    methods: {
        ...mapActions(useOrderStore, ['addOrder', 'fetchLoggedInStatus']),
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
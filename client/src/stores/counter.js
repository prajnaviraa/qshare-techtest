import { defineStore } from 'pinia'
import Axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const useOrderStore = defineStore('order', {
  state: () => ({
    isLoggedIn: false,
    orders: [],
    baseUrl: 'http://localhost:3000'
  }),
  actions: {
    async loginHandler(user) {
      try {
        const { data } = await Axios({
          method: 'POST',
          url: this.baseUrl + '/users/login',
          data: user
        })
        localStorage.access_token = data.access_token
        toast.success('Login success', { timeout: 1000 })
        this.router.push('/')
        this.isLoggedIn = true
      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error.response.data.message)
      }
    },

    logoutHandler() {
      localStorage.clear()
      toast.success('Logged out', { timeout: 1000 })
      this.router.push('/login')
      this.isLoggedIn = false
    },

    fetchLoggedInStatus() {
      if (localStorage.access_token) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    },

    async fetchOrders() {
      try {
        const { data } = await Axios({
          method: 'GET',
          url: this.baseUrl + '/orders',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.orders = data
        console.log(this.orders)
        console.log(data)
      } catch (error) {
        console.log(error.response.data.message)
      }
    },

    async registerHandler(user) {
      try {
        const { data } = await Axios({
          method: 'POST',
          url: this.baseUrl + '/users/register',
          data: user
        })
        toast.success('Registered successfully, please login')
        this.router.push('/login')
      } catch (error) {
        toast.error(error.response.data.message[0])
        console.log(error.response.data.message)
      }
    },

    async addOrder(order) {
      try {
        const { data } = await Axios({
          method: 'POST',
          url: this.baseUrl + '/orders',
          headers: {
            access_token: localStorage.access_token
          },
          data: order
        })
        toast.success('Order added successfully')
        this.router.push('/')
      } catch (error) {
        toast.error(error.response.data.message[0])
        console.log(error.response.data.message)
      }
    }
  }
})

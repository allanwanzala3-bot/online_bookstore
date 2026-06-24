import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {
            0:{
                id:1,
                customer_id:1,
                book_id:4,
                quantity:1,
                total_paid:1900,
                status:"processing"
            },
             1:{
                id:2,
                customer_id:2,
                book_id:2,
                quantity:2,
                total_paid:3200,
                status:"processing"
            },
             2:{
                id:3,
                customer_id:3,
                book_id:5,
                quantity:2,
                total_paid:2800,
                status:"processing"
            },
             3:{
                id:4,
                customer_id:4,
                book_id:6,
                quantity:3,
                total_paid:5700,
                status:"processing"
            },
             4:{
                id:5,
                customer_id:5,
                book_id:7,
                quantity:4,
                total_paid:6800,
                status:"processing"
            },
             5:{
                id:6,
                customer_id:6,
                book_id:8,
                quantity:3,
                total_paid:7800,
                status:"processing"
            },
        }

        return{
            orders
        }
   },
   actions:{
       
   },
   persist: true,
})
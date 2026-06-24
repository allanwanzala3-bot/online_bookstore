import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id:1,
                firstname:"Mike",
                lastname:"White",
                email:"wanzala@getNormalizedRange.com",
                phone:"0712345612",
                location:"Kiambu",
                address:"234,Ruka Street"
            },
            1:{
                id:2,
                firstname:"Kavishe",
                lastname:"Abwao",
                email:"wanzala@gmail.com",
                phone:"0712344612",
                location:"Meru",
                address:"334,Sharp Street"
            },
            2:{
                id:3,
                firstname:"Vincent",
                lastname:"Micha",
                email:"ayanga@gmail.com",
                phone:"0712345612",
                location:"Embu",
                address:"534,Bend Street"
            },
            3:{
                id:4,
                firstname:"Mell",
                lastname:"Chriik",
                email:"yan@gmail.com",
                phone:"0712345612",
                location:"Dandora",
                address:"734,Low Street"
            },
            4:{
                id:5,
                firstname:"Melvin",
                lastname:"Musa",
                email:"wan@gmail.com",
                phone:"0712345612",
                location:"Bungoma",
                address:"934,Down Street"
            },
            5:{
                id:6,
                firstname:"Kelvin",
                lastname:"Kariuki",
                email:"victo@gmail.com",
                phone:"0712345612",
                location:"Mombasa",
                address:"764,Up Street"
            },
        }

        return{
            users
        }
   },
   actions:{
       
   },
   persist: true,
})
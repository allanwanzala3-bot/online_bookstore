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
         addUser(payload) {
            //get the last key in the users object
            const existingKeys = Object.keys(this.users).map(Number);
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;

            //insert into object
            this.users[nextKey] = {
                ...payload,
                id: nextKey
            };
        },
        editUser(id, payload) {
            // find the book in the object
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id //compare the ids
            );

            if (!user) {
                console.error(`No user found with id: ${id}`);
                return;
            }

            const [objectKey] = user;

            //replace the existing user data with what was received in payload
            this.users[objectKey] = {
                ...this.users[objectKey], 
                ...payload
            };
        },
        deleteUser(id) {
            const users = Object.entries(this.users).find(
                ([key, item]) => item.id === id
            );
            if (!user) {
                console.error(`Cannot delete: No user found id: ${id}`);
                return;
            }

            const [objectKey] = user;

            delete this.users[objectKey];
        }
   },
   persist: true,
})
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
    const books={
        0 : {
            id:1,
            image:"/Book-1.jpg",
            name:"momo kapor",
            price:"1800",
            author:"Ben Carsol",
            description:"Read on how people change after sometime",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"3/5"
    
        },

        1 : {
            id:2,
            image:"/Book-2.jpg",
            name:"Yedi Bilge",
            price:"1600",
            author:"Fidel Castro",
            description:"Read on how the poor and the rich raise their cildren",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"4/5"
    
    
        },
        2 : {
            id:3,
            image:"/Book-3.jpg",
            name:"The Artifact",
            price:"1500",
            author:"Sonya Dube",
            description:"Read on things that exisited in the past",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"3/5"
    
        },
        3 : {
            id:4,
            image:"/Book-4.jpg",
            name:"Gray Mountain",
            price:"1900",
            author:"Yemi Bojan",
            description:"Read on how people struggle in life and get rewarded",
             long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"4/5"
    
        },
        4 : {
            id:5,
            image:"/Book-5.jpg",
            name:"The Lost Symbol",
            price:"1400",
            author:"Dan Brown",
            description:"Read on how the poor and the rich raise their cildren",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"4/5"
    
        },
        5 : {
            id:6,
            image:"/Book-6.jpg",
            name:"Porteler",
            price:"1900",
            author:"John Beger",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"3/5"
    
        },
        6 : {
            id:7,
            image:"/Book-7.jpg",
            name:"Masumuyet",
            price:"1700",
            author:"Orphan Pamork",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"4/5"
    
        },
        7 : {
            id:8,
            image:"/Book-8.jpg",
            name:"Harry Porter",
            price:"1950",
            author:"R.A Rowling",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"3/5"
    
        },
        8 : {
            id:9,
            image:"/Book-9.jpg",
            name:"The God Of Small Things",
            price:"1600",
            author:"Hugo Eketike",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"4/5"
    
        },
        9 : {
            id:10,
            image:"/Book-10.jpg",
            name:"Rowlling Stone",
            price:"1780",
            author:"Ayari Fabrica",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"3/5"
    
        },
        10 : {
            id:11,
            image:"/Book-11.jpg",
            name:"Jack London",
            price:"1600",
            author:"Martin Eden",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"4/5"
    
        },
        11 : {
            id:12,
            image:"/Book-12.jpg",
            name:"Kevaplar Kitabi",
            price:"1700",
            author:"Carol Bolt",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"3/5"
    
        },
        12 : {
            id:13,
            image:"/Book-13.jpg",
            name:"Man's Search For Meaning",
            price:"1800",
            author:"Voctor Frank",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"4/5"
    
        },
        13 : {
            id:14,
            image:"/Book-14.jpg",
            name:"Your Heart Is The Sea",
            price:"1550",
            author:"Nikita Gill",
            description:"Read on how people struggle in life and get rewarded",
            long_description:"Gray Mountain is a legal thriller by John Grisham that follows Samantha Kofer, a young associate at a prestigious Wall Street law firm who loses her job when the 2008 financial crisis hits. Forced to take an unpaid internship at a small legal aid clinic in rural Appalachia, she's thrust into a world far removed from corporate law, dealing with black lung disease claims, custody battles, and domestic violence cases. As Samantha digs deeper into the community, she uncovers the devastating environmental and human costs of the coal mining industry, particularly the practice of strip mining.",
            genre:"Novel",
            rating:"3/5"
    
        },
       
    }
    
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
        addBook(payload) {
        //get te last key in te books object
            const existingKeys = Object.keys(this.books).map(Number);
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;
           
            //insert into object
            this.books[nextKey] = {
                ...payload,
                id: nextKey
            };
        },
        edit(id, payload) {
            //find the book in the object
            const book = Object.entries(this.books).find(
                ([key, item]) => item.id === id//compare the ids
            );

            if (!book) {
                console.error(`No book found with id: ${id}`);
                return;
            }

            const [objectKey] = book;

            //replace the existingook data with what was recuved
            this.books[objectKey] = {
                ...this.books[objectKey], 
                ...payload
            };
        },
        deleteBook(id) {
            const book = Object.entries(this.books).find(
                ([key, item]) => item.id === id
            );
            if (!book) {
                console.error(`Cannot delete: No book found id: ${id}`);
                return;
            }

            const [objectKey] = book;

            delete this.books[objectKey];
        }
   },
   persist: true,
})
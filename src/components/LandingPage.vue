<script setup>

</script>

    <template>
       <v-container max-width="100%">
        <v-row>
<v-col>
    <v-carousel cycle>
<v-carousel-item src="/carousel-1.jpg" cover></v-carousel-item>
<v-carousel-item src="/carousel-2.jpg"  cover></v-carousel-item>
<v-carousel-item src="/carousel-3.jpg" cover></v-carousel-item>
<v-carousel-item src="/carousel-4.jpg" cover></v-carousel-item>
    </v-carousel>
</v-col>
        </v-row>
       </v-container>
       <!-- About Us-->
        <v-container class="bg-secondary" max-width="100%">
            <v-row>
                <v-col class="text-center">
                    <div class="text-display-medium mb-12">Welcome to Reader!</div>
                    <div class="text-title-large font-weight-light text-medium-emphasis mb-8 text-black">Welcome to your next great read. Whether you're searching for a thrilling page-turner, a cozy classic, or your next favorite author, we've made it easy to discover books that feel like they were picked just for you.
                        at you place.
                    </div>
                      <div class="text-title-large font-weight-light text-medium-emphasis mb-8 text-black">Browse thousands of titles, save your favorites, and pick up right where you left off — all in one place. Your personal library is just a tap away, so go ahead and start exploring.</div>
                </v-col>
            </v-row>
        </v-container>
<!-- Our Bestsellers -->
 <v-container max-width="100%">
    <v-row>
        <v-col md="3">
            <v-card>
                <v-img src="/Book-1.jpg"cover></v-img>
                <v-card-title>Momo Kopor</v-card-title>
                <v-card-subtitle>Ksh 1500</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>

         <v-col md="3">
            <v-card>
                <v-img src="/Book-2.jpg"cover></v-img>
                <v-card-title>Yedi-Bilge</v-card-title>
                <v-card-subtitle>Ksh 1700</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>

         <v-col md="3">
            <v-card>
                <v-img src="/Book-3.jpg"cover></v-img>
                <v-card-title>The Artifact</v-card-title>
                <v-card-subtitle>Ksh 1600</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
         <v-col md="3">
            <v-card>
                <v-img src="/Book-4.jpg"cover></v-img>
                <v-card-title>Gray Mountain</v-card-title>
                <v-card-subtitle>Ksh 1800</v-card-subtitle>
                <v-btn to="/cart" color="primary">Add to Cart</v-btn>
                
            </v-card>
        </v-col>
    </v-row>
 </v-container>
 <!-- Footer -->
 <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Elite Readers Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@EliteReadersonline.com</p>
                <p>Phone: 254717342789</p>
            </div>
        </v-col>
        </v-row>
        </v-container>
       </template>
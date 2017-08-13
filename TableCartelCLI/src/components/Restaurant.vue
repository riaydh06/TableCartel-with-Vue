<template>
<div class="restaurent_profile_name">
     <ons-row>
       <ons-col width="70%">
             <div class="restarent_name_left_content">
              <h2 v-show="index == 0" style="color:white" > Restaurant Name : {{restaurant.title.rendered}} </h2>
</div>

                 <div class="review_restaruent">
                     <p>57<br /><span>Reviews</span></p>
                     <div class="load_on_the_wallet">
                         <ul>
                             <li><img src="img/ratingicon/group-95.png" alt="" /></li>
                             <li><img src="img/ratingicon/group-95.png" alt="" /></li>
                             <li><img src="img/ratingicon/group-95.png" alt="" /></li>
                             <li><img src="img/ratingicon/group-95.png" alt="" /></li>
                             <li><img src="img/ratingicon/group-97.png" alt="" /></li>
                         </ul>
                         <br />
                         <p><a href="">Load one the wallet</a></p>
                     </div>
                 </div>
                 <div class="cuisine_type">
                     <h4>Cuisine Type</h4>
                     <div>
                <ul>
                  <li style="color:white" v-for="item in restaurant.cuisine_type" >
                   <p> {{ item.name }} </p>
                  </li>
              </ul>
          </div>
                 </div>
                 <div class="road_map">
                     <ons-icon icon="fa-map-marker"></ons-icon>

                     <p >{{restaurant.restaurant_address}}</p>
            </div>
                 </div>
             </div>
       </ons-col>
       <ons-col>
         <div class="restaurent_profile_right_content">
             <div class="profile_restaurent">
                 <img src="img/profile.jpg" alt="" />
             </div>
             <div class="restaurent_food_rating">
                 <ul>
                     <li><img src="img/ratingicon/path.png" alt="" /></li>
                     <li><img src="img/ratingicon/path.png" alt="" /></li>
                     <li><img src="img/ratingicon/group-118.png" alt="" /></li>
                 </ul>
                 <br />
                 <p>Rating</p>
             </div>
             <div class="restaurent_food_book">
                 <img src="img/ratingicon/path-14.png" alt="" />
                 <br />
                 <a href="table_booking.html">Book Now</a>
             </div>
         </div>
       </ons-col>
     </ons-row>

<!--Restaurant Name-->

<!--Restaruent Menu-->
<div class="restaruent_menu_area">
     <ons-row>
         <div class="restaruent_menu_header">
             <img src="img/ratingicon/path-11.png" alt="" />
              <h3>Menu</h3>
              <br />
              <h2>Ratings and Reviews</h2>
         </div>
     </ons-row>

     <ons-row class="progressbar_row">
       <ons-col width="50%">
         <div class="menu_overal_sidebar_left" >
             <h4>Overall</h4>
             <div>
             <h1>{{ restaurant.restaurant_rating}} </h1>
         </div>
             <ul>
                 <li><img src="img/ratingicontwo/path.png" alt="" /></li>
                 <li><img src="img/ratingicontwo/path.png" alt="" /></li>
                 <li><img src="img/ratingicontwo/group-118.png" alt="" /></li>
             </ul>
         </div>
       </ons-col>
       <ons-col>
             <div class="progress_menu_overal_sidebar">
                 <ul>
                     <li><ons-progress-bar value="90"></ons-progress-bar></li>
                     <li><ons-progress-bar value="40"></ons-progress-bar></li>
                     <li><ons-progress-bar value="10"></ons-progress-bar></li>
                 </ul>
             </div>
       </ons-col>
     </ons-row>
     <ons-row>
       <ons-col width="50%">
         <div class="menu_overal_sidebar_bottom_all_reviews">
             <img src="img/ratingicontwo/path.png" alt="" />
             <a href="">See All Reviews</a>
         </div>
       </ons-col>

     </ons-row>
</div>
<!--Restaruent Menu-->

<!--Photoes And Media Restaurant Profile-->
<div class="photoes_and_media_section_area">
 <div class="photoes_and_media_width">
     <div class="photoes_and_media_heading">
         <h4>Photoes and Media</h4>
     </div>
     <ons-row>
       <ons-col width="50%">
         <div class="photoes_left_side">
             <div class="single_photoes_left_side">
                 <a href=""><img src="img/restaurentprofile/rectangle-9.png" alt="" /></a>
             </div>
             <div class="single_photoes_left_side">
                 <a href=""><img src="img/restaurentprofile/rectangle-10.png" alt="" /></a>
             </div>
         </div>
       </ons-col>
       <ons-col>
           <div class="photoes_right_side">
                 <div class="single_photoes_right_side">
                     <a href=""><img src="img/restaurentprofile/rectangle-11.png" alt="" /></a>
                 </div>
                 <div class="single_photoes_right_side">
                     <a href=""><img src="img/restaurentprofile/rectangle-12.png" alt="" /></a>
                 </div>
             </div>
       </ons-col>
     </ons-row>
 </div>
</div>
<!--Photoes And Media Restaurant Profile-->

<!--Photoes And Media Restaurant Profile-->
<div class="restaurent_details_view_area">
 <div class="restaurent_details_width">
     <div class="restaurent_details_heading">
         <h4>Details</h4>
     </div>
     <ons-row>
       <ons-col width="50%">
         <div class="details_view_left_side">
             <div class="single_details_view_left_side">
                 <div class="icons_left">
                     <img src="img/restaurentprofile/icons/1.svg" alt="icon" />
                 </div>
                 <div class="icons_right_content">
                     <h4>Phone</h4>
                     <div
                         <p  style="color:white">{{restaurant.contact_number}}</p>
                     </div>
                 </div>
             </div>
             <div class="single_details_view_left_side">
                 <div class="icons_left">
                     <img src="img/restaurentprofile/icons/2.svg" alt="icon" />
                 </div>
                 <div class="icons_right_content">
                     <h4>Price</h4>
                     <div >
                            <p  style="color:white">{{restaurant.price_range}}</p>
                        </div>
                 </div>
             </div>
             <div class="single_details_view_left_side">
                 <div class="icons_left">
                     <img src="img/restaurentprofile/icons/3.svg" alt="icon" />
                 </div>
                 <div class="icons_right_content">
                     <h4>Cuisine</h4>


                         <ul >
                           <li  v-for="item in restaurant.cuisine_type" >
                             <p style="color:white">{{ item.name }}
                         </p>
                           </li>
                       </ul>
                   </div>
                 </div>
             </div>
             <div class="single_details_view_left_side">
                 <div class="icons_left">
                     <img src="img/restaurentprofile/icons/4.svg" alt="icon" />
                 </div>
                 <div class="icons_right_content">
                     <h4>Hours</h4>
                     <div>
                        <p style="color:white">{{restaurant.restaurant_hours}}</p>
                    </div>
                 </div>
             </div>
             <div class="single_details_view_left_side">
                 <div class="icons_left">
                     <img src="img/restaurentprofile/icons/5.svg" alt="icon" />
                 </div>
                 <div class="icons_right_content">
                     <h4>Parking</h4>
                     <div>
                        <p  style="color:white">{{restaurant.parking}}</p>
                    </div>
                 </div>
             </div>
             <div class="single_details_view_left_side">
                 <div class="icons_left">
                     <img src="img/restaurentprofile/icons/6.svg" alt="icon" />
                 </div>
                 <div class="icons_right_content">
                     <h4>Dress Code</h4>

                         <div >
                         <p style="color:white"> {{restaurant.dress_code}}</p>
                     </div>
                 </div>
             </div>

         </div>
       </ons-col>
       <ons-col>
           <div class="details_view_right_side">
                 <div class="details_view_right_sidebar">
                     <div class="single_details_view_right_side">
                         <div class="icon_right_heading">
                             <img src="img/restaurentprofile/icons/7.svg" alt="icon" />
                         </div>
                         <div class="details_view_right_content">
                             <h4>Description</h4>
                             <p>Lorem ipsum Dummy content.Lorem ipsum Dummy content.Lorem ipsum Dummy content.Lorem ipsum Dummy content.Lorem ipsum Dummy content.</p>
                             <br />
                             <p>Lorem ipsum Dummy content.Lorem ipsum Dummy content.Lorem ipsum Dummy content.Lorem ipsum Dummy content.Lorem ipsum Dummy content.</p>
                         </div>
                     </div>
                 </div>
             </div>
       </ons-col>
     </ons-row>
 </div>
</div>
</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Restaurant',
    data () {
      return {
        restaurant: {}
      }
    },
    created () {
      this.fetchData()

    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        axios.get('clients.itsd.com.bd/table-cartel/wp-json/wp/v2/restaurant/'+  this.$route.params.id + '/')
        .then((resp) => {
          this.restaurant = resp.data
          console.log('--------------------------------')
          console.log(resp.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

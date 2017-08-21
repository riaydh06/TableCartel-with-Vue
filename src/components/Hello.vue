<template>
  <div class="food_list_items ">
    <div class="single_food_list">
      <div style="height: 200px; padding: 1px 0 0 0;">
        <div class="card food_list_cart">
        <div class="card__content custom_card_content">
          <div class="plus-icon"><a href="static/assets/img/landingpage/rectangle-10.png" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a></div>
          <a href=""><img src="static/assets/img/landingpage/rectangle-10.png" alt="food_img" /></a>
          <div class="food_list_content_bg">
          <div class="food_list_content">
            <h3><a href="">Article Name</a></h3>
            <h5><a href="">Publisher Name</a></h5>
          
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="single_food_list_footer_top">
          
            <a href="">           
                <ons-icon
                  icon="fa-user"
                  size="20px"
                  fixed-width="false">
                </ons-icon>
            </a>
            <div class="publisher-name">
              <strong>Added By</strong>
              <p>Board Name</p>
            </div>
            
          </div>
          <div class="single_food_list_footer">
            <p>Picked For</p>
            <strong>"ITEM"</strong>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hello'
  }
</script>
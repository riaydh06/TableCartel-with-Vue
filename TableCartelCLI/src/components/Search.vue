<template>
  <div>
  	<section>
		<div class="header_area flow">
			<div class="width flow">
				<div class="header flow">
					<div class="search flow">
						<input type="search" value="" placeholder="Search Your Boards" class="searchprofile"/>
					</div>
					<div class="icons_profile flow">
						<a href=""><img src="img/svgicon/plus.svg" alt="plus icon" /></a>
						<a href="settings.html"><img src="img/svgicon/settings.svg" alt="plus icon" /></a>
					</div>
				</div>
			</div>
		</div>
	</section>
     <!--search header area end-->
  <div class="catagories_customise bg-card" style="padding: 1px 0 0 0;">
    <p class="bg-card">All Catagories</p>
    <div class="card_one bg-card">

      <h2 class="card__title search_title"><a href="restaurant_list.html">Restaurents</a></h2>

      </div>
    <div class="card_one bg-card">
      <h2 class="card__title search_title"><a href="food_list.html">Food list</a></h2>

      </div>
    <div class="card_one bg-card">
      <h2 class="card__title search_title"><a href="">Recipes</a></h2>

      </div>
    <div class="card_one bg-card">
      <h2 class="card__title search_title"><a href="">Master Class</a></h2>

      </div>
    <div class="card_two bg-card">

      </div>

  </div>
  </div>
</template>

<script>

export default {
  name: 'Search'
}
</script>

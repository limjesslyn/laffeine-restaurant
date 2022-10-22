import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantCardSkeleton,
  createRestaurantCardTemplate,
  createRestaurantHero,
  createRestaurantHeroSkeleton,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <div id='heroContent'>
       ${createRestaurantHeroSkeleton}
      </div>
      <h2 class="content_heading">Home Page</h2>
      <div id="restaurants" class="restaurants">
        ${createRestaurantCardSkeleton(20)}
      </div>
    </div>
    `;
  },

  async afterRender() {
    const heroContainer = document.getElementById('heroContent');
    heroContainer.innerHTML = createRestaurantHero;

    const restaurants = await RestaurantSource.listAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurantsContainer.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
    });
  },
};

export default Home;

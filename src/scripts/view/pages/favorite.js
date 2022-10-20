import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content_heading">Favorite Page</h2>
      <div id="indicator" class="show-indicator"></div>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      const emptyText = document.createElement('p');
      emptyText.innerText = 'Nothing here ... ';
      emptyText.classList.add('empty-text');
      const container = document.querySelector('.content');
      container.appendChild(emptyText);
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
      });
    }
  },
};

export default Favorite;

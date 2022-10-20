import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import ReviewInitiator from '../../utils/review-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="content">
      <h2 class="content_heading">Detail Page</h2>
      <div id="restaurant" class="restaurant"></div>
      <div id="reviewContainer"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    // lazy load font awesome
    let scriptElement = document.querySelector(
      'script[src="https://use.fontawesome.com/b070c8f1df.js"]',
    );

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.src = 'https://use.fontawesome.com/b070c8f1df.js';
      document.body.appendChild(scriptElement);
    }
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(response.restaurant);

    const reviewInputContainer = document.querySelector('#reviewContainer');
    const reviewInputElement = document.createElement('review-input');
    reviewInputContainer.appendChild(reviewInputElement);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: response.restaurant.id,
        name: response.restaurant.name,
        description: response.restaurant.description,
        city: response.restaurant.city,
        address: response.restaurant.address,
        pictureId: response.restaurant.pictureId,
        categories: response.restaurant.categories,
        menus: response.restaurant.menus,
        rating: response.restaurant.rating,
        customerReviews: response.restaurant.customerReviews,
      },
      favoriteRestaurant: FavoriteRestaurantIdb,
    });

    await ReviewInitiator.init({
      restaurantId: response.restaurant.id,
    });
  },
};

export default Detail;

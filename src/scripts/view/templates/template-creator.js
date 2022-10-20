import CONFIG from '../../globals/config';

const createRestaurantHero = `
  <div class="hero" id="hero">
    <img class='hero-img' src='../images/heros/hero-image_4.jpg' width='100%' height='300px' alt="image">
    <div class="hero_inner">
          <h2 class="hero_title">Start Your Food Journey Far And Beyond</h2>
          <p class="hero_tagline">Nothing can go wrong with the deliciousness of the world delicacy</p>
    </div>
  </div>
`;

const createRestaurantHeroSkeleton = `      
  <div class="hero" id="hero">
  <img class='hero-img' src='../images/placeholder.jpg' width='100%' height='300px' alt="image">
    <div class="hero_inner">
        <h2 class="hero_title">Lorem ipsum dolor amet</h2>
        <p class="hero_tagline">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </div>
  </div>
`;

const createRestaurantCardSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
        <div class='card-item'>
            <a class='card-detail_link'>
                <article class="card-place">
                <div class="card-header">
                    <img class='card-img' src='../images/placeholder.jpg' width='100%' height='250px' alt="image">
                    <h1 class='card-header'>Lorem ipsum dolor sit</h1>
                </div>
                <div class="card-content">
                    <div class="card-info">
                      <span aria-label="Rating">Lorem ipsum</span>
                      <span aria-label="Lokasi">Lorem ipsum</span>
                    </div>
                </div>
                </article>
            </a>
        </div>
    `;
  }
  return template;
};

const createRestaurantCardTemplate = (restaurant) => ` 
  <div class='card-item'>
    <a class='card-detail_link' href='/#/detail/${restaurant.id}'>
        <article class="card-place">
        <div class="card-header">
            <img class='card-img' src='${CONFIG.BASE_IMAGE_URL_LARGE}${restaurant.pictureId}' alt="image ${restaurant.name}">
            <h1>${restaurant.name}</h1>
        </div>
        <div class="card-content">
            <div class="card-info">
              <span aria-label="Rating ${restaurant.rating}">⭐️${restaurant.rating}</span>
              <span aria-label="Lokasi ${restaurant.city}">📍${restaurant.city}</span>
            </div>
        </div>
        </article>
    </a>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class='detail-item'>
        <article class="card-place">
        <div class="card-header">
          <img class='detail-img' src='${CONFIG.BASE_IMAGE_URL_LARGE}${restaurant.pictureId}' alt="restaurant photo">
          <h1>${restaurant.name}</h1>
        </div>

        <div class="card-content">
          <div class="card-info">
            <span>⭐️${restaurant.rating}</span>
            <span>📍${restaurant.city}, ${restaurant.address}</span>
          </div>
          <p class="card-categories">Categories : ${restaurant.categories.map((el) => `${el.name}`)}</p>
          <p class="card-desc">${restaurant.description}</p>
          <div class="card-menus">
            <h2>Available Menus</h2>
            <div class="menus_content">
              <div class="foods">
                <h3>Foods</h3>
                <ul>
                  ${restaurant.menus.foods.map((el) => `<li>${el.name}</li>`).join(' ')}
                </ul>
              </div>
              <div class="drinks">
                <h3>Drinks</h3>
                <ul>
                  ${restaurant.menus.drinks.map((el) => `<li>${el.name}</li>`).join(' ')}
                </ul>
              </div>
            </div>
        </div>
        
        <div class="card-reviews">
            <h2>Reviews</h2>
            <div class="card-reviews-content">
            ${restaurant.customerReviews.map((el) => `
                <div class="review-content">
                <div class="review-info">
                    <span class="review-info-person">🧑🏽${el.name}</span>
                    <span class="review-info-date">📅${el.date}</span>
                </div>
                <p class="review-desc">"${el.review}"</p>
                </div>
                `).join(' ')}
            </div>
        </div>

        </div>
        </article>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createRestaurantCardSkeleton,
  createRestaurantHeroSkeleton,
  createRestaurantHero,
};

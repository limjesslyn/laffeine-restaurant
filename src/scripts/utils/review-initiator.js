import RestaurantSource from '../data/restaurant-source';

const ReviewInitiator = {
  async init({ restaurantId }) {
    this._buttonHandler(restaurantId);
  },

  _buttonHandler(restaurantId) {
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const nameInput = document.querySelector('#name-input').value;
      const bodyInput = document.querySelector('#body-input').value;
      const review = {
        id: restaurantId,
        name: nameInput,
        review: bodyInput,
      };
      const response = await RestaurantSource.postNewReview(review);

      const resetForm = document.querySelector('#review-input-form');
      resetForm.reset();

      if (response.error) {
        RestaurantSource.showResponseMessage(response.message);
      } else {
        const reviewContainer = document.querySelector('.card-reviews-content');
        reviewContainer.innerHTML = `
        ${response.customerReviews.map((el) => `
          <div class="review-content" tabindex="0">
            <div class="review-info">
              <span class="review-info-person">🧑🏽${el.name}</span>
              <span class="review-info-date">📅${el.date}</span>
            </div>
            <p class="review-desc">"${el.review}"</p>
          </div>
          `).join(' ')}
        `;

        return response;
      }
      return response;
    });
  },
};

export default ReviewInitiator;

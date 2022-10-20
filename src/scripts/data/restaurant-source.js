import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static clearIndicator() {
    const indicator = document.querySelector('#indicator');

    if (indicator.classList.contains('show-indicator')) {
      indicator.classList.remove('show-indicator');
      indicator.classList.add('hide-indicator');
    }
  }

  static async listAllRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();

      if (responseJson.error) {
        this.clearIndicator();
        return this.showResponseMessage(responseJson.message);
      }

      this.clearIndicator();
      return responseJson.restaurants;
    } catch (error) {
      this.clearIndicator();
      return this.showResponseMessage(error);
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();

      if (responseJson.error) {
        this.clearIndicator();
        return this.showResponseMessage(responseJson.message);
      }

      this.clearIndicator();
      return responseJson;
    } catch (error) {
      this.clearIndicator();
      return this.showResponseMessage(error);
    }
  }

  static async postNewReview(reviewContent) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewContent),
      };

      const response = await fetch(API_ENDPOINT.POST_REVIEW, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        this.showResponseMessage(responseJson.message);
      }

      return responseJson;
    } catch (error) {
      return this.showResponseMessage(error);
    }
  }

  static showResponseMessage(message = 'Something Wrong In The Server') {
    alert(message);
  }
}

export default RestaurantSource;

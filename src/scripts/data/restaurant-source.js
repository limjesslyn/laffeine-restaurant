import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listAllRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();

      if (responseJson.error) {
        return this.showResponseMessage(responseJson.message);
      }

      return responseJson.restaurants;
    } catch (error) {
      return this.showResponseMessage(error);
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();

      if (responseJson.error) {
        return this.showResponseMessage(responseJson.message);
      }

      return responseJson;
    } catch (error) {
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

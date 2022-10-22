Feature('Liking Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.empty-text');
  I.see('Nothing here ...');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.see('Nothing here ...');

  I.amOnPage('/');

  I.seeElement('.card-item a');

  const firstRestaurant = locate('.card-item a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-item');
  const likedRestaurantName = await I.grabTextFrom('.card-item');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.see('Nothing here ...');

  I.amOnPage('/');

  I.seeElement('.card-item a');

  I.click(locate('.card-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-item');
  I.click(locate('.card-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Nothing here ...');
});

Scenario('commenting on a restaurant', async ({ I }) => {
  I.see('Nothing here ...');

  I.amOnPage('/');

  I.click(locate('.card-item a').first());

  I.seeElement('#review-input-form');

  I.fillField('#name-input', 'beta');
  I.fillField('#body-input', 'tester');
  const inputReview = await I.grabValueFrom('#body-input');

  I.click(locate('#submitButton'));

  I.seeElement('.card-reviews-content');
  const position = locate('.review-content').last();
  const filledReview = await I.grabTextFrom(locate(position).find('.review-desc'));

  // check review content
  assert.strictEqual(inputReview, filledReview);
});

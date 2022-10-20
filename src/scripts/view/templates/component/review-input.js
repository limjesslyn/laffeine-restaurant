class ReviewInput extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="review-input-container" tabindex="0">
      <h2>Add Review</h2>
      <form id="review-input-form" class="review-input-form">
        <input id="name-input" type="text" required placeholder="who are you ... ">
        <textarea id="body-input" type="text" required placeholder="comments ..."></textarea>
        <button id="submitButton" type="submit">Post</button>
      </form>
    </div>
    `;
  }
}

customElements.define('review-input', ReviewInput);

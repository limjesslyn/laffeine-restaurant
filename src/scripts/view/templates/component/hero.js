class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero" id="hero">
        <img class='card-img' src='../images/placeholder.png' width='100%' height='250px' alt="image">
        <div class="hero_inner">
            <h2 class="hero_title">Start Your Food Journey Far And Beyond</h2>
            <p class="hero_tagline">Nothing can go wrong with the deliciousness of the world delicacy</p>
        </div>
      </div>
      `;
  }
}

customElements.define('hero-content', HeroContent);

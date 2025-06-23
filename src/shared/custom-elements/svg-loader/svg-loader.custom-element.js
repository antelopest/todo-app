export default class SvgLoaderCustomElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const path = this.getAttribute('src');

    fetch(path)
      .then((res) => res.text())
      .then((svg) => (this.shadowRoot.innerHTML = svg));
  }
}

import SvgLoaderCustomElement from './svg-loader/svg-loader.custom-element';

export default function defineCustomElements() {
  customElements.define('svg-loader', SvgLoaderCustomElement);
}

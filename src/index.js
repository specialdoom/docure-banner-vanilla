class DocureBanner extends HTMLElement {
  constructor() {
    super();
    console.log('[DocureBanner] constructor');
  }

  connectedCallback() {
    console.log('[DocureBanner] connectedCallback - added in DOM');
  }
}

if (!customElements.get('docure-banner-vanilla'))
  customElements.define('docure-banner-vanilla', DocureBanner);

import { html, LitElement } from 'lit-element';
import style from './sub-account-styles.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';

class SubAccount extends LitElement {
  static get properties() {
    return {
      subaccountData: {type: Object}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.subaccountData = {
      razonSocial: '',
      rfc: '',
      estatus: ''
    };
  }

  render() {
    return html`
       <td>${this.subaccountData.razonSocial}</td>
       <td>${this.subaccountData.rfc}</td>
       <td>${this.subaccountData.estatus}</td>
      `;
    }
}

window.customElements.define("sub-account", SubAccount);

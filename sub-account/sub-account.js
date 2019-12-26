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
      noSubcuenta: '',
      nombre: '',
      estatus: ''
    };
  }

  render() {
    return html`
       <td>${this.subaccountData.noSubcuenta}</td>
       <td>${this.subaccountData.nombre}</td>
       <td>${this.subaccountData.estatus === 'true'? html`<iron-icon icon="vaadin:check-circle-o"></iron-icon>` : html`<iron-icon icon="vaadin:close-circle-o"></iron-icon>`}</td>
       <td><iron-icon icon="vaadin:vaadin:edit"></iron-icon></td>
      `;
    }
}

window.customElements.define("sub-account", SubAccount);

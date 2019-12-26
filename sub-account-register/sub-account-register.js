import { html, LitElement } from 'lit-element';
import style from './sub-account-register-styles.js';

class SubAccountRegister extends LitElement {
  static get properties() {
    return {
      id: {type: Number}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <h3>Agregar Subcuenta</h3>
        <div>

         <label for="name">Nombre :</label>
          <input id="name" type="text">
         <label for="status">Estatus :</label>
          <select id="status">

            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
           </select>
          <button @click="${this.sendForm}" dialog-confirm autofocus>Send</button>
        </div>

      `;
    }
  sendForm(){
    const name = this.shadowRoot.querySelector('#name');
    const status = this.shadowRoot.querySelector('#status');

    this.dispatchEvent(new CustomEvent('subaccount-register',{
      detail: {
        noSubcuenta: '',
        name: name.value,
        estatus: status.value
      }
    }))

    noSubcuenta.value = '';
    name.value = '';
    status.value = '';
  }


}

window.customElements.define("sub-account-register", SubAccountRegister);

import { html, LitElement } from 'lit-element';
import style from './sub-account-register-styles.js';

class SubAccountRegister extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
        <h3>Agregar Razón Social</h3>
        <div>
        <label for="razon">Razón Social :</label>
         <input  id="razon" type="text">
         <label for="rfc">RFC :</label>
          <input id="rfc" type="text">
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
    const razon = this.shadowRoot.querySelector('#razon');
    const rfc = this.shadowRoot.querySelector('#rfc');
    const status = this.shadowRoot.querySelector('#status');

    this.dispatchEvent(new CustomEvent('subaccount-register',{
      detail: {
        razonSocial: razon.value,
        rfc: rfc.value,
        estatus: status.value
      }
    }))

    razon.value = '';
    rfc.value = '';
  }


}

window.customElements.define("sub-account-register", SubAccountRegister);

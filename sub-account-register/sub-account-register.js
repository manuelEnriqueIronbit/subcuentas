import { html, LitElement } from 'lit-element';
import style from './sub-account-register-styles.js';

class SubAccountRegister extends LitElement {
  static get properties() {
    return {

    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.id = 0;
  }

  render() {
    return html`
<iron-icon icon="vaadin:close-circle" dialog-confirm autofocus></iron-icon>
        <h2>Agregar Subcuenta</h2>

         <div>


         <label for="name">Nombre :</label>
          <input id="name" type="text">
          </div>
          <div>


         <label for="status">Estatus :</label>
          <select id="status">

            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
           </select>
           </div>
          <button @click="${this.sendForm}" dialog-confirm autofocus>Send</button>


      `;
    }



  sendForm(){
    const name = this.shadowRoot.querySelector('#name');
    const status = this.shadowRoot.querySelector('#status');
    const id = '_' + Math.random().toString(36).substr(2, 9);
    this.dispatchEvent(new CustomEvent('subaccount-register',{
      detail: {
        id: id,
        noSubcuenta: '',
        name: name.value,
        estatus: status.value
      }
    }))

    name.value = '';
    status.value = '';
    this.id = this.id+1;
  }



}

window.customElements.define("sub-account-register", SubAccountRegister);

import { html, LitElement } from 'lit-element';
import style from './sub-account-edit-styles.js';

class SubAccountEdit extends LitElement {
  static get properties() {
    return {
      subaccountDataEdit : {type: Object}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.subaccountDataEdit = {
      id: '',
      noSubcuenta: '',
      name: '',
      estatus: ''
    };
  }

  render() {
    return html`
        <iron-icon icon="vaadin:close-circle" dialog-confirm autofocus></iron-icon>
         <h2>Editar Subcuenta</h2>
         <div>
            <label for="name">Nombre :</label>
            <input id="name" type="text" value="${this.subaccountDataEdit.name}">
         </div>
         <div>
            <label for="status">Estatus :</label>
            <select id="status" value="${this.subaccountDataEdit.estatus}">
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
            </select>
          </div>
            <button dialog-confirm autofocus @click="${this.sendEdit}">Aceptar</button>

      `;
    }

    sendEdit(){
      const name = this.shadowRoot.querySelector('#name');
      const status = this.shadowRoot.querySelector('#status');
      this.dispatchEvent(new CustomEvent('subaccount-edit',{
        detail: {
          name: name.value,
          estatus: status.value
        }
      }))

      name.value = '';
      status.value = '';
    }

}

window.customElements.define("sub-account-edit", SubAccountEdit);

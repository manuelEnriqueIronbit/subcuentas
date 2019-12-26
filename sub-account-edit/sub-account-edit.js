import { html, LitElement } from 'lit-element';
import style from './sub-account-edit-styles.js';

class SubAccountEdit extends LitElement {
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
         <h3>Editar Subcuenta</h3>
        <div>

         <label for="name">Nombre :</label>
          <input id="name" type="text">
         <label for="status">Estatus :</label>
          <select id="status">

            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
           </select>
          <button  dialog-confirm autofocus>Send</button>
        </div>
      `;
    }
}

window.customElements.define("sub-account-edit", SubAccountEdit);

import { html, LitElement } from 'lit-element';
import style from './sub-account-view-styles.js';
import '@catsys/sub-account';
import '@catsys/sub-account-register';
import '@polymer/paper-dialog';
import  '@vaadin/vaadin-icons';

class SubAccountView extends LitElement {
  static get properties() {
    return {
      subaccountList: {type: Array}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.subaccountList = [];
  }

  render() {
    return html`
          <div>
          <paper-dialog id="dialog" modal no-cancel-on-outside-click="false">
          <paper-dialog-scrollable>
          <div class="sub-account-register">
                <sub-account-register @subaccount-register="${this.insertTable}" ></sub-account-register>
                <iron-icon icon="vaadin:close-circle" dialog-confirm autofocus></iron-icon>
            </div>
</paper-dialog-scrollable>

            </paper-dialog>
             <div class="sub-account-table">
              <table>
                <thead>
                  <tr>
                    <th id="subaccount">#Subcuenta</th>
                    <th id="rfc">RFC</th>
                    <th id="status">Estatus</th>
                    <th id="actions">Acciones</th>
                  </tr>
                 </thead>
                 <tbody>

                    ${this.subaccountList.map(entry => html`<tr><sub-account .subaccountData="${entry}"></sub-account></tr>`)}
                 </tbody>

              </table>
              <button @click="${this.openDialog}">Agregar</button>
            </div>
          </div>
      `;
    }

  insertTable(event){
    this.subaccountList = [...this.subaccountList,event.detail]
  }

  openDialog(){
    this.shadowRoot.querySelector('#dialog').open();
  }
}

window.customElements.define("sub-account-view", SubAccountView);

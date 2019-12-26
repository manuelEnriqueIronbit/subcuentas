import { html, LitElement } from 'lit-element';
import style from './sub-account-view-styles.js';
import '@catsys/sub-account';
import '@catsys/sub-account-register';
import '@catsys/sub-account-edit';
import '@polymer/paper-dialog';
import  '@vaadin/vaadin-icons';
import '@vaadin/vaadin-grid'

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
<paper-dialog id="dialog-edit" modal no-cancel-on-outside-click="false">
          <paper-dialog-scrollable>
          <div class="sub-account-register">
                <sub-account-edit></sub-account-edit>
                <iron-icon icon="vaadin:close-circle" dialog-confirm autofocus></iron-icon>
            </div>
</paper-dialog-scrollable>

            </paper-dialog>

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
                  <th id="subaccount">#Subcuenta</th>
                  <th id="name">Nombre</th>
                  <th id="status">Estatus</th>
                  <th id="actions">Acciones</th>
                 </thead>
                 <tbody>
                    ${this.subaccountList.map(entry => html`
                    <tr id="${entry.name}">
                        <td>${entry.noSubcuenta}</td>
                        <td>${entry.name}</td>
                        <td>${entry.estatus === 'true'? html`<iron-icon icon="vaadin:check-circle-o"></iron-icon>` : html`<iron-icon icon="vaadin:close-circle-o"></iron-icon>`}</td>
                        <td><a @click="${this.openDialogEdit}"><iron-icon icon="vaadin:vaadin:edit"></iron-icon></a></td>
                    </tr>`
                    )}
                  </tbody>
                </table>

            <button @click="${this.openDialog}">Agregar</button>
      `;
    }

    insertTable(event){
    this.subaccountList = [...this.subaccountList,event.detail]
  }

  openDialog(){
    this.shadowRoot.querySelector('#dialog').open();
  }
  openDialogEdit(){
    this.shadowRoot.querySelector('#dialog-edit').open();
  }
}

window.customElements.define("sub-account-view", SubAccountView);

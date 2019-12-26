import { html, LitElement } from 'lit-element';
import style from './sub-account-view-styles.js';
import '@catsys/sub-account';
import '@catsys/sub-account-register';

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
            <div class="sub-account-register">
                <sub-account-register @subaccount-register="${this.insertTable}"></sub-account-register>
            </div>
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
                    ${this.subaccountList.map(entry => html`<sub-account .subaccountData="${entry}"></sub-account>`)}
                 </tbody>

              </table>
            </div>
          </div>
      `;
    }

  insertTable(event){
    this.subaccountList = [...this.subaccountList,event.detail]
  }
}

window.customElements.define("sub-account-view", SubAccountView);

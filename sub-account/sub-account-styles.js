import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

table {
  border-spacing: 0;
  width: 508px; }
  table thead {
    background-image: linear-gradient(180deg, #00EFD1 0%, #00ACEA 100%);
    padding: 0;
    color: #ffffff; }
    table thead #subaccount {
      width: 110px;
      text-align: left; }
    table thead #rfc {
      width: 145px; }
    table thead #status {
      width: 119px; }
    table thead #action {
      width: 145px; }
  table tr:nth-child(even) {
    background-color: #DFDFDF; }
  table tbody tr td:nth-child(1) {
    text-align: left; }
`;

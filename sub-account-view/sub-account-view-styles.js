import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

/* table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
  text-align: left;
}
table#t01 {
  width: 100%;
  background-color: #f1f1c1;
} */
table {
  border-spacing: 0;
  width: 508px; }
  table thead {
    background-image: linear-gradient(180deg, #00EFD1 0%, #00ACEA 100%);
    padding: 0;
    color: #ffffff; }
    table thead th {
      padding: 8px 17px; }
    table thead th:nth-child(1) {
      width: 110px;
      text-align: left;
      padding: 8px 0 8px 17px; }
    table thead th:nth-child(2) {
      width: 145x; }
    table thead th:nth-child(3) {
      width: 119px; }
    table thead th:nth-child(4) {
      width: 145px; }
  table tr:nth-child(even) {
    background-color: #DFDFDF; }
  table tbody tr td:nth-child(1) {
    text-align: left; }
  table tbody tr td {
    text-align: center;
    padding: 14px 17px; }

button {
  background-image: linear-gradient(44.3deg, #00BFEF 0%, #00DFD1 100%);
  border: 1.68px solid #00BFEF;
  border-radius: 11.76px;
  width: 102px;
  height: 25.2px;
  color: #FFFFFF;
  font-size: 16.24px;
  font-weight: 700;
  letter-spacing: 0.9px;
  line-height: 19px;
  text-align: center;
  margin-top: 45px; }

.sub-account-table {
  display: flex;
  align-items: center;
  flex-direction: column; }
`;

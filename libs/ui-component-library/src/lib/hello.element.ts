import { LitElement, html, css, property } from 'lit-element';

export class HelloElement extends LitElement {
  static styles = css`
    span {
      color: green;
    }
  `;

  @property() public who = 'unknown';

  render() {
    return html`
      <div>Hello ${this.who}!!!!</div>
    `;
  }
}

customElements.define('uicom-hello', HelloElement);

import { LitElement, html, css, property } from 'lit-element';
import { TemplateResult } from 'lit-html';

export class HelloElement extends LitElement {
  static styles = css`
    span {
      color: green;
    }
  `;

  @property() public who = 'unknown';

  private reset: NodeJS.Timeout;
  private num = 0;

  public connectedCallback(): void {
    super.connectedCallback();

    this.reset = setInterval(() => {
      this.num = this.num += 1;
      this.sendMessage(this.num);
    }, 3000);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();

    clearTimeout(this.reset);
  }

  public render(): TemplateResult {
    return html`
      <div @click="${this.onClick}">Hello <span>${this.who}</span>!</div>
    `;
  }

  public onClick(): void {
    this.sendMessage(this.num);
  }

  private sendMessage(num: number): void {
    const event = new CustomEvent('my-event', {
      detail: {
        message: 'Something important happened',
        num
      }
    });
    this.dispatchEvent(event);
  }

  /**
   * No ShadowDOM
   */
  // protected createRenderRoot() {
  //   return this;
  // }
}

customElements.define('uicom-hello', HelloElement);

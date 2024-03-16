import { CSSResultGroup, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createComponent } from "@lit/react";
import { classMap } from "lit/directives/class-map.js";
import React from "react";
import styles from "./index.scss?inline";

// export interface ButtonProps extends HTMLButtonElement {
//   /**
//    * The color of the button.
//    */
//   color?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'border';
//   /**
//    * The size of the button.
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * The shadow of the button.
//    */
//   shadow?: 'regular' | 'small' | 'medium' | 'large' | 'extraLarge' | 'inner' | 'none';
//   /**
//    * disabledShadow, when the button is disabled ,the shadow is or not
//    */
//   disabledShadow?: boolean;
// }

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("s-button")
export class Sbutton extends LitElement {
  static styles = styles as unknown as CSSResultGroup;
  @property({ type: String }) color = "primary";
  @property({ type: String }) size = "medium";
  @property({ type: String }) shadow = "none";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) disabledShadow = true;
  @property() _onclick: () => void = () => {};

  protected render() {
    return html`
      <button
        part="button"
        class=${`${this.color} ${this.size} ${this.shadow} ${classMap({
          disabled: this.disabled,
          disabledShadow: this.disabledShadow,
        })}`}
        @click=${this._onclick}
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "s-button": Sbutton;
  }
}

export const Button = createComponent({
  tagName: "s-button",
  elementClass: Sbutton,
  react: React,
});

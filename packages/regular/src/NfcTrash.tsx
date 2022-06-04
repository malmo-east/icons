import * as React from "react";
import { SVGProps } from "react";

const SvgNfcTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M412.9 481.1c.2 17 15.9 30.9 32.9 30.9h132.5c17.02 0 31.81-13.9 32.88-30.89L623.2 288H400.8l12.1 193.1zM624 224h-38.67l-10.61-23.89c-2.52-5.01-7.52-8.11-13.12-8.11h-99.2a14.676 14.676 0 0 0-13.12 8.105L438.7 224H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zM64 432c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v96h17.89l2.771-6.219C426.4 174.4 436.3 166.2 448 162.5V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h316.8l-3-48H64zm304-282.7c0-20.5-16.7-37.3-37.3-37.3H224c-13.25 0-24 10.75-24 24v78.66c-14.3 7.44-24 23.64-24 41.34 0 26.51 21.49 48 48 48s48-21.5 48-48c0-17.72-9.713-33.03-24-41.34V160h72v192H128V160h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-18.7C96.75 112 80 128.8 80 149.3v213.3c0 20.7 16.75 37.4 37.3 37.4h213.3c20.7 0 37.4-16.7 37.4-37.3v-86.9c-9.8-8.8-16-21.6-16-35.8 0-14.13 6.25-26.72 16-35.52V149.3z" />
  </svg>
);

export default SvgNfcTrash;

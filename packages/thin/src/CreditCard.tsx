import * as React from "react";
import { SVGProps } from "react";

const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 360c0-4.4 3.58-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.42 0-8-3.6-8-8zm128 0c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8zM0 96c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm16 0v32h544V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48zm0 48v96h544v-96H16zm0 272c0 26.5 21.49 48 48 48h448c26.5 0 48-21.5 48-48V256H16v160z" />
  </svg>
);

export default SvgCreditCard;

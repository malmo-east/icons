import * as React from "react";
import { SVGProps } from "react";

const SvgAddressCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 256c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64c0 35.3 28.7 64 64 64zm256-24h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-224 56h-64c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80zm224-136h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24s-10.7-24-24-24zm48-120H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16v320z" />
  </svg>
);

export default SvgAddressCard;
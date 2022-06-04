import * as React from "react";
import { SVGProps } from "react";

const SvgDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h148.3l-9.6 48H152c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.75-24-24-24h-50.73l-9.57-48H512c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM324.3 464h-72.6l9.6-48h53.46l9.54 48zM528 352c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16v288z" />
  </svg>
);

export default SvgDisplay;
import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyBill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 64c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448zM128 384c0-35.3-28.65-64-64-64v64h64zM64 192c35.35 0 64-28.7 64-64H64v64zm448 192v-64c-35.3 0-64 28.7-64 64h64zm0-256h-64c0 35.3 28.7 64 64 64v-64zM288 352c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z" />
  </svg>
);

export default SvgMoneyBill;

import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyBillSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M192 256c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zM0 128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm48 0v256c0 8.8 7.16 16 16 16h448c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64c-8.84 0-16 7.2-16 16z" />
  </svg>
);

export default SvgMoneyBillSimple;
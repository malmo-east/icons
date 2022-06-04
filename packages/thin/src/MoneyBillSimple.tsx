import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyBillSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 256c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96zm-96-80c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zM0 128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm16 0v256c0 26.5 21.49 48 48 48h448c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48H64c-26.51 0-48 21.5-48 48z" />
  </svg>
);

export default SvgMoneyBillSimple;

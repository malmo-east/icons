import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyBill1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="money-bill-1_svg__fa-primary"
      d="M288 188c11 0 20 8.1 20 20v68h4c11 0 20 8.1 20 20 0 11-9 20-20 20h-48c-11.9 0-20-9-20-20 0-11.9 8.1-20 20-20h4v-48.4c-9.1-1.9-16-9.9-16-19.6 0-11.9 8.1-20 20-20h16zM0 128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm64 64v128c35.35 0 64 28.7 64 64h320c0-35.3 28.7-64 64-64V192c-35.3 0-64-28.7-64-64H128c0 35.3-28.65 64-64 64z"
    />
    <path
      d="M512 192v128c-35.3 0-64 28.7-64 64H128c0-35.3-28.65-64-64-64V192c35.35 0 64-28.7 64-64h320c0 35.3 28.7 64 64 64zM288 352c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMoneyBill1;

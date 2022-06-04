import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyBill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="money-bill_svg__fa-primary"
      d="M512 64c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448zm-64 64H128c0 35.3-28.65 64-64 64v128c35.35 0 64 28.7 64 64h320c0-35.3 28.7-64 64-64V192c-35.3 0-64-28.7-64-64z"
    />
    <path
      d="M512 192v128c-35.3 0-64 28.7-64 64H128c0-35.3-28.65-64-64-64V192c35.35 0 64-28.7 64-64h320c0 35.3 28.7 64 64 64zM288 352c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMoneyBill;

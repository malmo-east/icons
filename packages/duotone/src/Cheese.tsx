import * as React from "react";
import { SVGProps } from "react";

const SvgCheese = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="cheese_svg__fa-primary"
      d="M512 255.1v192c0 18.5-14.4 32.9-32 32.9H32c-17.62 0-32-14.38-32-31.1V255.1h512z"
    />
    <path
      d="M299.9 32.01c-7.75-.25-15.25 2.25-21.12 6.1L0 255.1l512-.012C512 136.1 417.1 38.26 299.9 32.01z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCheese;

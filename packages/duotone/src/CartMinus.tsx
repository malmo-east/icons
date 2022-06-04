import * as React from "react";
import { SVGProps } from "react";

const SvgCartMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="cart-minus_svg__fa-primary"
      d="M96 0c11.5 0 21.4 8.19 23.6 19.51L179.9 336H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.25 0 24S10.75 0 24 0h72zm32 464c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm384 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM400 140c11 0 20 8.1 20 20 0 11-9 20-20 20H272c-11.9 0-20-9-20-20 0-11.9 8.1-20 20-20h128z"
    />
    <path
      d="M487.8 288H170.7L121.1 32h420.7c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3zM272 140c-11.9 0-20 8.1-20 20 0 11 8.1 20 20 20h128c11 0 20-9 20-20 0-11.9-9-20-20-20H272z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCartMinus;

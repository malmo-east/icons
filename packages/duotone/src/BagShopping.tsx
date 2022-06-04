import * as React from "react";
import { SVGProps } from "react";

const SvgBagShopping = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="bag-shopping_svg__fa-primary"
      d="M224 48c-35.3 0-64 28.65-64 64v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V112C112 50.14 162.1 0 224 0s112 50.14 112 112v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V112c0-35.35-28.7-64-64-64z"
    />
    <path
      d="M288 232c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h64c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53.02 0-96-43-96-96V208c0-26.5 21.49-48 48-48h64v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h128v72z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBagShopping;

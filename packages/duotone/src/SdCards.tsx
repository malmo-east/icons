import * as React from "react";
import { SVGProps } from "react";

const SvgSdCards = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="sd-cards_svg__fa-primary"
      d="M304 64h-48v96h48V64zm32 0v96h48V64h-48zm-8 448H120C53.83 512 0 458.2 0 392V120c0-13.2 10.75-24 24-24s24 10.8 24 24v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24s-10.7 24-24 24z"
    />
    <path
      d="M384 0H208L96 112v240c0 35.25 28.75 64 64 64h224c35.25 0 64-28.75 64-64V64c0-35.25-28.7-64-64-64zm-80 160h-48V64h48v96zm80 0h-48V64h48v96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSdCards;

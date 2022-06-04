import * as React from "react";
import { SVGProps } from "react";

const SvgSdCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="sd-card_svg__fa-primary"
      d="M112 160h48V64h-48v96zm80 0h48V64h-48v96zm80-96v96h48V64h-48z"
    />
    <path
      d="M320 0H128L0 128v320c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V64c0-35.25-28.7-64-64-64zM160 160h-48V64h48v96zm80 0h-48V64h48v96zm80 0h-48V64h48v96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSdCard;

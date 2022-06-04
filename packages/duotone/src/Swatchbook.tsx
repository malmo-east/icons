import * as React from "react";
import { SVGProps } from "react";

const SvgSwatchbook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="swatchbook_svg__fa-primary"
      d="M160 0c17.7 0 32 14.33 32 32v384c0 53-43 96-96 96-53.02 0-96-43-96-96V32C0 14.33 14.33 0 32 0h128zm-32 64H64v64h64V64zM64 256h64v-64H64v64zm32 184c13.3 0 24-10.7 24-24s-10.7-24-24-24c-13.25 0-24 10.7-24 24s10.75 24 24 24z"
    />
    <path
      d="M64 64h64v64H64V64zm371.2 150.4L223.6 425.9c.3-3.2.4-6.6.4-9.9V154l75.4-75.37c12.5-12.5 32.8-12.5 45.3 0l90.5 90.47c12.5 12.5 12.5 32.8 0 45.3zM480 512H182.8l192-192H480c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32zM128 256H64v-64h64v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSwatchbook;

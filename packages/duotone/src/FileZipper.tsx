import * as React from "react";
import { SVGProps } from "react";

const SvgFileZipper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-zipper_svg__fa-primary"
      d="M160 32H96v32h64V32zm0 128H96v32h64v-32zm0-64H96v32h64V96zm96-96v128h128L256 0zm-96 224H96L65.44 340.5c-7.93 39 22.26 75.45 62.83 75.45 40.26 0 70.45-36.3 62.68-75.15L160 224zm-16 144h-32c-8.8 0-16-7.2-16-16s7.164-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zM96 32h64v32H96V32zm0 64h64v32H96V96zm0 64h64v32H96v-32zm32.3 255.1c-40.56 0-70.76-36.45-62.83-75.45L96 224h64l30.94 116.9c7.76 38.8-22.44 74.2-62.64 74.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileZipper;

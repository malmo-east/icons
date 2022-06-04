import * as React from "react";
import { SVGProps } from "react";

const SvgBoxesStacked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="boxes-stacked_svg__fa-primary"
      d="M160 48c0-26.51 21.5-48 48-48h48v80c0 8.84 7.2 16 16 16h32c8.8 0 16-7.16 16-16V0h48c26.5 0 48 21.49 48 48v128c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48zM96 288v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-80h48c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V336c0-26.5 21.49-48 48-48h48zm320 0v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-80h48c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48h48z"
    />
    <path
      d="M256 0h64v80c0 8.84-7.2 16-16 16h-32c-8.8 0-16-7.16-16-16V0zm160 288h64v80c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-80zm-256 80c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-80h64v80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoxesStacked;

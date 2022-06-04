import * as React from "react";
import { SVGProps } from "react";

const SvgRefrigerator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="refrigerator_svg__fa-primary"
      d="M320 368c0 8.801-7.199 16-16 16s-16-7.2-16-16V192H0v288c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192h-64v176zm0-368H64C28.65 0 0 28.65 0 64v96h288V79.1c0-7.9 7.2-15.1 16-15.1s16 7.2 16 15.1V160h64V64c0-35.35-28.7-64-64-64z"
    />
    <path
      d="M0 192h288v-32H0v32zm320-32v32h64v-32h-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRefrigerator;

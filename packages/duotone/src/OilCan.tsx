import * as React from "react";
import { SVGProps } from "react";

const SvgOilCan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="oil-can_svg__fa-primary"
      d="M368.9 159.1c9.9 0 19.7 3.2 28.6 7.7l50.5 24.3 167-34.9c18.1-3.9 30.7 17.6 18.5 31.5L451.1 394.3c-13 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-21.3l-67.49-30C11.17 308.1 0 291.8 0 272.8v-65.7c0-25.6 21.49-48 48-48h320.9zM96 207.1H48v65.7l48 21.3v-87z"
    />
    <path
      d="M288 128v32h-64v-32h-32c-17.7 0-32-14.3-32-32 0-17.67 14.3-32 32-32h128c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgOilCan;

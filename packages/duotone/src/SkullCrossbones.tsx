import * as React from "react";
import { SVGProps } from "react";

const SvgSkullCrossbones = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="skull-crossbones_svg__fa-primary"
      d="M304 256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-21.6c-38.6-22.9-64-62-64-106.4C80 57.31 144.5 0 224 0s144 57.31 144 128c0 44.4-25.4 83.5-64 106.4V256zM168 112c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
    />
    <path
      d="m223.1 348.2 178.6-88.8c15.8-7.9 35-1.5 42.9 14.3 7.9 15.8 1.5 35-14.3 42.9L295.6 384l134.7 67.4c15.8 7.9 22.2 27.1 14.3 42.9-7.9 15.8-27.1 22.2-42.9 14.3l-178.6-88.8-176.79 88.8c-15.81 7.9-35.03 1.5-42.932-14.3-7.904-15.8-1.497-35 14.312-42.9L152.4 384 17.69 316.6c-15.809-7.9-22.216-27.1-14.312-42.9 7.902-15.8 27.122-22.2 42.932-14.3l176.79 88.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSkullCrossbones;
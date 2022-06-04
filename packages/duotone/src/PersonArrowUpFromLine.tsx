import * as React from "react";
import { SVGProps } from "react";

const SvgPersonArrowUpFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="person-arrow-up-from-line_svg__fa-primary"
      d="M553.4 166.6 528 141.3V384c0 17.7-14.3 32-32 32s-32-14.3-32-32V141.3l-25.4 25.3c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l80-80.03c12.5-12.49 32.7-12.49 45.2 0l80 80.03c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0zM608 448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h576z"
    />
    <path
      d="M144 48c0-26.51 21.5-48 48-48s48 21.49 48 48-21.5 48-48 48-48-21.49-48-48zm-24 400V256.9l-28.57 47.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.05-28.7-10.95-43.9l58.28-96.9C112.2 145.7 143.4 128 177.1 128h29.8c33.7 0 64.9 17.7 82.3 46.6l58.2 96.9c9.1 15.2 4.2 34.8-10.9 43.9-15.2 9.1-34.8 4.2-43.9-10.9L264 256.9V448h-64v-96h-16v96h-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonArrowUpFromLine;

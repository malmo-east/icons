import * as React from "react";
import { SVGProps } from "react";

const SvgTruckBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-bolt_svg__fa-primary"
      d="M0 48C0 21.49 21.49 0 48 0h320c26.5 0 48 21.49 48 48v48h50.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-33.1c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.9 96h-66.2c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.87 96H48c-26.51 0-48-21.5-48-48V48zm544 208v-18.7L466.7 160H416v96h128zM246.4 51.2l-128 96c-5.5 4.1-7.8 11.3-5.6 17.9 1.3 6.5 8.3 10.9 15.2 10.9h54.1l-36.4 72.8c-3.3 6.7-1.6 14.7 4 19.5 5.7 4.7 14 5 19.9.5l128-96c5.5-4.1 7.8-11.3 5.6-17.9-2.2-6.5-8.3-11.8-15.2-11.8h-54.1l36.4-71.94c3.3-6.64 1.6-14.69-4-19.44-5.7-4.76-14-4.97-19.9-.52z"
    />
    <path
      d="M266.3 51.72c5.6 4.75 7.3 12.8 4 19.44l-36.4 71.94H288c6.9 0 13 5.3 15.2 11.8 2.2 6.6-.1 13.8-5.6 17.9l-128 96c-5.9 4.5-14.2 4.2-19.9-.5-5.6-4.8-7.3-12.8-4-19.5l36.4-72.8H128c-6.9 0-13.9-4.4-15.2-10.9-2.2-6.6.1-13.8 5.6-17.9l128-96c5.9-4.45 14.2-4.24 19.9.52zM256 432c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zm288 0c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckBolt;
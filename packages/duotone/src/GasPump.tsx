import * as React from "react";
import { SVGProps } from "react";

const SvgGasPump = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="gas-pump_svg__fa-primary"
      d="M384 31.1c8.8-7.94 23.2-7.94 32 0l77.3 78.2c12 12 18.7 28.2 18.7 45.2V376c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40.9-40-40.9h-8v-48h8c48.6 0 88 40.3 88 88.9v32c0 13.3 10.7 24 24 24s24-10.7 24-24V221.1c-27.6-6.2-48-31.3-48-62v-64l-32-32c-8.8-7.94-8.8-22.26 0-32zM0 480c0-17.7 14.33-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32z"
    />
    <path
      d="M256 0c35.3 0 64 28.65 64 64v384H32V64C32 28.65 60.65 0 96 0h160zM112 64c-8.8 0-16 7.16-16 16v96c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16H112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGasPump;

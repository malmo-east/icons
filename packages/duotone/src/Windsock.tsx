import * as React from "react";
import { SVGProps } from "react";

const SvgWindsock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="windsock_svg__fa-primary"
      d="M32 0C14.33 0 0 14.33 0 32v464c0 8.8 7.164 16 16 16h32c8.84 0 16-7.2 16-16V32C64 14.33 49.67 0 32 0zm176 348.8 64-12.8V80l-64-12.8v281.6zM368 99.2v217.6l64-12.8V112l-64-12.8z"
    />
    <path
      d="m272 335.1 96-19.2V99.2L272 80v255.1zM128 96H64v48h64v128H64v48h64v44.8l80-16V67.2l-80-16V96zm364.7 28.1L432 112v191.1l60.71-12.14C503.9 289.6 512 279.8 512 268.3V147.7c0-11.5-8.1-21.3-19.3-23.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWindsock;

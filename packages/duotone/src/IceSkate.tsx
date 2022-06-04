import * as React from "react";
import { SVGProps } from "react";

const SvgIceSkate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="ice-skate_svg__fa-primary"
      d="M512 315v37c0 17.67-14.33 32-31.1 32h-416c-17.67 0-32-14.33-32-32V144.2c0-28.5 18.88-53.63 46.38-61.5L256 32V16c0-8.801 7.199-16 16-16h31.1c8.801 0 16 7.199 16 16v80h-48c-8.801 0-16 7.199-16 16 0 8.797 7.199 16 16 16h48v32h-48c-8.801 0-16 7.199-16 16 0 8.797 7.199 16 16 16h48l120.2 29.9c42.7 10.7 72.7 49 72.7 93.1z"
    />
    <path
      d="M272 128h48V96h-48c-8.836 0-16 7.164-16 16s7.2 16 16 16zm280 288c-13.2 0-24 10.8-24 23.1 0 14.2-10.7 24.9-24 24.9h-71.1l-.9-80h-48v80H144v-80H96v80H32C14.4 464 .9 478.4.9 495.1 0 510 13.18 512 16 512h496c35.2 0 64-28.8 64-64v-8.9c0-12.3-10.8-23.1-24-23.1zM272 192h48v-32h-48c-8.836 0-16 7.164-16 16s7.2 16 16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgIceSkate;

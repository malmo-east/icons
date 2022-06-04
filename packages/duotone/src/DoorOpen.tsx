import * as React from "react";
import { SVGProps } from "react";

const SvgDoorOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="door-open_svg__fa-primary"
      d="M232 224c-13.25 0-24 14.37-24 31.1 0 18.5 10.8 32.9 24 32.9s24-14.4 24-32-10.7-32-24-32zM0 464v31.1c0 9.8 7.125 16.9 16 16.9h48v-63.1H16C7.125 448 0 455.1 0 464zm560-16h-48V113.5c0-27.25-21.5-49.5-48-49.5l-112 .01V128h96v384h112c8.875 0 16-7.125 16-15.1v-31.1c0-10.7-7.1-17.8-16-17.8z"
    />
    <path
      d="m280.3 1.007-192 49.75C73.1 54.51 64 67.76 64 82.88V512h256V33.13c0-21.5-19.5-37.373-39.7-32.123zM232 288c-13.25 0-24-14.37-24-31.1 0-17.62 10.75-31.1 24-31.1s24 12.6 24 30.2-10.7 32-24 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDoorOpen;

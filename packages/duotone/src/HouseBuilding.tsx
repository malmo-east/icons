import * as React from "react";
import { SVGProps } from "react";

const SvgHouseBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-building_svg__fa-primary"
      d="M0 464V277.1c0-13.4 5.647-26.3 15.57-35.4l144.03-132c18.3-16.79 46.5-16.79 64.8 0l144 132c10 9.1 15.6 22 15.6 35.4V464c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48zm168-192c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48z"
    />
    <path
      d="M320 48c0-26.51 21.5-48 48-48h224c26.5 0 48 21.49 48 48v416c0 26.5-21.5 48-48 48H400c10-13.4 16-30 16-48V352h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-16v-10.9c0-7.2-1-14.3-2.8-21.1H432c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v4.6l-64-58.7V48zm208 144c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm-16 144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zM384 144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zm144-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseBuilding;
import * as React from "react";
import { SVGProps } from "react";

const SvgCarBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="car-building_svg__fa-primary"
      d="m260.1 294.4 26.6-79.7c10.9-32.7 41.5-54.7 75.9-54.7h138.8c34.4 0 65 22 75.9 54.7l26.6 79.7c21.3 10.3 36.1 32.2 36.1 57.6v128c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32v-32H304v32c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32V352c0-25.4 14.8-47.3 36.1-57.6zm69.6-6.4h204.6l-17.7-53.1c-2.2-6.5-8.3-10.9-15.2-10.9H362.6c-6.9 0-13 4.4-15.2 10.9L329.7 288zM304 344c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm256 48c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24z"
    />
    <path
      d="M0 48C0 21.49 21.49 0 48 0h224c26.5 0 48 21.49 48 48v88.4c-29.5 12.1-53.1 36.6-63.7 68.2l-.4.5c-1-7-7.7-13.1-15.9-13.1h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h31.2l-5.6 16.9C208.5 290.2 192 319.2 192 352v128H48c-26.51 0-48-21.5-48-48V48zm64 192c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v32zm0-96c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v32zm144-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zM64 336c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCarBuilding;
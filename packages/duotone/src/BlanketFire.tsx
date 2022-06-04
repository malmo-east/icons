import * as React from "react";
import { SVGProps } from "react";

const SvgBlanketFire = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="blanket-fire_svg__fa-primary"
      d="M616 273.2c-15.04-28.48-35.84-58.46-60.48-81.15-5.72-5.15-14.42-5.15-20.12-.05-9.598 8.768-18.56 19.62-26.24 29.5a546.06 546.06 0 0 0-55.68-57.73c-5.48-4.97-14.08-4.97-19.58-.07-33.28 29.7-61.44 63.42-81.6 95.78C332.8 291.5 320 323.7 320 350.1c0 87.8 70.4 161.9 160 161.9 88.64 0 160-74.11 160-161.9 0-20.2-9.6-48.9-24-76.9zm-86.1 158.9c-15 10.9-31 15.9-49.8 15.9-44.3 0-80.1-29-80.1-78.9 0-24 15.04-44.99 45.12-81.98 3.84 4.992 61.76 79.01 61.76 79.01l36.16-42.02c2.883 4 4.801 8 7.039 12C568 369.1 560 412 529.9 432.1z"
    />
    <path
      d="M352 0H96C42.88 0 0 42.98 0 96v224c0 70.69 57.28 128 128 128h186.2c-11.2-19.52-19.2-41.15-23.36-64H128c-35.2 0-64-28.64-64-64s28.8-64 64-64h189.4c2.6-4.5 5.2-8.9 7.7-13.3 21.76-35.17 51.84-71.23 87.36-102.8 9.94-9 23.04-12.9 35.54-11.7V96c0-53.02-42.9-96-96-96zM96 320c0 17.66 14.4 32 32 32h160v-1.92c0-20.18 5.4-41.28 13.8-62.08H128c-17.6 0-32 14.3-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBlanketFire;

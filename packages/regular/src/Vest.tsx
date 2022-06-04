import * as React from "react";
import { SVGProps } from "react";

const SvgVest = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M438.9 251.6 400 185.5V56c0-28.14-20.93-51.27-48-55.19V0h-38.84c-9.447 0-17.73 5.65-21.61 14.12l-9.863 6.57c-35.03 23.38-80.28 23.38-115.4 0l-9.887-6.57C152.6 5.65 144.3 0 134.8 0H96v.809C68.93 4.73 48 27.86 48 56v129.5L10.09 250C3.5 259.5 0 270.6 0 282.1V456c0 30.9 25.13 56 56 56h336c30.88 0 56-25.12 56-56V282.1c0-11.5-3.5-22.6-9.1-30.5zM267.8 79.77 224 202.3 180.2 79.77c14.3 4.31 29.1 6.48 43.8 6.48s29.5-2.17 43.8-6.48zM51.72 462.2l85.25-85.25c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L48 398.1v-116c0-1.625.531-3.25 2.469-6.188l42.22-71.75A24.03 24.03 0 0 0 96 192V56c0-4.41 3.59-8 8-8h13.94l80.59 225.6-5.119 14.33C192.5 290.5 192 293.3 192 296v168H56c-1.67 0-3-.9-4.28-1.8zM240 464V300.2L330.1 48H344c4.4 0 8 3.59 8 8v136c0 4.281 1.156 8.469 3.312 12.16l43.22 73.31c.968 1.33 1.468 3.03 1.468 4.63v115.1l-55.03-55.03c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l85.25 85.25C394.1 463.1 393.7 464 392 464H240z" />
  </svg>
);

export default SvgVest;
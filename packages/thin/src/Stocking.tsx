import * as React from "react";
import { SVGProps } from "react";

const SvgStocking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M343.9 144c-4.406 0-7.998 3.594-7.998 8v152.3c0 48.5-24.06 93.53-64.34 120.5l-78.06 52.03C174.7 489.4 152.8 496 130.3 496c-38.28 0-73.87-19.03-95.15-50.88-34.94-52.31-20.72-123.4 31.34-158.2l45.53-27.19V152c0-4.406-3.594-8-8-8s-8 3.594-8 8v98.72L57.96 273.4C-1.79 313.31-18 394.3 21.84 454c24.28 36.3 64.8 58 108.46 58 25.69 0 50.65-7.562 72.12-21.88l78.06-52.03c44.75-29.94 71.46-79.94 71.46-133.8V152c-.04-4.4-3.64-8-8.04-8zm7.2-144H96.01c-17.67 0-32 14.33-32 32l.015 48c0 17.67 14.32 32 31.99 32h255.1C369.7 112 384 97.67 384 80V32c0-17.67-14.3-32-32.9-32zM368 80c0 8.822-7.206 16-16.03 16H96.01c-8.82 0-15.99-7.18-15.99-16V32c0-8.822 7.178-16 15.1-16h255.1c8.822 0 16 7.178 16 16v48z" />
  </svg>
);

export default SvgStocking;

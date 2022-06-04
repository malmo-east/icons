import * as React from "react";
import { SVGProps } from "react";

const SvgWheelchair = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="wheelchair_svg__fa-primary"
      d="M510.3 421.9c-5.594-16.75-23.53-25.84-40.47-20.22l-19.38 6.438-41.7-99.97C403.9 295.1 392.2 288 379.1 288h-97.78l-10.4-48h65.11c17.69 0 32-14.31 32-32s-14.31-32-32-32h-78.98l-1.45-6.8c-3.781-26.25-28.34-44.47-54.31-40.75-27.19 3.75-44.59 28.05-40.79 54.35l23.68 140.4C185.8 339.6 199.6 352 216 352h141.4l44.86 107.9C407.3 472.3 419.3 480 432 480a31.76 31.76 0 0 0 10.12-1.656l48-16C506.9 456.8 515.9 438.7 510.3 421.9z"
    />
    <path
      d="M320 352c0 88.37-71.63 160-159.1 160S0 440.4 0 352s71.63-160 160-160c.713 0 1.369.2 2.08.209l8.232 48.83C166.9 240.7 163.5 240 160 240c-61.76 0-111.1 50.24-111.1 112s50.24 112 112 112S272 413.8 272 352h48zM240 48c0-26.51-21.49-48-48-48s-48 21.49-48 48 21.5 48 48 48 48-21.49 48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWheelchair;
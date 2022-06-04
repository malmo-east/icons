import * as React from "react";
import { SVGProps } from "react";

const SvgHelmetSafety = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="helmet-safety_svg__fa-primary"
      d="M544 280.9c0-89.17-61.83-165.4-139.6-197.4L352 174.2V49.78c0-9.87-7.9-17.78-17.8-17.78h-92.4c-9.9 0-17.8 7.91-17.8 17.78v124.4l-52.4-90.65C93.83 115.5 32 191.7 32 280.9V384h512V280.9z"
    />
    <path
      d="M574.7 393.7c-2.5-5.9-8.3-9.7-14.7-9.7H16a16.037 16.037 0 0 0-14.69 9.656c-2.531 5.875-1.344 12.69 3.062 17.34C7.031 413.8 72.02 480 287.1 480s280.1-66.19 283.6-69c5.3-4.7 6.5-11.5 4-17.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHelmetSafety;

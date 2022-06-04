import * as React from "react";
import { SVGProps } from "react";

const SvgDrawCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="draw-circle_svg__fa-primary"
      d="M192 64c0-35.35 28.7-64 64-64s64 28.65 64 64-28.7 64-64 64-64-28.65-64-64zm0 384c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm-64-192c0 35.3-28.65 64-64 64S0 291.3 0 256s28.65-64 64-64 64 28.7 64 64zm256 0c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64z"
    />
    <path
      d="M315.3 39.94c76.1 20.83 135.9 80.66 156.8 156.76-7.5-3-15.6-4.7-24.1-4.7-15.1 0-29.9 5.2-40 14-15.8-48.1-53.9-86.2-102.9-102.9 9.7-10.09 14.9-23.98 14.9-40 0-7.61-1.7-15.73-4.7-23.16zm0 432.16c3-7.5 4.7-15.6 4.7-24.1 0-15.1-5.2-29.9-14.9-40 49-15.8 87.1-53.9 102.9-102.9 10.1 9.7 24.9 14 40 14 8.5 0 16.6-.8 24.1-3.8-20.9 76.1-80.7 135.9-156.8 156.8zm-118.6 0c-76.1-20.9-135.93-80.7-156.76-156.8 7.43 3 15.55 4.7 24.06 4.7 15.12 0 29.01-5.2 39.1-14.9 16.7 49 54.8 87.1 102.9 102.9-8.8 10.1-14 24.9-14 40 0 8.5 1.7 16.6 4.7 24.1zM192 64c0 15.12 5.2 29.01 14 39.1-48.1 16.7-86.2 54.8-102.9 102.9-10.09-8.8-23.98-14-40-14-7.61 0-15.73 1.7-23.16 4.7C60.77 120.6 120.6 60.77 196.7 39.94c-3 7.43-5.6 15.55-5.6 24.06h.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDrawCircle;
import * as React from "react";
import { SVGProps } from "react";

const SvgRibbon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="ribbon_svg__fa-primary"
      d="M441.8 444.3s-292-324.5-295.4-329.1c15.38-8.5 40.25-17.1 77.51-17.1s62.13 9.5 77.51 17.1c-3.25 5.5-56.01 64.5-56.01 64.5l79.13 87.75 34.13-37.1c28.75-31.87 33.38-78.62 11.5-115.5L326.5 39.52c-4.25-7.25-9.876-13.25-16.75-17.1-40.75-27.62-127.5-29.75-171.5 0-6.95 3.85-12.55 9.85-16.85 17.1L77.81 112.8c-1.5 2.5-37.13 62.1 11.5 116L337.41 504c8.001 8.875 21.38 10.5 31.25 3.75l68.88-27.87c11.96-7.98 14.06-24.78 4.26-35.58z"
    />
    <path
      d="M225 379.3 110.7 504.1c-8 8.75-21.5 10.5-31.38 3.75l-68.76-27.87c-12-8.123-14.13-24.87-4.5-35.75l139.8-152.8L225 379.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRibbon;

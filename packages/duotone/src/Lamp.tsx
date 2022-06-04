import * as React from "react";
import { SVGProps } from "react";

const SvgLamp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="lamp_svg__fa-primary"
      d="M445.5 211.4 367.1 19.38C363.2 7.625 352.4 0 340.4 0H120.6c-11.4 0-21.88 6.75-27 17.75l-90.38 192C-6.782 230.1 7.718 256 30.22 256h387.6c21.68 0 36.28-23.5 27.68-44.6z"
    />
    <path
      d="M351.1 428.8c0 28.5-11.5 54.25-30.5 74.37-4.9 5.93-13 8.83-21.4 8.83H148.7c-8.375 0-16.5-2.875-22.25-8.875-19-20-30.5-45.87-30.5-74.37 0-42 26.78-103.5 64.03-140.8V256h128v32c37.32 37.3 63.12 98.8 63.12 140.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLamp;

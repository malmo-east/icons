import * as React from "react";
import { SVGProps } from "react";

const SvgTextSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="text-slash_svg__fa-primary"
      d="M630.8 469.1 38.81 5.13C28.34-3.089 13.28-1.24 5.11 9.198s-6.349 25.54 4.073 33.69l591.1 463.1a23.791 23.791 0 0 0 14.8 5.127c7.125 0 14.17-3.164 18.9-9.195 9.117-9.52 7.217-24.62-3.183-32.82z"
    />
    <path
      d="M351.1 416h-44.4l18.96-64.1-54.26-43.4L240.04 416h-48c-17.67 0-32 14.31-32 32s14.33 31.99 32 31.99h160c17.67 0 32-14.31 32-31.99s-14.34-32-32.94-32zM544 32.01H191.1c-17.67 0-32 14.31-32 32v36.09l58.03 45.48c4.37-5.08 5.97-10.88 5.97-17.58V96h109.3l-33.22 113.9 54.26 42.53L400 96.01h112v32c0 17.69 14.33 32 32 32s32-14.31 32-32v-64c0-17.68-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTextSlash;

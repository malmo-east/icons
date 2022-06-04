import * as React from "react";
import { SVGProps } from "react";

const SvgTirePressureWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="tire-pressure-warning_svg__fa-primary"
      d="M280 232c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24V120c0-13.3 11.6-24 24-24 14.2 0 24.9 10.7 24.9 24v112zm-56.9 88c0-17.7 15.2-32 32-32 18.6 0 32.9 14.3 32.9 32s-14.3 32-32.9 32c-16.8 0-32-14.3-32-32z"
    />
    <path
      d="M384 32c0-17.67 14.3-32 32-32s32 14.33 32 32v22.46c0 24.07 3.9 48.04 11.5 70.84l1.6 7.4c5.7 14.5 12.4 28.7 20.2 44.4 17.5 35.6 33.4 82.6 27.5 136.2-5.4 48.6-28.1 99-76.8 147.8V496c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-8h-32v8c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-8h-32.9v8c0 8.8-6.3 16-16 16h-32c-7.9 0-16-7.2-16-16v-8h-32v8c0 8.8-6.3 16-16 16h-32c-7.94 0-16-7.2-16-16v-34.9C31.34 412.3 8.575 361.9 3.236 313.3c-5.894-53.6 9.934-100.6 27.484-136.2 7.78-15.7 14.49-29.9 19.3-44.4l2.48-7.4c7.62-22.8 10.6-46.77 10.6-70.84V32c0-17.67 15.23-32 32-32 18.6 0 32 14.33 32 32v22.46c0 30.95-4.1 61.74-13.9 91.04l-2.5 6.6c-6.3 19-14.77 37.5-22.58 53.4-14.66 29.7-25.32 63.9-21.27 100.8 3.74 34 20.41 74.1 65.75 117.7h246.8c45.3-43.6 62-83.7 65.7-117.7 4.1-36.9-6.6-71.1-21.2-100.8-7.8-15.9-16.3-34.4-22.6-53.4l-2.5-6.6C388.1 116.2 384 85.41 384 54.46V32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTirePressureWarning;
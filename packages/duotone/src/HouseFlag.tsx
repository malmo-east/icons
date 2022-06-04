import * as React from "react";
import { SVGProps } from "react";

const SvgHouseFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-flag_svg__fa-primary"
      d="M624 32c8.8 0 16 7.16 16 16v128c0 8.8-7.2 16-16 16H512v320h-64V32c0-17.67 14.3-32 32-32s32 14.33 32 32h112z"
    />
    <path
      d="M416 512H416.8 352c-17.7 0-32-14.3-32-32v-96c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.67 0-32-14.3-32-32V287.1H31.1c-12.5 0-24.471-7.4-29.117-20-4.646-12.6-.98-26.7 9.187-35.4l224.03-192c12-10.27 29.6-10.27 41.6 0L416 159v353z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseFlag;

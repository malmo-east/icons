import * as React from "react";
import { SVGProps } from "react";

const SvgHouseMedicalFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-medical-flag_svg__fa-primary"
      d="M624 32c8.8 0 16 7.16 16 16v128c0 8.8-7.2 16-16 16H512v320h-64V32c0-17.67 14.3-32 32-32s32 14.33 32 32h112z"
    />
    <path
      d="M416 512H416.8 96c-17.67 0-32-14.3-32-32V287.1H31.1c-12.49 0-24.469-7.4-29.115-20-4.646-12.6-.98-26.7 9.185-35.4l224.03-192c12-10.27 29.6-10.27 41.6 0L416 159v353zM223.1 255.1h-48c-7.9 0-16 8.1-16 16v32c0 9.7 8.1 16 16 16h48V368c0 8.8 8.1 16 16 16h32c9.7 0 16-7.2 16-16v-48.9H336c8.8 0 16-6.3 16-16v-32c0-7.9-7.2-16-16-16h-48.9v-48c0-7.9-6.3-16-16-16h-32c-7.9 0-16 8.1-16 16v48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseMedicalFlag;

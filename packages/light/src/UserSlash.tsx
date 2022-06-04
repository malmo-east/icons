import * as React from "react";
import { SVGProps } from "react";

const SvgUserSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 32c52.94 0 96 43.06 96 96 0 35.88-20.03 66.86-49.27 83.33l26.81 21.17c32.85-23.17 54.45-61.25 54.45-104.5C447.1 57.31 390.7 0 319.1 0c-53 0-99 33.47-117.8 80.71l26.8 21.16C239.5 61.68 276.2 32 320 32zM130.7 480c-1.5 0-2.7-1.2-2.7-2.7 0-77.9 63.4-141.3 141.3-141.3h48.71l-40.53-32h-8.18C173.57 304 96 381.6 96 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7c8.227 0 15.47-3.275 21.42-8.066L500.4 480H130.7zm503.2 3.4-608-480C18.962-2.053 8.9-.85 3.42 6.041c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4z" />
  </svg>
);

export default SvgUserSlash;
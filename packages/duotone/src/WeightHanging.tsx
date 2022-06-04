import * as React from "react";
import { SVGProps } from "react";

const SvgWeightHanging = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="weight-hanging_svg__fa-primary"
      d="M464 512H47.99c-31.63 0-54.63-32.88-46.25-66.13l73-292.07c3.75-15.3 16.5-25.8 30.86-25.8h300.8c14.38 0 27.13 10.5 30.88 25.75l73.01 292.1C518.6 479.1 495.6 512 464 512z"
    />
    <path
      d="M165.9 128c-3.7-10-6.8-20.7-6.8-32 0-53 43-96 96-96s96 43 96 96c0 11.25-2.25 22-5.875 32H256c17.63 0 32-14.38 32-32s-14.4-32-32-32-32.9 14.38-32.9 32 15.3 32 32.9 32h-90.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWeightHanging;

import * as React from "react";
import { SVGProps } from "react";

const SvgListRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="list-radio_svg__fa-primary"
      d="M0 96c0-35.35 28.65-64 64-64s64 28.65 64 64c0 35.3-28.65 64-64 64S0 131.3 0 96zm0 160c0-35.3 28.65-64 64-64s64 28.7 64 64-28.65 64-64 64-64-28.7-64-64zm64 24c13.25 0 24-10.7 24-24s-10.75-24-24-24-24 10.7-24 24 10.75 24 24 24zM0 416c0-35.3 28.65-64 64-64s64 28.7 64 64-28.65 64-64 64-64-28.7-64-64zm64 24c13.25 0 24-10.7 24-24s-10.75-24-24-24-24 10.7-24 24 10.75 24 24 24z"
    />
    <path
      d="M160 96c0-17.67 14.3-32 32-32h288c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm320 128c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgListRadio;
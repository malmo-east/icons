import * as React from "react";
import { SVGProps } from "react";

const SvgPopsicle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="popsicle_svg__fa-primary"
      d="M160 512c-8.5 0-16.6-3.4-22.6-9.4S128 488.5 128 480V192c0-8.5 3.4-16.6 9.4-22.6s14.1-9.4 22.6-9.4c8.5 0 16.6 3.4 22.6 9.4s9.4 14.1 9.4 22.6v288c0 8.5-3.4 16.6-9.4 22.6S168.5 512 160 512z"
    />
    <path
      d="M320 160v192c0 8.5-3.4 16.6-9.4 22.6S296.5 384 288 384h-96V192c0-8.5-3.4-16.6-9.4-22.6S168.5 160 160 160c-8.5 0-16.6 3.4-22.6 9.4S128 183.5 128 192v192H32c-8.49 0-16.63-3.4-22.628-9.4C3.371 368.6 0 360.5 0 352V160c0-42.4 16.86-83.13 46.86-113.14C76.87 16.86 117.6 0 160 0c42.4 0 83.1 16.86 113.1 46.86C303.1 76.87 320 117.6 320 160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPopsicle;

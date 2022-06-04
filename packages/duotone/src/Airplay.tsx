import * as React from "react";
import { SVGProps } from "react";

const SvgAirplay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="airplay_svg__fa-primary"
      d="M307.6 296.1c-5.5-5.4-12.5-8.1-19.6-8.1a27.285 27.285 0 0 0-19.45 8.109l-132.5 136.8C118.8 450.2 131.1 480 155.7 480h264.7c24.6 0 36.89-29.77 19.54-47.13L307.6 296.1z"
    />
    <path
      d="M576 128v192c0 50.86-39.86 92.19-89.93 95.39-3.221-5.695-6.955-11.15-11.69-15.89L428.4 352H480c17.66 0 32-14.34 32-32V128c0-17.66-14.34-32-32-32H96c-17.66 0-32 14.3-32 32v192c0 17.66 14.34 32 32 32h51.64l-45.45 46.94c-4.947 4.945-8.865 10.57-12.19 16.45C39.9 412.2 0 370.9 0 320V128c0-52.94 43.06-96 96-96h384c52.9 0 96 43.06 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAirplay;

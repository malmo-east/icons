import * as React from "react";
import { SVGProps } from "react";

const SvgHeartCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="heart-circle-check_svg__fa-primary"
      d="M288 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm211.3-20.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0L416 385.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72z"
    />
    <path
      d="M507 208.7C484.3 198 458.8 192 432 192c-97.2 0-176 78.8-176 176 0 35.7 10.6 68.9 28.9 96.6l-5.5 5.7c-13 12.9-33.9 12.9-45.9 0L39.71 270.5c-55.93-58-52.94-153.9 9.99-207.82 53.9-46.95 136.8-37.96 186.8 12.99l19.9 20.97 19-20.97c50-50.95 131.9-59.94 187.8-12.99 42.9 37.42 57.5 94.92 43.8 146.02z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHeartCircleCheck;

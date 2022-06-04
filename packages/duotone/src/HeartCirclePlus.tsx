import * as React from "react";
import { SVGProps } from "react";

const SvgHeartCirclePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="heart-circle-plus_svg__fa-primary"
      d="M576 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-160-64.9v48h-48c-8.8 0-16 8.1-16 16 0 9.7 7.2 16 16 16h48v48c0 9.7 7.2 16 16 16s16-6.3 16-16v-48h48c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16h-48v-48c0-7.9-7.2-16-16-16s-16 8.1-16 16z"
    />
    <path
      d="M507 208.7C484.3 198 458.8 192 432 192c-97.2 0-176 78.8-176 176 0 35.7 10.6 68.9 28.9 96.6l-5.5 5.7c-13 12.9-33.9 12.9-45.9 0L39.71 270.5c-55.93-58-52.94-153.9 9.99-207.82 53.9-46.95 136.8-37.96 186.8 12.99l19.9 20.97 19-20.97c50-50.95 131.9-59.94 187.8-12.99 42.9 37.42 57.5 94.92 43.8 146.02z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHeartCirclePlus;

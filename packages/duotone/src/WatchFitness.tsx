import * as React from "react";
import { SVGProps } from "react";

const SvgWatchFitness = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="watch-fitness_svg__fa-primary"
      d="M271.7 0C298.4 0 320 21.63 320 48.32V65.6c-5.2-1.05-10.5-1.6-16-1.6H80c-5.48 0-10.83.55-16 1.6V48.32C64 21.63 85.63 0 112.3 0h159.4zM64 464v-17.6c5.17 1 10.52 1.6 16 1.6h224c5.5 0 10.8-.6 16-1.6V464c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48zm116.9-130.7-80.1-77.2c-20.08-19.4-20.08-51.6 0-71.1 18.3-18.4 49.5-18.4 68.6 0l22.6 21.9 22.6-21.9c19.1-18.4 49.4-18.4 68.6 0 20.1 19.5 20.1 51.7 0 71.1l-80.1 77.2c-6.2 6-16 6-22.2 0z"
    />
    <path
      d="M304 64c44.2 0 80 35.82 80 80v224c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V144c0-44.18 35.82-80 80-80h224zM203.1 333.3l80.1-77.2c20.1-19.4 20.1-51.6 0-71.1-19.2-18.4-49.5-18.4-68.6 0L192 206.9 169.4 185c-19.1-18.4-50.3-18.4-68.6 0-20.08 19.5-20.08 51.7 0 71.1l80.1 77.2c6.2 6 16 6 22.2 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWatchFitness;

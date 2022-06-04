import * as React from "react";
import { SVGProps } from "react";

const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="trophy_svg__fa-primary"
      d="M335.9 371c-9.715 8.604-15.9 20.65-15.9 33.62-.9 24.08 19.3 43.38 43.4 43.38h4.644c26.51 0 47.99 21.49 47.99 48 0 8.836-7.162 16-15.1 16H176c-8.836 0-15.1-7.164-15.1-16 0-26.51 21.48-48 47.99-48h4.644c24.03 0 43.36-19.33 43.36-43.35 0-12.98-6.184-25.02-15.9-33.62C128 271.7 128 96 128 96V32c0-17.67 14.5-32 32.17-32h255.7C433.5 0 448 14.33 448 32l-.006 64c-.894 0-.894 175.7-112.094 275z"
    />
    <path
      d="M193.7 316.9c-3.9-5.8-7.5-11.6-10.9-17.5-47.14-19.35-82.56-45.83-105.4-79.52C49.47 178.6 47.01 135.7 48.38 112h80.39c-.67-10.1-.77-16-.77-16l.1-32H27.26c-11.1 0-20.723 7.59-23.348 18.38C3.1 85.78-15.71 167.2 37.07 245.9c37.45 55.82 100.6 95.03 187.5 117.4 8.828 2.268 17.76 9.74 15.51 7.75C211.9 346 194.2 317.4 193.7 316.9zM572.1 82.38C569.5 71.59 559.8 64 548.7 64H447.9l.081 32s-.095 5.926-.765 16h80.39c1.375 23.66-1.093 66.63-29.03 107.8-22.82 33.69-58.25 60.17-105.4 79.52a318.945 318.945 0 0 1-10.86 17.5c-.535.535-18.2 29.14-46.45 54.16-2.248 1.99 6.687-5.482 15.51-7.75 86.96-22.34 150.1-61.55 187.5-117.4C591.7 167.2 572.9 85.78 572.1 82.38z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrophy;

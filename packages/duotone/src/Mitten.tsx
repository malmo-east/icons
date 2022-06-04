import * as React from "react";
import { SVGProps } from "react";

const SvgMitten = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="mitten_svg__fa-primary"
      d="M425 206.9c-27.25-22.62-67.5-19-90.13 8.25l-20.88 25L284.4 111.8c-18-77.5-95.38-125.1-172.8-108C34.26 21.63-14.25 98.88 3.754 176.4L64 384h288l81.14-86.1c22.66-28.1 18.96-68.4-8.14-91z"
    />
    <path
      d="M352 384H64c-17.6 0-31.1 14.4-31.1 32l-.008 64C31.1 497.6 46.4 512 63.1 512h288c17.6 0 32-14.4 32-31.1l.9-64.9c0-17.6-14.4-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMitten;

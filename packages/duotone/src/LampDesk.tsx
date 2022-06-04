import * as React from "react";
import { SVGProps } from "react";

const SvgLampDesk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="lamp-desk_svg__fa-primary"
      d="M319.1 447.9H63.97C18.94 447.9 0 486.8 0 496.5c0 8.2 7.311 15.5 16.14 15.5h351.7c8.83 0 16.12-7.252 16.12-15.51-.06-9.79-19.36-48.59-64.86-48.59zM512 81.2c0-9.067-7.032-17.76-17.63-17.76h-147.9l-45.25-45.31C288.8 6.039 272.7 0 256.6 0c-34.5 0-64 27.89-64 64.05 0 16.11 6.032 32.23 18.11 44.7l45.11 45.14.154 148.3c0 10.61 8.642 17.64 17.7 17.64 4.3 0 8.721-1.584 12.3-5.13l220.9-221.2c3.526-3.61 5.126-8 5.126-12.3z"
    />
    <path
      d="M221.8 119.8 103 238.7c-4.55 4.5-7.03 10.7-7.03 17 0 2.178.297 4.374.907 6.528l53 185.7h50l-52.88-185.2 108.8-108.8L221.8 119.8zm249.3 104.1c0-13-4.516-26.03-13.61-36.51l-78.63 78.72c10.47 9.109 23.48 13.63 36.47 13.63 14.31 0 28.6-5.491 39.41-16.38 11.76-10.86 16.36-25.16 16.36-39.46z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLampDesk;

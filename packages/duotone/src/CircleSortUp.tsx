import * as React from "react";
import { SVGProps } from "react";

const SvgCircleSortUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-sort-up_svg__fa-primary"
      d="M347.5 223.1H164.6c-16.5 0-24.69-19.88-13.19-31.38l91.53-91.25c3.46-3.37 8.16-5.37 13.06-5.37s9.5 2 13 5.375l91.63 91.25C372.1 204.1 364 223.1 347.5 223.1z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm104.6 319.4L269 410.6c-3.5 3.4-8.1 5.4-13 5.4s-9.625-2-13.12-5.375l-91.5-91.25C139.9 307.9 148 288 164.5 288h183c16.5 0 24.6 19.9 13.1 31.4zm-13.1-96.3H164.6c-16.5 0-24.69-19.88-13.19-31.38l91.53-91.25c3.46-3.37 8.16-5.37 13.06-5.37s9.5 2 13 5.375l91.63 91.25C372.1 204.1 364 223.1 347.5 223.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleSortUp;

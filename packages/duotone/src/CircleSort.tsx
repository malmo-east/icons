import * as React from "react";
import { SVGProps } from "react";

const SvgCircleSort = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-sort_svg__fa-primary"
      d="M164.6 224h182.9c16.5 0 24.62-19.88 13.12-31.38l-91.53-91.25C265.6 98 260.9 95.1 256 95.1s-9.5 2.9-13 6.3l-91.6 91.2c-11.5 11.5-3.3 31.4 13.2 31.4zm182.9 64H164.6c-16.5 0-24.69 19.88-13.19 31.38L243 410.6c3.5 3.4 8.1 5.4 13 5.4s9.594-1.1 13.09-5.375l91.53-91.25C372.1 307.9 364 288 347.5 288z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm104.6 319.4-91.53 91.25C265.6 414 260.9 416 256 416s-9.5-1.1-13-5.375L151.4 319.4c-11.5-11.5-3.3-31.4 13.2-31.4h182.9c16.5 0 24.6 19.9 13.1 31.4zM347.5 224H164.6c-16.5 0-24.69-19.88-13.19-31.38L243 101.4c3.5-3.4 8.1-6.3 13-6.3s9.594 2 13.09 5.375l91.53 91.25C372.1 204.1 364 224 347.5 224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleSort;
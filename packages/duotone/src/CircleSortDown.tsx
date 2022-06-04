import * as React from "react";
import { SVGProps } from "react";

const SvgCircleSortDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-sort-down_svg__fa-primary"
      d="M164.5 288h182.9c16.5 0 24.69 19.88 13.19 31.38l-91.53 91.25C265.6 414 260.9 416 256 416s-9.5-2-13-5.375L151.4 319.4c-11.5-11.5-3.4-31.4 13.1-31.4z"
    />
    <path
      d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zM151.4 192.6l91.6-91.2c3.5-4.3 8.1-6.3 13-6.3s9.625 2 13.12 5.375l91.5 91.25c11.5 11.5 3.375 31.38-13.12 31.38h-183C148 223.1 139.9 204.1 151.4 192.6zm13.1 95.4h182.9c16.5 0 24.69 19.88 13.19 31.38l-91.53 91.25C265.6 414 260.9 416 256 416s-9.5-2-13-5.375L151.4 319.4c-11.5-11.5-3.4-31.4 13.1-31.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleSortDown;

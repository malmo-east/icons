import * as React from "react";
import { SVGProps } from "react";

const SvgCircle6 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-6_svg__fa-primary"
      d="m282 196 29.76-25.94c9.969-8.719 11.03-23.88 2.312-33.88C309.3 130.8 302.7 128 296 128a23.958 23.958 0 0 0-15.78 5.906L200.3 203.6C187.5 214.7 160 246.7 160 288c0 52.94 43.06 96 96 96s96-43.06 96-96c0-43.9-29.7-80.5-70-92zm-26 140c-26.47 0-48-21.53-48-48 0-4.719.656-9.312 1.969-13.72C216 254.1 234.9 240 256 240c26.47 0 48 21.53 48 48s-21.5 48-48 48z"
    />
    <path
      d="M256 240c-21.06 0-40 14.09-46.03 34.28C208.7 278.7 208 283.3 208 288c0 26.47 21.53 48 48 48s48-21.53 48-48-21.5-48-48-48zm0-240C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 384c-52.94 0-96-43.06-96-96 0-41.3 27.55-73.29 40.28-84.41l79.94-69.69c4.58-4 10.18-5.9 15.78-5.9 6.688 0 13.34 2.781 18.09 8.219 8.719 10 7.656 25.16-2.312 33.88l-29.76 25.94C322.3 207.5 352 244.1 352 288c0 52.9-43.1 96-96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircle6;

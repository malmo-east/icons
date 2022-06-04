import * as React from "react";
import { SVGProps } from "react";

const SvgHundredPoints = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="hundred-points_svg__fa-primary"
      d="M163 101.8c5-39.9 38.9-69.8 79-69.8 47.9 0 84.1 41.98 79.1 89.5l-13 96.7c-5 39.9-38 69.8-79 69.8-47 0-85-42-78.2-89.5l12.1-96.7zm79-5.8c-7.8 0-14.5 5.9-15.5 13.7l-12.1 96.7c-1.1 9.4 6.1 17.6 14.7 17.6 8.7 0 15.4-5.9 16.4-13.7l12.1-96.7c1.1-9.4-6.2-17.6-15.6-17.6zM123.5 38.29c9.2 6.89 13.8 18.25 12.2 29.72L103.7 292c-2.5 17.5-18.74 29.1-36.24 27.7-17.5-2.2-29.65-18.2-27.14-36.6l23.93-166.6-19.66 8.7c-16.25 7.2-35.06 0-42.015-16.1-6.956-16.15.579-35.08 16.825-42.3l72-32c10.6-4.73 22.9-3.39 32.1 3.49zM507.1 119l-7.3 80.4c-3.7 41.1-38.2 72.6-79.5 72.6-46.9 0-83.7-40.3-79.4-87.9l7.3-79.5c3.7-41.13 38.2-72.6 79.5-72.6 46.9 0 83.7 40.29 79.4 87zm-102.5 71.8c-.8 9.2 6.4 17.2 15.7 17.2 8.2 0 15-6.2 15.8-14.4l7.3-80.4c.8-10.1-6.5-17.2-15.7-17.2-8.2 0-15 6.2-15.8 14.4l-7.3 80.4z"
    />
    <path
      d="M36.52 415.7C19.03 418.2 2.817 406 .318 388.5c-2.499-17.5 9.657-33.7 27.152-36.2l448.03-64c16.6-2.5 33.7 8.8 36.2 27.2 2.5 16.6-9.7 33.7-27.2 36.2l-447.98 64zm223.98 64c-17.5 2.5-33.7-9.7-36.2-27.2s8.8-33.7 27.2-36.2l224-32c16.6-2.5 33.7 8.8 36.2 27.2 2.5 16.6-9.7 33.7-27.2 36.2l-224 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHundredPoints;

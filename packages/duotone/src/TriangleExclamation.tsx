import * as React from "react";
import { SVGProps } from "react";

const SvgTriangleExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="triangle-exclamation_svg__fa-primary"
      d="M256 320c13.3 0 24-10.7 24-24V168c0-13.25-10.75-24-23.1-24S232 154.8 232 168v128c0 13.3 10.8 24 24 24zm0 33.1c-17.36 0-31.44 14.08-31.44 31.44C224.6 401.9 238.6 416 256 416s31.44-14.08 31.44-31.44C287.4 367.2 273.4 353.1 256 353.1z"
    />
    <path
      d="M506.3 417 293 53c-16.33-28-57.54-28-73.98 0L5.82 417c-16.41 27.9 4.029 63 36.92 63h426.6c32.76 0 53.26-35 36.96-63zM232 168c0-13.25 10.75-24 24-24s24 10.8 24 24v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zm24 248c-17.36 0-31.44-14.08-31.44-31.44s14.07-31.44 31.44-31.44 31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTriangleExclamation;

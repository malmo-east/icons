import * as React from "react";
import { SVGProps } from "react";

const SvgSensor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="sensor_svg__fa-primary"
      d="M80 96c-8.87 0-16 7.1-16 16v160c0 8.9 7.13 16 16 16s16-7.1 16-16V112c0-8.9-7.12-16-16-16zm64 0c-8.9 0-16 7.1-16 16v160c0 8.9 7.1 16 16 16s16-7.1 16-16V112c0-8.9-7.1-16-16-16zm64 0c-8.9 0-16 7.1-16 16v160c0 8.9 7.1 16 16 16s16-7.1 16-16V112c0-8.9-7.1-16-16-16z"
    />
    <path
      d="M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.37-28.6-64-64-64zM96 272c0 8.9-7.12 16-16 16s-16-7.1-16-16V112c0-8.9 7.13-16 16-16s16 7.1 16 16v160zm64 0c0 8.9-7.1 16-16 16s-16-7.1-16-16V112c0-8.9 7.1-16 16-16s16 7.1 16 16v160zm64 0c0 8.9-7.1 16-16 16s-16-7.1-16-16V112c0-8.9 7.1-16 16-16s16 7.1 16 16v160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSensor;

import * as React from "react";
import { SVGProps } from "react";

const SvgHouseWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="house-window_svg__fa-primary"
      d="M266.9 7.918c11.2-10.557 30.1-10.557 42.2 0l256 223.982c13.3 11.7 14.6 31.9 3 45.2-11.7 13.3-31.9 14.6-45.2 3L288 74.52 53.07 280.1c-13.3 11.6-33.51 10.3-45.153-3-11.637-13.3-10.289-33.5 3.013-45.2L266.9 7.918z"
    />
    <path
      d="m64.07 448-.05-177.5L288 74.52 512.1 270.6l.4 177.3c.1 35.4-28.6 64.1-64 64.1H128.1c-35.36 0-64.01-28.6-64.03-64zM248 240c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseWindow;

import * as React from "react";
import { SVGProps } from "react";

const SvgSwordLaser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="sword-laser_svg__fa-primary"
      d="M9.375 412.1c-12.5 12.5-12.5 32.75 0 45.25l45.25 45.25c12.5 12.5 32.75 12.5 45.25 0l79.12-79.12-90.5-90.5-79.12 79.12zm96.125-84.8 79.25 79.25 22.62-22.62-79.27-79.33-22.6 22.7zm89.6-90.5a7.922 7.922 0 0 0-11.25 0l-10.45 11.3a7.922 7.922 0 0 0 0 11.25l79.25 79.25a7.922 7.922 0 0 0 11.25 0l11.38-11.38a7.922 7.922 0 0 0 0-11.25L195.1 236.8zm-55.6 56.6 79.12 79.12 22.62-22.62-79.14-79.1-22.6 22.6z"
    />
    <path
      d="M505.6 40.27 263.1 303.9l-55-55L471.7 6.4c9.375-8.75 24.12-8.5 33.25.625 9.15 9.115 9.45 23.865.65 33.245z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSwordLaser;

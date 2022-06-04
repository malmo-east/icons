import * as React from "react";
import { SVGProps } from "react";

const SvgChartBullet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="chart-bullet_svg__fa-primary"
      d="M264 32c13.3 0 24 10.75 24 24v176c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-13.25 10.7-24 24-24zM160 64v160H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h112zm96 224v160H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h208zm128 168c0 13.3-10.7 24-24 24s-24-10.7-24-24V280c0-13.3 10.7-24 24-24s24 10.7 24 24v176z"
    />
    <path
      d="M160 64h80v64h-80V64zm288 64H288V64h176c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H288v-64h160v-32zm-288 32h80v64h-80v-64zm224 224h64v-32h-64v-64h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v-64zm-128-32v-64h80v64h-80zm80 32v64h-80v-64h80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartBullet;

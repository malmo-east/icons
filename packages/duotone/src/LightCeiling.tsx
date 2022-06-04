import * as React from "react";
import { SVGProps } from "react";

const SvgLightCeiling = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="light-ceiling_svg__fa-primary"
      d="M512 380.8v3.2c0 19.2-12.87 32-32.17 32l-447.42-.9C13.11 415.1 0 403.2 0 384v-3.203C16.01 253.4 128 160 256 160s239.1 93.4 256 220.8z"
    />
    <path
      d="M192 447.1c0 35.38 28.62 64 63.1 64s64.01-28.62 64.01-64H192zm96-284.8V0h-64v162.3c10.6-2.2 21.2-2.3 32-2.3s21.5.1 32 2.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLightCeiling;

import * as React from "react";
import { SVGProps } from "react";

const SvgGraduationCap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="graduation-cap_svg__fa-primary"
      d="M640 160c0 10.38-6.438 19.65-16.05 23.09l-282.7 101.2a62.951 62.951 0 0 1-42.43 0L108.2 216.1c13.7-15.2 30.9-26.6 52.8-31.9l162.9-40.72c8.594-2.141 13.78-10.83 11.66-19.39-2.125-8.594-10.97-13.89-19.41-11.64L153.3 153.2c-31.9 8-58.7 26.6-77.23 51.4l-60.02-21.5C6.438 179.6 0 170.4 0 160s6.438-19.65 16.05-23.09l282.7-101.2a62.951 62.951 0 0 1 42.43 0l282.7 101.2C633.6 140.4 640 149.6 640 160zM351.1 314.4c-9.4 3.7-20.2 5.6-31.1 5.6a94.767 94.767 0 0 1-32-5.555L142.8 262.5 128 405.3c0 41.3 85.1 74.7 192 74.7 105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"
    />
    <path
      d="M323.9 143.5 161 184.2c-39.4 9.9-68.6 40.8-77.72 78.9C90.83 268.1 96 277.7 96 288c0 9.953-4.814 18.49-11.94 24.36l24.83 149C110.5 471.1 103 480 93.11 480H34.89c-9.887 0-17.41-8.879-15.78-18.63l24.83-149C36.81 306.5 32 297.1 32 288c0-13.24 8.047-24.61 19.52-29.47 11.02-50.84 49.58-92.28 101.7-105.3l162.9-40.72c8.438-2.25 17.28 3.047 19.41 11.64 2.17 8.55-3.03 17.25-11.63 19.35z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGraduationCap;

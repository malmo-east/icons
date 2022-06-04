import * as React from "react";
import { SVGProps } from "react";

const SvgMoped = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="moped_svg__fa-primary"
      d="M328 56c0-13.25 10.7-24 24-24h41.3c23.8 0 45 15.09 52.8 37.6l8.1 23.28 51-25.5c4.5-2.22 9.4-3.38 14.4-3.38h8.4c8.8 0 16 7.16 16 16v64c0 8.8-7.2 16-16 16h-8.4c-5 0-9.9-1.2-14.4-3.4l-34.9-17.4 29.7 85.2c3.1-.3 7.1-.4 12-.4 43.7 0 83.3 17.5 112.1 45.8 9.5 9.3 9.6 24.5.3 34-9.3 9.4-24.5 9.6-33.9.3-20.3-19.9-47.9-32.1-78.5-32.1-52.7 0-97.9 36.5-108.9 85.6-2 8.5-3.1 17.3-3.1 26.4H32c-17.67 0-32-14.3-32-32v-32c0-70.7 57.31-128 128-128h96c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h77.3c16.9-38.5 48.4-69.2 87.6-84.7L400.8 85.37a7.923 7.923 0 0 0-7.5-5.37H352c-13.3 0-24-10.74-24-24z"
    />
    <path
      d="M224 96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96zm192 288c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96 48c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-400-48c0 26.5 21.5 48 48 48s48-21.5 48-48h48c0 53-43 96-96 96-53.9 0-96-43-96-96h48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMoped;

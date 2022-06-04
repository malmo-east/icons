import * as React from "react";
import { SVGProps } from "react";

const SvgBath = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bath_svg__fa-primary"
      d="M32 384c0 28.32 12.49 53.52 32 71.09V496c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32v32zm464-128H16c-8.836 0-16 7.2-16 16v32c0 8.8 7.164 16 16 16h480c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16z"
    />
    <path
      d="M96 256V77.25c-.03-10.8 15-17.02 22.6-9.37l13.8 13.78c-8.8 26.94-3 52.84 11.8 71.54-6.3 6.3-6.4 16.6-.2 22.8l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0-18.7-14.71-44.7-20.42-71.7-11.56l-13.8-13.77C149.5 8.25 129.6 0 109.3 0 66.66 0 32 34.66 32 77.25v178.8l64-.05z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBath;

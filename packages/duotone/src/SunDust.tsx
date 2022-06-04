import * as React from "react";
import { SVGProps } from "react";

const SvgSunDust = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="sun-dust_svg__fa-primary"
      d="M320 448c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.2-32-32-32zm-80-80c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.2-32-32-32zm-80 80c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.2-32-32-32zm320-256c17.75 0 32-14.25 32-32s-14.25-32-32-32-32 14.25-32 32 14.3 32 32 32zm-160 96c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.2-32-32-32zm160 0c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.2-32-32-32zm0 160c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.2-32-32-32zm-80-80c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.2-32-32-32zm0-160c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32-14.2-32-32-32z"
    />
    <path
      d="M160 256c0 26.51 10.74 50.51 28.11 67.88l135.8-135.8C306.5 170.7 282.5 160 256 160c-53.9 0-96 42.1-96 96zM370.7 12.56c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89 164.1 2.738c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6 12.56 141.3c-10.927 1.9-16.156 14.6-9.824 22.8L65.89 256 2.74 347.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7 43.92-43.92C142.3 323.3 128 291.3 128 256c0-70.69 57.31-128 128-128 35.35 0 67.35 14.33 90.51 37.49l43.92-43.92L370.7 12.56z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSunDust;

import * as React from "react";
import { SVGProps } from "react";

const SvgFlaskVial = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="flask-vial_svg__fa-primary"
      d="M512 0c17.7 0 32 14.33 32 32s-14.3 32-32 32v150.9l117.7 191.3c6.7 11 10.3 23.5 10.3 36.4 0 38.3-31.1 69.4-69.4 69.4H261.4c-38.3 0-69.4-31.1-69.4-69.4 0-12.9 3.6-25.4 10.3-36.4L320 214.9V64c-17.7 0-32-14.33-32-32s14.3-32 32-32h192zM379.3 240.8 330.5 320h171l-48.8-79.2c-3.1-5.1-4.7-10.9-4.7-16.8V64h-64v160c0 5.9-1.6 11.7-4.7 16.8z"
    />
    <path
      d="m224 309.9-49 79.5c-9.8 16-15 34.4-15 53.1-10.9 3.6-20.8 5.5-32 5.5-53.02 0-96-43-96-96V64C14.33 64 0 49.67 0 32S14.33 0 32 0h192c17.7 0 32 14.33 32 32s-14.3 32-32 32v245.9zM160 64H96v96h64V64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFlaskVial;

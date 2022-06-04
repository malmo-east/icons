import * as React from "react";
import { SVGProps } from "react";

const SvgSlidersSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="sliders-simple_svg__fa-primary"
      d="M512 160c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96zm-96-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM96 256c53 0 96 42.1 96 96 0 53-43 96-96 96-53.02 0-96-43-96-96 0-53.9 42.98-96 96-96zm-32 96c0 17.7 14.33 32 32 32 17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32z"
    />
    <path
      d="M325.5 192H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h293.5c-3.6 10-5.5 20.8-5.5 32s1.9 21.1 5.5 32zM192 352c0-11.2-1.9-22-5.5-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H186.5c3.6-10.9 5.5-20.8 5.5-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSlidersSimple;

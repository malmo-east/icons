import * as React from "react";
import { SVGProps } from "react";

const SvgDagger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="dagger_svg__fa-primary"
      d="M336 128H224V16c0-8.875-7.1-16-16-16h-32c-8.9 0-16 7.125-16 16v112H48c-26.5 0-48 21.5-48 48s21.5 48 48 48c20.88 0 38.5-13.38 45-32h198c6.5 18.6 24.1 32 45 32 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
    />
    <path
      d="m128 428.9 50.73 76c6.25 9.5 20.25 9.5 26.62 0l50.65-76V192H128v236.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDagger;

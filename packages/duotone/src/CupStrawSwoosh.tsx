import * as React from "react";
import { SVGProps } from "react";

const SvgCupStrawSwoosh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="cup-straw-swoosh_svg__fa-primary"
      d="m384 175.1-.9-32c0-8.875-7.125-15.1-15.1-15.1H222.8l20-80 45.27-.001c8.875 0 16-7.125 16-15.1l-.02-15.1c0-8.875-7.123-16-15.1-16h-51.52c-18.38 0-34.36 12.49-38.73 30.24L173.3 127.1H16c-8.877 0-16 8-16 16v31.1c0 8.875 7.125 16 16 16h352c8.9.9 16-5.3 16-15.1z"
    />
    <path
      d="m32 192 29.12 291.2c1.64 16.3 15.4 28.8 31.84 28.8h198.1c16.44 0 30.21-12.46 31.84-28.82L352 192H32zm277.4 104.9c-33.61 2.209-65.46 20.59-90.15 53.53-34.33 45.77-82.24 72.27-131.9 73.38L82.56 376h1.564c36.03 0 70.38-19.31 96.67-54.41 34.7-46.26 83.25-72.91 133.4-73.49l-4.794 48.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCupStrawSwoosh;

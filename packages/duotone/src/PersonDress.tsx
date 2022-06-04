import * as React from "react";
import { SVGProps } from "react";

const SvgPersonDress = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="person-dress_svg__fa-primary"
      d="M88 384H70.2c-10.92 0-18.63-10.7-15.18-21.1l38.26-114.8-33.85 56.4c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.051-28.7-10.947-43.9l53.607-89.2C78.43 148.6 114.9 128 154.2 128h11.6c39.3 0 75.8 20.6 96 54.3l53.6 89.2c9.1 15.2 4.2 34.8-10.9 43.9-15.2 9.1-34.8 4.2-43.9-10.9l-33.9-56.4 37.4 114.8c4.3 10.4-3.4 21.1-14.3 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"
    />
    <path
      d="M208 48c0 26.51-21.5 48-48 48s-48-21.49-48-48 21.5-48 48-48 48 21.49 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonDress;

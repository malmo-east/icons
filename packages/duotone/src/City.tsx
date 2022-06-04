import * as React from "react";
import { SVGProps } from "react";

const SvgCity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="city_svg__fa-primary"
      d="M112 96H64V24C64 10.75 74.75 0 88 0c13.3 0 24 10.75 24 24v72zm112 0h-48V24c0-13.25 10.7-24 24-24s24 10.75 24 24v72zm16 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zm336 144c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM80 416c-8.84 0-16-7.2-16-16v-32c0-8.8 7.16-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80zm176-16c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm320 0c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM128 208c0 8.8-7.2 16-16 16H80c-8.84 0-16-7.2-16-16v-32c0-8.8 7.16-16 16-16h32c8.8 0 16 7.2 16 16v32zm80 112c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32zm-80-16c0 8.8-7.2 16-16 16H80c-8.84 0-16-7.2-16-16v-32c0-8.8 7.16-16 16-16h32c8.8 0 16 7.2 16 16v32z"
    />
    <path
      d="M432 0c26.5 0 48 21.49 48 48v144h112c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V144c0-26.5 21.49-48 48-48h240V48c0-26.51 21.5-48 48-48h96zm96 352c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm-272 16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32zm-144 48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v32c0 8.8 7.16 16 16 16h32zm464-144c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32zM208 160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm-80 16c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v32c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32zm112 144c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32zm-112-48c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v32c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32zm240-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm48-176c0-8.84-7.2-16-16-16h-32c-8.8 0-16 7.16-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80zm-48 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCity;
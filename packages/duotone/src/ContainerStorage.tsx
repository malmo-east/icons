import * as React from "react";
import { SVGProps } from "react";

const SvgContainerStorage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="container-storage_svg__fa-primary"
      d="M592 416H48c-8.75 0-16 7.3-16 16v32c0 8.75 7.25 16 16 16h544c8.75 0 16-7.25 16-16v-32c0-8.7-7.2-16-16-16zm0-384H48c-8.75 0-16.9 7.25-16.9 16l.9 32c0 8.75 7.25 16 16 16h544c8.8 0 16-7.25 16-16V48c0-8.75-7.2-16-16-16z"
    />
    <path
      d="M48 96v320h544V96H48zm64 272V144h32v224h-32zm96 0V144h32v224h-32zm96 0V144h32v224h-32zm96 0V144h32v224h-32zm96 0V144h32v224h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgContainerStorage;

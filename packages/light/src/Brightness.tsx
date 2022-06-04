import * as React from "react";
import { SVGProps } from "react";

const SvgBrightness = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 16c0-8.836 7.2-16 16-16s16 7.164 16 16v88c0 8.8-7.2 16-16 16s-16-7.2-16-16V16zm-80 240c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96 64c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0 192c-8.8 0-16-7.2-16-16v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 8.8-7.2 16-16 16zM0 256c0-8.8 7.164-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16zm496-16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-88c-8.8 0-16-7.2-16-16s7.2-16 16-16h88zM74.98 437c-6.25-6.2-6.25-16.4 0-22.6l56.52-56.6c6.3-6.2 16.4-6.2 22.7 0 6.2 6.3 6.2 16.4 0 22.7L97.61 437a15.91 15.91 0 0 1-22.63 0zM414.4 74.98c6.2-6.25 16.4-6.25 22.6 0a15.91 15.91 0 0 1 0 22.63l-62.2 62.19c-6.3 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.3 0-22.6l62.2-62.22zm-339.42 0c6.25-6.25 16.38-6.25 22.63 0l56.59 56.52c6.2 6.3 6.2 16.4 0 22.7-6.3 6.2-16.4 6.2-22.7 0L74.98 97.61c-6.25-6.25-6.25-16.38 0-22.63zM437 414.4c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-62.2-62.2c-6.3-6.3-6.3-16.4 0-22.6 6.2-6.3 16.3-6.3 22.6 0l62.2 62.2z" />
  </svg>
);

export default SvgBrightness;

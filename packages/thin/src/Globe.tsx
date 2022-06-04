import * as React from "react";
import { SVGProps } from "react";

const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm0 496c26 0 53.9-21.5 76.2-66.1 11-22 19.9-48.4 26.2-77.9H153.6c6.3 29.5 15.2 55.9 26.2 77.9 22.3 44.6 49.3 66.1 75.3 66.1h.9zM150.6 336h210.8c4.3-25 6.6-51.9 6.6-80s-2.3-55.9-6.6-80H150.6c-4.3 24.1-6.6 51.9-6.6 80s2.3 55 6.6 80zm207.8-176c-6.3-29.6-15.2-55.9-26.2-77.86C309.9 37.51 282 16 256 16c-26.9 0-53.9 21.51-76.2 66.14-11 21.96-19.9 48.26-26.2 77.86h204.8zm19.2 16c4.2 25.2 6.4 52.1 6.4 80s-2.2 54.8-6.4 80h104.7c8.9-25.9 13.7-51.9 13.7-80s-4.8-55-13.7-80H377.6zM307.5 21.53c30.4 26.78 54.7 76.62 67.2 138.47H476C445.6 90.45 383.2 38.09 307.5 21.53zm-103 0C128.8 38.09 66.36 90.45 35.97 160H137.3c12.5-61.85 36.8-111.69 67.2-138.47zM16 256c0 28.1 4.81 54.1 13.66 80H134.4c-4.2-25.2-6.4-52.1-6.4-80s2.2-54.8 6.4-80H29.66C20.81 201 16 227.9 16 256zm460 96H374.7c-12.5 61.8-36.8 111.7-67.2 138.5 75.7-16.6 138.1-69 168.5-138.5zm-338.7 0H35.97c30.39 69.5 92.83 121.9 168.53 138.5-30.4-26.8-54.7-76.7-67.2-138.5z" />
  </svg>
);

export default SvgGlobe;

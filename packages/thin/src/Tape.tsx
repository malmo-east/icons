import * as React from "react";
import { SVGProps } from "react";

const SvgTape = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 256c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96 80c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm344 128c4.4 0 8 3.6 8 8s-3.6 8-8 8H224C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 94.3-58.2 174.9-140.7 208H568zm-344 0c114.9 0 208-93.1 208-208S338.9 48 224 48 16 141.1 16 256s93.1 208 208 208z" />
  </svg>
);

export default SvgTape;

import * as React from "react";
import { SVGProps } from "react";

const SvgRobot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224 208c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 80c-17.7 0-32-14.3-32-32s14.33-32 32-32 32 14.33 32 32-14.3 32-32 32zM40 208h24c4.406 0 8-3.633 8-8.039S68.41 192 64 192H40c-22.06 0-40 17.9-40 40v144c0 22.1 17.94 40 40 40h24c4.406 0 8-3.594 8-8s-3.66-8-8.06-8H40c-13.22 0-24-10.78-24-24V232c0-13.2 10.78-24 24-24zm376 0c-26.47 0-48 21.53-48 48s21.53 48 48 48 48-21.53 48-48-21.5-48-48-48zm0 80c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.3 32-32 32zm32-192H328V8c0-4.406-3.6-8-8-8s-8 3.594-8 8v88H192c-53.9 0-96 42.1-96 96v224c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96V192c0-53.9-43-96-96-96zm80 304h-40c-4.406 0-8 3.594-8 8s3.6 8 8 8h40c0 44.11-35.89 80-80 80H192c-44.11 0-80-35.89-80-80h40c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40V192c0-44.11 35.89-80 80-80h256c44.11 0 80 35.89 80 80v208zm72-208h-24c-4.406 0-8 3.594-8 8s3.656 8 8.062 8H600c13.22 0 24 10.78 24 24v144c0 13.22-10.78 24-24 24l-24-.9c-4.406 0-8 3.633-8 8.039s3.6 8.861 8 8.861h24c22.06 0 40-17.94 40-40V232c0-22.1-17.9-40-40-40zM248 400h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8zm96 0h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48c4.406 0 8-3.594 8-8s-3.6-8-8-8zm96 0h-48c-4.406 0-8 3.594-8 8s3.6 8 8 8h48c4.406 0 8-3.594 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgRobot;

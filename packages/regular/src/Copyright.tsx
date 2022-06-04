import * as React from "react";
import { SVGProps } from "react";

const SvgCopyright = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm-.9-288c21.06 0 40.92 8.312 55.83 23.38 9.375 9.344 24.53 9.5 33.97.156 9.406-9.344 9.469-24.53.156-33.97-24-24.22-55.95-37.56-89.95-37.56 0 0 .032 0 0 0-33.97 0-65.95 13.34-89.95 37.56-49.44 49.88-49.44 131 0 180.9 24 24.22 55.98 37.56 89.95 37.56.032 0 0 0 0 0 34 0 65.95-13.34 89.95-37.56 9.312-9.438 9.25-24.62-.156-33.97-9.438-9.312-24.59-9.219-33.97.156-14.91 15.06-34.77 23.38-55.83 23.38 0 0 .031 0 0 0-21.09 0-40.95-8.312-55.89-23.38-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z" />
  </svg>
);

export default SvgCopyright;

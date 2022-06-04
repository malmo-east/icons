import * as React from "react";
import { SVGProps } from "react";

const SvgShirt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m624.1 123.9-135-106.6C475.8 6.141 458.1 0 439.1 0H200c-18.06 0-35.78 6.141-49.94 17.28l-135 106.6C6.658 130.5 1.409 139.9.252 150.5c-1.187 10.5 1.844 20.8 8.531 29l49.97 61.63C72.44 258.1 97.66 260.9 115.1 247.2l36.87-31.28V456c0 30.88 25.12 56 55.1 56h223.1c30.87 0 55.1-25.12 55.1-56V218.1l37.09 29.28c17.22 13.59 42.41 10.83 56.16-6.188l49.97-61.63c6.687-8.234 9.719-18.55 8.531-29.06C638.6 139.9 633.3 130.5 624.1 123.9zM391.2 16c-4.1 35.9-34.3 64-71.2 64s-67.15-28.1-71.19-64H391.2zm227.6 153.5-49.97 61.63c-8.312 10.2-23.47 11.89-33.78 3.688l-50.06-39.5c-2.406-1.906-5.687-2.219-8.469-.922a8.023 8.023 0 0 0-4.5 7.203V456c0 22.06-17.94 40-39.1 40H208c-22.06 0-39.1-17.94-39.1-40V198.6a8.035 8.035 0 0 0-4.625-7.266c-1.975-.434-3.075-.734-4.275-.734-1.844 0-3.687.64-5.187 1.891l-49.84 42.27C94.69 243 79.44 241.3 71.19 231.1l-49.97-61.6c-3.97-4.9-5.78-11-5.09-17.2.719-6.266 3.844-11.89 8.844-15.83l135-106.6C171.3 20.92 185.5 16 200 16h32.37C236.4 60.8 274.2 96 320 96s83.59-35.2 87.62-80h32.34c14.5 0 28.72 4.922 40.03 13.84l135 106.6c5 3.938 8.125 9.562 8.844 15.83.766 6.23-1.134 12.33-5.034 17.23z" />
  </svg>
);

export default SvgShirt;
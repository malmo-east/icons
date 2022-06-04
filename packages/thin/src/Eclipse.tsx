import * as React from "react";
import { SVGProps } from "react";

const SvgEclipse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M464 80.02c-97.25 0-175.1 78.76-175.1 175.1s78.75 175.1 175.1 175.1c97.3.88 176-76.92 176-174.22S561.3 80.02 464 80.02zm0 335.08c-88.22 0-160-71.76-160-159.1S375.78 96.9 464 96.9c88.2-.88 160 70.9 160 159.1s-71.8 159.1-160 159.1zm-159.1-2.8-41.17 78.81c-1.53 3.09-4.43 4.89-7.83 4.89s-6.344-1.812-7.875-4.906l-45.77-91.66c-1.781-3.594-6-5.344-9.688-4.031l-97.23 32.44c-3.266 1.125-6.578.25-9.016-2.125-2.438-2.438-3.25-5.844-2.172-9.062L116.6 319.3a8.012 8.012 0 0 0-4.016-9.688L20.89 263.8c-3.06-1.5-4.89-4.4-4.89-7.8s1.828-6.312 4.938-7.844l91.66-45.91c3.602-1.746 5.302-5.946 4.002-9.646L84.16 95.34c-1.08-3.21-.28-6.59 2.15-9.03 2.406-2.469 5.828-3.25 9.031-2.156l97.36 32.44c3.766 1.25 7.891-.469 9.688-4.031l45.78-91.66c3.031-6.188 12.58-6.312 15.77.125l40.97 78.66a7.955 7.955 0 0 0 10.8 3.406c3.906-2.031 5.438-6.875 3.391-10.78l-40.89-78.53C273.1 5.281 265.5 0 256 0s-17.96 5.281-22.16 13.78L191.2 99.22l-90.8-30.25c-9.02-2.94-18.7-.62-25.41 6.04-6.69 6.72-9.01 16.43-6.02 25.39l30.27 90.66-85.41 42.74A24.695 24.695 0 0 0 0 256c0 9.5 5.297 17.1 13.78 22.2l85.45 42.69-30.27 90.78c-2.969 8.969-.703 18.65 6 25.34 6.734 6.719 16.56 9.13 25.44 6.067l90.64-30.25 42.66 85.44A24.785 24.785 0 0 0 255.9 512c.016 0 0 0 0 0 9.469 0 17.94-5.281 22.08-13.62l41.09-78.66a8.01 8.01 0 0 0-3.391-10.81c-3.879-2.01-9.579-.51-10.779 3.39zM256 168c4.422 0 8-3.594 8-8s-3.578-8-8-8c-57.34 0-104 46.66-104 104s46.7 104 104 104c4.422 0 8-3.594 8-8s-3.578-8-8-8c-48.53 0-88-39.47-88-88s39.5-88 88-88z" />
  </svg>
);

export default SvgEclipse;
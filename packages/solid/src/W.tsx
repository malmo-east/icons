import * as React from "react";
import { SVGProps } from "react";

const SvgW = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m573.1 75.25-144 384c-4.703 12.53-16.67 20.77-29.95 20.77-.406 0-.812 0-1.219-.016-13.77-.515-25.66-9.797-29.52-23.03L288 178.3 206.72 457c-3.859 13.23-15.75 22.52-29.52 23.03-13.75.469-26.33-7.844-31.17-20.75l-144-384c-6.203-16.55 2.188-34.98 18.73-41.2 16.55-6.16 34.99 2.15 41.21 18.7l110.2 293.1 85.08-291.7C261.3 41.41 273.8 32.01 288 32.01s26.73 9.396 30.72 23.05l85.08 291.7L514 53.66c6.219-16.55 24.67-24.86 41.2-18.73 16.6 5.33 25 23.77 17.9 40.32z" />
  </svg>
);

export default SvgW;
